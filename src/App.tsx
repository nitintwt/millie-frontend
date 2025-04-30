import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import ChatInput from './components/ChatInput';

function App() {
  return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900 bg-white text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="container max-w-4xl mx-auto px-4 py-8">
            <Header username="Dev" />
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
