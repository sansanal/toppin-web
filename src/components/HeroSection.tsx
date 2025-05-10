
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
            
            {/* Animated toppings decorations */}
            <div className="absolute top-[-10%] right-[5%] w-[70px] animate-float" style={{ animationDelay: '0.2s' }}>
              <img alt="Toppin decoration" src="/lovable-uploads/89765fd0-c3cb-41d9-9371-51f2089dadb7.png" className="w-full" />
            </div>
            <div className="absolute bottom-[15%] left-[-5%] w-[60px] animate-float" style={{ animationDelay: '0.5s' }}>
              <img alt="Toppin decoration" src="/lovable-uploads/97bf59f7-3690-4164-a6e5-ef49d6cecf05.png" className="w-full" />
            </div>
            <div className="absolute top-[20%] left-[-10%] w-[50px] animate-pulse-soft" style={{ animationDelay: '0.8s' }}>
              <img alt="Toppin decoration" src="/lovable-uploads/9fe89785-0107-4b5c-9736-732049170fba.png" className="w-full" />
            </div>
            <div className="absolute bottom-[-5%] right-[10%] w-[65px] animate-pulse-soft" style={{ animationDelay: '0.3s' }}>
              <img alt="Toppin decoration" src="/lovable-uploads/c4632db9-124a-4487-b749-00e73fe93b72.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
