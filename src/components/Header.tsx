
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <header className="w-full py-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center h-16">
          <img 
            alt="Toppin Logo" 
            className="h-16 object-contain" 
            src="/lovable-uploads/0e235d4b-f937-42ee-b3cb-0c9c3150c732.png" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
          <a href="#game" className="text-gray-300 hover:text-white transition-colors">Juego</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
          <a href="#download" className="text-gray-300 hover:text-white transition-colors">Descargar</a>
          
          {/* Language Selector */}
          <div className="relative group">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Globe size={18} />
              <span>ES</span>
              <ChevronDown size={16} />
            </Button>
            
            <div className="absolute right-0 mt-2 w-32 hidden group-hover:block z-50">
              <Button variant="outline" className="w-full flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500">
                <Globe size={18} />
                <span>EN</span>
              </Button>
            </div>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4 ml-auto">
          {/* Mobile Language Selector */}
          <div className="relative group">
            <Button variant="ghost" className="flex items-center gap-1 text-gray-300 hover:text-white p-2" size="sm">
              <Globe size={18} />
              <ChevronDown size={14} />
            </Button>
            
            <div className="absolute right-0 mt-2 w-24 hidden group-hover:block z-50">
              <Button variant="outline" className="w-full flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500" size="sm">
                <Globe size={18} />
                <span>EN</span>
              </Button>
            </div>
          </div>
          
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 z-50">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
              <a href="#game" className="text-gray-300 hover:text-white transition-colors">Juego</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">Descargar</a>
            </nav>
          </div>}
      </div>
    </header>;
};

export default Header;
