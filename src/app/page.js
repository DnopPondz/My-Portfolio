"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden"; // Disable scrolling
  //   return () => {
  //     document.body.style.overflow = "auto"; // Enable scrolling when the component is unmounted
  //   };
  // }, []);

  return (
    <div className="h-[800px] flex flex-row items-center justify-between  bg-[#2a0945] ">
      <div className="flex flex-row items-center gap-80">
        <div className="text-white flex flex-col justify-b items-start text-6xl ml-28 gap-4">
          <h1>Hello, My name is</h1>
          <p>Pond <span className="text-[#fcda68]">Wachirodol Thongnate</span>,</p>
          <p>I'm a FrontEnd Developer.</p>
          <a
            className="w-[210px] sm:w-[230px] h-[60px] sm:h-[70px] rounded-full mt-4 flex justify-center items-center gap-2 bg-[#fcda68] text-white text-center transition-transform duration-300 hover:scale-105"
            href="/resume/Wachirodol%20Resume.pdf"
            download="Wachirodol_Thongnate_Resume.pdf"
            target="_blank"
          >
            <i className="bx bxs-cloud-download bx-tada text-3xl sm:text-4xl"></i>
            <button className="text-lg sm:text-2xl">Download CV</button>
          </a>
        </div>
        <div className="w-[500px] h-[500px] border-2">
        <Image
          src="/"
          width={100}
          height={100}
          alt="Profile Picture"
          className="object-cover"
        />  
        </div>
        
      </div>
    </div>
  );
}
