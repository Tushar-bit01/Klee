import React from "react";
import Next from "../../assets/Songs/next.png";
import Play from "../../assets/Songs/play.png";
import Pause from "../../assets/Songs/pause.png";
import Heart from "../../assets/Songs/heart.mp4";
import { useState,useRef } from "react";

const SongsCard = ({ image1, image2,song1 }) => {
    const audioRef = useRef(null);
    let [song,setSong]=useState(false);
    const togglePlay = () => {
        if (!song) {
          audioRef.current.play();
          console.log(audioRef.current.src);
        } else {
          audioRef.current.pause();
          console.log(audioRef.current.src);
        }
        setSong(!song);
      };
  return (
    <>
      <div className="w-1/2  h-full rounded-[9vh] overflow-hidden relative group flex flex-col gap-0.5 bg-white border-2 border-black ">
        <div className="h-[80%] w-full p-5  overflow-hidden relative">
          <img src={image1} className="h-full w-full rounded-[9vh] object-cover"></img>
        </div>
        <div className=" h-[18%] w-full px-10 py-2 flex justify-between">
          <div className=" flex flex-col justify-center w-[40%]">
            <h2 className="font-[font1] text-5xl text-5xl truncate whitespace-nowrap">Song name</h2>
            <p className="font-[font1] opacity-60 text-2xl">Writer</p>
          </div>
          <div className=" w-[60%] h-full  flex justify-end ">
            <img src={Next}  className="h-[70%] self-center rotate-180"/>
            <audio id="audio" src={song1} ref={audioRef}></audio>
            {song?<img src={Pause} onClick={togglePlay} className="h-full"/>:<img onClick={togglePlay}  src={Play}  className="h-full"/>}
            
            <img src={Next} className="h-[70%] self-center"/>
          </div>
        </div>
      </div>
      <div className="w-1/2  h-full rounded-[9vh] overflow-hidden relative group flex flex-col gap-0.5 bg-white border-2 border-black ">
        <div className="h-[80%] w-full p-5  overflow-hidden">
          <img src={image2} className="h-full w-full rounded-[9vh] object-cover"></img>
        </div>
        <div className=" h-[18%] w-full px-10 py-2 flex justify-between">
          <div className=" flex flex-col justify-center w-[40%]">
            <h2 className="font-[font1] text-5xl text-5xl truncate whitespace-nowrap">Song name</h2>
            <p className="font-[font1] opacity-60 text-2xl">Writer</p>
          </div>
          <div className=" w-[60%] h-full  flex justify-end ">
            <img src={Next}  className="h-[70%] self-center rotate-180"/>
            <audio id="audio" src={song1} ref={audioRef}></audio>
            {song?<img src={Pause} onClick={togglePlay} className="h-full"/>:<img onClick={togglePlay}  src={Play}  className="h-full"/>}
            
            <img src={Next} className="h-[70%] self-center"/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SongsCard;
