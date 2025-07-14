
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const GameSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-toppin-purple mb-6">
              {t('game.title')}
            </h2>
            <p className="text-gray-300 mb-4">
              {t('game.description1')}
            </p>
            <p className="text-gray-300 mb-4">
              Toppin sweet
            </p>
            <p className="text-gray-300 mb-8">
              {t('game.description3')}
            </p>
            <button className="candy-button">
              {t('game.downloadApp')}
            </button>
          </div>
          
          <div className="relative">
            <img 
              alt="Rueda de premios Toppin" 
              className="w-full max-w-md mx-auto animate-pulse-soft" 
              src="/lovable-uploads/81f4eac9-32d0-4135-a6f7-4802f7f2c575.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
