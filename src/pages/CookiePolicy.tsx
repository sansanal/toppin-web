
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
            Política de cookies (UE)
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400">
              Esta Política de cookies fue actualizada por última vez el noviembre 7, 2022 y se aplica 
              a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Introducción</h2>
            <p>
              Nuestra web, https://toppin.es (en adelante: «la web») utiliza cookies y otras tecnologías 
              relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las 
              cookies también son colocadas por terceros a los que hemos contratado. En el siguiente 
              documento te informamos sobre el uso de cookies en nuestra web.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que su 
              navegador almacena en el disco duro de su ordenador u otro dispositivo. La información 
              almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros 
              apropiados durante una visita posterior.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">¿Qué son los scripts?</h2>
            <p>
              Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web 
              funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor 
              o en su dispositivo.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">¿Qué es un web beacon?</h2>
            <p>
              Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen 
              en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan 
              varios datos sobre usted mediante estas balizas web.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cookies</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.1 Cookies técnicas o funcionales</h3>
            <p>
              Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus 
              preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos 
              la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma 
              información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu cesta 
              de la compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.2 Cookies de estadísticas</h3>
            <p>
              Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. 
              Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos 
              tu permiso para colocar cookies de estadísticas.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.3 Cookies de Marketing/Seguimiento</h3>
            <p>
              Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento 
              local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el 
              seguimiento del usuario en esta web o en varias webs con fines de marketing similares.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cookies usadas</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-toppin-pink mb-2">Funcional</h4>
                <p className="text-sm text-gray-400">Cookies necesarias para el funcionamiento básico del sitio web</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-toppin-pink mb-2">Estadísticas</h4>
                <p className="text-sm text-gray-400">Cookies para analizar el uso y rendimiento del sitio web</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-toppin-pink mb-2">Propósito pendiente de investigación</h4>
                <p className="text-sm text-gray-400">Cookies cuyo propósito específico está siendo analizado</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Consentimiento</h2>
            <p>
              Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una 
              explicación sobre las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas 
              que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, 
              tal y como se describe en esta política de cookies. Puedes desactivar el uso de cookies a 
              través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de 
              funcionar correctamente.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">7.1 Gestiona tus ajustes de consentimiento</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                <span className="font-medium">Funcional</span>
                <span className="text-green-400 text-sm">Siempre activo</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                <span className="font-medium">Preferencias</span>
                <span className="text-gray-400 text-sm">Configurable</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                <span className="font-medium">Estadísticas</span>
                <span className="text-gray-400 text-sm">Configurable</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                <span className="font-medium">Marketing</span>
                <span className="text-gray-400 text-sm">Configurable</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Activación/desactivación y eliminación de cookies</h2>
            <p>
              Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o 
              manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción 
              es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que 
              se coloca una cookie. Para obtener más información sobre estas opciones, consulta las 
              instrucciones de la sección «Ayuda» de tu navegador.
            </p>
            <p>
              Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están 
              desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu 
              consentimiento cuando vuelvas a visitar nuestras webs.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Tus derechos con respecto a los datos personales</h2>
            <p>Tienes los siguientes derechos con respecto a tus datos personales:</p>
            <ul className="space-y-2 pl-6 mt-4">
              <li>• Tiene derecho a saber por qué se necesitan tus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.</li>
              <li>• Derecho de acceso: tienes derecho a acceder a tus datos personales que conocemos.</li>
              <li>• Derecho de rectificación: tienes derecho a completar, rectificar, borrar o bloquear tus datos personales cuando lo desees.</li>
              <li>• Si nos das tu consentimiento para procesar tus datos, tienes derecho a revocar dicho consentimiento y a que se eliminen tus datos personales.</li>
              <li>• Derecho de cesión de tus datos: tienes derecho a solicitar todos tus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.</li>
              <li>• Derecho de oposición: puedes oponerte al tratamiento de tus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, por favor, contacta con nosotros. Por favor, consulta los detalles 
              de contacto en la parte inferior de esta política de cookies. Si tienes alguna queja sobre 
              cómo gestionamos tus datos, nos gustaría que nos la hicieras saber, pero también tienes 
              derecho a enviar una queja a la autoridad supervisora (la autoridad de protección de datos).
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Datos de contacto</h2>
            <p>
              Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por 
              favor, contacta con nosotros usando los siguientes datos de contacto:
            </p>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p><strong>Toppin Global Company, S.L.</strong></p>
              <p>C/ Algepeser, 64 -Nave 1 .46980 .Paterna (Valencia)</p>
              <p>España</p>
              <p>Web: http://toppin.es</p>
              <p>Correo electrónico: privacy@toppin.es</p>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              Esta política de cookies ha sido sincronizada con cookiedatabase.org el noviembre 7, 2022
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
