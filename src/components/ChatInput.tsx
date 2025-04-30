import React from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatInput: React.FC = () => {
  return (
    <div className="sticky bottom-0 bg-gray-900 dark:bg-gray-900 bg-white border-t border-gray-200 dark:border-gray-800 py-4 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask away"
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 text-gray-900 dark:text-white rounded-2xl py-4 px-5 pr-12 outline-none transition-all duration-300"
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 p-2 rounded-full text-white"
            aria-label="Send message"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;