import Image from "next/image";
import React from "react";
import comflixV1Img from "../public/assets/projects/ComFlix-Home.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
// import comflixmb1 from "../public/assets/comflixSCV1/comflixmb1.png";
// import comflixmb2 from "../public/assets/comflixSCV1/comflixmb2.png";
// import comflixmb3 from "../public/assets/comflixSCV1/comflixmb3.png";
// import comflixmb4 from "../public/assets/comflixSCV1/comflixmb4.png";
// import comflixm1 from "../public/assets/comflixSCV1/comflixm1.png";
// import comflixm2 from "../public/assets/comflixSCV1/comflixm2.png";
// import comflixm3 from "../public/assets/comflixSCV1/comflixm3.png";
// import comflixm4 from "../public/assets/comflixSCV1/comflixm4.png";
import Head from "next/head";

function comflix() {
  return (
    <>
      <Head>
        <title>Cesar Campos/Comflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
          <Image
            src={comflixV1Img}
            fill
            className="absolute z-1 object-cover"
            alt="projectImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Comflix V1</h2>
            <h3>Vanilla JavaScript, CSS, HTML5</h3>
          </div>
        </div>
        <div className="max-w-[1240px] w-full mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="text-[#46a0ff]">
              {" "}
              <span className="text-gray-400">// </span>Project
            </p>
            <h2 className="py-4">Overview</h2>
            <p className="">
              This is a website that was built entirely using Vanilla
              JavaScript, CSS, and HTML5. My website is dedicated to showcasing
              an extensive collection of movies available in the OMDB API. With
              our clean and user-friendly interface, you can easily browse and
              search for your favorite movies. My site offers a comprehensive
              search functionality that allows you to look for movies based on
              their titles, directors, actors, and even genres. My website is
              designed to offer a seamless user experience with fast and
              efficient performance. I deployed my site through Vercel,
              ensuring that you can access my platform from anywhere at any
              time. In addition, my website provides detailed information about
              each movie, including the movie's plot, director, actors, genre,
              release date and rating. Overall, my website is
              an ideal destination for movie lovers who are looking for an
              extensive and well-organized collection of movies. With our
              easy-to-use interface, you can quickly find and enjoy your
              favorite movies.
            </p>
            <div className="mt-10">
              <Link href="https://moviefinder415.vercel.app/" target="_blank">
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
              </Link>
              <Link
                href="https://github.com/campos-415/Moviefinder415.git"
                target="_blank">
                <button className="px-8 py-2 mt-4">Code</button>
              </Link>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gary-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  HTML5
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Vercel
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Github
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] m-auto grid md:grid-cols-2 gap-8">
          {/* <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixmb1} width={500} height={500} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixmb2} width={500} height={500} alt="projectImg" />
          </div>
          <div className="w-full h-[437px] m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixmb3} width={500} height={500} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixmb4} width={500} height={500} alt="projectImg" />
          </div> */}
          {/* <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixm1} width={200} height={200} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixm2} width={200} height={200} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixm3} width={200} height={200} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={comflixm4} width={200} height={200} alt="projectImg" />
          </div> */}
        </div>
        <div className="flex items-center justify-between">
          <Link href="/twitter">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out mb-4">
              <IoMdArrowBack size={25} />
              <p className="text-lg underline">Previous Project</p>
            </div>
          </Link>
          <Link href="/#projects">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out mb-4">
              <p className="text-lg underline">Home</p>
              <IoMdArrowForward size={25} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default comflix;
