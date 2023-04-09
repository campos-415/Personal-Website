import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFilePdf, BsFillPersonLinesFill, BsGear, BsRocket } from "react-icons/bs";
import { FaGithub, FaLine, FaLinkedinIn } from "react-icons/fa";

function HomePage() {
  return (
    <section id="home">
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full m-auto p-2 flex items-center justify-center">
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
              I have a strong foundation in HTML, CSS, JavaScript, TypeScript,
              React & NextJs. I am skilled at implementing responsive design
              principles to ensure that my projects look great on all devices
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <Link
                href="https://www.linkedin.com/in/campos415/"
                target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn size={25} />
                </div>
              </Link>
              <Link href="https://github.com/campos-415" target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={25} />
                </div>
              </Link>
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail size={25} />
                </div>
              </Link>
              <Link href="/CesarCampos.pdf" target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFilePdf size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
