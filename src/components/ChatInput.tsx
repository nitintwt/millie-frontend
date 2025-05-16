import React, { useState, useRef } from 'react';
import { SendHorizontal, FileUp } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { addMessage, setThinking } = useChat();
  const [cookies] = useCookies()
  const [selectedFile, setSelectedFile] = useState<File|null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        addMessage(input.trim(), 'user');
        setInput('');
        setThinking(true);
        const response = await axios.post(`/api/v1/agent/chat` , {input:input , userId:cookies?.userData?.userId})
        console.log(response.data.message)
        setThinking(false);
        addMessage(response.data.message, 'ai');
      } catch (error) {
        setThinking(false)
        addMessage("Something went wrong.Try again after some time.", "ai")
      }
  } 
  if(selectedFile){
    try {
      const s3PutUrl = await axios.get(`/api/v1/pdf/putObjectUrl?fileName=${selectedFile.name}&&contentType=${selectedFile.type}`)
      console.log(s3PutUrl)
      await axios.put(s3PutUrl.data.message , selectedFile , {
        headers:{
          "Content-Type":selectedFile.type
        }    
      })
      console.log("uploaded")
      setSelectedFile(null)
    } catch (error) {
      setSelectedFile(null)
      console.log("Something went wrong while uploading the pdf" , error)
    }
  }
}

  const handleFileSelect = (e:any) => {
    const file = e.target.files?.[0];

    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      addMessage(`Uploaded PDF: ${file.name}`, 'user');
    } else if (file) {
      alert('Please upload a PDF file');
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-4 bg-transparent">
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-lg flex items-center">
          <button 
            type="button"
            onClick={handleFileButtonClick}
            className="ml-4 p-2 text-gray-400 hover:text-purple-600 transition-colors"
            aria-label="Upload PDF"
          >
            <FileUp size={20} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf"
            className="hidden"
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={selectedFile ? `Chat about ${selectedFile.name}` : "Let Millie do it for you"}
            className="w-full pl-2 pr-12 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-purple-200 outline-none text-gray-800 placeholder-gray-400"
          />
          <button 
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            aria-label="Send message"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
        {selectedFile && (
          <div className="mt-2 text-sm text-purple-600">
            PDF loaded: {selectedFile.name}
          </div>
        )}
      </form>
    </div>
  );
};

export default ChatInput