import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdArrowBack, IoMdArrowDown } from 'react-icons/io';
import aboutImg from "../public/assets/profilepic.png";

function About() {
  return (
    <div id="about" className="w-full md:h-screen flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            <span className="text-gray-400">// </span>About
          </p>
          <h2 className="py-4"> Who I Am</h2>
          <p className="py-4 text-gray-400">
            {" "}
            // NOT your regular developer :)
          </p>
          <p>
            Hello, I am a 24 year old Salvadorean Frontend Software Engineer
            with a passion for coding and creating innovative solutions. When
            I'm not busy writing code, you can find me spending time with my two
            furry best friends - my dogs. I also enjoy modifying cars and
            capturing life's moments through photography. I find that my hobbies
            allow me to express my creativity in unique ways and give me a fresh
            perspective when tackling complex engineering problems. In my free
            time, I love exploring new places, trying new foods, and meeting new
            people. I believe in the power of continuous learning and always
            strive to keep up with the latest technologies and advancements in
            my field.
          </p>
          <Link href="/#projects">
            <div className="flex items-center space-x-2 hover:text-[#5651e5] active:scale-[0.90] duration-300 ease-in-out pt-10">
              <IoMdArrowDown className='animate-bounce' size={25} />
              <p className="text-lg underline ">Check out my Projects</p>
            </div>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={aboutImg}
            className=""
            width={500}
            height={500}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default About