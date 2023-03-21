import Image from "next/image";
import React from "react";
import comflixImg from "../public/assets/projects/comflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import netflixloginmb from "../public/assets/comflixSC/netflixloginmb.png";
import netflixloginip from "../public/assets/comflixSC/netflixloginip.png";
import netflixloginim from "../public/assets/comflixSC/netflixloginim.png";
import netflixmb from "../public/assets/comflixSC/netflixmb.png";
import netflixip from "../public/assets/comflixSC/netflixip.png";
import netflixim from "../public/assets/comflixSC/netflixim.png";
import netflixmodalmb from "../public/assets/comflixSC/netflixmodalmb.png";
import netflixmodalip from "../public/assets/comflixSC/netflixmodalip.png";
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
            src={comflixImg}
            fill
            className="absolute z-1 object-cover"
            alt="projectImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Comflix</h2>
            <h3>ReactJS/ NextJs/ TypeScript/ TailwindCss</h3>
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
              I recently created a movie streaming website using a range of
              powerful technologies to ensure a smooth and efficient user
              experience. The website is built using TypeScript, which has
              helped to catch any errors before the production stage. ReactJS
              and NextJS have been used to create an optimized and fast website,
              while TailwindCSS has been employed to create an appealing and
              modern design. I have also integrated Firebase, ModalUI, and
              Recoil to enhance the functionality and interactivity of the
              website. To display movie information, I have implemented TMDB
              API, which provides comprehensive and up-to-date details on
              movies. One of the standout features of the website is its modals,
              which allow users to view movie trailers. Additionally, I have
              included a search feature, which enables users to easily find
              their desired movie from our extensive collection. The website has
              been deployed on Vercel, ensuring reliable and efficient access
              for all users. Overall, the website provides a seamless and
              enjoyable experience for movie lovers, making it the perfect
              platform for discovering and streaming movies.
            </p>
            <div className="mt-10">
              <p>
                <span className="text-lg font-bold">Demo E-mail:</span>{" "}
                demo@gmail.com
              </p>
              <p>
                <span className="text-lg font-bold">Demo Password:</span>{" "}
                demo123
              </p>

              <Link href="https://comflix.vercel.app/" target="_blank">
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
              </Link>
              <Link
                href="https://github.com/campos-415/Comflix.git"
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
                  React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  NextJs
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  TypeScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Recoil
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
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={netflixloginmb}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={netflixmb} width={500} height={500} alt="projectImg" />
          </div>
          <div className="w-full h-[437px] m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={netflixmodalmb}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={netflixmodalip}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={netflixloginip}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={netflixip} width={200} height={200} alt="projectImg" />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={netflixloginim}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={netflixim} width={500} height={500} alt="projectImg" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/#projects">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out">
              <IoMdArrowBack size={25} />
              <p className="text-lg underline">Back</p>
            </div>
          </Link>
          <Link href="/twitter">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out">
              <p className="text-lg underline">Next Project</p>
              <IoMdArrowForward size={25} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default comflix;
