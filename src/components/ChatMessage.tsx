import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';

const ChatMessages: React.FC = () => {
  const { messages, thinking } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  return (
    <div className="flex-1 overflow-y-auto mt-8 space-y-4 min-h-0">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-2 ${
              message.sender === 'user'
                ? 'bg-white text-gray-800'
                : 'bg-purple-600 text-white'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      {thinking && (
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-purple-600 text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;