import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stair = ({ children }) => {
  const stairParentRef = useRef(null);
  const currLocation = useLocation().pathname;
  const pageRef=useRef(null);
  useGSAP(
    function () {
        const tl = gsap.timeline({
            onComplete: () => {
              // Animation complete hone ke baad ScrollTrigger refresh karo
              ScrollTrigger.refresh();
            }
          });

      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      // Scale animation HATA do ya delay badhao
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
    },
    [currLocation]
  );
  return (
    <div>
      <div className="h-screen w-screen z-10 fixed  top-0" ref={stairParentRef}>
        <div className="h-full w-full  fixed flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default Stair;
