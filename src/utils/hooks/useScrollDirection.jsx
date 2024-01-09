'use client';
import { useEffect, useState } from 'react';

function useScrollDirection({ initialDirection, scrollOff } = {}) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const curScrollY = window.scrollY;

      setScrollDirection(curScrollY > prevScrollY ? 'down' : 'up');
      prevScrollY = curScrollY > 0 ? curScrollY : 0;
    };

    !scrollOff
      ? window.addEventListener('scroll', updateScrollDirection)
      : setScrollDirection(initialDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [initialDirection, scrollOff]);

  return scrollDirection;
}

export default useScrollDirection;
