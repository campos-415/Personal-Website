import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLine, FaLinkedinIn } from "react-icons/fa";

function HomePage() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let's build something cool together
            </p>
            <span className="ml-1 block animate-spin-slow">🤪</span>
          </div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Cesar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Frontend Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I have a strong foundation in HTML, CSS, JavaScript, TypeScript,
            React & NextJs. I am skilled at implementing responsive design
            principles to ensure that my projects look great on all devices
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
