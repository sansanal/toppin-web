
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Normas de la comunidad
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              TOPPIN proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") pertenecientes a EL TITULAR o a sus licenciantes a los que puedes tener acceso.
            </p>

            <p>
              El usuario asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro serás responsable de aportar información veraz y lícita. Como consecuencia de este registro, se te puede proporcionar una contraseña de la que serás responsable, comprometiéndote a hacer un uso diligente y confidencial de la misma.
            </p>

            <p>
              Te comprometes a hacer un uso adecuado de los contenidos y servicios (p.e. servicios de chat, foros de discusión o grupos de noticias) que EL TITULAR ofrece a través de la aplicación. Al utilizar nuestro servicio, te comprometes a no hacer uso del mismo para ningún propósito que sea ilegal o esté prohibido por el presente Acuerdo. Sin carácter limitativo, te comprometes a no realizar las siguientes actuaciones:
            </p>

            <ul className="space-y-3 pl-6 list-disc">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda racista, xenófoba, pornográfico-ilegal, de apología del terrorismo o atentatoria contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de TOPPIN, de sus proveedores o de terceras personas, introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
              <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
              <li>Utilizar la aplicación ni las informaciones que en él se contienen con fines comerciales, políticos, publicitarios y para cualquier uso comercial, sobre todo en el envío de correos electrónicos no solicitados.</li>
              <li>En general, cualquier otro propósito ilícito o prohibido, en especial cuando su cuenta ya hubiera sido cancelada por nosotros por cualquiera de estos motivos.</li>
            </ul>

            <p>
              EL TITULAR se reserva el derecho a retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultarán adecuados para su publicación. En cualquier caso, EL TITULAR no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
