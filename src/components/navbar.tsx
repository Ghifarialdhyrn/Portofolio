"use client";

import { useState } from "react";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-[80%] text-white flex flex-row justify-between items-center place-self-center font-bold py-4">
      {/* Logo */}
      <a href="#hero">
        <img src={logo.src} alt="Logo" width={40} />
      </a>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-[70px] left-0 bg-black w-full flex-col gap-4 px-6 py-4 md:relative md:top-auto md:left-auto md:bg-transparent md:w-auto md:flex md:flex-row md:gap-10 md:items-center md:text-[17px]`}
      >
        <li>
          <a href="#about" className="hover:text-gray-300">
            About Me
          </a>
        </li>
        <li>
          <a href="#skill" className="hover:text-gray-300">
            Skill
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-gray-300">
            Project
          </a>
        </li>
        <li>
          <a href="#testimonial" className="hover:text-gray-300">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact Me
          </a>
        </li>
      </ul>

      {/* Resume Button */}
      <button className="hidden md:flex bg-white text-black px-4 py-2 rounded-lg">
        <a
          href="https://drive.google.com/file/d/1ScVqN58awOpC4SUPAXIqQr6MT5Xa3COf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
    </nav>
  );
}
