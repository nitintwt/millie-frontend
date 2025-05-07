import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeatureList from '../components/FeatureList';
import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessage';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Chat() {
    const [cookies]= useCookies()
    const navigate = useNavigate()
    useEffect(()=>{
      if(!cookies?.userData?.userId){
        navigate("/")
      }
    },[])

    useEffect(()=>{
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      const createNotionToken = async ()=>{
        try {
          const createToken = await axios.post(`${import.meta.env.VITE_RENDER_MILLIE}/api/v1/auth/notionLogin?code=${code}`, {userId:cookies.userData.userId})
          query.delete("code")
          console.log("NOTION tokens saved successfully in db")
        } catch (error:any) {
          console.log("Something went wrong creating google token")
        }
      }
      if (code && cookies?.userData?.userId) createNotionToken()
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