import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef, useEffect } from "react";
import NavImg from "../../assets/Navbar/TitleNavbar.png";
import { NavbarContext, LangContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinksref = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [En, setEn] = useContext(LangContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
      duration: 0,
    });
    tl.fromTo(
      ".stairing",
      {
        height: 0,
      },
      {
        height: "100%",
        duration: 0.5,
        ease: "power3.inOut",
        stagger: {
          amount: 0.25,
          from: "end",
        },
      }
    );
    tl.to(
      ".navlink",
      {
        opacity: 1,
        duration: 0.3,
      },
      "-=0.2"
    );
    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          amount: 0.3,
        },
      },
      "-=0.1"
    );
    tl.to(
      ".langSelector",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".langSelector", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      duration: 0.3,
      ease: "power2.in",
      stagger: {
        amount: 0.15,
      },
    }, "-=0.2");
    tl.to(
      ".navlink",
      {
        opacity: 0,
        duration: 0.2,
      },
      "-=0.1"
    );
    tl.to(".stairing", {
      height: 0,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: {
        amount: 0.25,
        from: "start",
      },
    });
    tl.to(".fullscreennav", {
      display: "none",
      duration: 0,
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navOpen]);

  return (
    <div
      id="fullscreennav"
      className="fullscreennav h-screen hidden w-full fixed bg-transparent text-white overflow-hidden z-[100] top-0 left-0"
    >
      <div className="gg h-screen w-screen fixed top-0 left-0 z-[1]">
        <div className="h-full w-full flex">
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksref} className="relative z-[2]">
        <div className="flex w-full justify-between items-start navlink opacity-0 overflow-hidden">
          <div className="lg:pl-2 pl-1 pt-0 lg:h-[5vw] lg:w-[16vw] h-[15vw] w-[36vw]">
            <img src={NavImg} className="h-full w-full" alt="Navigation" />
          </div>
          <div
            className="lg:h-[8vw] h-[20vw] w-[20vw] lg:w-[8vw] cursor-pointer m-2 relative group "
            onClick={() => setNavOpen(false)}
          >
            <div className="lg:h-[11vw] h-[28vw] lg:w-1 w-[0.5vw] origin-top absolute bg-white -rotate-45 group-hover:bg-gradient-to-b group-hover:from-[#a6e7ff] group-hover:to-[#6fb8ff] transition-all duration-300"></div>
            <div className="lg:h-[11vw] h-[28vw] lg:w-1 w-[0.5vw] origin-top absolute bg-white rotate-45 right-0 group-hover:bg-gradient-to-b group-hover:from-[#a6e7ff] group-hover:to-[#6fb8ff] transition-all duration-300"></div>
          </div>
        </div>
        <div className="lg:py-12 py-[20vh]">
          <Link to="/" onClick={() => setNavOpen(false)}
            className="block relative border-y-1 link origin-top cursor-pointer opacity-0 group"
            style={{ transform: "rotateX(90deg)" }}
          >
            <h1 className="font-[font1] lg:text-[9vw] text-[10vh] uppercase text-center leading-[1] font-stretch-semi-expanded">
              {En ? "Home" : "Accueil"}
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Sweet Rivalry" : "Douce Rivalité"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/77/69/48/776948d730f720fa1fc10da34f2f959c.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Sweet Rivalry" : "Douce Rivalité"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/736x/07/83/e8/0783e88c6ce740f15d000a8afd95a4a7.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Sweet Rivalry" : "Douce Rivalité"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/77/69/48/776948d730f720fa1fc10da34f2f959c.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Sweet Rivalry" : "Douce Rivalité"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/736x/07/83/e8/0783e88c6ce740f15d000a8afd95a4a7.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </Link>
          <Link to="/songs" onClick={() => setNavOpen(false)}
            className="block relative border-b-1 link origin-top cursor-pointer opacity-0 group"
            style={{ transform: "rotateX(90deg)" }}
          >
            <h1 className="font-[font1] lg:text-[9vw] text-[10vh] uppercase text-center leading-[1] font-stretch-semi-expanded">
              {En ? "Songs" : "Chansons"}
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Arcane Tracks" : "Pistes Arcanes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/736x/17/8c/d9/178cd904c5bd6b691bcf3c7d5b562596.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Arcane Tracks" : "Pistes Arcanes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/2d/c0/57/2dc0570362db20b1678949ac721eb2da.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Arcane Tracks" : "Pistes Arcanes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/736x/17/8c/d9/178cd904c5bd6b691bcf3c7d5b562596.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Arcane Tracks" : "Pistes Arcanes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/2d/c0/57/2dc0570362db20b1678949ac721eb2da.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </Link>
          <Link to="/characters" onClick={() => setNavOpen(false)}
            className="block relative border-t-1 link origin-top cursor-pointer opacity-0 group"
            style={{ transform: "rotateX(90deg)" }}
          >
            <h1 className="font-[font1] lg:text-[9vw] text-[10vh] uppercase text-center leading-[1] font-stretch-semi-expanded">
              {En ? "Characters" : "Personnages"}
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Legends Archive" : "Archives des Légendes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/c5/bd/6c/c5bd6cc4c188df4a542fa7eeecd17c8f.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Legends Archive" : "Archives des Légendes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/2b/6c/51/2b6c5156f58ec1fc9caaac53163f8b76.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Legends Archive" : "Archives des Légendes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/c5/bd/6c/c5bd6cc4c188df4a542fa7eeecd17c8f.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Legends Archive" : "Archives des Légendes"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/2b/6c/51/2b6c5156f58ec1fc9caaac53163f8b76.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/tushar-yadav-58349331b/"
            className="block relative border-y-1 link origin-top cursor-pointer opacity-0 group"
            style={{ transform: "rotateX(90deg)" }}
          >
            <h1 className="font-[font1] lg:text-[9vw] text-[10vh] uppercase text-center leading-[1] font-stretch-semi-expanded">
              {En ? "About" : "À propos"}
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Connect With Me" : "Connectez-vous avec moi"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/e1/12/98/e11298bd1b6a94b176ee36ceb49ebfd9.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Connect With Me" : "Connectez-vous avec moi"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/fe/44/fd/fe44fdc5d50b10d364ee8ae472c47f2f.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Connect With Me" : "Connectez-vous avec moi"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/e1/12/98/e11298bd1b6a94b176ee36ceb49ebfd9.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  {En ? "Connect With Me" : "Connectez-vous avec moi"}
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://i.pinimg.com/1200x/fe/44/fd/fe44fdc5d50b10d364ee8ae472c47f2f.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="langSelector absolute bottom-4 left-4 z-[3] text-white flex gap-4 opacity-0" style={{ transform: "translateY(20px)" }}>
            <p 
              className={`text-[5vh] font-[font1] cursor-pointer hover:text-[#a6e7ff] transition-all duration-300 ${En ? 'opacity-100' : 'opacity-40'}`}
              onClick={() => setEn(true)}
            >
              En
            </p>
            <div className="h-[8vh] w-0.5 bg-white"></div>
            <p 
              className={`text-[5vh] font-[font1] cursor-pointer hover:text-[#a6e7ff] transition-all duration-300 ${!En ? 'opacity-100' : 'opacity-40'}`}
              onClick={() => setEn(false)}
            >
              Fr
            </p>
        </div>
    </div>
  );
};

export default FullScreenNav;