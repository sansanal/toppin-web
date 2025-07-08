
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SafetyNotices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Avisos de seguridad
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  Toppitea con seguridad
                </h2>
                <p className="text-gray-300">
                  Desde Toppin sabemos de la importancia que tiene la seguridad para nuestros usuarios y por ello.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  Consejos para tener la primera cita perfecta
                </h2>
                <p className="text-gray-300">
                  Las primeras citas siempre nos causan nervios, inseguridades, pero también emoción. Por ello,...
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  Como terminar una relación de match
                </h2>
                <p className="text-gray-300">
                  Toppin está pensada para conocer gente y disfrutar de cada momento, para encontrar el amor de tu...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetyNotices;
