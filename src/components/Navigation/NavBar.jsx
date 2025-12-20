import React, { useContext, useRef } from "react";
import NavImg from "../../assets/Navbar/TitleNavbar.png";
import { NavbarContext } from "../../context/NavContext";

const NavBar = () => {
  const navRef = useRef(null);
  const hovRef = useRef(null);
  const hovRef2 = useRef(null);
  const [navOpen,setNavOpen]=useContext(NavbarContext);
  return (
    <div className="flex items-start justify-between w-full fixed top-0 z-4  ">
      <div className="pl-2 pt-0 h-[5vw] w-[16vw]">
        <img src={NavImg} className="h-full w-full"></img>
      </div>
      <div onClick={()=>{
                setNavOpen(true)
            }}
        onMouseEnter={() => {
          navRef.current.style.height = "100%";
          hovRef.current.style.backgroundColor = "black";
          hovRef2.current.style.backgroundColor = "black";
        }}
        onMouseLeave={() => {
          navRef.current.style.height = "0%";
          hovRef.current.style.backgroundColor = "white";
          hovRef2.current.style.backgroundColor = "white";
        }}
        className=" h-13 w-[16vw] relative bg-black cursor-pointer"
      >
        <div
          ref={navRef}
          className="bg-gradient-to-b from-[#a6e7ff]  to-[#6fb8ff] transition-all  h-0 absolute top-0 w-full "
        ></div>
        <div className="relative h-full px-5 flex flex-col justify-center items-end gap-2 overflow-hidden ">
          <div ref={hovRef} className="w-[5.5vw] h-[0.125vw] bg-white "></div>
          <div ref={hovRef2} className="w-[2.5vw] h-[0.125vw] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
