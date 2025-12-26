import { useEffect } from 'react';

export function Test() {
  const unused1s = 123;
  useEffect(() => {
    console.log('hi');
  }, []);

  return null;
}
