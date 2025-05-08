
import React from 'react';
import { X, Heart, Star, Zap } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      <button className="w-16 h-16 rounded-full bg-toppin-purple hover:bg-opacity-80 transition-all flex items-center justify-center text-white shadow-lg">
        <X size={24} strokeWidth={2.5} />
      </button>
      <button className="w-16 h-16 rounded-full bg-toppin-yellow hover:bg-opacity-80 transition-all flex items-center justify-center text-white shadow-lg">
        <Star size={24} strokeWidth={2.5} fill="white" />
      </button>
      <button className="w-20 h-20 rounded-full bg-toppin-pink hover:bg-opacity-80 transition-all flex items-center justify-center text-white shadow-lg">
        <Heart size={28} strokeWidth={2.5} fill="white" />
      </button>
      <button className="w-16 h-16 rounded-full bg-toppin-blue hover:bg-opacity-80 transition-all flex items-center justify-center text-white shadow-lg">
        <Zap size={24} strokeWidth={2.5} fill="white" />
      </button>
    </div>
  );
};

export default ActionButtons;
