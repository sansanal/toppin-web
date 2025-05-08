
import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <Logo />
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
        
        <div className="flex justify-center mt-16">
          <div className="relative group">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-transparent border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
            >
              <span>🇪🇸 Español</span>
              <ChevronDown size={16} />
            </Button>
            
            <div className="absolute left-0 mt-2 w-full hidden group-hover:block">
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
              >
                🇬🇧 English
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
