import React, { useEffect, useState } from "react";
import Image from "next/image";
import Links from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFilePdf, BsGear } from "react-icons/bs";
import { useRouter } from "next/router";
import logoImg from "../public/assets/2.png";
import logoImgM from "../public/assets/c-2.png";
import { Link } from "react-scroll";



function Navbar() {
  const [navBar, setNavBar] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [inverImg, setInvertImg] = useState<boolean>(false);
  const router = useRouter();
 
  useEffect(() => {
    if (router.asPath === "/comflix" || router.asPath === "/twitter") {
      setInvertImg(true);
    } else {
      setInvertImg(false);
    }
  });
  
  useEffect(() => {
    const handleShadow = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 90) {
        setShadow(true);
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
        <div>
          <Links href="/">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={logoImg}
              width={150}
              height={50}
              alt="logo-img"
              className={`${
                inverImg && !shadow ? "invert" : ""
              } hidden md:inline`}
            />
          </Links>
          <Links href="/" className="cursor-pointer">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={logoImgM}
              width={125}
              height={50}
              alt="logo-img"
              className={`${inverImg && !shadow ? "invert" : ""} md:hidden`}
            />
          </Links>
        </div>

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
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              className="group">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                <span
                  className={
                    router.asPath === "/#home" || router.asPath === "/"
                      ? "text-[#46a0ff]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Home
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              className="group">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#about"
                      ? "text-[#46a0ff]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                About
              </li>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={100}
              className="group">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#skills"
                      ? "text-[#46a0ff]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Skills
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={100}
              className="group">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#projects"
                      ? "text-[#46a0ff]"
                      : "text-gray-300"
                  }>
                  //{" "}
                </span>
                Projects
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              className="group">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span
                  className={
                    router.asPath === "/#contact"
                      ? "text-[#46a0ff]"
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
              <Link to="/">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoImg}
                  width={150}
                  height={100}
                  alt="logo-img"
                />
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
              <span className="ml-1 block animate-spin-slow">
                {" "}
                <BsGear />{" "}
              </span>{" "}
            </div>
          </div>
          <div className="py-4 px-10 flex flex-col ">
            <ul className="uppercase">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                className="group"
                onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>home
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                className="group"
                onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>about
                </li>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={100}
                className="group"
                onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>skills
                </li>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                className="group"
                onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>projects
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                className="group"
                onClick={handleNav}>
                <li className="py-4 text-sm font-semibold">
                  <span className="text-gray-300">// </span>contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#46a0ff] font-bold">
                let's connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Links
                  href="https://www.linkedin.com/in/campos415/"
                  target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Links>
                <Links href="https://github.com/campos-415" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Links>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  onClick={handleNav}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Links href="/CesarCampos.pdf" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFilePdf />
                  </div>
                </Links>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
