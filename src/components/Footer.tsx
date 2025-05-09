
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="border-t-0 py-16">
      {/* Custom separator that connects with the image */}
      <div className="w-full relative -mt-1">
        <Separator className="bg-toppin-blue h-[1.5px]" />
      </div>
      
      <div className="container px-4 md:px-6 pt-8">
        <div className="flex justify-start mb-10">
          <div className="mb-6">
            <Logo />
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
