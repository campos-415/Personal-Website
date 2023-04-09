import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import gamelandBG from "../public/assets/projects/gamelandBG.jpg";
import GameLandHome from "../public/assets/GLSC/GameLandHome.png";
import GameLandHome_Dark from "../public/assets/GLSC/GameLandHome_Dark.png";
import GameLandLogin from "../public/assets/GLSC/GameLandLogin.png";
import GameLandGenres from "../public/assets/GLSC/GameLandGenres.png";
import GameLandMyList from "../public/assets/GLSC/GameLandMyList.png";
import GameLandUser from "../public/assets/GLSC/GameLandUser.png";
import GameLandUserM from "../public/assets/GLSC/GameLandUserM.png";
import GameLandLoginM from "../public/assets/GLSC/GameLandLoginM.png";
import GameLandHomeM from "../public/assets/GLSC/GameLandHomeM.png";
import GameLandsidebar from "../public/assets/GLSC/GameLandSidebar.png";
import GameLandCreatorsM from "../public/assets/GLSC/GameLandCreatorsM.png";
import GameLandPlatforms_LightM from "../public/assets/GLSC/GameLandPlatforms_LightM.png";
import GameLandHero from "../public/assets/GLSC/GameLandHero.png";
import GameLandCreators_Light from "../public/assets/GLSC/GameLandCreators_Light.png";
import GameLandHome_LightM from "../public/assets/GLSC/GameLandHome_LightM.png";
import performance from "../public/assets/GLSC/performance.png";
import Head from "next/head";

function comflix() {
  return (
    <>
      <Head>
        <title>Cesar Campos/GameLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
          <Image
            src={gamelandBG}
            fill
            className="absolute z-1 object-cover"
            alt="projectImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">GameLand</h2>
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
              I recently developed a video game search website using
              cutting-edge technologies to ensure a smooth and enjoyable user
              experience. The website is built using TypeScript, which has
              helped me to catch any errors before the production stage. To
              create an optimized and fast website, I have utilized ReactJS and
              NextJS, while TailwindCSS has been employed to create an appealing
              and modern design. I have integrated Firebase and Recoil to
              enhance the functionality and interactivity of the website. To
              display video game information, I have implemented the RAWG API,
              which provides comprehensive and up-to-date details on video
              games. The website has been deployed on Vercel, ensuring reliable
              and efficient access for all users.
            </p>
            <div className="mt-10">
              <Link href="https://game-land-one.vercel.app/" target="_blank">
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
              </Link>
              <Link
                href="https://github.com/campos-415/GameLand.git"
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
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandLogin}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandUser}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandHome_Dark}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandHome}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandMyList}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandGenres}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandHero}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandCreators_Light}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandsidebar}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={performance}
              width={500}
              height={500}
              alt="projectImg"
            />
          </div>

          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandLoginM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandUserM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandHomeM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandHome_LightM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandCreatorsM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
          <div className="w-full h-full m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={GameLandPlatforms_LightM}
              width={200}
              height={200}
              alt="projectImg"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/#projects">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out">
              <IoMdArrowBack size={25} />
              <p className="text-lg underline">Back</p>
            </div>
          </Link>
          <Link href="/comflix">
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
