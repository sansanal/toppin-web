
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
