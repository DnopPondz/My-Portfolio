"use client";

import { useState } from "react";
import Link from "next/link";


const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false); // Manage dark mode state

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState); // Toggle between true/false
  };


  return (
    <div className="navbar bg-[#2a0945] sticky top-0 ">
      <div className="navbar-start ">
        <div className="dropdown text-white text-2xl">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#2a0945]   "
          >
            <li >
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <p>Projects</p>
              <ul >
                <li>
                  <Link href="/projectfrontend">FrontEnd</Link>
                </li>
                <li>
                  <Link href="/projectbackend">Backend</Link>
                </li>
                <li>
                  <Link href="/projectfullstack">FullStack</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-3xl text-white">Wachirodol <span className="text-[#fcda68]">Portfolio</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex text-white " >
        <ul className="menu menu-horizontal px-1 text-xl ">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="p-2 bg-[#2a0945]">
                <li>
                  <Link href="/projectfrontend">FrontEnd</Link>
                </li>
                <li>
                  <Link href="/projectbackend">Backend</Link>
                </li>
                <li>
                  <Link href="/projectfullstack">FullStack</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <a
        onClick={toggleDarkMode}
        className="btn btn-ghost w-[50px] h-[50px] bg-[#2a0945] rounded-full text-[#fcda68] transition-all duration-500"
      >
        <i
          className={`bx transition-transform duration-500 ${isDarkMode ? 'bxs-sun opacity-100' : 'bxs-moon opacity-100'}`}
          style={{
            transform: isDarkMode ? 'rotate(360deg)' : 'rotate(0deg)',
          }}
        ></i>
      </a>
    </div>
    </div>
  );
};

export default Navbar;
