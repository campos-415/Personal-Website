import Links from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFilePdf, BsGear } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import heroImg from "../public/assets/meandbuki.png";
import Image from "next/image";



function HomePage() {
  return (
    <section id="home">
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full m-auto p-2 flex items-center justify-center">
          <div className="flex flex-wrap md:flex-nowrap">
            <div>
              <div className="flex items-center justify-center">
                <p className="text-xs uppercase sm:text-sm tracking-widest text-gray-600">
                  {" "}
                  Let's build something cool together
                </p>
                <span className="ml-1 block animate-spin-slow">
                  <BsGear />
                </span>
              </div>
              <h1 className="py-4 text-gray-700">
                Hi, I'm <span className="text-[#46a0ff]">Cesar</span>
              </h1>
              <h1 className="py-2 text-gray-700">A Frontend Developer</h1>
              <p className="py-4 text-gray-600 max-w-[80%] m-auto">
                I have a strong foundation in HTML, CSS, JavaScript & React I am
                skilled at implementing responsive design principles to ensure
                that my projects look great on all devices
              </p>
              <div className="flex items-center justify-center md:justify-between max-w-[330px] m-auto py-4">
                <Links
                  href="https://www.linkedin.com/in/campos415/"
                  target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn size={25} />
                  </div>
                </Links>
                <Links href="https://github.com/campos-415" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub size={25} />
                  </div>
                </Links>
                <Link to="contact" spy={true} smooth={true} duration={100}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail size={25} />
                  </div>
                </Link>
                <Links href="/CesarCampos.pdf" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFilePdf size={25} />
                  </div>
                </Links>
              </div>
            </div>
            <div className="flex items-center justify-between max-w-[100px] md:max-w-[230px] m-auto py-4">
              <Image
                
                style={{ width: "auto", height: "auto" }}
                src={heroImg}
                width={400}
                height={400}
                alt="heroImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
