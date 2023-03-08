import Image, { StaticImageData } from 'next/image';
import React from 'react'
interface Props {
  name: string
  skillImg: StaticImageData
}

function Skill({name, skillImg}: Props) {
  return (
    <>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={skillImg}
              width={64}
              height={64}
              alt="skills"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className='uppercase'>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill