import React from "react";
import HeroVideo from "../../assets/Home/heroo_video.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        loop
        autoPlay
        
        src={HeroVideo}
      ></video>
    </div>
  );
};

export default Video;
