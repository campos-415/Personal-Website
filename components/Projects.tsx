import React from 'react'
import Project from './Project'
import comflix from '../public/assets/projects/comflix.jpg'
import twitter from '../public/assets/projects/twitter.jpg'

function Projects() {
  return (
    <section id="projects">
      <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          <span className="text-gray-400">// </span>Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Projects