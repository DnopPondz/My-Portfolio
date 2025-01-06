"use client";

import { useEffect } from 'react';

const Contact = () => {
 
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when the component is unmounted
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full md:w-auto">
        <h1 className="text-5xl font-medium text-[#42A5F5]">Contact Me <i className='bx bxs-face'></i></h1>
        <div className="flex flex-col items-center justify-center gap-6 md:border-l-2 md:border-black pl-10 md:pl-20">
          <div className="text-center">
            <h1 className="font-semibold text-2xl mb-2 text-[#42A5F5]">Address</h1>
            <p className='text-xl text-gray-400'>71/1 Sebungwan Village, Moo 4, Soi 8, Mueang District, <br className="hidden md:block"/>Lamphun 51000, Thailand</p>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-2xl mb-2 text-[#42A5F5]">Phone Number</h1>
            <p className='text-xl text-gray-400'>061-2674-523</p>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-2xl mb-2 text-[#42A5F5]">Email</h1>
            <p className='text-xl text-gray-400'>Pondwachi.th@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-20 mt-20">

        <a className='w-[80px] h-[50px] text-6xl text-[#0866ff]' href='https://www.facebook.com/pond.wachirodol' target='_blank'><i className='bx bxl-facebook-circle bx-flashing' ></i></a>
        <a className='w-[80px] h-[50px] text-6xl text-[#0866ff]' href='https://www.linkedin.com/in/wachirodol-thongnate-6b6b24313/' target='_blank'><i className='bx bxl-linkedin bx-flashing' ></i></a>
        <a className='w-[80px] h-[50px] text-6xl text-[#0866ff]' href='https://github.com/DnopPondz' target='_blank'><i className='bx bxl-github bx-flashing' ></i></a>
      </div>
    </div>
  );
};

export default Contact;
