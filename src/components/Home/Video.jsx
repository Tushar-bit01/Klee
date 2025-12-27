import React, { useRef } from "react";

import { useEffect } from "react";

const Video = ({sound}) => {
  const videoRef=useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !sound;
    }
  }, [sound]);
  return (
    <div className="h-full w-full ">
      <video
        className="h-full w-full object-cover "
        loop
        autoPlay
        muted
        ref={videoRef}
        src="/videos/fin.mp4"
      ></video>
    </div>
  );
};

export default Video;
