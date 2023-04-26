import Image from 'next/image';
import React from 'react'
import aboutImg from "../public/assets/profilepic.png";
import babiesImg from "../public/assets/fatties2.jpeg";
import heartImg from "../public/assets/heart.svg";
import { Link } from "react-scroll";



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
              &lt;NotYour regular=&#123;developer&#125; /&gt; &nbsp;{" "}
              <span className="absolute rotate-90">:)</span>
            </p>
            <p>
              Hello, I am a Frontend Software Engineer with a passion for coding
              and creating innovative solutions. When I'm not busy working on my{" "}
              <span className="text-[#46a0ff]">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className="cursor-pointer">
                  Projects
                </Link>
              </span>{" "}
              writing code, you can find me spending time with my two furry best
              friends - my dogs. I also enjoy modifying cars and capturing
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
        <div className=" flex flex-col relative group mx-auto md:h-[600px] max-w-[600px]">
          <div className="md:absolute top-10 left-36 w-auto h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 md:group-hover:scale-105 ease-in duration-300 flex-col group my-12  md:my-0 md:rotate-[15deg] md:group-hover:translate-x-[160px] md:group-hover:rotate-0 bg-white">
            <Image
              src={aboutImg}
              className="group rounded-md"
              width={300}
              height={300}
              alt="img"
            />
            <div className="flex flex-col items-center justify-between my-2">
              <p className="flex mt-1 pt-8 font-permanentMarker">
                I love exploring new places{" "}
              </p>
            </div>
          </div>
          <div className="md:absolute top-10 z-2 left-36 w-auto h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 md:group-hover:scale-105 ease-in duration-300 flex-col group md:rotate-[-15deg] md:group-hover:translate-x-[-200px] md:group-hover:rotate-0 bg-white">
            <Image
              src={babiesImg}
              className="group rounded-md"
              width={300}
              height={300}
              alt="img"
            />
            <div className="flex pt-8 items-center justify-start my-2">
              <p className="flex mt-1 font-permanentMarker">
                Buki + Me + Koda{" "}
                <span className="ml-1 block">
                  <Image
                    src={heartImg}
                    className=""
                    width={25}
                    height={25}
                    alt="img"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About