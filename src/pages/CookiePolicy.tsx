
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Política de cookies
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Esta política explica cómo Toppin utiliza cookies y tecnologías similares 
              para mejorar tu experiencia en nuestra aplicación y sitio web.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
              cuando visitas un sitio web o utilizas una aplicación. Nos ayudan a recordar 
              tus preferencias y mejorar tu experiencia.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">Cookies Esenciales</h3>
            <p>Necesarias para el funcionamiento básico de la aplicación y no se pueden desactivar.</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">Cookies de Rendimiento</h3>
            <p>Nos ayudan a entender cómo los usuarios interactúan con nuestra aplicación para mejorarla.</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">Cookies de Personalización</h3>
            <p>Permiten recordar tus preferencias y personalizar tu experiencia.</p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Gestión de Cookies</h2>
            <p>
              Puedes controlar y eliminar cookies a través de la configuración de tu navegador 
              o dispositivo. Ten en cuenta que deshabilitar ciertas cookies puede afectar 
              la funcionalidad de la aplicación.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cookies de Terceros</h2>
            <p>
              Utilizamos algunos servicios de terceros que pueden establecer sus propias cookies, 
              como herramientas de análisis y redes sociales. Estos servicios tienen sus propias 
              políticas de privacidad.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Actualizaciones</h2>
            <p>
              Esta política de cookies puede actualizarse ocasionalmente para reflejar 
              cambios en nuestras prácticas o por razones legales.
            </p>

            <p className="mt-8">
              Para más información sobre nuestro uso de cookies, contacta con nosotros 
              en privacy@toppin.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
