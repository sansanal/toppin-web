
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative bg-black">
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
        
        <div className="relative w-full bg-black">
          <img 
            src="/lovable-uploads/bbaf8d18-1dc9-4f3f-8c6c-78f5e872e60a.png"
            alt="Pareja usando Toppin" 
            className="w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
