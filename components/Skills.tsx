import Image from 'next/image'
import React from 'react'
import Skill from './Skill'

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          <span className="text-gray-400">// </span>Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2  gap-8">
          <Skill name="html" />
          <Skill name="css" />
          <Skill name="javascript" />
          <Skill name="typescript" />
          <Skill name="react" />
          <Skill name="nextjs" />
          <Skill name="node" />
          <Skill name="firebase" />
          <Skill name="tailwind" />
          <Skill name="github" />
        </div>
      </div>
    </div>
  );
}

export default Skills