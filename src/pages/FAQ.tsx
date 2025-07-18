
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
          answer: (
            <p className="text-gray-300">
              En Toppin disponemos de varias formas de registro, por lo que no es necesario tener Facebook para disfrutar de nuestra App. Ya que si no tienes una cuenta en Facebook puedes registrarte utilizando una cuenta de Google, una cuenta de Apple o bien tu correo electrónico. ¡Y a disfrutar!
            </p>
          )
        },
        {
          question: "¿Cómo puedo editar mi perfil?",
          answer: (
            <p className="text-gray-300">
              Para cambiar datos o información en relación con tu perfil entra en el icono del lápiz y comienza a editar tu información. Podrás cambiar las fotos, editar tu biografía, orientación sexual, incluir tu género, añadir diferente información personal y vincular Toppin a Spotify e Instagram. ¡De esta forma las personas que te encuentres en la pantalla donde toppiteas podrán conocerte mucho más rápido y saber si les interesas!
            </p>
          )
        },
        {
          question: "¿Cómo puedo configurar mis preferencias de búsqueda?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres cambiar los filtros para encontrar personas más afines a ti podrás hacerlo desde la pantalla de toppitear. Si sigues la siguiente ruta – Icono de la parte superior derecha, icono de Filtros – Podrás definir cuáles son tus preferencias por radio de distancia, edad, sexo, gustos, etc.
              </p>
              <p className="text-gray-300">
                ¡A conocer gente se ha dicho!
              </p>
            </div>
          )
        },
        {
          question: "¿Qué pasa si me han restringido en Toppin por la edad?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                No están permitidos los perfiles de menos de 18 años de edad. Por lo que no puedes registrarte en Toppin si eres menor de 18 años. Si todavía no llegas a esta edad no te preocupes, ¡estaremos encantados de verte en cuándo los cumplas!
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "matches",
      title: "MATCHES Y MENSAJES",
      questions: [
        {
          question: "¿Cómo enviar un mensaje a un Match?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Una vez hayas logrado hacer Match con otro usuario podréis comenzar a chatear. Podrás encontrar a la persona en el listado de Matches y desde ahí enviarle un mensaje.
              </p>
            </div>
          )
        },
        {
          question: "¿Desmarcar Matches y enviar denuncias?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres deshacer un Match puedes hacerlo abriendo el chat con esa persona y en la parte superior de la página del chat verás tres puntitos, al hacer click se abrirá un menú en el que te saldrá la opción "Deshacer Match".
              </p>
              <p className="text-gray-300">
                Si lo que quieres hacer es denunciar un Match puedes hacerlo abriendo el chat con esa persona y en la parte superior de la página del chat verás tres puntitos, al hacer click se abrirá un menú en el que te saldrá la opción "Denunciar".
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo denuncio un perfil?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres denunciar un perfil que te ha aparecido en la pantalla de toppitear de la app podrás hacerlo metiéndote en su perfil y deslizando hacia abajo. Te aparecerá una opción donde pone DENUNCIAR PERFIL.
              </p>
            </div>
          )
        },
        {
          question: "¿He deshecho un Match por error?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Deshacer un Match es una acción permanente y lamentablemente no se puede rehacer.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "intereses",
      title: "INTERESES",
      questions: [
        {
          question: "¿Cómo cambio mis preferencias de búsqueda?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Puedes personalizar la función para descubrir nuevas personas. Ve a ajustes y decide a través de los filtros que tipo de perfiles quieres ver. Distancia, edad y género son algunos de los filtros que puedes seleccionar.
              </p>
              <p className="text-gray-300">
                ¡Así tendrás más posibilidades de encajar con tu próxima cita!
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo administrar tus notificaciones?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres administrar tus notificaciones, activarlas o desactivarlas podrás hacerlo dentro de Perfil {'>'}  Ajustes {'>'}  Notificaciones. Ahí podrás activar y desactivar las notificaciones que quieras o no recibir y todo lo relacionado con ellas.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo se vincula Instagram con tu perfil?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres vincular tu perfil de Instagram con el de Toppin simplemente tendrás que entrar en los ajustes dentro de la app y hacer click en vincular tu cuenta de Instagram.
              </p>
              <p className="text-gray-300">
                Una vez vinculada los otros usuarios podrán ver tus fotografías de Instagram. De este modo podrán conocerte mejor.
              </p>
            </div>
          )
        },
        {
          question: "¿Se puede conectar Spotify a tu perfil de Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres vincular tu perfil de Spotify con el de Toppin simplemente tendrás que entrar en los ajustes dentro de la app y hacer click en vincular tu cuenta de Spotify.
              </p>
              <p className="text-gray-300">
                Una vez vinculada los otros usuarios podrán ver tu música favorita de Spotify. De este modo podrán conocerte mejor.
              </p>
            </div>
          )
        },
        {
          question: "¿Sin cuenta de Spotify puedo vincular música a mi perfil?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                No, lamentablemente el único modo de compartir la música que te gusta en tu perfil es a través de Spotify.
              </p>
            </div>
          )
        },
        {
          question: "¿Qué quiere decir que un perfil es verificado?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Un perfil verificado es un perfil que ha pasado exitosamente nuestro método de verificación de identidad. Aparecerá una marca que hará que quien visite tu perfil sepa que eres tú realmente la persona que está utilizando la cuenta.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo pedir un perfil verificado?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres solicitar la verificación de tu perfil de Toppin simplemente tendrás que entrar en los ajustes dentro de la app y hacer click en solicitar verificación.
              </p>
              <p className="text-gray-300">
                Una vez enviada la solicitud, nuestro equipo revisará tu cuenta y te notificaremos el resultado del proceso de verificación.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "facturacion",
      title: "FACTURACIÓN Y PAGO",
      questions: [
        {
          question: "¿Puedo restaurar mis compras de Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Sí, aunque cambies de teléfono podrás recuperar tus compras con tu cuenta de App Store o Google Play. Por lo que no tendrás que empezar de cero el proceso de compra.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo actualizar mi suscripción actual a Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres actualizar tu suscripción de Toppin por otra diferente podrás actualizar o mejorar el tipo de suscripción que tienes simplemente tendrás que comprar la que desees tener ahora y se reemplazará por la antigua.
              </p>
            </div>
          )
        },
        {
          question: "¿Cuáles son los métodos de pago aceptados?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres hacerte con alguna de nuestras suscripciones Premium o Supreme para poder optar a más funciones dentro de la app podrás pagar a través de tu cuenta de Apple Pay y Google Pay.
              </p>
            </div>
          )
        },
        {
          question: "¿Puedo pasar mi suscripción a Toppin Premium y Toppin Supreme?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Sí, puedes pasar de Premium a Supreme siempre que quieras a través de una nueva compra. No se cargarán más importes por la antigua suscripción.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "problemas-pagos",
      title: "PROBLEMAS CON LOS PAGOS O LA FACTURACIÓN",
      questions: [
        {
          question: "No puedo restaurar mi compra.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Las suscripciones podrán asociarse con una sola cuenta de Toppin a la vez.
              </p>
              <p className="text-gray-300">
                Si ves un mensaje de error que pone: «Tu suscripción está actualmente vinculada a una cuenta ya existente», eso significará que ya tienes una suscripción activa y que no es con la cuenta que has iniciado sesión actualmente.
              </p>
              <p className="text-gray-300">
                Si quieres usar un suscripción en una nueva cuenta de Toppin, primero tendrás que eliminar tu anterior cuenta de Toppin. Si borras tu cuenta supondrá eliminar definitivamente todos tus Matches, los mensajes y toda la información asociada a esta cuenta.
              </p>
              <div className="mt-4">
                <ul className="space-y-1 text-gray-300">
                  <li>• Inicia sesión en la cuenta que deseas borrar.</li>
                  <li>• Toca el icono de perfil</li>
                  <li>• Dirígete a los Ajustes</li>
                  <li>• Desplázate hacia abajo y selecciona Borrar cuenta.</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Una vez esta cuenta esté eliminada ya podrás comprar la suscripción con tu nueva cuenta sin que haya ningún error.
                </p>
              </div>
            </div>
          )
        },
        {
          question: "¿Hace poco que has cambiado de dispositivo?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si has cambiado de plataforma móvil, es decir, pasando de iOS a Android o viceversa, te recomendamos que canceles tu suscripción actual y te suscribas de nuevo en tu nuevo dispositivo móvil. Te resultará más fácil gestionar la suscripción.
              </p>
            </div>
          )
        },
        {
          question: "¿Sigues teniendo problemas?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si aún así sigue sin funcionar puedes escribirnos al soporte de Toppin y trataremos de ayudarte lo más rápido posible. Envíanos una captura con el mensaje de error que te aparezca e intentaremos darte una solución lo más rápido posible.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo cancelar la suscripción?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Debes tener en cuenta los siguientes aspectos:
              </p>
              <div className="mt-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• Eliminar Toppin de tu móvil no hará que se cancele tu suscripción, por lo que tendrás que seguir los siguientes pasos si quieres para evitar que se realicen más cobros en el futuro.</li>
                  <li>• Aunque canceles tu suscripción podrás disfrutar de todas sus ventajas hasta que terminen los días abonados que te falten por terminar.</li>
                  <li>• Aunque canceles tu suscripción esto no significa que se emita un reembolso de los pagos y tasas ya pagadas anteriormente.</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          question: "¿Cómo cancelar?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Dependiendo de la plataforma que hayas utilizado para suscribirte deberás seguir unos pasos u otros.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "facturacion-mobile",
      title: "FACTURACIÓN EN IOS y ANDROID",
      questions: [
        {
          question: "He cancelado una suscripción pero se me ha vuelto a cobrar",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Asegúrate de haber cancelado tu suscripción a Toppin correctamente. Si no quieres que se carguen más cobros en el futuro esto lo impedirá. Así se cancelan las suscripciones tanto en dispositivos iOS como en Android:
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• En los Ajustes de tu iPhone {'>'} [tu nombre] {'>'} iTunes y App Store</li>
                  <li>• En la parte superior de la pantalla pulsa en tu ID de Apple, y después selecciona «Ver ID de Apple» (quizá te pida que inicies sesión)</li>
                  <li>• Desliza hacia abajo y pulsa «Suscripciones»</li>
                  <li>• Elige cual es la suscripción que quieres gestionar</li>
                  <li>• Pulsa «Cancelar suscripción»</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 font-medium mb-2">Si te suscribiste usando tu cuenta de Google Play Store:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Ve a la web de play.google.com</li>
                      <li>• Comprueba si has iniciado sesión en tu cuenta de Google de manera correcta.</li>
                      <li>• En la izquierda, haz clic en «Mis suscripciones»</li>
                      <li>• Elige cual es la suscripción que deseas cancelar.</li>
                      <li>• Haz clic en «Gestionar» y luego en «Cancelar suscripción»</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-2">Si te suscribiste mediante tarjeta de crédito:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Abre la app de Toppin para Android</li>
                      <li>• Toca el icono de perfil</li>
                      <li>• Selecciona «Administrar cuenta de pago»</li>
                      <li>• Pulsa «Cancelar suscripción»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          question: "¿Cómo actualizar tus datos de facturación?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Desde la plataforma que utilizaste para suscribirte podrás actualizar tu método de pago (Apple Pay o Google Pay). Las instrucciones variarán en función de la plataforma que utilices para realizar la compra.
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <p className="text-gray-300">
                  Si quieres actualizar tus datos de facturación desde un dispositivo iOS, dirígete a la aplicación de Ajustes, selecciona iTunes & App Store, haz clic en tu ID de Apple, y pulsa en Ver ID de Apple y Datos de facturación.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    Si efectuaste la compra usando tu cuenta de Google Play Store, pulsa el icono de menú en Google Play Store, a continuación pulsa en Mi cuenta y selecciona «Añadir método de pago» o «Editar método de pago»
                  </p>
                  <p className="text-gray-300">
                    Si efectuaste la compra mediante tarjeta de crédito en Android, entra en la app de Toppin, pulsa en el icono de perfil y selecciona Administrar cuenta de pago.
                  </p>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "problemas-funciones",
      title: "PROBLEMAS CON LAS FUNCIONES DE PAGO",
      questions: [
        {
          question: "No puedo acceder a mi suscripción de Toppin por motivos de cambio de dispositivo, te ayudamos a recuperarla.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si Toppin no reconoce una suscripción que tienes en la app, restaura la compra.
              </p>
              <p className="text-gray-300">
                La función Restaurar compras te ayuda a mantener el acceso a tu suscripción cada vez que elimines y vuelvas a crear tu cuenta de Toppin, cuando te compres un teléfono nuevo, o en otras situaciones donde la aplicación no reconozca tu suscripción. Sigue los pasos siguientes para intentar restaurar tu compra.
              </p>
              <p className="text-gray-300">
                Restaurar una compra hace que se mantenga el acceso a la suscripción si cambias de teléfono móvil, eliminas y te creas una nueva cuenta o cualquier otro caso en el que la app no reconozca tu suscripción activa. Estos son los pasos para restaurar la compra.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo hiciste la compra? ¿Con tu Apple ID o con Google Play Store?",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Abre Toppin</li>
                <li>• Toca el icono de perfil</li>
                <li>• Dirígete a los Ajustes</li>
                <li>• Desliza hacia abajo y para Restaurar compra</li>
              </ul>
              <p className="text-gray-300 mt-4 font-medium">
                Importante: Restaurar tu compra no creará una nueva transacción; simplemente volverá a vincular la suscripción existente y activa con Toppin.
              </p>
            </div>
          )
        },
        {
          question: "Problemas al desactivar el Power Sweet",
          answer: (
            <div className="space-y-4">
              <h4 className="text-toppin-blue font-semibold text-lg mb-3">PowerSweet</h4>
              <p className="text-gray-300">
                PowerSweet activación: solo tienes que abrir Toppin y pulsar en el icono con forma de bateria de color azul en la pantalla principal.
              </p>
              <p className="text-gray-300">
                Si quieres saber cuántos PowerSweet te quedan toca el icono de perfil y echa un vistazo al contador en la parte inferior de la pantalla.
              </p>
            </div>
          )
        },
        {
          question: "¿Problemas técnicos?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si estás intentando utilizar cualquier función de toppin pero estás teniendo problemas, escríbenos un mensaje con los detalles exactos del problema o envíanos una captura de pantalla donde se vea claramente el problema que estás teniendo para que podamos ayudarte al correo support@toppin.es.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "perfil-ajustes",
      title: "PROBLEMAS CON MI PERFIL Y AJUSTES",
      questions: [
        {
          question: "Estoy teniendo problemas con la eliminación de mi cuenta",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si estás intentando eliminar tu cuenta de Toppin pero estás teniendo problemas, estos son los pasos que debes seguir para proceder a la eliminación de tu cuenta:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Abre la app de Toppin e inicia sesión</li>
                <li>• Toca el icono de tu perfil</li>
                <li>• Ve hacia los Ajustes</li>
                <li>• Desliza hacia abajo y haz clic en "Borrar cuenta"</li>
              </ul>
              <p className="text-gray-300">
                Si necesitas ayuda puedes ponerte en contacto con nosotros y trataremos de ayudarte al correo support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "Problemas técnicos relacionados con la eliminación de la cuenta",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si cuando intentas eliminar tu cuenta aparece un mensaje de error, comprueba tu conexión a internet. Si el problema es de la app, ten un poco de paciencia y pronto estará resuelto. Si el problema persiste durante mucho tiempo contacta con Toppin y trataremos de ayudarte lo antes posible a través del correo support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "Mi cuenta está en investigación.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si tu perfil recibe varias denuncias de diferentes usuarios de la aplicación investigaremos tu cuenta para ver cuál es el motivo o qué está sucediendo con tu perfil. Durante la investigación, buscaremos violaciones de nuestros Términos de uso o de las Normas de la comunidad.
              </p>
              <p className="text-gray-300">
                Si tu perfil no ha violado ninguna de las políticas de Toppin, se te permitirá volver a acceder como siempre. Pero si alguno de tus comportamientos ha violado nuestros términos, tomaremos las medidas necesarias, una de ellas es la posibilidad de la prohibición permanente de ser miembro de Toppin o eliminación de la cuenta.
              </p>
              <p className="text-gray-300">
                Si todavía no se ha completado la investigación de tu perfil, es solo cuestión de tiempo; intentaremos hacerlo lo antes posible.
              </p>
              <p className="text-gray-300">
                Consulta nuestras Términos de uso o Normas de la comunidad para obtener información sobre lo que no está permitido en Toppin.
              </p>
            </div>
          )
        },
        {
          question: "Problemas con la verificación de las fotos.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si tienes problemas con una pose concreta, siempre puedes salir de la página de verificación por fotos y empezar de nuevo refrescando la página de verificación de fotografía.
              </p>
              <p className="text-gray-300">
                Si necesitas más ayuda con la pose o estás teniendo algún otro problema relacionado con la verificación fotográfica, háznoslo saber poniéndote en contacto con nosotros a support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "Mi nombre o edad son incorrectos.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Una vez que has creado una cuenta los detalles del nombre y la edad no podrán actualizarse ni editarse. Si has tenido un despiste y te has equivocado poniendo tu fecha de nacimiento, o si necesitas actualizar tu nombre, lo que puedes hacer es eliminar tu cuenta y comenzar de cero otra vez.
              </p>
              <p className="text-gray-300">
                Ten en cuenta que si la eliminas lamentablemente perderás los Matches, los mensajes, y todos tus artículos comprados (Super Sweet, Power Sweets, etc.) y demás información enlazada a tu cuenta.
              </p>
            </div>
          )
        },
        {
          question: "Sigue estos pasos para eliminar tu cuenta de Toppin:",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Abre Toppin</li>
                <li>• Toca el icono de perfil</li>
                <li>• Dirígete a los Ajustes</li>
                <li>• Desliza hasta abajo y pulsa en Borrar cuenta</li>
              </ul>
              <p className="text-gray-300">
                Si tienes una suscripción a Toppin, podrás restaurarla y volver a usarla en tu nueva cuenta. Sigue las instrucciones de cómo restaurar una compra en tu nuevo perfil.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "editar-perfil",
      title: "PROBLEMAS EN EDITAR PERFIL",
      questions: [
        {
          question: "No me sale ningún perfil en la pantalla donde toppiteas",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Para conseguir más Matches potenciales en tu página de editar perfil intenta aumentar tus preferencias de búsqueda. Ajusta la configuración de editar perfil con estos pasos:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Abre Toppin</li>
                <li>• Toca el icono de perfil</li>
                <li>• Dirígete a los Ajustes</li>
                <li>• En "Ajustes de perfil" podrás cambiar el ratio de distancia o el intervalo de edades.</li>
              </ul>
            </div>
          )
        },
        {
          question: "¿Estás teniendo problemas técnicos?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Asegúrate si tu conexión a Internet está funcionando correctamente. Sí sí que lo está haciendo prueba a borrar y desinstalar la aplicación. Esto actualizará a la app a la última versión de y también actualizará tu experiencia en Toppin, por lo que deberían de funcionar las cosas con normalidad.
              </p>
            </div>
          )
        },
        {
          question: "Estoy viendo perfiles que ya he visto antes.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si en la página donde toppiteas te ha aparecido un perfil que ya habías visto antes es probable que la persona haya eliminado su anterior cuenta y se haya abierto una nueva o que haya comprado una suscripción de Power Sweet para tener mayor visibilidad y por ello puede que lo veas repetido. También puede que te vuelva a salir un perfil de nuevo si cuando deslizabas en la app tenías mala conexión.
              </p>
            </div>
          )
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
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Esta función te permitirá ver diferentes perfiles de personas basadas en tus filtros de búsqueda y seleccionar los perfiles que más te gusten deslizando la imagen a la izquierda o derecha según tu elección. En Toppin podrás elegir si quieres que te vean o no y aún así podrás seguir usando la función de filtros.
              </p>
            </div>
          )
        },
        {
          question: "¿Puedo buscar a una persona específica en Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                No se pueden buscar personas específicas dentro de la app a menos que hayas tenido un Match previamente con esa persona. Podrás buscarla en tu lista de Matches y escribir su nombre en el buscador.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo enviarle un mensaje a alguien?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Para poder chatear con otros usuarios de Toppin has de haber tenido un Match previo, es decir, que ambos hayáis dicho que gustéis mutuamente.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo denunciar un perfil?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Desde Toppin nos preocupamos por la seguridad de nuestros usuarios y por ello ponemos a tu disposición la posibilidad de denunciar un perfil si esta persona ha violado alguna de nuestras políticas o crees que está haciendo un mal uso de la aplicación.
              </p>
              <p className="text-gray-300">
                Bajo la biografía de cada persona podrás encontrar un botón de Denunciar, revisaremos uno a uno todos los perfiles denunciados con el fin de proporcionar seguridad a todos los usuarios de Toppin.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo deshacer un \"Me gusta\" o un \"No me gusta\"?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                ¿Te arrepientes de haber dado un Match o te ha pasado justo lo contrario y quieres dar 'me gusta' a un perfil que ya habías descartado? Para ello ponemos a tu disposición la función vuelve atrás.
              </p>
              <p className="text-gray-300">
                Esta función la tendrás disponible si te suscribes a nuestro plan Premium. Con ella podrás deshacer un "Me gusta" o un "No me gusta".
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "perfil-cuenta",
      title: "PERFIL Y AJUSTES DE LA CUENTA",
      questions: [
        {
          question: "Verificación por selfie, ¿Cómo funciona?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Tendrás que hacerte una selfie haciendo un gesto con la mano, el mismo que te aparezca en la pantalla de tu móvil. Te pediremos esto con el fin de verificar tu perfil y saber que eres tú quien realmente está utilizando tu cuenta.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedes editar tu perfil?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si quieres editar algún dato o foto de tu cuenta podrás hacerlo dentro de tu perfil en la app. Ahí encontrarás un icono de un lápiz, y al hacer clic ahí se abrirán todas las opciones de tu perfil disponibles para editar.
              </p>
              <p className="text-gray-300">
                ¡Puedes editarlo tantas veces como quieras!
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo puedo borrar mi cuenta?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si lamentablemente quieres eliminar tu cuenta de Toppin tendrás de acceder a Tu perfil – acceder a los Ajustes – Borrar cuenta.
              </p>
            </div>
          )
        },
        {
          question: "¿Qué es la verificación fotogénica?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                La verificación con foto te permite verificar tu perfil, demostrando así a los posibles Matches que eres tú de realmente quién aparece en las fotos. Esto se hace con el fin de proporcionar seguridad a todos los usuarios de la app.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "suscripciones",
      title: "SUSCRIPCIONES PREMIUM Y SUPREME",
      questions: [
        {
          question: "Suscripción Premium",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                En Toppin disponemos de la suscripción Premium que harán que tu experiencia en la app vaya un paso más allá. En algunos casos también ayudarán a que se agilice el proceso de encontrar Matches.
              </p>
              <p className="text-gray-300">Las funciones ampliadas con Premium son las siguientes:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Likes ilimitados.</li>
                <li>• Descubre a quién le gustas.</li>
                <li>• Acceso ilimitado a los Vip Toppins.</li>
                <li>• 5 Súper Sweet gratis cada semana.</li>
                <li>• 1 Power Sweet gratis al mes.</li>
                <li>• Filtros avanzados</li>
                <li>• Elige quién te ve y oculta tu perfil a quién tú elijas</li>
                <li>• Destination: Endulzate en tus destinos y haz tus viajes inolvidables</li>
                <li>• Vuelve atrás todas las veces que quieras</li>
                <li>• Desactiva anuncios.</li>
              </ul>
              <p className="text-gray-300 font-semibold">*Esta suscripción es de pago</p>
            </div>
          )
        },
        {
          question: "Suscripción Supreme",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Además de las las funciones de la suscripción Premium tienes también la opción de hacerte con el pack Supreme, que incluye:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Sugar Sweet: Acompaña tu Super Sweet con un mensaje dulce.</li>
                <li>• Confirmación de mensajes leídos.</li>
                <li>• Prioridad para tus "Me gusta"</li>
                <li>• Incluye las funciones Premium.</li>
              </ul>
              <p className="text-gray-300 font-semibold">*Esta suscripción es de pago</p>
            </div>
          )
        }
      ]
    },
    {
      id: "funciones",
      title: "ALGUNAS FUNCIONES TOPPIN",
      questions: [
        {
          question: "Toppin Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                ¿Aún no has provado Toppin Sweet? Juega a la ruleta y gana premios que podrás gastar dentro de Toppin y que te ayudarán a encontrar tu match ideal.
              </p>
              <p className="text-gray-300">
                La primera tirada es gratuita.
              </p>
              <p className="text-gray-300">
                Puedes comprar Toppin Sweet dentro de la app.
              </p>
            </div>
          )
        },
        {
          question: "Super Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Envia un Super Sweet al perfil que más te gusta, de este modo le llegará una notificación de tu match y no tendrás que esperar a que le aparezca tu perfil.
              </p>
              <p className="text-gray-300">
                ¡Y si le gusta tu perfil y te da un like, tendrás el macth perfecto!
              </p>
              <p className="text-gray-300">
                Puedes comprar Super Sweet dentro de la app.
              </p>
            </div>
          )
        },
        {
          question: "Power Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Aumenta tus posibilidades de hacer match consiguiendo ser el dulce más apetecible y brilla con tus matches durante 30 minutos.
              </p>
              <p className="text-gray-300">
                Puedes comprar Power Sweet dentro de la app Puedes comprar Power
              </p>
            </div>
          )
        },
        {
          question: "Destination",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Con la función Destination podrás geolocalizar tus búsquedas en diferentes zonas geográficas.
              </p>
              <p className="text-gray-300">
                ¡Una nueva forma de conocer gente en durante tus vacaciones!
              </p>
            </div>
          )
        },
        {
          question: "Vuelve atrás",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                ¿Arrepentido de un match? ¿Te quedaste con las ganas volver a ver un perfil descartado?
              </p>
              <p className="text-gray-300">
                Con esta opción podrás volver a tomar la decisión de dar o no match.
              </p>
            </div>
          )
        },
        {
          question: "Likes Ilimitados",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Con tu suscripción premium o supreme podrás dar likes ilimitados al mes mientras sigas suscrito a una de las dos opciones.
              </p>
              <p className="text-gray-300">
                Si no tienes ninguna suscripción premium o supreme podrás tener likes ilimitados comprando una de las dos suscripciones y podrás seguir toppeteando sin limites.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "resolucion",
      title: "RESOLUCIÓN DE PROBLEMAS",
      questions: [
        {
          question: "No puedo iniciar sesión en mi cuenta.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si se está dificultando tu inicio de sesión dentro de la app estos pasos de resolución de problemas suelen ayudar con los problemas de inicio de sesión:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Comprueba si tienes una buena conexión a Internet, o cambia de Wi-Fi a datos móviles o viceversa para determinar si el problema está relacionado con tu conexión</li>
                <li>• Elimina y reinstala la aplicación. Esto no solo te actualizará a la última versión de Toppin, sino que también actualizará tu experiencia en la aplicación, lo que debería hacer que las cosas vuelvan a funcionar como deben.</li>
                <li>• Si el problema persiste, queremos saberlo. Ponte en contacto con nosotros a través de nuestro correo support@toppin.es y descríbenos tu problema con el mayor detalle posible, para que podamos analizarlo y resolverlo.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Mi cuenta ha sido deshabilitada.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si tu cuenta de Toppin se ha cerrado, verás un mensaje que te avisará de ello cuando intentes iniciar sesión. En Toppin cerramos las cuentas cuando detectamos actividades que violan nuestros términos de uso. Si crees que se trata de un error puedes ponerte en contacto a través de nuestro correo suport@toppin.es con nosotros y trataremos de solucionarlo.
              </p>
            </div>
          )
        },
        {
          question: "Quiero actualizar la dirección de correo electrónico asociada a mi cuenta.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Sigue estos pasos para actualizar la dirección de correo electrónico asociada a tu cuenta de Toppin:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Abre la app de Toppin</li>
                <li>• Ve al icono de perfil</li>
                <li>• Abre la app de Toppin</li>
                <li>• Ve al icono de perfil</li>
                <li>• Abre la app de Toppin</li>
              </ul>
            </div>
          )
        },
        {
          question: "La app se bloquea.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Esto puede resultar un poco agotador en algunas ocasiones, lo sabemos. Pero, ¡te vamos a ayudar! Quizá sea por alguno de los siguientes motivos:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Primero asegúrate de si tienes una buena conexión a Internet, o cambia de Wi-Fi a datos móviles o viceversa para determinar si el problema está relacionado con tu conexión.</li>
                <li>• Si lo anterior no funciona prueba a Eliminar y Reinstalar la aplicación. Además de actualizar a la última versión de Toppin, también actualizará tu experiencia en la aplicación, esto debería conseguir que ya funcionase como corresponde.</li>
                <li>• Si se trata de un problema técnico seguramente ya estemos manos a la obra tratando de resolverlo. ¡Es cuestión de esperar!</li>
              </ul>
            </div>
          )
        },
        {
          question: "¿Cómo puedo saber cuál es la dirección de correo electrónico asociada a la cuenta?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si has olvidado o quieres saber cuál es la dirección de correo electrónico asociada a tu cuenta de Toppin podrás encontrarla dentro de Ajustes {'>'}  Notificaciones {'>'} Correo electrónico. Ahí aparecerá el correo con el que te registraste.
              </p>
            </div>
          )
        },
        {
          question: "En caso de ser desde un dispositivo iPhone",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Abriendo los Ajustes de tu iPhone</li>
                <li>• Pulsas sobre tu nombre, y después en el apartado "Suscripciones"</li>
                <li>• Seleccione la suscripción que deseas cancelar</li>
                <li>• Pulsa «Cancelar suscripción»</li>
              </ul>
            </div>
          )
        },
        {
          question: "En caso de ser desde un dispositivo Android:",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">Si la suscripción la pagaste utilizando tu cuenta de Google Play Store:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• En tu teléfono Android abre la app de Google Play Store.</li>
                <li>• Después pulsa sobre el icono de "Menú" y ve a "Suscripciones"</li>
                <li>• Elige la suscripción que deseas cancelar</li>
                <li>• Pulsa «Cancelar suscripción»</li>
              </ul>
              <p className="text-gray-300">Si tu método de pago de la suscripción fue con tarjeta de crédito:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Abre la app de Toppin para Android</li>
                <li>• Toca el icono de perfil</li>
                <li>• Selecciona «Administrar cuenta de pago»</li>
                <li>• Pulsa en «Cancelar suscripción».</li>
              </ul>
            </div>
          )
        },
        {
          question: "Tengo problemas para cancelar mi suscripción.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Dependiendo de la plataforma los pasos variarán, por lo que tendrás que asegurarte de seguir los pasos correspondientes.
              </p>
              <p className="text-gray-300">
                Entra en tu cuenta de App Store o de Play Store – Perfil – En el apartado "Suscripciones" podrás gestionar las suscripciones que tengas. Si tienes una suscripción en Toppin te aparecerá un botón que pone "Cancelar suscripción".
              </p>
              <p className="text-gray-300">
                A partir de ahí no se debería de volver a cobrar nada, aunque podrás seguir disfrutando de las ventajas de tu suscripción hasta final de ciclo.
              </p>
            </div>
          )
        },
        {
          question: "Tengo cargos duplicados o incorrectos.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300 font-semibold">IOS</p>
              <p className="text-gray-300">
                Si tu teléfono es un iPhone, puedes ponerte en contacto con el soporte técnico de Apple e informarles de lo sucedido.
              </p>
              <p className="text-gray-300">
                Las transacciones las gestiona directamente Apple, incluyéndose los reembolsos.
              </p>
              <p className="text-gray-300 font-semibold">Android</p>
              <p className="text-gray-300">
                ¿El número de tu pedido empieza por «GPA»?
              </p>
              <p className="text-gray-300">
                Entonces fue a través de Google Play desde donde se procesó la compra.
              </p>
              <p className="text-gray-300">
                Te recomendamos que te pongas en contacto con el soporte técnico de Google Play para informarles de este problema.
              </p>
            </div>
          )
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
    },
    {
      id: "metodo-pago-no-funciona",
      title: "EL MÉTODO DE PAGO QUE ESTOY INTENTANDO UTILIZAR NO FUNCIONA",
      questions: [
        {
          question: "Estos son los problemas más habituales con los métodos de pago",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-300">
                <li><strong>Errores tipográficos:</strong> Ten en cuenta que todas las letras, números y cualquier dígito que utilices debe ser idéntico a los de tu tarjeta de crédito/débito.</li>
                <li><strong>Uso de tarjetas regalo, tarjetas de prepago y ciertas tarjetas de débito:</strong> Si adquieres una suscripción, puede que las tarjetas regalo, las tarjetas de prepago y ciertas tarjetas de débito no acepten los pagos recurrentes.</li>
                <li><strong>Si tienes problemas con la dirección de facturación:</strong> ¿Has cambiado de casa recientemente? ¿Tienes que actualizar la información de facturación? Comprueba que los datos introducidos respecto a la dirección de facturación sean los correctos.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Ver historial de pagos.",
          answer: (
            <p className="text-gray-300">
              Si quieres ver tu historial de pagos podrás hacerlo en tu cuenta de iOS o de Android dentro de tu perfil de cualquiera de estas dos plataformas. Según cual hayas utilizado para pagar tus compras lo podrás localizar en una o en otra.
            </p>
          )
        },
        {
          question: "Si has realizado una compra usando tu ID de Apple, podrás encontrar tu historial de pagos siguiendo estos pasos:",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Abre iTunes en tu ordenador</li>
                <li>• Inicia sesión con tu ID de Apple clica en tu nombre, en la esquina superior derecha de la ventana de iTunes</li>
                <li>• Selecciona Detalles de la cuenta en el menú que se despliega</li>
                <li>• Desliza hasta abajo hasta que llegues a Historial de compras {'>'} Ver todo</li>
                <li>• Pulsa en la flecha que aparece a la izquierda de la fecha de compra y podrás ver los detalles de una compra.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Si la compra la has efectuado desde una cuenta de Google Play, podrás ver tu historial de pagos siguiendo estos pasos:",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Entra en la web de pay.google.com e inicia sesión usando tu cuenta de Google Play</li>
                <li>• Encuentra Otras actividades de compra</li>
                <li>• Selecciona Ver compras</li>
                <li>• Elige un pedido concreto y podrás ver su recibo</li>
              </ul>
            </div>
          )
        },
        {
          question: "Tengo una suscripción a Toppin y no he recibido mi PowerSweet mensual.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si hace poco que has renovado tu suscripción a Toppin, no afectará a tu periodo de espera para recibir el siguiente PowerSweet. El periodo de espera de 30 días se basa en la última vez que usaste tu PowerSweet mensual gratuito, no en la renovación o restauración de una suscripción.
              </p>
              <p className="text-gray-300">
                Cuando uses tu PowerSweet gratuito, tendrás que esperar 30 días para usar tu siguiente PowerSweet gratuito, a menos que decidas comprar un lote de PowerSweet adicionales.
              </p>
            </div>
          )
        },
        {
          question: "He usado un SuperSweet pero no he conseguido ningún \"Match\" mutuo.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Los SuperSweet están ahí justo para eso, para dar ese impulso que todo perfil necesita. Aparecerás a las personas de tu área mucho más rápido. ¡Aumentarás las posibilidades de encontrar esa conexión que tanto esperas!
              </p>
              <p className="text-gray-300">
                La cantidad de veces que aparecerá tu perfil aumentará en hasta 10 veces más con un SuperSweet.
              </p>
              <p className="text-gray-300">
                Aunque el Superweet como tal no puede garantizar un Match, son muy muy eficaces a la hora de ayudarte a tenerlo. Incluso después de que se haya terminado Sabrás que has conseguido un Match gracias al SuperSweet porque aparecerá una Estrella amarilla indicándolo.
              </p>
            </div>
          )
        },
        {
          question: "Los Super Sweets, PowerSweet, confirmaciones de lectura etc… ¿Desaparecerán si me creo una cuenta nueva?",
          answer: (
            <p className="text-gray-300">
              Lamentablemente las compras de artículos así como suscripciones no se pueden transferir de una cuenta a otra. Si eliminas una cuenta en la que tenías artículos comprados y te creas una nueva, se perderán.
            </p>
          )
        },
        {
          question: "He recibido una notificación de que alguien me envió un Super Sweet pero no lo veo en la app.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si recibiste una notificación acerca de un Super Sweet, abre Toppin y entra en mensajes, en el apartado de nuevos matches, para descubrir quién es la persona que te dio ese Super Sweet o un match. Puede que su perfil no te aparezca el primero, pero al final aparecerá con un ícono de estrella amarilla.
              </p>
              <p className="text-gray-300">
                Si te suscribes a Toppin Premium o Toppin Supreme, podrás descubrir quién te ha dado ese Super Sweet.
              </p>
              <p className="text-gray-300">
                Ten en cuenta que a veces, puede enviarse por error un Super Sweet (a cualquiera puede sucederle), si la persona que lo ha enviado utiliza la función vuelta atrás podrá deshacerlo. Por lo tanto este podría ser uno de los motivos por el cual no veas el Super Sweet del cual has recibido la notificación.
              </p>
            </div>
          )
        },
        {
          question: "No puedo cambiar mi ubicación con Destination.",
          answer: (
            <p className="text-gray-300">
              Si estás intentando cambiar tu ubicación y no puedes, intenta comprobar la conexión de tu teléfono móvil a Internet. Si no es este el problema inténtalo de nuevo en un rato. Si el problema persiste ponte en contacto con nosotros a través del correo support@toppin.es.
            </p>
          )
        },
        {
          question: "No puedo actualizar mi perfil.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                ¿Estás cambiando información o datos de tu perfil como fotos, canciones o biografía y no se guardan? Revisa si puede ser problema de tu conexión a internet y si no es el caso borra y reinstala Toppin.
              </p>
              <p className="text-gray-300">
                Esto también hará que se actualice a la última versión de la aplicación. Por lo que debería volver a funcionar como siempre.
              </p>
              <p className="text-gray-300">
                Si sigue sin funcionar ponte en contacto con nosotros e infórmanos de lo sucedido. Detállanos tu problema para que podamos encargarnos de tu caso cuanto antes al correo support@toppin.es.
              </p>
            </div>
          )
        },
        {
          question: "No puedo subir fotos a mi perfil.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si estás intentando subir una foto desde tu teléfono móvil, asegúrate de haber dado acceso a Toppin a las fotos de tu dispositivo. Si aún no lo has hecho puedes habilitar el acceso desde los ajustes de tu móvil.
              </p>
              <p className="text-gray-300">
                Prueba a intentarlo más tarde si ves que el problema sigue.
              </p>
            </div>
          )
        },
        {
          question: "¿Por qué se ha eliminado mi foto de Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Hay ocasiones en las que eliminamos contenido de Toppin para que la experiencia sea lo más agradable posible para todos. Si ves que una foto de tu perfil se ha eliminado, significará que se ha detectado una violación de nuestros Términos de uso. Pedimos a todos los usuarios que sean respetuosos. Por favor, revisa nuestras Normas de la comunidad así podrás tenerla en cuenta cada vez que vayas a subir contenido a tu perfil.
              </p>
              <p className="text-gray-300">
                ¡Gracias a ti, Toppin es un lugar más seguro!
              </p>
            </div>
          )
        },
        {
          question: "La información de mi trabajo y/o centro de estudios no se actualiza.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">Desde la app puedes editar y actualizar directamente la información relacionada con tu trabajo y centro de estudios.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Toca el icono del perfil en la esquina superior derecha de la pantalla principal</li>
                <li>• Selecciona Editar información</li>
                <li>• Desplázate hasta las secciones Trabajo actual o Centro de estudios</li>
              </ul>
            </div>
          )
        },
        {
          question: "No recibo ninguna notificación push.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si has dejado de recibir nuestras notificaciones push es probable que sea un problema temporal.
              </p>
              <p className="text-gray-300">
                Por si acaso te recomendamos que verifiques que tienes las notificaciones correctamente habilitadas dentro de los Ajustes de tu dispositivo – Notificaciones.
              </p>
            </div>
          )
        },
        {
          question: "¿Cómo habilitar las notificaciones push en tu dispositivo?",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li><strong>En dispositivos iOS:</strong> Abre la app de Ajustes iOS, selecciona Notificaciones y luego Toppin.</li>
                <li><strong>En dispositivos Android:</strong> Dirígete a los ajustes del dispositivo, selecciona Notificaciones, luego Notificaciones de aplicaciones y Toppin</li>
              </ul>
            </div>
          )
        },
        {
          question: "Habilitar las notificaciones en Toppin",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Abre la app de Toppin</li>
                <li>• Toca el icono de perfil</li>
                <li>• Selecciona los Ajustes</li>
                <li>• Desplázate hasta Notificaciones, ahí podrás habilitarlas en caso de no tenerlas.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Los perfiles que veo están muy lejos.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si sólo algunos de tus Matches potenciales están lejos, esto podría estar sucediendo por varias razones:
              </p>
              <div className="space-y-4">
                <p className="text-gray-300">
                  <strong>Destination:</strong> Puede que haya personas que tengan esta acción activada para encontrar Matches en tu ubicación. Si visitas recientemente una ciudad puede que sigas apareciendo en la ubicación de donde has estado hasta 24 horas después de haberte marchado. Solo los suscriptores de Toppin pueden editar su ubicación.
                </p>
                <p className="text-gray-300">
                  <strong>Ajustes de Destination:</strong> Puedes comprobar y editar tus preferencias de distancia. Y así decidir a qué radio de kilómetros quieres o no encontrar personas. Simplemente tienes que tocar el icono del perfil {'>'} Ajustes {'>'} Baja hasta Destination y ahí podrás ver y cambiar la distancia máxima que tienes configurada.
                </p>
              </div>
              <p className="text-gray-300">
                Si piensas que puede ser un problema más bien técnico puedes probar a seguir estos pasos para tratar de solucionarlo:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Sal e inicia sesión: toca el icono de perfil {'>'} Ajustes {'>'} desliza hacia abajo y toca en el botón "Cerrar sesión".</li>
                <li>• Borra Toppin y vuelve a instalarla.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Los perfiles no concuerdan con mis preferencias de género o edad.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Si esto ha empezado de repente, comprueba que hayas configurado a tu gusto las preferencias de búsqueda.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Abre Toppin</li>
                <li>• Toca el icono de perfil</li>
                <li>• Ve a tus Ajustes</li>
                <li>• Desplázate hasta Ajustes de perfil. Si todo está configurado correctamente, cierra tu sesión de Toppin y vuelve a iniciarla.</li>
              </ul>
            </div>
          )
        },
        {
          question: "He denegado el acceso a Toppin a mi ubicación",
          answer: (
            <p className="text-gray-300">
              Al menos mientras estés utilizando Toppin será necesario que nos des acceso a la ubicación de tu teléfono móvil.
            </p>
          )
        },
        {
          question: "Ubicación en iOS",
          answer: (
            <p className="text-gray-300">
              Ve a tus ajustes de iOS {'>'} Toppin {'>'} Ubicación
            </p>
          )
        },
        {
          question: "Ubicación en Android",
          answer: (
            <p className="text-gray-300">
              Ve a los ajustes de tu teléfono {'>'} Apps {'>'} Toppin {'>'} Permisos {'>'} Ubicación
            </p>
          )
        },
        {
          question: "Mis Matches se quedan cargando todo el rato.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Prueba a seguir estos pasos si ves que tus Matches no cargan o tardan demasiado tiempo en cargarse:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Revisa si tienes buena conexión a Internet, puedes probar a cambiar de datos móviles a Wi-Fi, y al revés, quizá el problema esté relacionado con tu conexión.</li>
                <li>• Elimina e instala la aplicación. Esto no solo te actualizará a la última versión de Toppin, sino que también actualizará tu experiencia en la aplicación, lo que debería hacer que las cosas vuelvan a funcionar como deberían.</li>
              </ul>
              <p className="text-gray-300">
                Con esto debería estar resuelto el problema. En caso de no ser así entonces es muy probable que se nos haya caído el sistema y ya estemos trabajando por solucionarlo. Agradeceremos tu espera.
              </p>
            </div>
          )
        },
        {
          question: "Mis mensajes no se están enviando.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Sabemos que pueden ser desesperantes los problemas relacionados con el chat. Pero suelen durar poco tiempo. En cuanto nos damos cuenta los solucionamos. Mientras tanto, hay algunos pasos que puedes seguir para intentar resolverlo:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Revisa la conexión a internet y cambia de Wi-Fi a datos móviles o viceversa, quizá el problema esté relacionado con la conexión.</li>
                <li>• Elimina e instala la aplicación. Se te actualizará Toppin a la última versión, y también actualizará tu experiencia en la app, después de esto debería volver a funcionar sin problemas.</li>
                <li>• Una vez estés dentro de la app de nuevo, vuelve a enviar el mensaje.</li>
                <li>○ En iOS: Toca el signo de exclamación rojo al lado del mensaje que ha dado fallo.</li>
                <li>○ En Android: Toca el mensaje para intentar enviarlo de nuevo.</li>
              </ul>
              <p className="text-gray-300">
                Si deseas contactarnos escríbenos a support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "He deshecho un Match por error.",
          answer: (
            <p className="text-gray-300">
              Puede pasar que sin querer le des a deshacer Match sin darte cuenta. Pero tanto si tú, como tu Match deshace lo deshace será una acción permanente que lamentablemente no se puede rehacer y ya no aparecerá en la lista de ninguno de los dos perfiles
            </p>
          )
        },
        {
          question: "Las fotos de mis Matches no se cargan.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Puedes probar a cerrar y abrir sesión si ves que las fotos de tus Matches no se cargan a pesar de que ya llevan un buen rato.
              </p>
              <p className="text-gray-300">
                Para cerrar sesión: ve dentro de tu perfil y si deslizas hacia abajo verás el botón de "Cerrar sesión".
              </p>
              <p className="text-gray-300">
                Ahora sólo tendrás que volver a iniciar sesión y comprobar si ahora cargan sus fotos.
              </p>
            </div>
          )
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqSections
              .filter(section => section.questions.some(q => q.answer !== null))
              .map((section) => (
              <div key={section.id} className="space-y-2">
                <h2 className="text-toppin-blue font-bold text-base mb-3 text-center">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.questions
                    .filter(item => item.answer !== null)
                    .map((item, index) => (
                    <AccordionItem 
                      key={`${section.id}-${index}`} 
                      value={`${section.id}-${index}`}
                      className="border-0 bg-gray-100/10 rounded-lg px-3 border border-gray-400/20"
                    >
                      <AccordionTrigger className="text-left text-gray-300 hover:text-white text-xs py-3 [&>svg]:text-toppin-blue [&>svg]:h-3 [&>svg]:w-3">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 text-xs pb-3">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
