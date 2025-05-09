
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <img 
            src="public/lovable-uploads/75748513-d0d1-497c-90ad-fa97070f24a4.png" 
            alt="Toppin Logo" 
            className="w-[200px] object-contain"
          />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Descargas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">iOS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Android</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Normas de la comunidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Avisos de seguridad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Textos legales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Condiciones del servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
