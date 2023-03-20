import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFilePdf, BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logoImg from "../public/assets/2.png";


function Navbar() {
  const [navBar, setNavBar] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [inverImg, setInvertImg] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("#ecf0f3");
  const [linkColor, setLinkColor] = useState<string>("#1f2937");
  const router = useRouter();

 
  useEffect(() => {
    if (router.asPath === "/comflix" || router.asPath === "/twitter") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setInvertImg(true);
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
      setInvertImg(false);
    }
  });
  
  useEffect(() => {
    const handleShadow = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 90) {
        setShadow(true);
        setNavBg("#ecf0f3");
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  function handleNav() {
    setNavBar(!navBar);
  }

 

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={logoImg}
            width={150}
            height={50}
            alt="logo-img"
            className={inverImg && !shadow ? "invert" : ""}
          />
        </Link>

        <div className="">
          <ul
            className={
              router.asPath === "/" ||
              router.asPath === "/#home" ||
              router.asPath === "/#about" ||
              router.asPath === "/#skills" ||
              router.asPath === "/#projects" ||
              router.asPath === "/#contact" ||
              shadow
                ? `hidden md:flex text-black`
                : "hidden md:flex text-white "
            }>
            <Link href="/#home" className="group">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                <span
                  className={
                    router.asPath === "/#home" || router.asPath === "/"
                      ? "text-[#5651e5]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#about"
                      ? "text-[#5651e5]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#skills"
                      ? "text-[#5651e5]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#projects"
                      ? "text-[#5651e5]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#contact"
                      ? "text-[#5651e5]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Contact
              </li>
            </Link>
          </ul>
          <div
            className={
              inverImg && !shadow ? "text-white md:hidden" : "md:hidden"
            }
            onClick={handleNav}>
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
         h-screen bg-[#ecf0f3]  ease-in-out duration-500`
              : `fixed top-0 left-[-100%] ease-in duration-500`
          }>
          <div className=" px-2 sm:px-4 md:px-6 -mt-8">
            <div className=" flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logoImg} width={150} height={100} alt="logo-img" />
              </Link>
              <div
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 flex items-center justify-center">
              <p className="text-xs font-bold text-center">
                Let's build something cool together!
              </p>
              {""}
              <span className="ml-1 block animate-spin-slow">⚙️</span>{" "}
            </div>
          </div>
          <div className="py-4 px-10 flex flex-col ">
            <ul className="uppercase">
              <Link href="/#home" onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>home
                </li>
              </Link>
              <Link href="/#about" onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>about
                </li>
              </Link>
              <Link href="/#skills" onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>skills
                </li>
              </Link>
              <Link href="/#projects" onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>projects
                </li>
              </Link>
              <Link href="/#contact" onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5] font-bold">
                let's connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/campos415/"
                  target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/campos-415" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/CesarCamposResume.pdf" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFilePdf />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
