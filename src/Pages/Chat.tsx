import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeatureList from '../components/FeatureList';
import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessage';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Chat() {
    const [cookies]= useCookies()
    const navigate = useNavigate()
    useEffect(()=>{
      if(!cookies?.userData?.userId){
        navigate("/")
      }
    },[])
  return (
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
  );
}

export default Chat;