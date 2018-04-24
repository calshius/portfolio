import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import redhatLogo from '../../assets/images/projects/rhel-logo.jpg'
import awsLogo from '../../assets/images/projects/aws-logo.jpg'
import dockerLogo from '../../assets/images/projects/docker-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Knowledge of">
        <div className="row">
          <ExperienceUnit
            logo={awsLogo}
            colour="#FFFFFF"
            title="AWS"
            link="https://www.aws.com/"
            timeperiod="Cloudformations, EC2, Lambda, Architecture"
            subtitle="Attended both the developer and architect course.
            I have also used services in anger for creating three tier model (TIER 1/2 DMZ, TIER Corp)
            using cloudformation templates and various AWS services"
          />
          <ExperienceUnit
            logo={redhatLogo}
            colour="#FFFFFF"
            title="Redhat"
            link="https://www.redhat.com/"
            timeperiod="Openshift, Ansible, Cloudforms, Rhel 5-7"
            subtitle="I have both used Redhat (RHEL 5-7) and deployed rhel solutions
            (openshift, cloudforms) using redhat tools (satellite server, Ansible tower) to setup PaaS solutions and
            IaaS solutions."
          />
          <ExperienceUnit
            logo={dockerLogo}
            colour="#FFFFFF"
            title="Docker"
            link="https://www.docker.com/"
            timeperiod="K8s, Docker Swarm, Kata, Rkt"
            subtitle="I use docker quite heavily in my day to day workflow as everything I build is
            with the intention of being containerised or to work in a containerised enviroment. I have used Docker mostly but
            have experience with Rkt and also various orchestration layers such as OShift, K8s and swarm. Also played around
            with Kata containers too."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
