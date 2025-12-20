import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stair = ({ children }) => {
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const currLocation = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    // Show stair container
    tl.to(stairParentRef.current, {
      display: "block",
      duration: 0
    });

    // Stairs rise hoga yaha pe
    tl.from(".stair", {
      height: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: {
        amount: -0.25
      }
    });

    // Stairs slide down hoga yaha pe
    tl.to(".stair", {
      y: "100%",
      duration: 0.6,
      ease: "power3.inOut",
      stagger: {
        amount: -0.25
      }
    }, "+=0.1"); // Small pause at peak

    // ab gyb krna bhi to jruri h
    tl.to(stairParentRef.current, {
      display: "none",
      duration: 0
    });

    // Reset stairs position for next navigation
    tl.set(".stair", {
      y: "0%"
    });

    // Page content fade in
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 0.98,
      filter: "blur(20px)",
      transformOrigin: "center center",
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
  }, [currLocation]);

  return (
    <div>
      {/* Stair transition overlay */}
      <div 
        className="h-screen w-screen fixed top-0 left-0 z-[200] pointer-events-none hidden" 
        ref={stairParentRef}
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* Page content */}
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default Stair;