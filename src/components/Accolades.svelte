<script>
  const awards = [
    {
      title: "Best Use of Microservice Architecture",
      event: "DevOps Excellence Awards 2022",
      result: "Winner",
      role: "ACE (Application Container Enablement)",
    },
    {
      title: "Best Use of Artificial Intelligence/Machine Learning",
      event: "US Banking Tech Awards 2025",
      result: "Winner",
      role: "DevGenAI",
    },
    {
      title: "Best Use of AI in Banking",
      event: "Global Banking Awards (London) 2025",
      result: "Runner-Up",
      role: "DevGenAI",
    },
    {
      title: "Best Use of AI \u2013 Internal Operations",
      event: "Banking Tech Awards 2025",
      result: "Highly Commended",
      role: "DevGenAI",
    },
  ];

  const patents = [
    {
      title: "Dynamic Agent Runtime Engine for Configurable Multi-Agent Pipelines",
      status: "Pending",
      office: "USPTO",
    },
    {
      title: "Using LLM to Increase Productivity for Large-Scale Regulatory Project Maintenance",
      status: "Pending",
      office: "USPTO",
    },
  ];

  /** @param {string} result */
  function badgeClass(result) {
    if (result === 'Winner') return 'badge-winner';
    if (result === 'Runner-Up') return 'badge-runner-up';
    return 'badge-commended';
  }
</script>

<div class="section-label">Accolades</div>

<h2>Awards</h2>
<div class="list">
  {#each awards as award}
    <div class="item">
      <div class="item-header">
        <span class="badge {badgeClass(award.result)}">{award.result}</span>
      </div>
      <div class="item-body">
        <h3>{award.title}</h3>
        <p class="meta">{award.event}</p>
        <span class="tag">{award.role}</span>
      </div>
    </div>
  {/each}
</div>

<h2>Patents</h2>
<div class="list">
  {#each patents as patent}
    <div class="item">
      <div class="item-header">
        <span class="badge badge-pending">{patent.status}</span>
      </div>
      <div class="item-body">
        <h3>{patent.title}</h3>
        <span class="tag">{patent.office}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  .section-label {
    display: none;
  }

  h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    margin: 48px 0 16px;
    font-weight: 600;
  }

  h2:first-of-type {
    margin-top: 0;
  }

  .list {
    display: flex;
    flex-direction: column;
  }

  .item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 24px;
    margin: 0 -24px;
    border-radius: var(--radius);
    transition: background var(--transition);
    border: 1px solid transparent;
  }

  .item:hover {
    background: var(--bg-surface);
    border-color: var(--border-muted);
  }

  .item-header {
    padding-top: 4px;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .badge-winner {
    background: var(--success-subtle);
    color: var(--success);
  }

  .badge-runner-up {
    background: var(--accent-subtle);
    color: var(--accent);
  }

  .badge-commended {
    background: var(--bg-elevated);
    color: var(--text-secondary);
    border: 1px solid var(--border-muted);
  }

  .badge-pending {
    background: var(--bg-elevated);
    color: var(--text-muted);
    border: 1px solid var(--border-muted);
  }

  h3 {
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 4px;
    line-height: 1.4;
    transition: color var(--transition);
  }

  .item:hover h3 {
    color: var(--accent);
  }

  .meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0 0 8px;
  }

  .tag {
    display: inline-block;
    padding: 3px 12px;
    border-radius: 999px;
    font-size: 0.75rem;
    background: var(--accent-subtle);
    color: var(--accent);
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

    .item {
      grid-template-columns: 1fr;
      gap: 8px;
      padding: 16px;
      margin: 0 -16px;
    }
  }
</style>
