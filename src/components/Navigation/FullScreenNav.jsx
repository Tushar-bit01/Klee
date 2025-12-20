import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef,useEffect } from 'react'
import NavImg from "../../assets/Navbar/TitleNavbar.png";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksref = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', {
      display: 'block',
      duration: 0
    })
    tl.fromTo('.stairing', 
      {
        height: 0,
      },
      {
        height: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.25,
          from: 'end'
        }
      }
    )
    tl.to('.navlink', {
      opacity: 1,
      duration: 0.3
    }, '-=0.2')
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: {
        amount: 0.3
      }
    }, '-=0.1')
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      duration: 0.3,
      ease: 'power2.in',
      stagger: {
        amount: 0.15
      }
    })
    tl.to('.navlink', {
      opacity: 0,
      duration: 0.2
    }, '-=0.1')
    tl.to('.stairing', {
      height: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.25,
        from: 'start'
      }
    })
    tl.to('.fullscreennav', {
      display: 'none',
      duration: 0
    })
  }

  useGSAP(function () {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';  // Nav open = no scroll
    } else {
      document.body.style.overflow = 'unset';   // Nav closed = scroll enabled
    }
    
    // Cleanup: component unmount hone par scroll restore karo
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  return (
    <div
      id="fullscreennav"
      className="fullscreennav h-screen hidden w-full fixed bg-transparent text-white overflow-hidden z-[100] top-0 left-0"
    >
      {/* Stairs container - now with proper stacking */}
      <div className="gg h-screen w-screen fixed top-0 left-0 z-[1]">
        <div className="h-full w-full flex">
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
        </div>
      </div>
      
      {/* Content layer - on top of stairs */}
      <div ref={fullNavLinksref} className="relative z-[2]">
        <div className="flex w-full justify-between items-start navlink opacity-0 overflow-hidden">
          <div className="pl-2 pt-0 h-[5vw] w-[20vw] mt-2">
            <img src={NavImg} className="h-full w-full" alt="Navigation" />
          </div>
          <div 
            className="h-[8vw] w-[8vw] cursor-pointer m-2 relative group" 
            onClick={() => setNavOpen(false)}
          >
            <div className="h-[11vw] w-1 origin-top absolute bg-white -rotate-45 group-hover:bg-gradient-to-b group-hover:from-[#a6e7ff] group-hover:to-[#6fb8ff] transition-all duration-300"></div>
            <div className="h-[11vw] w-1 origin-top absolute bg-white rotate-45 right-0 group-hover:bg-gradient-to-b group-hover:from-[#a6e7ff] group-hover:to-[#6fb8ff] transition-all duration-300"></div>
          </div>
        </div>
        <div className="py-12">
          <div className="relative border-y-1 link origin-top cursor-pointer opacity-0" style={{ transform: 'rotateX(90deg)' }}>
            <h1 className="font-[font1] text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
              Home
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
          <div className="relative border-b-1 link origin-top cursor-pointer opacity-0" style={{ transform: 'rotateX(90deg)' }}>
            <h1 className="font-[font1] text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
              Songs
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
          <div className="relative border-t-1 link origin-top cursor-pointer opacity-0" style={{ transform: 'rotateX(90deg)' }}>
            <h1 className="font-[font1] text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
              Characters
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
          <div className="relative border-y-1 link origin-top cursor-pointer opacity-0" style={{ transform: 'rotateX(90deg)' }}>
            <h1 className="font-[font1] text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
              About
            </h1>
            <div className="absolute top-0 flex bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] moveLink pointer-events-none">
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
                <h2 className="font-[font1] whitespace-nowrap text-[9vw] uppercase text-center leading-[1] font-stretch-semi-expanded">
                  Pour Tor Voir
                </h2>
                <img
                  className="h-22 shrink-0 w-65 rounded-full object-cover mx-4"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;