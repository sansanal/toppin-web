import React from 'react';
const PhoneShowcase = () => {
  return <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mx-auto max-w-2xl">
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
      </div>
      
      {/* Section divider image without gradients */}
      <div className="relative w-full mt-16">
        <img alt="Toppin app screenshots" className="w-full object-contain" src="/lovable-uploads/7a97edb8-c99d-45dd-8973-f42f33a7270f.png" />
      </div>
    </section>;
};
export default PhoneShowcase;