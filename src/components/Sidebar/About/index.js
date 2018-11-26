import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A DevOps evangelist and SRE that takes every step to make something work both
          safely and in automation.
          <h1> </h1>
          Language proficiences:
          <h1></h1>
          <li>Python (2.7-3.6)</li>
          <li>Nodejs (6-8+)</li>
          <li>Java   (7-8)</li>
          <li>Groovy</li>
          <li>Ruby </li>
          <li>Golang</li>
          <li>GatsbyJS</li>
          <li>ReactJS</li>
          <li>Shell scripting (bash-ksh-zsh)</li>
          <h1></h1>
          Papers & Presentations
          <li>Paper: <a href="https://docs.google.com/document/d/1LCg-6cQVqo0yLmJGkD4yIA_dcBHvBSqudOf8LZTUYvU/edit?usp=sharing">M.O.S.A.I.C</a></li>
          <li>Presentation: <a href="https://dev-test-pres.netlify.com">Panoptic Culture</a></li>
        </div>
      </div>
    )
  }
}

export default About
