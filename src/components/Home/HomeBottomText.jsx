import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font1] flex items-center justify-center gap-2 font-semibold">
      <Link
        className="text-[6.5vw] border-5 border-white upperCase rounded-full px-8 leading-[5vw]"
        to="/songs"
      >
        Songs
      </Link>
      <Link
        className="text-[6.5vw] border-5 border-white upperCase rounded-full px-8 leading-[5vw]"
        to="/characters"
      >
        Characters
      </Link>
    </div>
  );
};

export default HomeBottomText;
