import React, { useEffect, useState } from 'react';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  linkTo?: string
): MenuItem {
  return {
    label: linkTo ? <Link to={linkTo}>{label}</Link> : label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const MenuAdmin = () => {
  const items: MenuProps['items'] = [
    getItem('Admin Management', '1', '', [
      getItem('My Account', '1.1', undefined, undefined, undefined, '/my-account'),
      getItem('Admins', '1.2', undefined, undefined, undefined, '/admins-management'),
    ]),

    getItem('User Management', '2', '', [
      getItem('Users', '2.1', undefined, undefined, undefined, '/users'),
      getItem('User settings', '2.2', undefined, undefined, undefined, '/user-settings'),
    ]),

    getItem('Logout', '3', '', undefined, undefined),
  ];

  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const pathnameLevel1 = location.pathname.split('/')[1];
    const keyMap: { [key: string]: { key: string; parent?: string } } = {
      'my-account': { key: '1.1', parent: '1' },
      'admins-management': { key: '1.2', parent: '1' },

      users: { key: '2.1', parent: '2' },
      'user-settings': { key: '2.2', parent: '2' },

      logout: { key: '3' },
    };

    const selectedKey = keyMap[pathnameLevel1]?.key;
    setSelectedKeys([selectedKey]);

    const parentKey = keyMap[pathnameLevel1]?.parent;
    setOpenKeys(parentKey ? [parentKey] : []);
  }, [location.pathname]);

  const handleMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const logout = async () => {
    try {
      console.log('logout');
    } catch (error) {
      console.log('logout error', error);
    }
  };

  const handleMenuSelect = ({ selectedKeys }: { selectedKeys: React.Key[] }) => {
    if (selectedKeys.includes('3')) {
      localStorage.clear();
      navigate('/login');
      logout();
    }
    const keysAsString = selectedKeys.map(String);
    setSelectedKeys(keysAsString);
    localStorage.setItem('selectedKeys', JSON.stringify(keysAsString));
  };

  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <Menu
      onSelect={handleMenuSelect}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={handleMenuOpenChange}
      mode="inline"
      items={items}
    />
  );
};

export default MenuAdmin;
