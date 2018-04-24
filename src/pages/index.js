import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Callum Alexander Fay</span>
        </h5>

        <h3 className="bold">
          I'm an SRE that covers all bases in terms of development and infrastructure.
          I am also a person who drives culture as I have lead and managed culture projects such as Ignite and DevOps everywhere.
          I'm a strong DevOps enthusiast and have written a paper on this called MOSAIC and have attended various conferences about the subject.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
