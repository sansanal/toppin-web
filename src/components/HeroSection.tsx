
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
              La app de citas <br /> más dulce
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Descubre la comunidad donde encontrarás a tu medio bombón
            </p>
            <Button className="candy-button">DESCARGAR APP</Button>
          </div>
          <div className="relative">
            <div className="phone-mockup relative z-10">
              <img src="public/lovable-uploads/ae69ef5c-7ceb-4893-95b2-b007a5c7975c.png" alt="Toppin App" className="w-full" />
            </div>
            
            {/* Candy Decorations */}
            <div className="absolute top-10 right-10 animate-float">
              <img src="public/lovable-uploads/50ab436a-1674-4db4-8618-83d1002c974d.png" alt="Cupcake" className="w-12 h-12" />
            </div>
            <div className="absolute bottom-20 right-0 animate-float" style={{animationDelay: "0.5s"}}>
              <img src="public/lovable-uploads/f9da14eb-2218-4a5b-967a-7f14aaacc64d.png" alt="Gummy" className="w-14 h-14" />
            </div>
            <div className="absolute top-1/4 left-0 animate-float" style={{animationDelay: "0.8s"}}>
              <img src="public/lovable-uploads/d68159bd-2b3c-494f-be69-bdbb5932bc8d.png" alt="Donut" className="w-12 h-12" />
            </div>
            <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: "1.2s"}}>
              <img src="public/lovable-uploads/2c7914cf-335f-4c08-98e6-6fe83da27e5e.png" alt="Chocolate" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
