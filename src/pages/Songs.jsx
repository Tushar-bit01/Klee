import React from "react";
import SongsCard from "../components/Songs/SongsCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Enemy from "../assets/Songs/enemy.mp3"

const Project = () => {
  const songsCards = [
    {
      img1: "https://i.pinimg.com/736x/61/46/3c/61463c0d27dbd672fa61c925179d640e.jpg",
      song1:Enemy,
      img2: "https://i.pinimg.com/1200x/eb/05/d0/eb05d0b504deef2b20d726034669ac1c.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/07/83/e8/0783e88c6ce740f15d000a8afd95a4a7.jpg",
      img2: "https://i.pinimg.com/1200x/5b/9c/49/5b9c4933251cf48aba62be5286907bb4.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/1c/75/5d/1c755da9f5a5a79448efc4e90f93d094.jpg",
      img2: "https://i.pinimg.com/736x/a0/50/48/a0504881b9968d550e515db0f1ba0e1c.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/61/46/3c/61463c0d27dbd672fa61c925179d640e.jpg",
      img2: "https://i.pinimg.com/1200x/eb/05/d0/eb05d0b504deef2b20d726034669ac1c.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/07/83/e8/0783e88c6ce740f15d000a8afd95a4a7.jpg",
      img2: "https://i.pinimg.com/1200x/5b/9c/49/5b9c4933251cf48aba62be5286907bb4.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/1c/75/5d/1c755da9f5a5a79448efc4e90f93d094.jpg",
      img2: "https://i.pinimg.com/736x/a0/50/48/a0504881b9968d550e515db0f1ba0e1c.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/61/46/3c/61463c0d27dbd672fa61c925179d640e.jpg",
      img2: "https://i.pinimg.com/1200x/eb/05/d0/eb05d0b504deef2b20d726034669ac1c.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/07/83/e8/0783e88c6ce740f15d000a8afd95a4a7.jpg",
      img2: "https://i.pinimg.com/1200x/5b/9c/49/5b9c4933251cf48aba62be5286907bb4.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/1c/75/5d/1c755da9f5a5a79448efc4e90f93d094.jpg",
      img2: "https://i.pinimg.com/736x/a0/50/48/a0504881b9968d550e515db0f1ba0e1c.jpg",
    },
  ];
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const ctx = gsap.context(() => {
  
      gsap.utils.toArray(".hero").forEach((card, index) => {
  
        const imgs = card.querySelectorAll("img");
  
        // 1️⃣ Main card motion (float + drift)
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
  
        // 2️⃣ Breathing effect (very subtle)
        gsap.to(card, {
          scale: 1.015,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2.5,
        });
  
        // 3️⃣ Image depth parallax
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
  
        // 4️⃣ Inner glow pulse (Arcane energy)
        gsap.fromTo(
          card,
          {
            boxShadow: "0 0 0px rgba(120,140,255,0)",
          },
          {
            boxShadow: "0 0 60px rgba(120,140,255,0.25)",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
  
    });
  
    return () => ctx.revert();
  }, []);
  

 //bg-gradient-to-b from-[#a6e7ff] to-[#6fb8ff] 
  return (
    <div className="p-2 bg-[#12131C]">
      <div className=" pt-[40.5vh]">
        <h2 className="font-[font2] text-[12.5vw] upperCase text-white">Songs</h2>
      </div>
      <div className="-mt-12 bigHero">
      {songsCards.map((card,idx)=>(
        <div key={idx} className="w-full h-[90vh] flex gap-2 mb-2 hero will-change-transform">
        <SongsCard image1={card.img1} image2={card.img2} song1={card.song1}/>
        </div>
      ))}  
      </div>
    </div>
  );
};

export default Project;