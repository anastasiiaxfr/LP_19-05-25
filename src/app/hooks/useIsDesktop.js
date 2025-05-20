import { useState, useEffect } from 'react';


export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener('change', updateIsDesktop);

    return () => {
      mediaQuery.removeEventListener('change', updateIsDesktop);
    };
  }, []);

  return isDesktop;
}
