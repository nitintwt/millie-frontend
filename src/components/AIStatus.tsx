import React from 'react';

const AIStatus: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></div>
      <span className="text-xs text-gray-400">Millie is ready</span>
    </div>
  );
};

export default AIStatus;