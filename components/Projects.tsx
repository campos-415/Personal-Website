import React from 'react'
import Project from './Project'
import comflix from '../public/assets/projects/comflix.jpg'
import twitter from '../public/assets/projects/twitter.jpg'
import gamelandBG from '../public/assets/projects/gamelandBG.jpg'
import comflixV1 from '../public/assets/projects/ComFlix-Home.png'

function Projects() {
  return (
    <section id="projects">
      <div className="w-full pt-12">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#46a0ff]">
            <span className="text-gray-400">// </span>Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Project
              name="Game Land"
              tools="TypeScript, NextJs, Tailwind"
              imgUrl={gamelandBG}
              projectUrl="/gameland"
              projectLiveUrl="https://game-land-one.vercel.app/"
            />
            <Project
              name="Comflix"
              tools="TypeScript, NextJs, Tailwind"
              imgUrl={comflix}
              projectUrl="/comflix"
              projectLiveUrl="https://comflix.vercel.app/"
            />
            <Project
              name="Twitter Clone"
              tools="JavaScript, NextJs, Tailwind"
              imgUrl={twitter}
              projectUrl="/twitter"
              projectLiveUrl="https://twitter-clone415.vercel.app/"
            />
            <Project
              name="Comflix V1"
              tools="Vanilla JavaScript,CSS, HTML5"
              imgUrl={comflixV1}
              projectUrl="/comflixv1"
              projectLiveUrl="https://moviefinder415.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects