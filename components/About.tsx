import Image from 'next/image';

import React from 'react'
import aboutImg from "../public/assets/profilepic.png";
import babiesImg from "../public/assets/fatties2.jpeg";
import heartImg from "../public/assets/heart.svg";
import { Link, animateScroll } from "react-scroll";



function About() {
  return (
    <section id="about" className="pt-12 md:pt-24">
      <div className="w-full md:h-screen sm:inline flex flex-col items-center justify-center py-16 ">
        <div className="max-w-[1240px] m-auto gap-8">
          <div className="col-span-2 px-3">
            <p className="uppercase text-xl tracking-widest text-[#46a0ff]">
              <span className="text-gray-400">// </span>About
            </p>
            <h2 className="py-4"> Who I Am</h2>
            <p className="py-4 text-gray-300 span_font text-lg">
              {" "}
              &lt;NOT your regular developer/&gt; &nbsp;{" "}
              <span className="absolute rotate-90">:)</span>
            </p>
            <p>
              Hello, I am a Frontend Software Engineer with a passion for coding
              and creating innovative solutions. When I'm not busy working on my{" "}
              <span className="text-[#46a0ff]">
                <Link to="projects" spy={true} smooth={true} duration={100} className='cursor-pointer'>
                  Projects
                </Link>
              </span>{" "}
              writting code, you can find me spending time with my two furry
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
        </div>
        
      </div>
    </section>
  );
}

export default About