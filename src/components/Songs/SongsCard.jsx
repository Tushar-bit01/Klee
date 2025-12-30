import React from "react";
import Next from "../../assets/Songs/next.png";
import Play from "../../assets/Songs/play.png";
import Pause from "../../assets/Songs/pause.png";
import { useState, useRef } from "react";

const SongsCard = ({
  image1,
  image2,
  song1,
  song2,
  songName1,
  songName2,
  artist1,
  artist2,
}) => {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const togglePlay1 = () => {
    if (!isPlaying1) {
      audioRef1.current.play();
      if (isPlaying2) {
        audioRef2.current.pause();
        setIsPlaying2(false);
      }
    } else {
      audioRef1.current.pause();
    }
    setIsPlaying1(!isPlaying1);
  };
  const togglePlay2 = () => {
    if (!isPlaying2) {
      audioRef2.current.play();
      if (isPlaying1) {
        audioRef1.current.pause();
        setIsPlaying1(false);
      }
    } else {
      audioRef2.current.pause();
    }
    setIsPlaying2(!isPlaying2);
  };

  return (
    <>
      <div className=" card-item lg:w-1/2 w-full  h-full rounded-[9vh] overflow-hidden relative group flex flex-col gap-0.5 bg-white border-2 border-black ">
        <div className="h-[80%] w-full p-5  overflow-hidden relative">
          <img
            src={image1}
            className="h-full w-full rounded-[9vh] object-cover"
          ></img>
        </div>
        <div className=" h-[18%] w-full px-10 py-2 flex justify-between ">
          <div className=" flex flex-col justify-center w-[40%] ">
            <h2 className="font-[font1] lg:text-5xl text-2xl truncate whitespace-nowrap">
              {songName1}
            </h2>
            <p className="font-[font1] opacity-60 lg:text-2xl text-base truncate whitespace-nowrap">
              {artist1}
            </p>
          </div>
          <div className=" w-[55%] h-full  flex justify-end   ">
            <img
              src={Next}
              className="lg:h-[70%] h-[50%] self-center rotate-180"
            />
            <audio id="audio" src={song1} ref={audioRef1}></audio>
            {isPlaying1 ? (
              <img
                src={Pause}
                onClick={togglePlay1}
                className="lg:h-full h-[90%] cursor-pointer"
              />
            ) : (
              <img
                onClick={togglePlay1}
                src={Play}
                className="lg:h-full h-[90%] cursor-pointer"
              />
            )}

            <img src={Next} className="lg:h-[70%] h-[50%] self-center" />
          </div>
        </div>
      </div>
      <div className=" card-item lg:w-1/2 w-full  h-full rounded-[9vh] overflow-hidden relative group flex flex-col gap-0.5 bg-white border-2 border-black ">
        <div className="h-[80%] w-full p-5  overflow-hidden relative">
          <img
            src={image2}
            className="h-full w-full rounded-[9vh] object-cover"
          ></img>
        </div>
        <div className=" h-[18%] w-full px-10 py-2 flex justify-between ">
          <div className=" flex flex-col justify-center w-[40%] ">
            <h2 className="font-[font1] lg:text-5xl text-2xl truncate whitespace-nowrap">
              {songName2}
            </h2>
            <p className="font-[font1] opacity-60 lg:text-2xl text-base truncate whitespace-nowrap">
              {artist2}
            </p>
          </div>
          <div className=" w-[55%] h-full  flex justify-end   ">
            <img
              src={Next}
              className="lg:h-[70%] h-[50%] self-center rotate-180"
            />
            <audio id="audio" src={song2} ref={audioRef2}></audio>
            {isPlaying2 ? (
              <img
                src={Pause}
                onClick={togglePlay2}
                className="lg:h-full h-[90%] cursor-pointer"
              />
            ) : (
              <img
                onClick={togglePlay2}
                src={Play}
                className="lg:h-full h-[90%] cursor-pointer"
              />
            )}
            <img src={Next} className="lg:h-[70%] h-[50%] self-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongsCard;
