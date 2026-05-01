import React from "react";
import { useNavigate } from "react-router-dom";

function CharatersCard({ character, containerClass }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/story/${character.id}`)} 
      className={`relative cursor-pointer group overflow-hidden ${containerClass} border border-white rounded-2xl border-w`}
    >
      <video
        src={character.video}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
      
      <div className="relative z-10 flex size-full flex-col justify-end p-5">
        <h1 className="uppercase hero-heading text-4xl md:text-5xl font-black text-emerald-700 opacity-80 group-hover:opacity-100 transition-opacity">
          {character.name}
        </h1>
      </div>
    </div>
  );
}

export default CharatersCard;