import React from 'react';
const CallToAction = () => {
  return <section className="py-16 md:py-24 relative bg-black">
      <div className="container px-4 md:px-6 text-center mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-toppin-pink">
          ¿Toppiteamos?
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/d963eff3-2817-4219-8fb7-376b6810eb9f.png" alt="Descargar en App Store" className="h-12" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/299d0c95-7c5c-43a0-8f1a-4f0d06208293.png" alt="Descargar en Google Play" className="h-12" />
          </a>
        </div>
      </div>
      
      {/* Full width image container - no bottom margin to connect with footer line */}
      <div className="w-full mb-0">
        <img alt="Pareja usando Toppin" className="w-full object-contain" src="/lovable-uploads/261c0ff3-3331-4cb3-b7f4-259e11b24a47.png" />
      </div>
    </section>;
};
export default CallToAction;