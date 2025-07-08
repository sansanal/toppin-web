
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Política de privacidad
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              En Toppin valoramos tu privacidad. Esta política explica cómo recopilamos, 
              utilizamos y protegemos tu información personal.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Información que Recopilamos</h2>
            <ul className="space-y-2 pl-6">
              <li>• Información de perfil (nombre, edad, fotos)</li>
              <li>• Datos de ubicación (opcional)</li>
              <li>• Información de uso de la aplicación</li>
              <li>• Datos de comunicación con otros usuarios</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cómo Usamos tu Información</h2>
            <ul className="space-y-2 pl-6">
              <li>• Para conectarte con otros usuarios compatibles</li>
              <li>• Para mejorar nuestros servicios</li>
              <li>• Para mantener la seguridad de la plataforma</li>
              <li>• Para cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Compartir Información</h2>
            <p>
              No vendemos tu información personal a terceros. Solo compartimos información 
              cuando es necesario para proporcionar nuestros servicios o cuando lo requiere la ley.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Tus Derechos</h2>
            <ul className="space-y-2 pl-6">
              <li>• Acceder a tu información personal</li>
              <li>• Corregir información incorrecta</li>
              <li>• Eliminar tu cuenta y datos</li>
              <li>• Oponerte al procesamiento de tus datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger 
              tu información personal contra el acceso no autorizado, alteración o destrucción.
            </p>

            <p className="mt-8">
              Esta política puede actualizarse ocasionalmente. Te notificaremos sobre 
              cambios importantes por email o a través de la aplicación.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
