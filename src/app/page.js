"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when the component is unmounted
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-3xl font-medium pb-4 ">My Portfolio</h2>
        <h1 className="text-5xl font-semibold border-t-4 border-blue-700 pt-2">Wachirodol Thongnate</h1>
        <p className="pt-4 font-bold text-2xl text-blue-700">Web Developer</p>
      </div>
    </div>
  );
}
