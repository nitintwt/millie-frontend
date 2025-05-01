import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import axios from 'axios';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { addMessage, setThinking } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input.trim(), 'user');
      setInput('');
      setThinking(true);
      const response = await axios.post("/api/v1/agent/chat" , {input:input , userId:"123"})
      console.log(response.data.message)
      setThinking(false);
      addMessage(response.data.message, 'ai');
  };}

  return (
    <div className="p-4 bg-transparent">
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Let Millie do it for you"
            className="w-full pl-5 pr-12 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-purple-200 outline-none text-gray-800 placeholder-gray-400"
          />
          <button 
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            aria-label="Send message"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput