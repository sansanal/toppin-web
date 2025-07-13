
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { changeLanguage, currentLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={currentLanguage === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('es')}
        className="text-sm"
      >
        ES
      </Button>
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="text-sm"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
