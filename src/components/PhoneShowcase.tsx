import React from 'react';
const PhoneShowcase = () => {
  return <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="">
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
            
          </div>
        </div>
      </div>
      
      {/* Section divider image without gradients */}
      <div className="relative w-full mt-16">
        <img src="/lovable-uploads/3b958ffc-8660-43dd-a3e9-c04efb789dd8.png" alt="Toppin app screenshots" className="w-full object-cover" />
      </div>
    </section>;
};
export default PhoneShowcase;