
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return <section className="py-12 md:py-24">
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
            <div className="relative z-10 animate-float">
              <img alt="Toppin App" className="w-full" src="/lovable-uploads/4a67e24e-eac1-4b7c-8765-818f5ff072dd.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
