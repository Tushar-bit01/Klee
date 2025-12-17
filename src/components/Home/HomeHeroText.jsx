import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
    return (
      <div className="font-[font1] text-center font-bold text-white">
  
        <div className="text-[10vw] uppercase leading-[8.2vw] flex justify-center">
          Ma
        </div>
  
        <div className="text-[10vw] uppercase leading-[8.2vw] flex justify-center items-center gap-[0.6vw]">
          Mei
  
          <div className="
            h-[7.2vw] 
            w-[16vw] 
            rounded-full 
            overflow-hidden 
            border border-white/20
            shadow-[0_0_25px_rgba(255,255,255,0.15)]
          ">
            <Video />
          </div>
  
          lleure
        </div>
  
        <div className="text-[10vw] uppercase leading-[8.2vw] flex justify-center">
          Ennemie
        </div>
  
      </div>
    );
  };
  

export default HomeHeroText;
