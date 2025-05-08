
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Probaron <span className="text-toppin-blue">Toppin</span> <br />
          e hicieron <span className="text-toppin-pink">MATCH</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              En otras apps no encontraba a nadie interesante o amable. La comunidad de toppin es genial.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-3"></div>
              <div>
                <p className="font-semibold">Joaquín Silvestre</p>
                <p className="text-sm text-gray-400">@joaquin_sil</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              Empecé a usar toppin la semana pasada y ya he tenido dos citas.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-3"></div>
              <div>
                <p className="font-semibold">Miguel García</p>
                <p className="text-sm text-gray-400">@migar</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              Es una app genial, consigues conocer a gente jugando. Muy divertido.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-3"></div>
              <div>
                <p className="font-semibold">Lorena Fuertes</p>
                <p className="text-sm text-gray-400">@lorenfuertes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl neo-blur">
            <p className="text-gray-300 mb-4">
              Usando Toppin conocí a mi pareja. Él me envió un muffin y no me pude resistir.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-3"></div>
              <div>
                <p className="font-semibold">Elena Soriano</p>
                <p className="text-sm text-gray-400">@elenaso1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
