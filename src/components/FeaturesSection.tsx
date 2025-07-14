
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-primary">{t('features.title').split(' ')[0]}</span>{' '}
          <span className="text-blue-500">{t('features.title').split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          {t('features.subtitle')}
        </p>
        
        <div className="relative w-full my-12 overflow-hidden">
          <img 
            src="/lovable-uploads/038cbd30-4b5c-4b44-8e5f-5fcd15473426.png" 
            alt="Toppin app profiles" 
            className="w-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              {t('features.feature1')}
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              {t('features.feature2')}
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              {t('features.feature3')}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="candy-button mt-8">
            {t('features.downloadApp')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
