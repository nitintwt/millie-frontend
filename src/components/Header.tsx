import { useEffect, useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookies , setCookies]= useCookies()

  useEffect(()=>{
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const createGoogleToken = async ()=>{
      try {
        const token = await axios.post(`/api/v1/auth/googleLogin?code=${code}`)
        console.log("token",token.data.data.userId)
        setCookies("userData", {userId:token.data.data.userId})
      } catch (error:any) {
        console.log("Something went wrong creating google token")
      }
    }
    if (code && !cookies?.userData?.userId) createGoogleToken()
  },[])



  return (
    <header className="text-center space-y-4">
      <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
        Millie JI
      </div>
      <h1 className="text-4xl font-bold text-gray-800">
        Hey there
      </h1>
      <p className="text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
        Got work? Let's jam!
      </p>
    </header>
  );
};

export default Header;

