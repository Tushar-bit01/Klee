import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
    return (
      <div className="font-[font1] flex items-center justify-center gap-4 font-semibold mb-4">
        <Link
          to="/songs"
          className="
            lg:text-[6.5vw] text-[10vw]
            lg:border-[5px] border-[3px] border-white
            uppercase
            rounded-full
            lg:px-8 px-2
            lg:leading-[5vw] leading-[10vw]
            text-white
            bg-transparent
  
            transition-all duration-300 ease-out
            hover:bg-gradient-to-br
            hover:from-[#a6e7ff]
            hover:to-[#6fb8ff]
            hover:text-black
            hover:scale-105
            hover:border-[#a6e7ff]
            hover:shadow-[0_0_30px_rgba(140,210,255,0.45)]
          "
        >
          Songs
        </Link>
  
        <Link
          to="/characters"
          className="
            lg:text-[6.5vw] text-[10vw]
            lg:border-[5px] border-[3px] border-white
            uppercase
            rounded-full
            lg:px-8 px-2
            lg:leading-[5vw] leading-[10vw]
            text-white
            bg-transparent
  
            transition-all duration-300 ease-out
            hover:bg-gradient-to-br
            hover:from-[#a6e7ff]
            hover:to-[#6fb8ff] 
            hover:text-black
            hover:scale-105
            hover:border-[#a6e7ff]
            hover:shadow-[0_0_30px_rgba(140,210,255,0.45)]
          "
        >
          Characters
        </Link>
      </div>
    );
  };
  

export default HomeBottomText