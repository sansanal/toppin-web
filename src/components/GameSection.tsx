import React from 'react';
const GameSection = () => {
  return <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-toppin-purple mb-6">
              Juega y conoce gente
            </h2>
            <p className="text-gray-300 mb-4">
              Descubre una nueva forma de conocer a personas.
            </p>
            <p className="text-gray-300 mb-4">
              Juega a Toppin para no perderte ninguna cita con gente de tu zona.
            </p>
            <p className="text-gray-300 mb-8">
              Usa los Donuts, Muffins y Ositos de gominola para conseguir más citas, porque... ¿A quién no le gusta un dulce?
            </p>
            <button className="candy-button">
              DESCARGAR APP
            </button>
          </div>
          
          <div className="relative">
            <img alt="Rueda de premios Toppin" className="w-full max-w-md mx-auto animate-pulse-soft" src="/lovable-uploads/3652d304-e118-4a1d-ad64-5856da9c796a.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default GameSection;