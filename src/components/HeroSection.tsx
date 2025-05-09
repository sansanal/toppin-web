import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                La app de citas <br /> más dulce
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-md">
              Descubre la comunidad donde encontrarás a tu medio bombón
            </p>
            <Button className="candy-button">DESCARGAR APP</Button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img src="public/lovable-uploads/20f5c9b5-8268-4be2-907f-4ff577bdb73a.png" alt="Toppin App" className="w-full" />
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
