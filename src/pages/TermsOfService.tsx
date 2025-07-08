
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Condiciones del servicio
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Estas condiciones del servicio rigen tu uso de la aplicación Toppin. 
              Al utilizar nuestros servicios, aceptas estar sujeto a estos términos.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Aceptación de Términos</h2>
            <p>
              Al descargar, instalar o utilizar Toppin, confirmas que has leído, 
              entendido y aceptado estos términos y condiciones.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Uso del Servicio</h2>
            <ul className="space-y-2 pl-6">
              <li>• Debes tener al menos 18 años para usar Toppin</li>
              <li>• Debes proporcionar información precisa y actualizada</li>
              <li>• No puedes usar el servicio para actividades ilegales</li>
              <li>• Respeta las normas de la comunidad en todo momento</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cuenta de Usuario</h2>
            <p>
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. 
              Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Contenido del Usuario</h2>
            <p>
              Mantienes la propiedad de tu contenido, pero nos otorgas una licencia para 
              usar, mostrar y distribuir tu contenido en relación con nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Suspensión y Terminación</h2>
            <p>
              Podemos suspender o terminar tu cuenta si violas estos términos o nuestras 
              normas de la comunidad. Puedes eliminar tu cuenta en cualquier momento.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Te notificaremos sobre cambios significativos.
            </p>

            <p className="mt-8">
              Si tienes preguntas sobre estos términos, contacta con nosotros en 
              support@toppin.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
