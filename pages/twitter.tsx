import Image, { StaticImageData } from "next/image";
import React from "react";
import TwitterImg from "../public/assets/projects/twitter.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import twittermb from "../public/assets/TwitterPS/twittermb.png";
import twitterim from "../public/assets/TwitterPS/twitterim.png";
import twitterImac from "../public/assets/TwitterPS/twitterImac.png";
import twitterMacbook from "../public/assets/TwitterPS/twitterMacbook.png";
import twitterIphone from "../public/assets/TwitterPS/twitterIphone.png";
import twitterlogedin from "../public/assets/TwitterPS/twitterlogedin.png";
import twittercommentmb from "../public/assets/TwitterPS/twittercommentmb.png";
import twittermodalmb from "../public/assets/TwitterPS/twittermodalmb.png";
import Head from "next/head";

function Twitter() {
  return (
    <>
      <Head>
        <title>Cesar Campos/Social Media Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
          <Image
            src={TwitterImg}
            fill
            className="absolute z-1 object-cover"
            alt="projectImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Social Media Clone</h2>
            <h3>ReactJS/ NextJs/ TypeScript/ TailwindCss</h3>
          </div>
        </div>
        <div className="max-w-[1240px] w-full mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="text-[#46a0ff]">
              <span className="text-gray-400">// </span>Project
            </p>
            <h2 className="py-4">Overview</h2>
            <p className="">
              I recently created a social media clone using some of the latest
              web development tools and technologies. The clone was built using
              JavaScript, ReactJS, NextJS, TailwindCSS, Firebase, ModalUI, and
              Recoil. To deploy the app, I used Vercel, a popular cloud platform
              for hosting static sites and serverless functions. <br />
              The app includes a range of features that you would typically find
              on any social media platform. Users can create accounts and login
              to the platform to access the main feed. From there, they can
              create new posts, which can include text, images, and videos.
              Other users can view these posts and leave comments and like them
              <br />
              Overall, the social media clone is a great example of how modern
              web technologies can be used to create dynamic and engaging user
              experiences. With its sleek design, intuitive user interface, and
              rich feature set, the app is sure to be a hit with anyone looking
              for a new way to connect with others online.
            </p>
            <Link href="https://twitter-clone415.vercel.app/" target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </Link>
            <Link
              href="https://github.com/campos-415/twitter-clone.git"
              target="_blank">
              <button className="px-8 py-2 mt-4">Code</button>
            </Link>
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
                  JavaScript
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
              src={twittermb}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twitterMacbook}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twittermodalmb}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twittercommentmb}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twitterIphone}
              className=""
              width={200}
              height={200}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twitterlogedin}
              className=""
              width={200}
              height={200}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twitterim}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
          <div className="w-full h-auto m-auto shadow-2xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src={twitterImac}
              className=""
              width={500}
              height={500}
              alt="img"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/comflix">
            <div className="flex items-center mt-11 space-x-2 hover:text-[#46a0ff] active:scale-[0.90] duration-300 ease-in-out mb-4">
              <IoMdArrowBack size={25} />
              <p className="text-lg underline">Previous Project</p>
            </div>
          </Link>
          <Link href="/">
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

export default Twitter;
