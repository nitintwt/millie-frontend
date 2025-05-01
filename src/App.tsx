import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessage';
import { ChatProvider } from './context/ChatContext'

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen gradient-bg flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="container max-w-3xl mx-auto px-4 py-8 flex flex-col flex-1">
            <Header />
            <main className="flex-1 flex flex-col min-h-0">
              <FeatureList />
              <ChatMessages />
            </main>
          </div>
          <ChatInput />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
