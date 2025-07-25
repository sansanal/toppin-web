
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
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">Toppitea con seguridad</h2>
                      <AccordionTrigger className="p-3 hover:bg-gray-700 rounded-lg transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0 border border-gray-600 hover:border-toppin-blue/50" />
                    </div>
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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="first-date-tips" className="border-none">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">Consejos para tener la primera cita perfecta</h2>
                      <AccordionTrigger className="p-3 hover:bg-gray-700 rounded-lg transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0 border border-gray-600 hover:border-toppin-blue/50" />
                    </div>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        Las primeras citas siempre nos causan nervios, inseguridades, pero también emoción. Por ello, desde Toppin queremos daros algunos consejos que os ayudarán a que vuestra primera cita se a lo más perfecta posible. Y recuerda, siempre puede haber fallo, es algo natural.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. Tus amigos, tus mejores valedores</h3>
                          <p>Cuando rellenamos nuestros perfiles en redes sociales solemos mostrar una imagen nuestra que no se ajusta del todo a la realidad, lo que proyecta una imagen equivocada de nosotros mismos. El problema surge que, al conocernos, podemos decepcionar a nuestra cita, la cual tiene una imagen predefinida por lo que ha visto en nuestro perfil.</p>
                          <p className="mt-2">Para evitar esta falsa impresión, primero debemos mostrarnos tal y como somos en realidad y ajustarnos a ella en el perfil que nos abramos en Toppin. Otro gran consejo es pedir ayuda a nuestros amigos, para que nos aseguremos de que nos mostramos tal y como somos.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. Elegir bien el lugar de nuestra primera cita</h3>
                          <p>Solemos pensar que el mejor lugar para tener una primera cita es elaborar un plan complejo y sofisticado. Nada más lejos de la realidad. Una cena, un café en algún lugar de moda. Elegir un sitio tranquilo e informal es que este nos ayudará a relajarnos y no aumentará nuestro nerviosismo.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. La conversación, punto de apoyo</h3>
                          <p>Cuando pensamos en la primera cita solemos darle muchas vueltas a como fluirá la conversación. Es normal pensar en ello pues es un punto en el que podemos fallar, y esto nos pone aún más nerviosos.</p>
                          <p className="mt-2">Si bien partimos de la premisa de que esa primera cita será con alguien con quien ya hemos chateado con anterioridad, recurrir a temas banales puede hacer que esta cita acabe en desastre.</p>
                          <p className="mt-2">Una buena opción es tener previamente una cita por videochat, podremos de este modo charlar tranquilamente y ver si la conversación es fluida y agradable.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. Que no te traicione tu lenguaje corporal</h3>
                          <p>Una de las cosas que más transmite sobre nosotros mismo es el lenguaje corporal. Estar atentos a que este no nos traicione es más sencillo de lo que pensamos. Según ciertos estudios, copiar el lenguaje de nuestra cita puede ayudarnos a crear una atmósfera mejor, si nos sonríe, sonreímos, por ejemplo.</p>
                          <p className="mt-2">Otra forma de cuidar el lenguaje corporal es el como nos sentamos, de frente y sin cruzar los brazos, con una postura abierta hacia nuestro interlocutor.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. Aceptación, no coincidiréis en todo</h3>
                          <p>Ante una primera cita nos aferramos a la idea de que podemos estar ante una persona con la que tendremos muchas cosas en común. Si bien esto es posible, hemos de entender que nadie es cien por cien igual a nosotros.</p>
                          <p className="mt-2">Este hecho no solo es normal, sino que es incluso, bueno. De este modo podremos establecer temas de conversación variados y descubrir facetas interesantes de nuestra cita.</p>
                          <p className="mt-2 font-medium">Recuerda, prepararse bien para una primera cita puede ayudaros a que esta fluya y sea lo más cómodo posible, pero, si al final no sale bien no hay de que preocuparse, pues hay factores que no podemos controlar.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ending-match-relationship" className="border-none">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">Como terminar una relación de match</h2>
                      <AccordionTrigger className="p-3 hover:bg-gray-700 rounded-lg transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0 border border-gray-600 hover:border-toppin-blue/50" />
                    </div>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        Toppin está pensada para conocer gente y disfrutar de cada momento, para encontrar el amor de tu vida o conocer gente que te haga pasar momentos dulces. Pero no siempre sucede al primer match. Por ello, desde Toppin queremos enseñarte diferentes formas de hacerle saber a ese match que ya no estamos interesados en ellos.
                      </p>
                      <p>
                        Es importante la forma como lo hacemos, pues con ello conseguiremos crear una comunidad sana y además, respetaremos al resto de usuarios. El Ghosting no es la única opción.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. No existe progresión en vuestra relación</h3>
                          <p>Si llegados a un punto te das cuenta de que no estás ante la persona que endulzará tu vida, y no te gusta tanto como pensabas, no hace falta salir corriendo, simplemente puedes abordar la situación con un simple "fue un placer conocerte, lo pasamos bien, pero creo que no congeniamos lo suficiente".</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. Del amor a la amistad hay un pequeño paso</h3>
                          <p>Puede que encontraras a alguien muy dulce toppiteando. Que vuestras primeras citas fueran increíbles pero llegados a un punto ves a esa persona más como un amigo que como el amor de tu vida.</p>
                          <p className="mt-2">¿Cómo puedes transmitir esa idea? Lo primero que has de hacer es ser amable pero muy claro con tus intenciones. Trazar una línea de hacia donde quieres llevar la relación y que pretendes con ello.</p>
                          <p className="mt-2">Puede que la otra persona no pretenda una amistad y corte toda relación. Se respetuoso con la decisión de los demás, al igual que querrías que lo fueran con las tuyas.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. No tienes claro si tu match siente lo mismo que tú</h3>
                          <p>Puede que te encuentres ante ciertas situaciones en las que puedes pensar que tú siempre das el primer paso, siempre comienzas tú la conversación o eres quien propone las citas. Ante estas situaciones es recomendable parar, ser conciso y exponer lo que quieres de la relación.</p>
                          <p className="mt-2">Transmitir a la persona a la que estas conociendo que buscas, que necesitas y hacia donde quieres llevar la relación que se está formando es imprescindible para que tu match se convierta en algo dulce.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. Ha sido maravilloso, pero toca a su fin</h3>
                          <p>Conociste a alguien muy especial y vivisteis momentos inolvidables. El momento de afrontar una ruptura siempre es complicado y puede que no exista la forma perfecta de hacerlo. Pero si hay formas incorrectas y una de ellas es no hacerlo en persona.</p>
                          <p className="mt-2">Se honesto y sincero. Puede que la ruptura se produzca por un hecho concreto o porque tus sentimientos toman otro rumbo. Se sincero con esa persona que tan buenos momentos te hizo pasar.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. De mal en peor</h3>
                          <p>Hiciste match con alguien, todo funcionaba a la perfección, pero sucedió algo que no puedes pasar por alto un hecho concreto o una serie de situaciones que no quieres en tu vida.</p>
                          <p className="mt-2">Transmitir a esa persona lo que ha hecho para que decidas dejar de verlo, de manera clara y sincera es un buen punto de partida.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">6. Marcar límites</h3>
                          <p>Tras varias citas empiezas a ver ciertos comportamientos o situaciones que no quieres tener en una futura relación. Se salta todos los límites que tienes y ves con claridad que si esto sucede al principio luego puede ir a peor. En este caso te aconsejamos que bloquees al usuario y si el caso es peor, lo denuncies en la aplicación.</p>
                        </div>
                        
                        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                          <p className="font-medium text-toppin-pink">Toppin está pensada para crear momentos dulces y conocer a gente que aporte algo a tu vida, disfrutando de cada pequeño momento. Por ello, respetar a todos los usuarios de la aplicación y ser sincero y cordial ayudará a crear una comunidad sana.</p>
                          <p className="mt-2 font-semibold text-toppin-blue">Endulza tu vida con Toppin.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
