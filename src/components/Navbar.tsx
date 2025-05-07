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
        <div className="flex items-center gap-">
          <a className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium" href="https://api.notion.com/v1/oauth/authorize?client_id=1e6d872b-594c-8045-bcfd-003716dbbc79&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fmillie-roan.vercel.app%2Fchat">
            Connect to notion
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;