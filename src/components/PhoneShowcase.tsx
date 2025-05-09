
import React from 'react';

const PhoneShowcase = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Toppitea para encontrar tu <span className="text-toppin-pink">bombón</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Descubre Toppin y conoce a las mejores personas de tu ciudad.
            </p>
            <p className="text-gray-300">
              ¡Únete y ponle sabor a la vida!
            </p>
            <button className="mt-8 candy-button">
              SABER MÁS
            </button>
          </div>
          <div className="md:col-span-3 relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="phone-mockup transform rotate-[-8deg] scale-[0.8] translate-x-4 translate-y-4">
                <img 
                  src="public/lovable-uploads/0ef2467d-4e2e-4054-8de8-9a030b2db77e.png" 
                  alt="Toppin App Profile" 
                  className="w-full"
                />
              </div>
              <div className="phone-mockup z-10 scale-[0.9]">
                <img 
                  src="public/lovable-uploads/9f37d599-079f-4a47-b323-b144425d0e23.png" 
                  alt="Toppin App Chat" 
                  className="w-full"
                />
              </div>
              <div className="phone-mockup transform rotate-[8deg] scale-[0.8] -translate-x-4 translate-y-4">
                <img 
                  src="public/lovable-uploads/d04ea0bb-d67e-44e3-8e34-e21c55a2d05c.png" 
                  alt="Toppin App Match" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section divider image with gradient overlays for smooth transition */}
      <div className="relative w-full mt-16">
        {/* Top gradient fade from black to transparent */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/90 to-transparent z-20"></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <img 
          src="public/lovable-uploads/97bf59f7-3690-4164-a6e5-ef49d6cecf05.png" 
          alt="Toppin app screenshots" 
          className="w-full object-cover"
        />
        
        {/* Bottom gradient fade from transparent to black */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default PhoneShowcase;
