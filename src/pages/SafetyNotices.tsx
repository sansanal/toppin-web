
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
            <p>
              Tu seguridad es nuestra prioridad. En Toppin, implementamos múltiples medidas 
              para proteger a nuestros usuarios y crear un ambiente seguro para conocer gente nueva.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Consejos de Seguridad</h2>
            <ul className="space-y-2 pl-6">
              <li>• Nunca compartas información personal sensible (dirección, datos bancarios)</li>
              <li>• Conoce a personas nuevas en lugares públicos</li>
              <li>• Informa a un amigo o familiar sobre tus planes</li>
              <li>• Confía en tu instinto - si algo no se siente bien, aléjate</li>
              <li>• Reporta cualquier comportamiento sospechoso o inapropiado</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Herramientas de Seguridad</h2>
            <ul className="space-y-2 pl-6">
              <li>• Sistema de verificación de perfiles</li>
              <li>• Función de reporte y bloqueo</li>
              <li>• Moderación activa de contenido</li>
              <li>• Encriptación de mensajes</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cómo Reportar</h2>
            <p>
              Si encuentras contenido inapropiado o comportamiento sospechoso, puedes reportarlo 
              directamente desde la aplicación. Nuestro equipo revisa todos los reportes dentro 
              de 24 horas.
            </p>

            <p className="mt-8">
              Recuerda: Tu seguridad está en tus manos. Mantente alerta y disfruta conociendo 
              gente nueva de manera segura.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetyNotices;
