"use client"

import { ExpandableCardDemo } from "./Wlugintro";
import { useEffect, useState } from "react";
import {SignupFormDemo} from "./RegisterForm";

const Page2: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  // Update isMobile on resize
  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const page1Height = window.innerHeight; // Height of Page 1
      const progress = Math.min(Math.max(scrollY / page1Height, 0), 1); // Keep between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="page h-full md:h-[160vh] bg-transparent z-50 flex items-center md:justify-center flex-col gap-[9vh] relative transition-all duration-300"
      style={{
        position: "absolute",
        top: isMobile ? "80vh" : "80vh",
        width: "100%",
        transform: `translateY(${(1 - scrollProgress) * 50}px)`,
        pointerEvents: scrollProgress > 0.1 ? "auto" : "none",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-transparent z-0" />

      <div className="text flex items-center mt-10 justify-center flex-col md:gap-6 z-10">
        <h2 className="text-white font-bold text-2xl md:text-[6vh]">
          Member Board Drive 2
        </h2>
        {/* <p className="text-white text-[1.2vh] text-xl md:text-[2.5vh] text-center">
          Prepare to join a vibrant community of Linux enthusiasts and immerse
          yourself in the dynamic world of Open Source.
        </p> */}
      </div>

      <div className="box flex flex-col md:flex-row gap-4 w-full md:w-[80vw] h-auto rounded-xl z-10">
        {/* Register Page Box */}
        <div className="flex-1 flex justify-center items-center w-full md:w-[50%] bg-[#171413] rounded-xl mb-5 sm:mb-0 backdrop-blur-sm">
          <div className="w-full h-full">
            <div className=" bg-">

          <ExpandableCardDemo/>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full md:w-[50%] bg-[rgba(255,255,255,0.1)] rounded-xl mb-5 sm:mb-0 backdrop-blur-sm">
          <div className="w-full h-full">
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
