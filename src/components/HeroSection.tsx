
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                {t('hero.title')} <br />
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-md">
              {t('hero.subtitle')}
            </p>
            <Button className="candy-button">{t('hero.downloadApp')}</Button>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img alt="Toppin App" className="w-full" src="/lovable-uploads/e2a3d755-8303-4b61-8406-8bdc86efab55.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
