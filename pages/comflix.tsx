import Image, { StaticImageData } from "next/image";
import React from "react";
import comflixImg from "../public/assets/projects/comflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
interface Props {
  projectImg: StaticImageData;
}

function comflix({ projectImg }: Props) {
  return (
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
          <p className="text-[#5651e5]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p className="">
            This is Movie search app, We offer a wide selection of movies for
            review, covering a variety of genres and interests. Browse through
            our collection and find your next favorite watch. Our easy-to-use
            website allows you to search for movies by title, author, or
            keyword, making it simple to find exactly what you're looking for.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
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
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="flex items-center space-x-2 hover:text-[#5651e5] active:scale-[0.90] duration-300 ease-in-out">
            <IoMdArrowBack size={25} />
            <p className="text-lg underline">Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default comflix;
