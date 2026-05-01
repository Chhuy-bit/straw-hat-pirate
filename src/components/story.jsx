import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ChatactersInfo from "../constants/ChatactersInfo";

function Story() {
  const { id } = useParams();
  const character = ChatactersInfo.find((char) => char.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!character) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl">Character Not Found</h1>
        <Link to="/" className="mt-4 text-emerald-500 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="h-dvh bg-black text-white p-5 md:p-20 ">
      <Link to="/" className="text-gray-400 hover:text-white transition-colors mb-10 inline-block">
        ← Back to Home
      </Link>
      
      <div className="flex gap-17">
        <div className="rounded-3xl w-110 h-115 overflow-hidden border border-white/20 shadow-2xl shadow-emerald-500/20">
          <video 
            src={character.storyVideo || character.video } 
            autoPlay loop muted 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-3xl w-200 h-115 overflow-hidden border border-white/20 shadow-2xl shadow-emerald-500/20">
 
  <video 
    src={character.storyBgVideo} 
    autoPlay 
    loop 
    muted 
    className="absolute inset-0 w-full h-full object-cover object-top"
  />

 
  <div className="relative z-10 flex flex-col justify-center h-full w-full p-8 bg-gray-800/8 backdrop-blur-md">
    <h1 className="absolute  top-4 left-8 text-5xl md:text-7xl hero-heading uppercase mb-6 opacity-60 text-emerald-500">
      {character.name}
    </h1>
    
    <p className="text-xl px-5 md:text-2xl mt-16 leading-relaxed font-general text-black font-light max-w-2xl">
      {character.story}
    </p>

    
  </div>
</div>
        
      </div>
    </div>
  );
}

export default Story;