import React, { useRef, useEffect, useContext } from "react";
import JinxImg from "../assets/Characters/jinxx.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./Characters.css";
import { initWidgetSpinner } from "./character.js";
import { LangContext } from "../context/NavContext";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const widgetsRef = useRef(null);
  const [En] = useContext(LangContext);
  const imageArray = [
    "https://i.pinimg.com/736x/73/4c/53/734c5308514cf97e31854e1217f7e190.jpg",
    "https://i.pinimg.com/736x/22/94/0a/22940aff27953d36f166fd42bc909f97.jpg",
    "https://i.pinimg.com/736x/3a/bc/0a/3abc0a11b9306eb559dfc6a162111133.jpg",
    "https://i.pinimg.com/736x/56/07/ce/5607ce0e4eeab5ce071ed3a6bd9a261d.jpg",
    "https://i.pinimg.com/736x/3a/bc/0a/3abc0a11b9306eb559dfc6a162111133.jpg",
    "https://i.pinimg.com/736x/39/bd/9a/39bd9a72e1ada7aeca4de6ab2f6c0b63.jpg",
    "https://i.pinimg.com/736x/8f/59/85/8f5985486ab805060dfe699bc4031402.jpg",
    "https://i.pinimg.com/736x/13/79/54/137954d3ebd859b77d302e34fb4389b7.jpg",
    "https://i.pinimg.com/736x/5c/9c/0c/5c9c0c89f7f5e0481810bb61932fed7c.jpg",
    "https://i.pinimg.com/736x/5c/9c/0c/5c9c0c89f7f5e0481810bb61932fed7c.jpg",
    "https://i.pinimg.com/736x/2f/e8/29/2fe8292d8f3de9e78dc50e750a9556ea.jpg",
    "https://i.pinimg.com/736x/73/4c/53/734c5308514cf97e31854e1217f7e190.jpg",
  ];
  useEffect(() => {
    initWidgetSpinner();
  }, []);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 31%",
        end: window.innerWidth >= 760 ? "top -85%" : "top -55%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
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
    gsap.from(widgetsRef.current, {
      scrollTrigger: {
        trigger: widgetsRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 0.3,
      },
      opacity: 0,
      ease: "none",
    });
  });

  return (
    <div>
      <div className="section1 py-1 bg-[#12131C] pb-20">
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
            <h1 className="text-[17vw] text-white text-center leading-[15vw] upperCase font-[font2] scale-y-[1.2] origin-center font-stretch-semi-expanded">
              {En ? "SHΔTTERED" : "LÉGENDES"}
              <br></br> {En ? "legends" : "BRISÉES"}
            </h1>
          </div>
          <div className="min-[760px]:pl-[50%] p-2 lg:mt-10 mt-5 relative z-[10]">
            <p
              className="min-[760px]:text-3xl text-white max-[390px]:text-xl max-[650px]:text-2xl font-[font1] z-[10]"
              dangerouslySetInnerHTML={{
                __html: En
                  ? "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In a city divided by progress and power, every legend is forged through loss. These are not heroes born from glory, but lives shaped by conflict, obsession, and impossible choices. Each character carries the scars of the world they inhabit—caught between order and chaos, loyalty and survival, hope and ruin."
                  : "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dans une ville divisée par le progrès et le pouvoir, chaque légende se forge à travers la perte. Ce ne sont pas des héros nés de la gloire, mais des vies façonnées par le conflit, l'obsession et des choix impossibles. Chaque personnage porte les cicatrices du monde qu'il habite—pris entre l'ordre et le chaos, la loyauté et la survie, l'espoir et la ruine.",
              }}
            />
          </div>
        </div>
      </div>

      <section
        className="widgets h-screen font-[font1] relative "
        ref={widgetsRef}
      >
        <div className="widget-preview-img"></div>
        <div className="widget-title"></div>
      </section>
    </div>
  );
};

export default Agence;
