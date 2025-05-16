import React, { createContext, useContext, useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'normal' | 'pdf';
  pdfContext?: {
    pages?: number[];
    fileName?: string;
  };
}

interface ChatContextType {
  messages: Message[];
  thinking: boolean;
  addMessage: (text: string, sender: 'user' | 'ai') => void;
  setThinking: (value: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [thinking, setThinking] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'ai', type: 'normal' | 'pdf' = 'normal', pdfContext?: { pages?: number[]; fileName?: string; }) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
      pdfContext
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, thinking, addMessage, setThinking }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}