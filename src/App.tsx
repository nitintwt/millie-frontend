import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <Header />
          <main className="my-8">
            <FeatureList />
          </main>
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default App;
