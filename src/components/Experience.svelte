<script>
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
      period: "2020 \u2013 2024",
      companyLink: "https://www.morganstanley.com/",
      description:
        "Spearheaded Kubernetes application design and platform development for enterprise-scale deployments. Led the implementation of GitOps workflows using ArgoCD and Flux. Designed and implemented observability solutions with Grafana, Prometheus, and OpenTelemetry. Mentored teams on cloud-native best practices and container security.",
    },
    {
      title: "Technical Cloud Assistant VP",
      company: "Barclays",
      period: "2019 \u2013 2020",
      companyLink: "https://www.barclays.co.uk/",
      description:
        "Enhanced developer experience through cloud toolchain engineering. Implemented CI/CD pipelines for cloud-native applications using Jenkins and GitHub Actions. Developed self-service platforms for infrastructure provisioning with Terraform and Ansible.",
    },
    {
      title: "DevOps and Cloud Associate",
      company: "JP Morgan Chase",
      period: "2017 \u2013 2019",
      companyLink: "https://www.jpmorganchase.com/",
      description:
        "Drove cloud adoption and CI/CD implementation across multiple teams. Automated infrastructure deployment using CloudFormation and Terraform. Developed monitoring solutions with ELK stack and Prometheus.",
    },
    {
      title: "Technical Specialist",
      company: "CYBG",
      period: "2014 \u2013 2017",
      companyLink: "https://www.virginmoneyukplc.com/",
      description:
        "Managed system administration and microservice development for banking platforms. Implemented automation for routine operational tasks using Python and Bash. Supported the migration from monolithic to microservice architecture.",
    },
  ];
</script>

<div class="section-label">Experience</div>

<div class="timeline">
  {#each experiences as exp}
    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" class="entry">
      <div class="meta">
        <span class="period">{exp.period}</span>
      </div>
      <div class="details">
        <h3>
          {exp.title} &middot; {exp.company}
          <i class="fas fa-arrow-up-right-from-square link-icon"></i>
        </h3>
        <p>{exp.description}</p>
      </div>
    </a>
  {/each}
</div>

<style>
  .section-label {
    display: none;
  }

  .timeline {
    display: flex;
    flex-direction: column;
  }

  .entry {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 16px;
    padding: 24px;
    margin: 0 -24px;
    border-radius: var(--radius);
    text-decoration: none;
    color: inherit;
    transition: background var(--transition);
    border: 1px solid transparent;
  }

  .entry:hover {
    background: var(--bg-surface);
    border-color: var(--border-muted);
    text-decoration: none;
  }

  .entry:hover h3 {
    color: var(--accent);
  }

  .meta {
    padding-top: 5px;
  }

  .period {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-muted);
    font-weight: 600;
    white-space: nowrap;
  }

  .details h3 {
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 8px;
    line-height: 1.4;
    transition: color var(--transition);
  }

  .link-icon {
    font-size: 0.65rem;
    margin-left: 4px;
    transition: transform var(--transition);
  }

  .entry:hover .link-icon {
    transform: translate(2px, -2px);
  }

  .details p {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .section-label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text);
      margin-bottom: 24px;
      position: sticky;
      top: 0;
      padding: 16px 0;
      background: var(--bg);
      z-index: 10;
    }

    .entry {
      grid-template-columns: 1fr;
      gap: 4px;
      padding: 16px;
      margin: 0 -16px;
    }

    .period {
      font-size: 0.7rem;
    }
  }
</style>
