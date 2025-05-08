
import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      <button className="w-16 h-16 rounded-full bg-toppin-purple flex items-center justify-center text-white text-2xl">
        ✕
      </button>
      <button className="w-16 h-16 rounded-full bg-toppin-yellow flex items-center justify-center text-white text-2xl">
        ★
      </button>
      <button className="w-16 h-16 rounded-full bg-toppin-pink flex items-center justify-center text-white text-2xl">
        ♥
      </button>
      <button className="w-16 h-16 rounded-full bg-toppin-blue flex items-center justify-center text-white text-2xl">
        ⚡
      </button>
    </div>
  );
};

export default ActionButtons;
