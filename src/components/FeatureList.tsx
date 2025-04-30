import React from 'react';
import FeatureCard from './FeatureCard';
import { Mail, FileText, MessageSquare, Calendar, Briefcase, PenTool, Globe, BookOpen } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Mail size={24} />,
    title: 'Summarise my emails from today'
  },
  {
    id: 2,
    icon: <FileText size={24} />,
    title: 'Draft a project proposal'
  },
  {
    id: 3,
    icon: <MessageSquare size={24} />,
    title: 'Respond to Slack messages'
  },
  {
    id: 4,
    icon: <Calendar size={24} />,
    title: 'Schedule my meetings'
  },
  {
    id: 5,
    icon: <Briefcase size={24} />,
    title: 'Prepare for interview'
  },
  {
    id: 6,
    icon: <PenTool size={24} />,
    title: 'Create content ideas'
  },
  {
    id: 7,
    icon: <Globe size={24} />,
    title: 'Research market trends'
  },
  {
    id: 8,
    icon: <BookOpen size={24} />,
    title: 'Summarize this article'
  }
];

const FeatureList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Popular actions</h2>
      <div className="overflow-x-auto w-full pb-4 -mx-4 px-4 md:overflow-visible">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-max md:min-w-0">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              icon={feature.icon} 
              title={feature.title} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;