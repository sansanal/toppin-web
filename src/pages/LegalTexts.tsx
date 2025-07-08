
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalTexts = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Textos legales
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Esta sección contiene información legal importante sobre el uso de Toppin 
              y nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Información de la Empresa</h2>
            <p>
              Toppin es operado por [Nombre de la Empresa], con domicilio social en [Dirección].
              Registro mercantil: [Número de registro]
              CIF/NIF: [Número de identificación fiscal]
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Derechos de Autor</h2>
            <p>
              Todos los contenidos de esta aplicación, incluyendo textos, imágenes, logotipos 
              y diseños, están protegidos por derechos de autor y son propiedad de Toppin o 
              sus licenciantes.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Limitación de Responsabilidad</h2>
            <p>
              Toppin se esfuerza por proporcionar un servicio confiable, pero no puede garantizar 
              la disponibilidad continua del servicio ni la exactitud de toda la información 
              proporcionada por los usuarios.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Resolución de Disputas</h2>
            <p>
              Cualquier disputa relacionada con el uso de Toppin se resolverá mediante arbitraje 
              o en los tribunales competentes de [Jurisdicción].
            </p>

            <p className="mt-8">
              Para más información legal o consultas específicas, contacta con nuestro 
              departamento legal en legal@toppin.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalTexts;
