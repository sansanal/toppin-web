
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Cambiar también el idioma del HTML
    document.documentElement.lang = lng;
  };

  const currentLanguage = i18n.language;

  return {
    t,
    changeLanguage,
    currentLanguage,
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en'
  };
};
