
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { changeLanguage, currentLanguage } = useLanguage();

  useEffect(() => {
    // Detectar idioma basado en la URL solo al cargar la página
    const isEnglishRoute = location.pathname.startsWith('/en');
    const shouldBeEnglish = isEnglishRoute;
    const shouldBeSpanish = !isEnglishRoute;

    if (shouldBeEnglish && currentLanguage !== 'en') {
      changeLanguage('en');
    } else if (shouldBeSpanish && currentLanguage !== 'es') {
      changeLanguage('es');
    }
  }, [location.pathname]);

  // Escuchar cambios de idioma para navegar a la URL correcta
  useEffect(() => {
    const handleLanguageChange = () => {
      const isCurrentlyOnEnglishRoute = location.pathname.startsWith('/en');
      
      if (currentLanguage === 'en' && !isCurrentlyOnEnglishRoute) {
        // Cambiar a la versión en inglés
        if (location.pathname === '/') {
          navigate('/en');
        } else {
          navigate(`/en${location.pathname}`);
        }
      } else if (currentLanguage === 'es' && isCurrentlyOnEnglishRoute) {
        // Cambiar a la versión en español
        if (location.pathname === '/en') {
          navigate('/');
        } else {
          navigate(location.pathname.replace('/en', ''));
        }
      }
    };

    // Solo ejecutar si hay un cambio real de idioma
    const timeoutId = setTimeout(handleLanguageChange, 100);
    return () => clearTimeout(timeoutId);
  }, [currentLanguage, location.pathname, navigate]);

  return <>{children}</>;
};

export default LanguageProvider;
