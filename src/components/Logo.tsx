
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="url(#paint0_linear)" />
          <path d="M29.6419 13.1419C28.3226 11.8226 26.2323 11.8226 24.9129 13.1419L20 18.0548L15.0871 13.1419C13.7677 11.8226 11.6774 11.8226 10.3581 13.1419C9.03871 14.4613 9.03871 16.5516 10.3581 17.871L16.6355 24.1484C18.2903 25.8032 20.7903 26.2581 22.9355 25.4194C25.0806 24.5806 26.6129 22.6129 26.6129 20.3226V20L29.6419 16.971C30.9613 15.6516 30.9613 13.5613 29.6419 13.1419Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear" x1="4.89111" y1="5.71555" x2="38.2489" y2="39.0733" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E94587" />
              <stop offset="1" stopColor="#8033C8" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-xl md:text-2xl font-bold ml-2 text-white inline-block">toppin</span>
      </div>
    </div>
  );
};

export default Logo;
