
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqSections.map((section) => (
              <div key={section.id} className="space-y-2">
                <h2 className="text-toppin-blue font-bold text-base mb-3 text-center">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.questions.map((item, index) => (
                    <AccordionItem 
                      key={`${section.id}-${index}`} 
                      value={`${section.id}-${index}`}
                      className="border-0 bg-gray-100/10 rounded-lg px-3 border border-gray-400/20"
                    >
                      <AccordionTrigger className="text-left text-gray-300 hover:text-white text-xs py-3 [&>svg]:text-toppin-blue [&>svg]:h-3 [&>svg]:w-3">
                        {item.question}
                      </AccordionTrigger>
                      {item.answer && (
                        <AccordionContent className="text-gray-400 text-xs pb-3">
                          {item.answer}
                        </AccordionContent>
                      )}
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
