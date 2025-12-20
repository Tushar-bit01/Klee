import React from "react";
import HeroVideo from "../../assets/Home/fin.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        loop
        autoPlay
        muted
        src={HeroVideo}
      ></video>
    </div>
  );
};

export default Video;
