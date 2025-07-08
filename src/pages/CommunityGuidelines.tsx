
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
              En Toppin, creemos en crear un espacio seguro y acogedor para todos nuestros usuarios. 
              Nuestras normas de la comunidad están diseñadas para mantener un ambiente positivo 
              donde todos puedan conectar de manera auténtica y respetuosa.
            </p>

            <p>
              Esperamos que todos los miembros de nuestra comunidad sigan estas directrices para 
              garantizar una experiencia agradable para todos.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Comportamiento Respetuoso</h2>
            <ul className="space-y-2 pl-6">
              <li>• Trata a otros usuarios con respeto y cortesía</li>
              <li>• No toleramos el acoso, intimidación o discriminación</li>
              <li>• Respeta los límites y decisiones de otros usuarios</li>
              <li>• Mantén conversaciones apropiadas y constructivas</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Contenido Apropiado</h2>
            <ul className="space-y-2 pl-6">
              <li>• Comparte fotos auténticas y apropiadas</li>
              <li>• No publiques contenido ofensivo, violento o inapropiado</li>
              <li>• Respeta los derechos de autor y la privacidad</li>
              <li>• Mantén tu perfil actualizado y veraz</li>
            </ul>

            <p className="mt-8">
              El incumplimiento de estas normas puede resultar en la suspensión o eliminación 
              de tu cuenta. Nuestro equipo de moderación revisa los reportes y toma las medidas 
              apropiadas para mantener la seguridad de la comunidad.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
