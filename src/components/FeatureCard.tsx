import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-purple-500 flex gap-3 w-64 md:w-auto">
      <div className="text-purple-400 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;