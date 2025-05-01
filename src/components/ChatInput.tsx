import React from 'react';
import { SendHorizontal, Zap } from 'lucide-react';

const ChatInput: React.FC = () => {
  return (
    <div className="sticky bottom-8 mx-auto max-w-2xl px-4">
      <div className="relative bg-white rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Let Millie do it for you"
          className="w-full pl-5 pr-12 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-purple-200 outline-none text-gray-800 placeholder-gray-400"
        />
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
          aria-label="Send message"
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;