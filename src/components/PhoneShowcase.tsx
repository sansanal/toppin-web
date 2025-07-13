
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const PhoneShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('phoneShowcase.title')} <span className="text-toppin-pink"></span>
          </h2>
          <p className="text-gray-300 mb-6">
            {t('phoneShowcase.description1')}
          </p>
          <p className="text-gray-300">
            {t('phoneShowcase.description2')}
          </p>
          <button className="mt-8 candy-button">
            {t('phoneShowcase.knowMore')}
          </button>
        </div>
      </div>
      
      <div className="relative w-full mt-16">
        <img alt="Toppin app screenshots" className="w-full object-contain" src="/lovable-uploads/595ce5fe-d9cc-45dd-b702-f6a7123f733a.png" />
      </div>
    </section>
  );
};

export default PhoneShowcase;
