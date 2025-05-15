<script>
  // Sample experience data
  const experiences = [
    {
      title: "Principal GenAI VP",
      company: "Morgan Stanley",
      period: "Present",
      companyLink: "https://www.morganstanley.com/",
      description:
        "Leading the development of generative AI solutions for enterprise applications. Architecting and implementing RAG systems using semantic kernel, vector databases, and LLM integration. Designing scalable Kubernetes-based platforms for AI/ML workloads with a focus on security and compliance in financial services.",
    },
    {
      title: "DevOps and Containerisation VP",
      company: "Morgan Stanley",
      period: "2020-2024",
      companyLink: "https://www.morganstanley.com/",
      description:
        "Spearheaded Kubernetes application design and platform development for enterprise-scale deployments. Led the implementation of GitOps workflows using ArgoCD and Flux. Designed and implemented observability solutions with Grafana, Prometheus, and OpenTelemetry. Mentored teams on cloud-native best practices and container security.",
    },
    {
      title: "Technical cloud Assistant VP",
      company: "Barclays",
      period: "2019-2020",
      companyLink: "https://www.barclays.co.uk/",
      description:
        "Enhanced developer experience through cloud toolchain engineering. Implemented CI/CD pipelines for cloud-native applications using Jenkins and GitHub Actions. Developed self-service platforms for infrastructure provisioning with Terraform and Ansible. Collaborated with security teams to implement DevSecOps practices.",
    },
    {
      title: "DevOps and Cloud associate",
      company: "JP Morgan and Chase",
      period: "2017-2019",
      companyLink: "https://www.jpmorganchase.com/",
      description:
        "Drove cloud adoption and CI/CD implementation across multiple teams. Automated infrastructure deployment using CloudFormation and Terraform. Developed monitoring solutions with ELK stack and Prometheus. Implemented containerization strategies for legacy applications using Docker and Kubernetes.",
    },
    {
      title: "Technical Specialist",
      company: "CYBG",
      period: "2014-2017",
      companyLink: "https://www.virginmoneyukplc.com/",
      description:
        "Managed system administration and microservice development for banking platforms. Implemented automation for routine operational tasks using Python and Bash. Designed and deployed RESTful APIs for internal services. Supported the migration from monolithic to microservice architecture.",
    },
  ];
</script>

<section class="experience">
  <h1>Experience</h1>

  <div class="timeline">
    {#each experiences as exp, i}
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p class="period">{exp.period}</p>
          <p>{exp.description}</p>
          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer"
            >Company Website</a
          >
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .experience {
    padding: 40px 0;
    position: relative;
  }

  h1 {
    font-size: 3rem; /* Larger heading */
    margin-bottom: 30px;
    color: white;
    position: relative;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: rgba(255, 255, 255, 0.5); /* Lighter timeline line */
  }

  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    padding-left: 50px;
  }

  .timeline-dot {
    position: absolute;
    left: 16px;
    top: 5px;
    width: 12px; /* Slightly larger dot */
    height: 12px;
    border-radius: 50%;
    background: #ec8305; /* Orange dot */
    border: 2px solid white;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
    backdrop-filter: blur(5px);
    padding: 25px; /* More padding */
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 5px;
    color: #ec8305; /* Orange heading */
    font-size: 1.6rem; /* Larger job title */
  }

  h4 {
    margin: 0 0 10px;
    color: white;
    font-size: 1.3rem; /* Larger company name */
  }

  .period {
    font-style: italic;
    color: #dbd3d3; /* Light gray */
    margin-bottom: 15px;
    font-size: 1.1rem; /* Larger period text */
  }

  p {
    font-size: 1.1rem; /* Larger description text */
    margin-bottom: 15px;
    line-height: 1.6;
  }

  a {
    color: #ec8305; /* Orange links */
    text-decoration: none;
    font-size: 1.1rem; /* Larger link text */
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ec8305;
    border-radius: 4px;
    transition: all 0.2s;
  }

  a:hover {
    background-color: #ec8305;
    color: white;
    text-decoration: none;
  }
</style>
