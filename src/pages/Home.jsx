import React from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";
import mute from "../assets/Home/mute.png";
import volume from "../assets/Home/volume.png";
import { useState } from "react";

const Home = () => {
  const [vol,setVol]=useState(false);
  return (
    <div className=" text-white" >
      <div className="h-screen w-screen fixed overflow-hidden">
        <Video sound={vol}/>
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <HomeHeroText />
        <HomeBottomText />
      </div>
      <div className="absolute bottom-[0.4vw] left-[0.4vw] cursor-pointer" onClick={()=>{
        setVol(sound=>(!sound));
      }}>
        {vol? <img src={volume} className="h-[5vw] w-[5vw] text-white"></img>:<img src={mute} className="h-[5vw] w-[5vw] text-white"></img>}  
      </div>
    </div>
  );
};

export default Home;
