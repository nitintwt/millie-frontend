import { useEffect, useState} from 'react'
import axios from 'axios'

const Header = () => {

  useEffect(()=>{
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const createToken = async ()=>{
      try {
        const createGoogleTokens = await axios.post(`/api/v1/google/googleLogin?code=${code}`)
        query.delete("code")
        console.log("tokens saved successfully in db")
      } catch (error:any) {
        console.log("Something went wrong fetching user data")
      }
    }
    if (code) createToken()
  },[])


  return (
    <header className="text-center space-y-4">
      <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
        Millie Alpha
      </div>
      <h1 className="text-4xl font-bold text-gray-800">
        Hey there
      </h1>
      <p className="text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
        Got work? Let's jam!
      </p>
      <a
        href={`/api/v1/google/googleOAuth`}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
        Connect Gmail
      </a>
    </header>
  );
};

export default Header;

