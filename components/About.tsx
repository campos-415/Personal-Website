import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdArrowBack, IoMdArrowDown } from 'react-icons/io';
import aboutImg from "../public/assets/profilepic.png";
import arrowImg from "../public/assets/undraw_fun-arrow.svg";
import { RiMapPinLine } from 'react-icons/ri';

function About() {
  return (
    <section id="about">
      <div className="w-full md:h-screen flex items-center py-16  last-of-type:flex-col ">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2 px-3">
            <p className="uppercase text-xl tracking-widest text-[#46a0ff]">
              <span className="text-gray-400">// </span>About
            </p>
            <h2 className="py-4"> Who I Am</h2>
            <p className="py-4 text-gray-400">
              {" "}
              // NOT your regular developer :)
            </p>
            <p>
              Hello, I am a 24 year old Frontend Software Engineer with a
              passion for coding and creating innovative solutions. When I'm not
              busy writing code, you can find me spending time with my two furry
              best friends - my dogs. I also enjoy modifying cars and capturing
              life's moments through photography. I find that my hobbies allow
              me to express my creativity in unique ways and give me a fresh
              perspective when tackling complex engineering problems. In my free
              time, I love exploring new places, trying new foods, and meeting
              new people. I believe in the power of continuous learning and
              always strive to keep up with the latest technologies and
              advancements in my field.
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 flex-col">
            <Image
              src={aboutImg}
              className=""
              width={500}
              height={500}
              alt="img"
            />
            <div className="flex flex-col items-center justify-between my-2">
              <Image
                src={arrowImg}
                className=""
                width={50}
                height={50}
                alt="img"
              />
              <p className='flex mt-1'>
                Me @ Sequoia National Park <span className='animate-bounce block'><RiMapPinLine /></span>
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="flex items-center space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out pt-10">
            <IoMdArrowDown size={25} />
            <p className="text-lg underline ">Check out my Projects</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default About