import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center font-bold">
      <div className="text-[10vw] upperCase leading-[8vw] flex justify-center items-center">
        Ma
      </div>
      <div className="text-[10vw] upperCase leading-[8vw] flex justify-center items-center">
        Mei
        <div className="h-[7.5vw] w-[16vw] rounded-full overflow-hidden mt-1">
          <Video />
        </div>
        lleure
      </div>
      <div className="text-[10vw] upperCase leading-[8vw] flex justify-center items-center">
        Ennemie
      </div>
    </div>
  );
};

export default HomeHeroText;
