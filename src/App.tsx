import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing';
import Chat from './Pages/Chat';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;