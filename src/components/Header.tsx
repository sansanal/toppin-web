
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center h-20">
          <Link to={currentLanguage === 'en' ? '/en' : '/'} className="flex items-center h-20">
            <img 
              alt="Toppin Logo" 
              className="h-20 object-contain hover:opacity-80 transition-opacity cursor-pointer" 
              src="/lovable-uploads/0e235d4b-f937-42ee-b3cb-0c9c3150c732.png" 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            {t('nav.features')}
          </a>
          <a href="#game" className="text-gray-300 hover:text-white transition-colors">
            {t('nav.game')}
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            {t('nav.testimonials')}
          </a>
          <a href="#download" className="text-gray-300 hover:text-white transition-colors">
            {t('nav.download')}
          </a>
          
          {/* Language Selector */}
          <LanguageSelector />
        </nav>
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4 ml-auto">
          {/* Mobile Language Selector */}
          <LanguageSelector />
          
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 z-50">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.features')}
              </a>
              <a href="#game" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.game')}
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.testimonials')}
              </a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.download')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
