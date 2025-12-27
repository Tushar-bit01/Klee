import React, { useContext } from "react";
import SongsCard from "../components/Songs/SongsCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LangContext } from "../context/NavContext";
import Enemy from "../assets/Songs/Enemy.mp3";
import Playground from "../assets/Songs/playground.mp3";
import Animals from "../assets/Songs/animals.mp3";
import Ashes from "../assets/Songs/ashes.mp3";
import Come from "../assets/Songs/comeplay.mp3";
import Been from "../assets/Songs/couldbeen.mp3";
import Dynasty from "../assets/Songs/dynasty.mp3";
import Goodbye from "../assets/Songs/goodbye.mp3";
import Gun from "../assets/Songs/gun.mp3";
import Hear from "../assets/Songs/hear.mp3";
import HellFire from "../assets/Songs/hellfire.mp3";
import LoveOur from "../assets/Songs/line.mp3";
import Mame from "../assets/Songs/mame.mp3";
import Paint from "../assets/Songs/paint.mp3";
import Sucker from "../assets/Songs/sucker.mp3";
import Toys from "../assets/Songs/toys.mp3";

const Project = () => {
  const [En] = useContext(LangContext);
  const songsCards = [
    {
      img1: "https://i.pinimg.com/1200x/45/8e/97/458e97a91ba7a240d96fd390b3c5c422.jpg",
      song1: Enemy,
      songName1: "Enemy",
      aritist1: "Imagine Dragons & JID",
      img2: "https://i.pinimg.com/736x/2d/52/5a/2d525afb7183c96fc8fa5e40dc99f2c3.jpg",
      song2: Playground,
      songName2: "Playground",
      aritist2: "Bea Miller",
    },
    {
      img1: "https://imgs.search.brave.com/uRO0ep5RDALGG0sX2fJvm1-sbl5O0iXN-B68y163wko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhL2Ri/LzhjLzJhZGI4YzIw/MGE2NGUxZmUyYTE2/Zjg4YzkyOWY4YjIy/LmpwZw",
      song1: Animals,
      songName1: "Dirty little Animals",
      aritist1: "BONES UK",
      img2: "https://i.pinimg.com/736x/7a/b6/cd/7ab6cda6d7e3d18b5d263368f893e803.jpg",
      song2: HellFire,
      songName2: "HellFire",
      aritist2: "Fever 333",
    },
    {
      img1: "https://i.pinimg.com/736x/80/bd/43/80bd43be11531f9fd082852d3efb5e47.jpg",
      song1: Ashes,
      songName1: "Ashes and Blood",
      aritist1: "Shawn Christmas",
      img2: "https://i.pinimg.com/1200x/18/a4/fa/18a4fa2cc91e900b503427418c7d386e.jpg",
      song2: LoveOur,
      songName2: "Our Love",
      aritist2: "Curtis Harding & Jazmine Sullivan",
    },
    {
      img1: "https://i.pinimg.com/736x/54/83/30/5483300a8c83e0893ceb29090df34689.jpg",
      song1: Come,
      songName1: "Come Play",
      aritist1: "Stray Kids, Young Miko, Tom Morello",
      img2: "https://i.pinimg.com/736x/e3/41/67/e34167632d58d7f0c1da68eb80b6ed19.jpg",
      song2: Mame,
      songName2: "Ma Meilleure Ennemie",
      aritist2: "Stromae & Pomme ",
    },
    {
      img1: "https://i.pinimg.com/1200x/64/d2/91/64d29169f887beaf414189b0b3026ca1.jpg",
      song1: Been,
      songName1: "What Could Have Been",
      aritist1: "Sting & Ray Chen",
      img2: "https://i.pinimg.com/1200x/55/8b/0d/558b0d8e8fa3f2d431d1a33052de19c2.jpg",
      song2: Paint,
      songName2: "Paint The Town Blue",
      aritist2: "Ashnikko",
    },
    {
      img1: "https://i.pinimg.com/1200x/d0/25/71/d025714cc440f5ad253df8e22b878317.jpg",
      song1: Dynasty,
      songName1: "Dynasties and Dystopia",
      aritist1: "Denzel Curry, Gizzle & Bren Joy",
      img2: "https://i.pinimg.com/736x/ca/76/ba/ca76ba59e60a678ed012446f5e103bda.jpg",
      song2: Hear,
      songName2: "I Can't Hear It Now",
      aritist2: "Freya Ridings",
    },
    {
      img1: "https://i.pinimg.com/736x/4c/e6/01/4ce601bb254065c6961ec5e201d085de.jpg",
      song1: Goodbye,
      songName1: "Goodbye",
      aritist1: "Ramsey",
      img2: "https://i.pinimg.com/736x/7c/c9/61/7cc961b8ac43eb101b79224f398bacfd.jpg",
      song2: Sucker,
      songName2: "Sucker",
      aritist2: "Marcus King",
    },
    {
      img1: "https://i.pinimg.com/736x/4e/f8/f2/4ef8f20942f2e527ee543813fe35fd8d.jpg",
      song1: Gun,
      songName1: "Guns for Hire",
      aritist1: "Woodkid",
      img2: "https://i.pinimg.com/1200x/5b/9c/49/5b9c4933251cf48aba62be5286907bb4.jpg",
      song2: Toys,
      songName2: "Misfit Toys",
      aritist2: "Misfit Toys",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      const cards = gsap.utils.toArray(".card-item");

      gsap.fromTo(
        cards,
        {
          y: 90,
          opacity: 0,
          rotateZ: -3,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          filter: "blur(0px)",
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bigHero",
            start: "top 95%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
      gsap.utils.toArray(".card-item img").forEach((img) => {
        gsap.fromTo(
          img,
          { y: 25, scale: 1.06 },
          {
            y: -25,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });
    mm.add("(min-width: 769px)", () => {
      gsap.utils.toArray(".hero").forEach((card, index) => {
        const imgs = card.querySelectorAll("img");

        gsap.fromTo(
          card,
          {
            y: 120,
            x: index % 2 === 0 ? -40 : 40,
            rotateZ: index % 2 === 0 ? -1.5 : 1.5,
            filter: "blur(6px)",
          },
          {
            y: 0,
            x: 0,
            rotateZ: 0,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 45%",
              scrub: 1.4,
            },
          }
        );

        imgs.forEach((img, i) => {
          gsap.fromTo(
            img,
            {
              y: i === 0 ? 80 : 50,
              scale: 1.12,
            },
            {
              y: i === 0 ? -80 : -50,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="p-2 bg-[#12131C]">
      <div className=" pt-[40.5vh]">
        <h2 className="font-[font2] lg:text-[12.5vw] text-[20vw] upperCase text-white">
          {En ? "Songs" : "Chansons"}
        </h2>
      </div>
      <div className="-lg:mt-12 mt-4 bigHero">
        {songsCards.map((card, idx) => (
          <div
            key={idx}
            className="w-full lg:h-[90vh] h-[150vh] flex lg:flex-row flex-col lg:gap-2 gap-4 lg:mb-2 mb-4 hero will-change-transform song-card"
          >
            <SongsCard
              image1={card.img1}
              image2={card.img2}
              song1={card.song1}
              song2={card.song2}
              songName1={card.songName1}
              songName2={card.songName2}
              artist1={card.aritist1}
              artist2={card.aritist2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
