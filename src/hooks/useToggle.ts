import { useCallback, useState } from 'react';

export const useToggle = (initialState: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);
  const toggle = useCallback(() => setIsVisible(prev => !prev), []);
  return { isVisible, show, hide, toggle };
};
