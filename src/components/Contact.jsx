import React from "react";
import Button from "./Button";
import AnimationTitle from "./AnimationTitle";

function Contact() {
  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center px-4">
      <div className="relative w-full max-w-6xl">
        
        <img
          src="https://wallpapercave.com/wp/wp2118129.jpg"
          className="w-full h-100 md:h-125 lg:h-150 object-cover rounded-xl"
          alt="background"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          <AnimationTitle
            title="AS LONG AS PEOPLE CONTINUE <br /> TO SEEK THE ANSWER <br /> TO FREEDOM"
            containerClass="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white"
          />

          <Button
            containerClass="mt-6 bg-gray-400 text-white border border-white hover:bg-gray-600 transition-all duration-300 px-6 py-2"
            title="Contact Us"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;