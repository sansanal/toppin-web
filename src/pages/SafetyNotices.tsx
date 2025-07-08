
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
      
      <main id="main-content" className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-8">
          <div className="bg-white">
            <div className="flex flex-col items-center">
              {/* Header Section */}
              <div className="bg-gray-100 py-10 w-full">
                <div className="flex justify-center">
                  <div className="text-center w-full">
                    <h1 className="text-4xl md:text-5xl font-bold mb-1 text-toppin-pink">
                      Avisos de seguridad
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-gray-50 py-10 w-full">
                <div className="flex justify-center">
                  <div className="flex flex-col space-y-6 w-full items-center">
                    {safetyData.map((item) => (
                      <div
                        key={item.key}
                        className="bg-white p-3 border border-toppin-pink rounded-3xl overflow-hidden max-w-md"
                      >
                        <div className="flex justify-center">
                          <img
                            className="rounded-md w-full h-64 object-cover"
                            src={item.img}
                            alt={item.key}
                          />
                        </div>
                        <div className="p-6 mt-10 text-center">
                          <h2 className="text-xl font-bold mb-4 text-toppin-pink">
                            {item.title}
                          </h2>
                          <p className="text-gray-700">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
