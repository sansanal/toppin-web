
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="safety-tips" className="border-none">
                    <AccordionTrigger className="text-2xl font-bold text-toppin-blue hover:no-underline">
                      Toppitea con seguridad
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        Desde Toppin sabemos de la importancia que tiene la seguridad para nuestros usuarios y por ello queremos ayudaros con algunos consejos a que tu dulce aventura dentro de Toppin sea 100% segura y tu sólo tengas que disfrutar de los momentos más dulces.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. El registro, primer paso para tu seguridad</h3>
                          <p>El primer paso para que tu aventura en Toppin sea 100% segura pasa por nuestro método de registro a través de diferentes métodos. Por ello es recomendable que los usuarios que quieran toppitear con seguridad se registren siguiendo los pasos de manera correcta.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. Verifica tu perfil</h3>
                          <p>Uno de los puntos que aportan más seguridad a tu cuenta de Toppin es nuestro sistema de verificación de perfil mediante selfie.</p>
                          <p className="mt-2">Mediante un selfie en el que tendrás que realizar un gesto con la mano, el mismo que te aparecerá en la pantalla del móvil, verificaremos tu cuenta. De este modo ganarás en seguridad a la hora de visitar perfiles verificados y nosotros sabremos que eres tu realmente quién esta usando la cuenta con el fin de disfrutar de Toppin.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. Bloquea contactos no deseados</h3>
                          <p>Otra de las opciones que te proporciona Toppin es la de bloquear usuarios no deseados. De este modo salvaguardamos tu privacidad, siendo tu quien decida quién puede ver tu perfil, o simplemente quien puede seguir chateando contigo.</p>
                          <p className="mt-2">Así que recuerda, si crees que estás ante un perfil el cual no te hace sentir seguro, bloquéalo.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. No compartas datos susceptibles</h3>
                          <p>Es importante, por la seguridad de los usuarios de Toppin, que no se compartan datos susceptibles. No únicamente datos bancarios, si no de direcciones de donde vives o trabajas, o datos relacionados con tu vida más privada.</p>
                          <p className="mt-2">Desde Toppin creemos en una comunidad sana que busca divertirse y compartir este tipo de datos puede crear situaciones incomodas que hemos de evitar.</p>
                          <p className="mt-2 font-medium">Disfruta toppiteando de forma segura.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. No compartas fotografías privadas</h3>
                          <p>Uno de los grandes problemas que han traído las redes sociales no es otro que el uso indiscriminado de fotografías privadas. Hemos de tener cuidado de qué tipo de fotografías mandamos y a quién se las mandamos, pues nunca sabemos que uso pueden dar de estas.</p>
                          <p className="mt-2">Por ello, te invitamos a no compartir ciertas imágenes, para que el uso de Toppin sea 100% seguro.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">6. Compartir videollamada</h3>
                          <p>Si has conocido a alguien interesante en Toppin y queréis dar el siguiente paso, te recomendamos que uses nuestra opción de establecer una videollamada.</p>
                          <p className="mt-2">Os conoceréis mejor, podréis charlar tranquilamente y de manera más fluida y, sobre todo poneros cara el uno al otro.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">7. No dudes en contactar con nosotros</h3>
                          <p>Esperamos que esta guía te ayude a disfrutar de los momentos más dulce en Toppin. Pero si tienes alguna duda, sugerencia o quieres ponerte en contacto con nosotros porque crees que tu seguridad esta siendo vulnerada, no dudes en ponerte en contacto con nosotros a través de nuestro correo electrónico supportoppin.es.</p>
                          <p className="mt-2 font-medium">Tu seguridad es primordial para nosotros.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
