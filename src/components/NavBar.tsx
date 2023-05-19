'use client'
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full py-4 border-b border-my-gray">
      <div className=" mx-auto h-14 px-4 rounded-xl  max-w-[90%] flex justify-between text-my-white">
        <div className="flex items-center text-lg font-bold ">NahuelNP</div>
        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "left-0" : "left-full"} fixed md:static top-0 p-8  flex bg-black flex-col items-end md:flex-row md:items-center md:justify-end  w-full h-screen md:h-auto gap-4 md:gap-10 transition-all  `}>
          <button aria-label="Close Menu" onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 transition-colors bg-blue-200 md:hidden hover:text-my-green te"><CloseIcon/></button>
          <Link href="#home" className="w-full py-4 text-center transition-colors bg-red-500 hover:text-my-green">
            Home
          </Link>
          <Link href="#about" className="w-full py-4 text-center transition-colors bg-red-500 hover:text-my-green">
            About
          </Link>
          <Link href="#projects" className="w-full py-4 text-center transition-colors bg-red-500 hover:text-my-green">
            Projects
          </Link>
          <Link href="#contact" className="w-full py-4 text-center transition-colors bg-red-500 hover:text-my-green">
            Contact
          </Link>
        </div>
        <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} className="transition-colors hover:text-my-green md:hidden"><MenuIcon/></button>

      </div>
    </nav>
  );
}

export default NavBar;
