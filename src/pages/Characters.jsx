import React, { useRef } from "react";
import JinxImg from "../assets/Characters/jinx.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./Characters.css";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 31%",
        end: window.innerWidth >= 1024 ? "top -85%" : "top -55%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (element) => {
          let imageIndex =
            element.progress < 1
              ? Math.floor(element.progress * imageArray.length)
              : imageArray.length - 1;

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="absolute  h-[28vw] min-[760px]:h-[20vw]
               w-[20vw] min-[760px]:w-[15vw]  left-[30vw] overflow-hidden lg:rounded-4xl rounded-2xl z-0"
        >
          <img
            src={JinxImg}
            className="h-full w-full object-cover"
            ref={imageRef}
          ></img>
        </div>
        <div>
          <div className="min-[760px]:mt-[57vh] mt-[40vh] relative">
            <h1 className="text-[17vw] text-center leading-[15vw] upperCase font-[font2] scale-y-[1.2] origin-center font-stretch-semi-expanded">
            SHΔTTERED
              <br></br> legends
            </h1>
          </div>
          <div className="min-[760px]:pl-[50%] p-2 lg:mt-10 mt-5 relative z-[10]">
            <p className="min-[760px]:text-3xl max-[390px]:text-xl max-[650px]:text-2xl font-[font1] z-[10]">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;In a city divided by progress and power, every legend
              is forged through loss. These are not heroes born from glory, but
              lives shaped by conflict, obsession, and impossible choices. Each
              character carries the scars of the world they inhabit—caught
              between order and chaos, loyalty and survival, hope and ruin.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="section2 h-screen"></div> */}
      <section className="widgets h-screen">
        <div className="widget-preview-image"></div>
        <div className="widget-title"></div>
      </section>
    </div>
  );
};

export default Agence;
