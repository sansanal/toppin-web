
import { useEffect } from 'react';
import { useLanguage } from './useLanguage';

export const usePageMeta = () => {
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    // Actualizar el título de la página
    const title = t('meta.title');
    document.title = title;
    
    // Actualizar meta description
    const description = t('meta.description');
    const metaDescription = document.getElementById('page-description');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Actualizar Open Graph tags
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.getElementById('og-description');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Actualizar Twitter tags
    const twitterTitle = document.getElementById('twitter-title');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.getElementById('twitter-description');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Actualizar idioma del HTML
    document.documentElement.lang = currentLanguage;
    
    // Actualizar locale de Open Graph
    const ogLocale = document.getElementById('og-locale');
    if (ogLocale) {
      const locale = currentLanguage === 'en' ? 'en_US' : 'es_ES';
      ogLocale.setAttribute('content', locale);
    }

    // Actualizar meta language
    const pageLanguage = document.getElementById('page-language');
    if (pageLanguage) {
      const language = currentLanguage === 'en' ? 'English' : 'Spanish';
      pageLanguage.setAttribute('content', language);
    }

  }, [t, currentLanguage]);
};
