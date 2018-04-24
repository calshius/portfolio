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
          <br />
          Language proficiences:
          <li>Python (2.7-3.3)</li>
          <li>Nodejs (6-8+)</li>
          <li>Java   (7-8)</li>
          <li>Groovy</li>
          <li>Ruby (on-rails)</li>
          <li>GatsbyJS</li>
          <li>ReactJS</li>
          <li>Shell scripting (bash-ksh-zsh)</li>
        </div>
      </div>
    )
  }
}

export default About
