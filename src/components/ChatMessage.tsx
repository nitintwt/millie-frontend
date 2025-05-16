import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import { FileText, MessageSquare } from 'lucide-react';

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
                : message.type === 'pdf'
                ? 'bg-purple-700 text-white'
                : 'bg-purple-600 text-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {message.type === 'pdf' ? (
                <FileText size={16} className="text-purple-200" />
              ) : (
                <MessageSquare size={16} className="text-purple-200" />
              )}
              <span className="text-xs text-purple-200">
                {message.type === 'pdf' ? 'PDF Chat' : 'General Chat'}
              </span>
            </div>
            <div>{message.text}</div>
            {message.sender === 'ai' && message.type === 'pdf' && message.pdfContext?.pages && (
              <div className="mt-2 text-sm border-t border-purple-400 pt-2">
                <div className="flex items-center gap-1 text-purple-200 flex-wrap">
                  <FileText size={14} />
                  <span>Found on pages: </span>
                  {message.pdfContext.pages.map((page) => (
                    <span key={page} className="bg-purple-800 px-2 py-0.5 rounded-full text-xs">
                      {page}
                    </span>
                  ))}
                </div>
              </div>
            )}
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