import React from 'react';
import { Mail, Calendar, FileText, MessageSquare, Globe, PenTool, BarChart2, BookOpen } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Mail size={20} />,
    title: 'Gmail',
    description: 'Manage emails & drafts'
  },
  {
    id: 2,
    icon: <Calendar size={20} />,
    title: 'Calendar',
    description: 'Schedule & organize'
  },
  {
    id: 3,
    icon: <FileText size={20} />,
    title: 'Notion',
    description: 'Create & edit docs'
  },
  {
    id: 4,
    icon: <MessageSquare size={20} />,
    title: 'Slack',
    description: 'Chat & collaborate'
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {features.map((feature) => (
        <button
          key={feature.id}
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600"
        >
          <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
            {feature.icon}
          </div>
          <span className="font-medium">{feature.title}</span>
          <span className="text-xs text-gray-500">{feature.description}</span>
        </button>
      ))}
    </div>
  );
};

export default FeatureList;