<script>
  const skillCategories = [
    {
      name: "AI Agentic SDKs & Frameworks",
      skills: ["Semantic Kernel", "LangChain", "LangGraph", "LangSmith", "OpenAI API", "Azure OpenAI", "Claude SDK", "Agents", "RAG", "Prompt Engineering"],
    },
    {
      name: "Machine Learning",
      skills: ["Hugging Face", "Embeddings", "Vector Databases", "Fine-Tuning", "NLP"],
    },
    {
      name: "DevOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Ansible", "Bash", "RHEL"],
    },
    {
      name: "Monitoring & Observability",
      skills: ["Grafana", "Prometheus", "Loki", "Jaeger", "Tempo"],
    },
    {
      name: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte"],
    },
    {
      name: "Backend",
      skills: ["Python", "FastAPI", "Flask", "Node.js", "Express", "GraphQL", "REST"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MS SQL", "Redis", "Kafka", "Snowflake"],
    },
    {
      name: "CI/CD & Version Control",
      skills: ["Git", "GitHub Actions", "Jenkins", "ArgoCD", "GitOps"],
    },
    {
      name: "Testing",
      skills: ["Jest", "Locust", "JMeter"],
    },
  ];

  let skillsOpen = $state(false);
  let searchQuery = $state('');

  /** @param {{ name: string, skills: string[] }} category */
  function filteredSkills(category) {
    if (!searchQuery.trim()) return category.skills;
    const q = searchQuery.toLowerCase();
    return category.skills.filter(s => s.toLowerCase().includes(q));
  }

  let hasResults = $derived(
    skillCategories.some(c => filteredSkills(c).length > 0)
  );
</script>

<div class="section-label">About</div>

<div class="about-text">
  <p>
    I'm a technology leader with over a decade of experience building scalable systems
    across financial services. My career has taken me from system administration and
    microservice development through to leading enterprise-wide
    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">Kubernetes</a>
    platforms, and now architecting generative AI solutions at scale.
  </p>

  <p>
    I've worked across major institutions including
    <a href="https://www.morganstanley.com/" target="_blank" rel="noopener noreferrer">Morgan Stanley</a>,
    <a href="https://www.barclays.co.uk/" target="_blank" rel="noopener noreferrer">Barclays</a>, and
    <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">JP Morgan Chase</a>,
    building expertise in containerization, cloud platforms, observability, and most recently
    RAG systems, multi-agent pipelines, and LLM integration.
  </p>

  <p>
    I believe the best technical leaders never lose touch with implementation details.
    I stay hands-on and lead from the front, whether that's debugging a production issue
    or designing a new platform architecture. I'm passionate about emerging technologies
    and enjoy tackling complex problems with pragmatic, well-crafted solutions.
  </p>
</div>

<div class="skills-section">
  <button class="skills-toggle" onclick={() => skillsOpen = !skillsOpen}>
    <span>Skills & Expertise</span>
    <i class="fas fa-chevron-down" class:rotated={skillsOpen}></i>
  </button>

  {#if skillsOpen}
    <div class="skills-body">
      <div class="search-wrapper">
        <i class="fas fa-search search-icon" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Filter skills..."
          bind:value={searchQuery}
        />
        {#if searchQuery}
          <button class="clear-btn" onclick={() => searchQuery = ''} aria-label="Clear search">
            <i class="fas fa-xmark"></i>
          </button>
        {/if}
      </div>

      {#if hasResults}
        {#each skillCategories as category}
          {#if filteredSkills(category).length > 0}
            <div class="skill-group">
              <h3>{category.name}</h3>
              <div class="tags">
                {#each filteredSkills(category) as skill}
                  <span class="tag">{skill}</span>
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      {:else}
        <p class="no-results">No skills matching "{searchQuery}"</p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .section-label {
    display: none;
  }

  .about-text {
    margin-bottom: 48px;
  }

  .about-text p {
    margin-bottom: 16px;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .about-text a {
    color: var(--text);
    font-weight: 500;
    text-decoration: none;
    transition: color var(--transition);
  }

  .about-text a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .skills-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background: var(--bg-surface);
    border: 1px solid var(--border-muted);
    border-radius: var(--radius);
    color: var(--text);
    font-size: 0.85rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: border-color var(--transition);
  }

  .skills-toggle:hover {
    border-color: var(--border);
  }

  .skills-toggle i {
    font-size: 0.7rem;
    color: var(--text-muted);
    transition: transform var(--transition);
  }

  .skills-toggle i.rotated {
    transform: rotate(180deg);
  }

  .skills-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .search-wrapper {
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .search-wrapper input {
    width: 100%;
    padding: 10px 36px 10px 36px;
    background: var(--bg-surface);
    border: 1px solid var(--border-muted);
    border-radius: var(--radius);
    color: var(--text);
    font-size: 0.9rem;
    font-family: var(--font-body);
    transition: border-color var(--transition);
  }

  .search-wrapper input::placeholder {
    color: var(--text-muted);
  }

  .search-wrapper input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .clear-btn {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px 6px;
    font-size: 0.8rem;
  }

  .clear-btn:hover {
    color: var(--text);
  }

  .no-results {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
    padding: 16px 0;
  }

  .skill-group h3 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    margin-bottom: 12px;
    font-weight: 600;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 500;
    background: var(--accent-subtle);
    color: var(--accent);
    line-height: 1.6;
    border: 1px solid transparent;
    transition: border-color var(--transition);
  }

  .tag:hover {
    border-color: var(--accent);
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
  }
</style>
