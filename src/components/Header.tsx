
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
          <a href="#game" className="text-gray-300 hover:text-white transition-colors">Juego</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
          <a href="#download" className="text-gray-300 hover:text-white transition-colors">Descargar</a>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 z-50">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
              <a href="#game" className="text-gray-300 hover:text-white transition-colors">Juego</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">Descargar</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
