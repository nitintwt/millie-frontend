import React from 'react';
import AIStatus from './AIStatus';
import { Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-800 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-purple-400" />
          <span className="font-bold">Millie</span>
        </div>
        <div className="flex items-center gap-4">
          <AIStatus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;