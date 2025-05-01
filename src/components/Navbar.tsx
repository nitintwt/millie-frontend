import React from 'react';
import { Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap size={24} className="text-purple-600" />
          <span className="font-bold text-gray-800">Millie</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium">
            Sign in
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;