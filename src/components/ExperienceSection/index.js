import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import cybgLogo from '../../assets/images/experience/cybg-logo.jpg'
import jpmcLogo from '../../assets/images/experience/jpmc-logo.png'
import iomartLogo from '../../assets/images/experience/iomart-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={iomartLogo}
            colour='#FFFFFF'
            title='Iomart'
            link='https://www.iomart.com/'
            timeperiod='2012 - 2014'
            subtitle='First job out of university and I was responsible for multiple customers
            platforms and also for providing level 3 support for any issues and covered all 7 layers of the OSI model.'
          />
          <ExperienceUnit
            logo={cybgLogo}
            colour='#FFFFFF'
            title='CYBG'
            link='https://www.cybg.com/'
            timeperiod='2014 - 2017'
            subtitle='Worked across various teams implementing CI/CD and Infra as code
              using tools like Ansible, Openshift, Jenkins and using languages like
              Python, Ruby and Java 7.'
          />
          <ExperienceUnit
            logo={jpmcLogo}
            colour='#FFFFFF'
            title='JPMC'
            link='https://www.jpmc.com/'
            timeperiod='2017-present'
            subtitle='Built multiple systems from scratch to integrate with firmwide intiatives
            like public cloud enablement (aws, azure, oracle cloud), K8s, CI/CD Pipelines in jenkins and also integrated
            metrics systems to record both MI and TI with microservices written in nodejs and python.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
