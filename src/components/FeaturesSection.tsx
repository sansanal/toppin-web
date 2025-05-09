
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          ¿Qué nos hace <span className="text-gradient">Tan dulces?</span>
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          A todo el mundo le gustan los dulces. Es por ello que a nuestros usuarios les encanta nuestra comunidad de bombones.
        </p>
        
        {/* Section divider image */}
        <div className="relative w-full my-12 overflow-hidden">
          <img 
            src="/lovable-uploads/0ed66cb4-c7ac-45db-a824-3cf79caa23e7.png" 
            alt="Toppin app profiles" 
            className="w-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              Para experiencias más apetecibles, te animamos a verificar tu perfil. Aunque no sean los únicos, los bombones verificados son los más sabrosos de la caja!
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              No inviertas tu tiempo en gente que no vale la pena. Únete a Toppin y empieza a conocer a gente interesante desde ya.
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              Usa los Donuts, Muffins y Ositos de gominola para conseguir más citas, porque... ¿A quién no le gusta un dulce?
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="candy-button mt-8">
            DESCARGAR APP
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
