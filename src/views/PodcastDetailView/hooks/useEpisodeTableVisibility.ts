import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useEpisodeTableVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('episode')) {
      setIsVisible(true);
    }
  }, [location]);

  const hideTable = useCallback(() => setIsVisible(false), []);

  return {
    isVisible,
    hideTable,
  };
};

export default useEpisodeTableVisibility;
