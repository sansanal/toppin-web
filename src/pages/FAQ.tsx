
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      id: "registrarse",
      title: "REGISTRARSE Y PRIMEROS PASOS",
      questions: [
        {
          question: "¿Cómo crear una cuenta en Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Te damos la bienvenida a Toppin. Para comenzar a disfrutar de esta app necesitas crear una cuenta. Nosotros te explicamos a continuación todas las formas posibles para que comiences a dar Matches.
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Descarga la App de Toppin para IOS</li>
                  <li>• Crea una cuenta a través de Facebook, Apple o regístrate con tu mail</li>
                  <li>• Configura tu perfil</li>
                  <li>• Concede todos los permisos requeridos</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Descarga la App de Toppin para Android</li>
                  <li>• Crea una cuenta a través de Facebook, Google o regístrate con tu mail</li>
                  <li>• Configura tu perfil</li>
                  <li>• Concede todos los permisos requeridos</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          question: "¿Puedo registrarme sin tener una cuenta de Facebook?",
          answer: null
        },
        {
          question: "¿Cómo puedo editar mi perfil?",
          answer: null
        },
        {
          question: "¿Cómo puedo configurar mis preferencias de búsqueda?",
          answer: null
        },
        {
          question: "¿Qué pasa si me han restringido en Toppin por la edad?",
          answer: null
        }
      ]
    },
    {
      id: "matches",
      title: "MATCHES Y MENSAJES",
      questions: [
        {
          question: "¿Cómo enviar un mensaje a un Match?",
          answer: null
        },
        {
          question: "¿Desmarcar Matches y enviar denuncias?",
          answer: null
        },
        {
          question: "¿Cómo denuncio un perfil?",
          answer: null
        },
        {
          question: "¿He deshecho un Match por error?",
          answer: null
        }
      ]
    },
    {
      id: "intereses",
      title: "INTERESES",
      questions: [
        {
          question: "¿Cómo cambio mis preferencias de búsqueda?",
          answer: null
        },
        {
          question: "¿Cómo administrar tus notificaciones?",
          answer: null
        },
        {
          question: "¿Cómo se vincula Instagram con tu perfil?",
          answer: null
        },
        {
          question: "¿Se puede conectar Spotify a tu perfil de Toppin?",
          answer: null
        },
        {
          question: "¿Sin cuenta de Spotify puedo vincular música a mi perfil?",
          answer: null
        },
        {
          question: "¿Qué quiere decir que un perfil es verificado?",
          answer: null
        },
        {
          question: "¿Cómo puedo pedir un perfil verificado?",
          answer: null
        }
      ]
    },
    {
      id: "facturacion",
      title: "FACTURACIÓN Y PAGO",
      questions: [
        {
          question: "¿Puedo restaurar mis compras de Toppin?",
          answer: null
        },
        {
          question: "¿Cómo puedo actualizar mi suscripción actual a Toppin?",
          answer: null
        },
        {
          question: "¿Cuáles son los métodos de pago aceptados?",
          answer: null
        },
        {
          question: "¿Puedo pasar mi suscripción a Toppin Premium y Toppin Supreme?",
          answer: null
        }
      ]
    },
    {
      id: "problemas-pagos",
      title: "PROBLEMAS CON LOS PAGOS O LA FACTURACIÓN",
      questions: [
        {
          question: "No puedo restaurar mi compra.",
          answer: null
        },
        {
          question: "¿Hace poco que has cambiado de dispositivo?",
          answer: null
        },
        {
          question: "¿Sigues teniendo problemas?",
          answer: null
        },
        {
          question: "¿Cómo puedo cancelar la suscripción?",
          answer: null
        },
        {
          question: "¿Cómo cancelar?",
          answer: null
        }
      ]
    },
    {
      id: "facturacion-mobile",
      title: "FACTURACIÓN EN IOS y ANDROID",
      questions: [
        {
          question: "He cancelado una suscripción pero se me ha vuelto a cobrar",
          answer: null
        },
        {
          question: "¿Cómo actualizar tus datos de facturación?",
          answer: null
        }
      ]
    },
    {
      id: "problemas-funciones",
      title: "PROBLEMAS CON LAS FUNCIONES DE PAGO",
      questions: [
        {
          question: "No puedo acceder a mi suscripción de Toppin por motivos de cambio de dispositivo, te ayudamos a recuperarla.",
          answer: null
        },
        {
          question: "¿Cómo hiciste la compra? ¿Con tu Apple ID o con Google Play Store?",
          answer: null
        },
        {
          question: "Problemas al desactivar el Power Sweet",
          answer: null
        },
        {
          question: "¿Problemas técnicos?",
          answer: null
        }
      ]
    },
    {
      id: "perfil-ajustes",
      title: "PROBLEMAS CON MI PERFIL Y AJUSTES",
      questions: [
        {
          question: "Estoy teniendo problemas con la eliminación de mi cuenta",
          answer: null
        },
        {
          question: "Problemas técnicos relacionados con la eliminación de la cuenta",
          answer: null
        },
        {
          question: "Mi cuenta está en investigación.",
          answer: null
        },
        {
          question: "Problemas con la verificación de las fotos.",
          answer: null
        },
        {
          question: "Mi nombre o edad son incorrectos.",
          answer: null
        },
        {
          question: "Sigue estos pasos para eliminar tu cuenta de Toppin:",
          answer: null
        }
      ]
    },
    {
      id: "editar-perfil",
      title: "PROBLEMAS EN EDITAR PERFIL",
      questions: [
        {
          question: "No me sale ningún perfil en la pantalla donde toppiteas",
          answer: null
        },
        {
          question: "¿Estás teniendo problemas técnicos?",
          answer: null
        },
        {
          question: "Estoy viendo perfiles que ya he visto antes.",
          answer: null
        }
      ]
    },
    {
      id: "matches-mensajes",
      title: "PROBLEMAS CON LOS MATCHES Y MENSAJES",
      questions: [
        {
          question: "Todos mis Matches han desaparecido",
          answer: null
        },
        {
          question: "No me sale ningún perfil en la pantalla donde toppiteas",
          answer: null
        },
        {
          question: "No tengo nuevos Matches.",
          answer: null
        }
      ]
    },
    {
      id: "filtros",
      title: "FILTROS Y PARÁMETROS DE BÚSQUEDA",
      questions: [
        {
          question: "¿Cómo funcionan los filtros?",
          answer: null
        },
        {
          question: "¿Puedo buscar a una persona específica en Toppin?",
          answer: null
        },
        {
          question: "¿Cómo puedo enviarle un mensaje a alguien?",
          answer: null
        },
        {
          question: "¿Cómo denunciar un perfil?",
          answer: null
        },
        {
          question: "¿Cómo puedo deshacer un \"Me gusta\" o un \"No me gusta\"?",
          answer: null
        }
      ]
    },
    {
      id: "perfil-cuenta",
      title: "PERFIL Y AJUSTES DE LA CUENTA",
      questions: [
        {
          question: "Verificación por selfie, ¿Cómo funciona?",
          answer: null
        },
        {
          question: "¿Cómo puedes editar tu perfil?",
          answer: null
        },
        {
          question: "¿Cómo puedo borrar mi cuenta?",
          answer: null
        },
        {
          question: "¿Qué es la verificación fotogénica?",
          answer: null
        }
      ]
    },
    {
      id: "suscripciones",
      title: "SUSCRIPCIONES PREMIUM Y SUPREME",
      questions: [
        {
          question: "Suscripción Premium",
          answer: null
        },
        {
          question: "Suscripción Supreme",
          answer: null
        }
      ]
    },
    {
      id: "funciones",
      title: "ALGUNAS FUNCIONES TOPPIN",
      questions: [
        {
          question: "Toppin Sweet",
          answer: null
        },
        {
          question: "Super Sweet",
          answer: null
        },
        {
          question: "Power Sweet",
          answer: null
        },
        {
          question: "Destination",
          answer: null
        },
        {
          question: "Vuelve atrás",
          answer: null
        },
        {
          question: "Likes Ilimitados",
          answer: null
        }
      ]
    },
    {
      id: "resolucion",
      title: "RESOLUCIÓN DE PROBLEMAS",
      questions: [
        {
          question: "No puedo iniciar sesión en mi cuenta.",
          answer: null
        },
        {
          question: "Mi cuenta ha sido deshabilitada.",
          answer: null
        },
        {
          question: "Quiero actualizar la dirección de correo electrónico asociada a mi cuenta.",
          answer: null
        },
        {
          question: "La app se bloquea.",
          answer: null
        },
        {
          question: "¿Cómo puedo saber cuál es la dirección de correo electrónico asociada a la cuenta?",
          answer: null
        },
        {
          question: "En caso de ser desde un dispositivo iPhone",
          answer: null
        },
        {
          question: "En caso de ser desde un dispositivo Android:",
          answer: null
        },
        {
          question: "Tengo problemas para cancelar mi suscripción.",
          answer: null
        },
        {
          question: "Tengo cargos duplicados o incorrectos.",
          answer: null
        }
      ]
    },
    {
      id: "metodo-pago",
      title: "EL MÉTODO DE PAGO QUE ESTOY INTENTANDO UTILIZAR NO FUNCIONA.",
      questions: [
        {
          question: "Estos son los problemas más habituales con los métodos de pago",
          answer: null
        },
        {
          question: "Si el problema sigue, puedes consultar los métodos de pago aceptados por la App Store (iOS) o la Google Play Store(Android), depende de tu dispositivo.",
          answer: null
        },
        {
          question: "Ver historial de pagos.",
          answer: null
        },
        {
          question: "Si has realizado una compra usando tu ID de Apple, podrás encontrar tu historial de pagos siguiendos estos pasos:",
          answer: null
        },
        {
          question: "Si la compra la has efectuado desde una cuenta de Google Play, podrás ver tu historial de pagos siguiendo estos pasos:",
          answer: null
        },
        {
          question: "Tengo una suscripción a Toppin y no he recibido mi PowerSweet mensual.",
          answer: null
        },
        {
          question: "He usado un SuperSweet pero no he conseguido ningún \"Match\" mutuo.",
          answer: null
        },
        {
          question: "Los Super Sweets, PowerSweet, confirmaciones de lectura etc… ¿Desaparecerán si me creo una cuenta nueva?",
          answer: null
        },
        {
          question: "He recibido una notificación de que alguien me envió un Super Sweet pero no lo veo en la app.",
          answer: null
        },
        {
          question: "No puedo cambiar mi ubicación con Destination.",
          answer: null
        },
        {
          question: "No puedo actualizar mi perfil.",
          answer: null
        },
        {
          question: "No puedo subir fotos a mi perfil.",
          answer: null
        },
        {
          question: "¿Por qué se ha eliminado mi foto de Toppin?",
          answer: null
        },
        {
          question: "La información de mi trabajo y/o centro de estudios no se actualiza.",
          answer: null
        },
        {
          question: "No recibo ninguna notificación push.",
          answer: null
        },
        {
          question: "¿Cómo habilitar las notificaciones push en tu dispositivo?",
          answer: null
        },
        {
          question: "Habilitar las notificaciones en Toppin",
          answer: null
        },
        {
          question: "Los perfiles que veo están muy lejos.",
          answer: null
        },
        {
          question: "Los perfiles no concuerdan con mis preferencias de género o edad.",
          answer: null
        },
        {
          question: "No puedo subir fotos a mi perfil.",
          answer: null
        },
        {
          question: "He denegado el acceso a Toppin a mi ubicación",
          answer: null
        },
        {
          question: "Ubicación en IOS",
          answer: null
        },
        {
          question: "Ubicación en Android",
          answer: null
        },
        {
          question: "Mis Matches se quedan cargando todo el rato.",
          answer: null
        },
        {
          question: "Mis mensajes no se están enviando.",
          answer: null
        },
        {
          question: "He deshecho un Match por error.",
          answer: null
        },
        {
          question: "Puede pasar que sin querer le des a deshacer Match sin darte cuenta. Pero tanto si tú, como tu Match deshace lo deshace será una acción permanente que lamentablemente no se puede rehacer y ya no aparecerá en la lista de ninguno de los dos perfiles",
          answer: null
        },
        {
          question: "Las fotos de mis Matches no se cargan.",
          answer: null
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-toppin-pink">
              No lo dudes, pregúntanos y te ayudaremos
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-toppin-blue">
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <Accordion type="multiple" className="w-full">
              {faqSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border-gray-700">
                  <AccordionTrigger className="text-left text-toppin-blue font-semibold text-lg hover:text-toppin-pink transition-colors">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {section.questions.map((item, index) => (
                        <div key={index} className="space-y-3">
                          <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                            <h3 className="text-gray-300 font-medium mb-2">{item.question}</h3>
                            {item.answer && (
                              <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                                {item.answer}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
