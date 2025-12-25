import { useEffect } from 'react';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@constants/app';
import { useLocation, useNavigate } from 'react-router-dom';

const Router = ({ component: Component }: { component: (() => JSX.Element) | string }) => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  // 	const isLogged = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

  // 	if (!isLogged && location.pathname !== ROUTE_PATH.LOGIN) {
  // 		return navigate(ROUTE_PATH.LOGIN);
  // 	}

  // 	if (isLogged && (location.pathname === ROUTE_PATH.LOGIN || location.pathname === '/')) {
  // 		navigate(ROUTE_PATH.MY_PROFILE);
  // 		return;
  // 	}
  // 	// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default Router;
