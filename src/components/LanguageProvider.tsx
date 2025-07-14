
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
      
      // Mapeo de rutas entre idiomas
      const routeMapping = {
        // Español a Inglés
        '/': '/en',
        '/faq': '/en/faq',
        '/normas-de-la-comunidad': '/en/community-guidelines',
        '/avisos-de-seguridad': '/en/safety-notices',
        '/textos-legales': '/en/legal-texts',
        '/politica-de-privacidad': '/en/privacy-policy',
        '/terminos-de-servicio': '/en/terms-of-service',
        '/politica-de-cookies': '/en/cookie-policy',
        
        // Inglés a Español
        '/en': '/',
        '/en/faq': '/faq',
        '/en/community-guidelines': '/normas-de-la-comunidad',
        '/en/safety-notices': '/avisos-de-seguridad',
        '/en/legal-texts': '/textos-legales',
        '/en/privacy-policy': '/politica-de-privacidad',
        '/en/terms-of-service': '/terminos-de-servicio',
        '/en/cookie-policy': '/politica-de-cookies'
      };
      
      if (currentLanguage === 'en' && !isCurrentlyOnEnglishRoute) {
        // Cambiar a la versión en inglés
        const englishRoute = routeMapping[location.pathname as keyof typeof routeMapping];
        navigate(englishRoute || '/en');
      } else if (currentLanguage === 'es' && isCurrentlyOnEnglishRoute) {
        // Cambiar a la versión en español
        const spanishRoute = routeMapping[location.pathname as keyof typeof routeMapping];
        navigate(spanishRoute || '/');
      }
    };

    // Solo ejecutar si hay un cambio real de idioma
    const timeoutId = setTimeout(handleLanguageChange, 100);
    return () => clearTimeout(timeoutId);
  }, [currentLanguage, location.pathname, navigate]);

  return <>{children}</>;
};

export default LanguageProvider;
