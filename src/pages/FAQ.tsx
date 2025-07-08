
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
        "¿Cómo crear una cuenta en Toppin?",
        "¿Puedo registrarme sin tener una cuenta de Facebook?",
        "¿Cómo puedo editar mi perfil?",
        "¿Cómo puedo configurar mis preferencias de búsqueda?",
        "¿Qué pasa si me han restringido en Toppin por la edad?"
      ]
    },
    {
      id: "matches",
      title: "MATCHES Y MENSAJES",
      questions: [
        "¿Cómo enviar un mensaje a un Match?",
        "¿Desmarcar Matches y enviar denuncias?",
        "¿Cómo denuncio un perfil?",
        "¿He deshecho un Match por error?"
      ]
    },
    {
      id: "intereses",
      title: "INTERESES",
      questions: [
        "¿Cómo cambio mis preferencias de búsqueda?",
        "¿Cómo administrar tus notificaciones?",
        "¿Cómo se vincula Instagram con tu perfil?",
        "¿Se puede conectar Spotify a tu perfil de Toppin?",
        "¿Sin cuenta de Spotify puedo vincular música a mi perfil?",
        "¿Qué quiere decir que un perfil es verificado?",
        "¿Cómo puedo pedir un perfil verificado?"
      ]
    },
    {
      id: "facturacion",
      title: "FACTURACIÓN Y PAGO",
      questions: [
        "¿Puedo restaurar mis compras de Toppin?",
        "¿Cómo puedo actualizar mi suscripción actual a Toppin?",
        "¿Cuáles son los métodos de pago aceptados?",
        "¿Puedo pasar mi suscripción a Toppin Premium y Toppin Supreme?"
      ]
    },
    {
      id: "problemas-pagos",
      title: "PROBLEMAS CON LOS PAGOS O LA FACTURACIÓN",
      questions: [
        "No puedo restaurar mi compra.",
        "¿Hace poco que has cambiado de dispositivo?",
        "¿Sigues teniendo problemas?",
        "¿Cómo puedo cancelar la suscripción?",
        "¿Cómo cancelar?"
      ]
    },
    {
      id: "facturacion-mobile",
      title: "FACTURACIÓN EN IOS y ANDROID",
      questions: [
        "He cancelado una suscripción pero se me ha vuelto a cobrar",
        "¿Cómo actualizar tus datos de facturación?"
      ]
    },
    {
      id: "problemas-funciones",
      title: "PROBLEMAS CON LAS FUNCIONES DE PAGO",
      questions: [
        "No puedo acceder a mi suscripción de Toppin por motivos de cambio de dispositivo, te ayudamos a recuperarla.",
        "¿Cómo hiciste la compra? ¿Con tu Apple ID o con Google Play Store?",
        "Problemas al desactivar el Power Sweet",
        "¿Problemas técnicos?"
      ]
    },
    {
      id: "perfil-ajustes",
      title: "PROBLEMAS CON MI PERFIL Y AJUSTES",
      questions: [
        "Estoy teniendo problemas con la eliminación de mi cuenta",
        "Problemas técnicos relacionados con la eliminación de la cuenta",
        "Mi cuenta está en investigación.",
        "Problemas con la verificación de las fotos.",
        "Mi nombre o edad son incorrectos.",
        "Sigue estos pasos para eliminar tu cuenta de Toppin:"
      ]
    },
    {
      id: "editar-perfil",
      title: "PROBLEMAS EN EDITAR PERFIL",
      questions: [
        "No me sale ningún perfil en la pantalla donde toppiteas",
        "¿Estás teniendo problemas técnicos?",
        "Estoy viendo perfiles que ya he visto antes."
      ]
    },
    {
      id: "matches-mensajes",
      title: "PROBLEMAS CON LOS MATCHES Y MENSAJES",
      questions: [
        "Todos mis Matches han desaparecido",
        "No me sale ningún perfil en la pantalla donde toppiteas",
        "No tengo nuevos Matches."
      ]
    },
    {
      id: "filtros",
      title: "FILTROS Y PARÁMETROS DE BÚSQUEDA",
      questions: [
        "¿Cómo funcionan los filtros?",
        "¿Puedo buscar a una persona específica en Toppin?",
        "¿Cómo puedo enviarle un mensaje a alguien?",
        "¿Cómo denunciar un perfil?",
        "¿Cómo puedo deshacer un \"Me gusta\" o un \"No me gusta\"?"
      ]
    },
    {
      id: "perfil-cuenta",
      title: "PERFIL Y AJUSTES DE LA CUENTA",
      questions: [
        "Verificación por selfie, ¿Cómo funciona?",
        "¿Cómo puedes editar tu perfil?",
        "¿Cómo puedo borrar mi cuenta?",
        "¿Qué es la verificación fotogénica?"
      ]
    },
    {
      id: "suscripciones",
      title: "SUSCRIPCIONES PREMIUM Y SUPREME",
      questions: [
        "Suscripción Premium",
        "Suscripción Supreme"
      ]
    },
    {
      id: "funciones",
      title: "ALGUNAS FUNCIONES TOPPIN",
      questions: [
        "Toppin Sweet",
        "Super Sweet",
        "Power Sweet",
        "Destination",
        "Vuelve atrás",
        "Likes Ilimitados"
      ]
    },
    {
      id: "resolucion",
      title: "RESOLUCIÓN DE PROBLEMAS",
      questions: [
        "No puedo iniciar sesión en mi cuenta.",
        "Mi cuenta ha sido deshabilitada.",
        "Quiero actualizar la dirección de correo electrónico asociada a mi cuenta.",
        "La app se bloquea.",
        "¿Cómo puedo saber cuál es la dirección de correo electrónico asociada a la cuenta?",
        "En caso de ser desde un dispositivo iPhone",
        "En caso de ser desde un dispositivo Android:",
        "Tengo problemas para cancelar mi suscripción.",
        "Tengo cargos duplicados o incorrectos."
      ]
    },
    {
      id: "metodo-pago",
      title: "EL MÉTODO DE PAGO QUE ESTOY INTENTANDO UTILIZAR NO FUNCIONA.",
      questions: [
        "Estos son los problemas más habituales con los métodos de pago",
        "Si el problema sigue, puedes consultar los métodos de pago aceptados por la App Store (iOS) o la Google Play Store(Android), depende de tu dispositivo.",
        "Ver historial de pagos.",
        "Si has realizado una compra usando tu ID de Apple, podrás encontrar tu historial de pagos siguiendos estos pasos:",
        "Si la compra la has efectuado desde una cuenta de Google Play, podrás ver tu historial de pagos siguiendo estos pasos:",
        "Tengo una suscripción a Toppin y no he recibido mi PowerSweet mensual.",
        "He usado un SuperSweet pero no he conseguido ningún \"Match\" mutuo.",
        "Los Super Sweets, PowerSweet, confirmaciones de lectura etc… ¿Desaparecerán si me creo una cuenta nueva?",
        "He recibido una notificación de que alguien me envió un Super Sweet pero no lo veo en la app.",
        "No puedo cambiar mi ubicación con Destination.",
        "No puedo actualizar mi perfil.",
        "No puedo subir fotos a mi perfil.",
        "¿Por qué se ha eliminado mi foto de Toppin?",
        "La información de mi trabajo y/o centro de estudios no se actualiza.",
        "No recibo ninguna notificación push.",
        "¿Cómo habilitar las notificaciones push en tu dispositivo?",
        "Habilitar las notificaciones en Toppin",
        "Los perfiles que veo están muy lejos.",
        "Los perfiles no concuerdan con mis preferencias de género o edad.",
        "No puedo subir fotos a mi perfil.",
        "He denegado el acceso a Toppin a mi ubicación",
        "Ubicación en IOS",
        "Ubicación en Android",
        "Mis Matches se quedan cargando todo el rato.",
        "Mis mensajes no se están enviando.",
        "He deshecho un Match por error.",
        "Puede pasar que sin querer le des a deshacer Match sin darte cuenta. Pero tanto si tú, como tu Match deshace lo deshace será una acción permanente que lamentablemente no se puede rehacer y ya no aparecerá en la lista de ninguno de los dos perfiles",
        "Las fotos de mis Matches no se cargan."
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
                    <div className="space-y-3 pt-4">
                      {section.questions.map((question, index) => (
                        <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                          <p className="text-gray-300 font-medium">{question}</p>
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
