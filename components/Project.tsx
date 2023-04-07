import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi"
interface Props {
  imgUrl: StaticImageData;
  name: string;
  tools: string;
  projectUrl: string
  projectLiveUrl: string
}

function Project({ imgUrl, name, tools, projectUrl, projectLiveUrl }: Props) {
  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#46a0ff] to-[#285e97] py-12 ">
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="project"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tools}</p>

        <Link href={projectUrl}>
          <div className="flex items-center justify-center  my-4 w-full sm:w-[80%]">
            <p className="flex items-center text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info{" "}
              <span className="ml-2">
                {" "}
                <FaInfoCircle size={25} />
              </span>
            </p>
          </div>
        </Link>
        <Link href={projectLiveUrl} target="_blank">
          <div className="flex items-center justify-center  my-4 w-full sm:w-[80%]">
            <p className="flex items-center text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Live Project{" "}
              <span className="ml-2">
                {" "}
                <BiLinkExternal size={25} />
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Project;
