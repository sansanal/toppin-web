
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Separator } from './ui/separator';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t, isEnglish } = useLanguage();
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLocalizedPath = (path: string) => {
    // Map base paths to localized paths
    const pathMapping: { [key: string]: { es: string; en: string } } = {
      '/faq': { 
        es: '/preguntas-frecuentes', 
        en: '/en/faq' 
      },
      '/community-guidelines': { 
        es: '/normas-de-la-comunidad', 
        en: '/en/community-guidelines' 
      },
      '/safety-notices': { 
        es: '/avisos-de-seguridad', 
        en: '/en/safety-notices' 
      },
      '/privacy-policy': { 
        es: '/politica-de-privacidad', 
        en: '/en/privacy-policy' 
      },
      '/terms-of-service': { 
        es: '/terminos-de-servicio', 
        en: '/en/terms-of-service' 
      },
      '/cookie-policy': { 
        es: '/politica-de-cookies', 
        en: '/en/cookie-policy' 
      }
    };
    
    const mapping = pathMapping[path];
    if (mapping) {
      return isEnglish ? mapping.en : mapping.es;
    }
    
    return isEnglish ? `/en${path}` : path;
  };

  return (
    <footer className="border-t-0 py-16">
      {/* Custom separator that connects with the image */}
      <div className="w-full relative -mt-1">
        <Separator className="bg-toppin-blue h-[1.5px]" />
      </div>
      
      <div className="container px-4 md:px-6 pt-8">
        <div className="flex justify-start mb-10">
          <div className="mb-6">
            <Logo />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          <div>
            <h3 className="font-bold text-lg mb-4">{t('nav.download')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">iOS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Android</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li><Link to={getLocalizedPath('/faq')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.faq')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.community')}</h3>
            <ul className="space-y-2">
              <li><Link to={getLocalizedPath('/community-guidelines')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.communityGuidelines')}</Link></li>
              <li><Link to={getLocalizedPath('/safety-notices')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.safetyNotices')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to={getLocalizedPath('/privacy-policy')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to={getLocalizedPath('/terms-of-service')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.termsOfService')}</Link></li>
              <li><Link to={getLocalizedPath('/cookie-policy')} onClick={handleLinkClick} className="text-gray-400 hover:text-white">{t('footer.cookiePolicy')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
