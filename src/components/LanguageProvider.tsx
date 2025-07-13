
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    // Detectar idioma basado en la URL
    if (location.pathname.startsWith('/en')) {
      changeLanguage('en');
    } else {
      changeLanguage('es');
    }
  }, [location.pathname, changeLanguage]);

  return <>{children}</>;
};

export default LanguageProvider;
