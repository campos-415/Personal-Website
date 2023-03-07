import Image from 'next/image';
import React from 'react'

function About() {
  return (
    <div className="w-full md:h-screen flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-4"> // NOT your regular developer :)</p>
          <p>
            Hello, I am a 24 year old Salvadorean Frontend Software Engineer
             with a passion for coding and creating innovative
            solutions. When I'm not busy writing code, you can find me spending
            time with my two furry best friends - my dogs. I also enjoy
            modifying cars and capturing life's moments through photography. I
            find that my hobbies allow me to express my creativity in unique
            ways and give me a fresh perspective when tackling complex
            engineering problems. In my free time, I love exploring new places,
            trying new foods, and meeting new people. I believe in the power of
            continuous learning and always strive to keep up with the latest
            technologies and advancements in my field. <br/> As a web
            developer, I have a strong background in building and maintaining
            websites and web applications. My expertise lies in utilizing
            technologies such as HTML, CSS, JavaScript, TypeScript, React,
            Next.js and Firebase to create dynamic and responsive designs that
            enhance user experience. I am highly detail-oriented, and I am
            always looking for ways to improve my skills and stay up-to-date
            with the latest web development trends. With my combination of
            technical proficiency and creative problem-solving abilities, I am
            confident that I can help bring your next web project to life.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest Projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/profilepic.png"
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