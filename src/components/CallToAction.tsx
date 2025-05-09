
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-toppin-pink">
          ¿Toppiteamos?
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/d963eff3-2817-4219-8fb7-376b6810eb9f.png" 
              alt="Descargar en App Store" 
              className="h-12"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/299d0c95-7c5c-43a0-8f1a-4f0d06208293.png" 
              alt="Descargar en Google Play" 
              className="h-12"
            />
          </a>
        </div>
        
        <div className="relative">
          <img 
            src="/lovable-uploads/d04ea0bb-d67e-44e3-8e34-e21c55a2d05c.png"
            alt="Pareja feliz usando Toppin" 
            className="w-full max-w-3xl mx-auto rounded-2xl"
          />
          
          <div className="absolute -top-10 left-10 animate-float">
            <img src="/lovable-uploads/50ab436a-1674-4db4-8618-83d1002c974d.png" alt="Cupcake" className="w-12 h-12" />
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{animationDelay: "0.6s"}}>
            <img src="/lovable-uploads/f9da14eb-2218-4a5b-967a-7f14aaacc64d.png" alt="Gummy" className="w-14 h-14" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float" style={{animationDelay: "1.2s"}}>
            <img src="/lovable-uploads/2c7914cf-335f-4c08-98e6-6fe83da27e5e.png" alt="Chocolate" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
