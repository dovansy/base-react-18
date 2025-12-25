import { useState, useEffect } from 'react';

export default function useWindowSize(): {
  width: number;
  isTablet: boolean;
  isPhone: boolean;
  isPC: boolean;
} {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState('PC');
  const isTablet: boolean = device === 'Tablet';
  const isPhone: boolean = device === 'phone';
  const isPC: boolean = device === 'PC';

  useEffect(() => {
    if (width < 768) setDevice('Phone');
    else if (width >= 768 && width <= 1024) setDevice('Tablet');
    else setDevice('PC');
  }, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return { width, isTablet, isPhone, isPC };
}
