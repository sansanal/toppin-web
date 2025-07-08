
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SafetyNotices = () => {
  const safetyData = [
    {
      key: "personal-safety",
      title: "Seguridad Personal",
      text: "Consejos fundamentales para proteger tu información personal y mantenerte seguro mientras conoces gente nueva.",
      img: "/lovable-uploads/595ce5fe-d9cc-45dd-b702-f6a7123f733a.png"
    },
    {
      key: "meeting-safety", 
      title: "Encuentros Seguros",
      text: "Guía completa sobre cómo planificar y realizar encuentros seguros con personas que conoces en línea.",
      img: "/lovable-uploads/60b75285-dcb9-44f0-8ae5-9493672a05eb.png"
    },
    {
      key: "digital-safety",
      title: "Seguridad Digital", 
      text: "Protege tus datos y privacidad en el mundo digital. Aprende sobre configuraciones de privacidad y buenas prácticas.",
      img: "/lovable-uploads/62699fe5-dca8-42df-b095-80342f162b85.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Avisos de seguridad
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <p>
              Tu seguridad es nuestra prioridad. Aquí encontrarás información importante 
              para mantenerte seguro mientras usas Toppin y conoces nuevas personas.
            </p>

            {safetyData.map((item) => (
              <div key={item.key} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img
                      className="rounded-lg w-full h-48 object-cover"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-toppin-pink">
              <h2 className="text-2xl font-bold text-toppin-pink mb-4">Recursos Adicionales</h2>
              <ul className="space-y-2 pl-6">
                <li>• Reporta cualquier comportamiento sospechoso inmediatamente</li>
                <li>• Utiliza las funciones de bloqueo y reporte disponibles en la app</li>
                <li>• Mantén actualizadas tus configuraciones de privacidad</li>
                <li>• Confía en tu instinto - si algo no se siente bien, retírate</li>
              </ul>
            </div>

            <p className="mt-8">
              Si necesitas ayuda inmediata o tienes preguntas sobre seguridad, 
              contacta con nuestro equipo de soporte en seguridad@toppin.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetyNotices;
