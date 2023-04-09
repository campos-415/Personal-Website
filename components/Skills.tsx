import Image from 'next/image'
import React from 'react'
import Skill from './Skill'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import react from '../public/assets/skills/react.png'
import nextjs from '../public/assets/skills/nextjs.png'
import typescript from '../public/assets/skills/typescript.png'
import javascript from '../public/assets/skills/javascript.png'
import node from '../public/assets/skills/node.png'
import firebase from '../public/assets/skills/firebase.png'
import tailwind from '../public/assets/skills/tailwind.png'
import github from '../public/assets/skills/github.png'

function Skills() {
  return (
    <section id="skills">
      <div className="w-full lg:h-screen p-2 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#46a0ff]">
            <span className="text-gray-400">// </span>Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
            <Skill skillImg={html} name="html" />
            <Skill skillImg={css} name="css" />
            <Skill skillImg={javascript} name="javascript" />
            <Skill skillImg={typescript} name="typescript" />
            <Skill skillImg={react} name="react" />
            <Skill skillImg={nextjs} name="nextjs" />
            <Skill skillImg={firebase} name="firebase" />
            <Skill skillImg={tailwind} name="tailwind" />
            <Skill skillImg={github} name="github" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills