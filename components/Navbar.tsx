import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

function Navbar() {
  const [navBar, setNavBar] = useState(false)
  function handleNav() {
    setNavBar(!navBar)
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/2.png"
          width={150}
          height={50}
          alt="logo-img"
        />
        <div className="">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className=" md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          navBar
            ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70`
            : ""
        }>
        <div
          className={
            navBar
              ? `fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%]
         h-screen bg-[#ecf0f3]  ease-in duration-500`
              : `fixed top-0 left-[-100%] ease-in duration-500`
          }>
          <div className=" px-2 sm:px-4 md:px-6 -mt-8">
            <div className=" flex w-full items-center justify-between">
              <Image
                src="/../public/assets/2.png"
                width={150}
                height={100}
                alt="logo-img"
              />
              <div
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 flex items-center justify-center">
              <p className="font-bold text-center">
                Let's build something cool together!
              </p>
              {""}
              <span className="ml-1 block animate-spin-slow">🤪</span>{" "}
            </div>
          </div>
          <div className="py-4 px-10 flex flex-col ">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm font-semibold">home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-semibold">about</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-semibold">skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-semibold">projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-semibold">contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] font-bold">
                let's connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
