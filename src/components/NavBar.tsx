'use client'
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full py-4 bg-my-dark-purple">
      <div className="flex items-center justify-between h-12 px-4 mx-auto max-w-7xl rounded-xl text-my-white">
        <div className="flex items-center text-lg font-bold ">NahuelNP</div>

        <div onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "left-0" : "left-full"} fixed md:static top-0 bg-my-dark-purple    py-6 md:p-0 px-4   flex flex-col items-end md:flex-row md:items-center md:justify-end  w-full h-screen md:h-auto gap-4  transition-all  `}>



          <button aria-label="Close Menu" onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 transition-colors fill-white md:hidden "><CloseIcon /></button>
          <Link href="#home" className="w-full py-2 text-center transition-colors md:px-4 md:w-auto hover:text-my-purple">
            Home
          </Link>
          <Link href="#about" className="w-full py-2 text-center transition-colors md:px-4 md:w-auto hover:text-my-purple">
            About
          </Link>
          <Link href="#projects" className="w-full py-2 text-center transition-colors md:px-4 md:w-auto hover:text-my-purple">
            Projects
          </Link>
          <Link href="#contact" className="w-full py-2 text-center transition-colors md:px-4 md:w-auto hover:text-my-purple">
            Contact
          </Link>

        </div>
        <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 transition-colors fill-white md:hidden"><MenuIcon /></button>

      </div>
    </nav>
  );
}

export default NavBar;
