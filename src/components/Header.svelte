<script>
  let { activeSection } = $props();

  const avatarUrl = "https://avatars.githubusercontent.com/u/24956683?v=4";

  const navItems = [
    ['about', 'About'],
    ['experience', 'Experience'],
    ['accolades', 'Accolades'],
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/calshius", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://uk.linkedin.com/in/callum-fay", icon: "fab fa-linkedin-in" },
  ];
</script>

<header>
  <div class="header-content">
    <div class="profile">
      <img src={avatarUrl} alt="Callum Alexander Fay" class="avatar" />
      <h1><a href="#about">Callum Alexander Fay</a></h1>
      <h2>Principal GenAI VP</h2>
      <p class="tagline">Building scalable AI and cloud-native systems in financial services.</p>
    </div>

    <nav>
      {#each navItems as [key, label]}
        <a href="#{key}" class:active={activeSection === key}>
          <span class="nav-indicator"></span>
          <span class="nav-label">{label}</span>
        </a>
      {/each}
    </nav>

    <ul class="social-links">
      {#each socialLinks as link}
        <li>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label="{link.name} (opens in a new tab)">
            <i class={link.icon} aria-hidden="true"></i>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  header {
    width: 48%;
    max-width: 480px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 96px 0;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 2px solid var(--border);
    margin-bottom: 20px;
    transition: border-color var(--transition);
  }

  .avatar:hover {
    border-color: var(--accent);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
  }

  h1 a {
    color: inherit;
    text-decoration: none;
  }

  h1 a:hover {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .tagline {
    font-size: 0.95rem;
    color: var(--text-muted);
    max-width: 300px;
    line-height: 1.6;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  nav a {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 0;
    transition: color var(--transition);
  }

  nav a:hover,
  nav a.active {
    color: var(--text);
    text-decoration: none;
  }

  .nav-indicator {
    display: block;
    width: 32px;
    height: 1px;
    background: var(--text-muted);
    transition: all var(--transition);
  }

  nav a:hover .nav-indicator,
  nav a.active .nav-indicator {
    width: 64px;
    background: var(--text);
  }

  .social-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top: auto;
  }

  .social-links a {
    color: var(--text-muted);
    font-size: 1.3rem;
    transition: color var(--transition);
  }

  .social-links a:hover {
    color: var(--text);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    header {
      width: 100%;
      max-width: none;
      position: relative;
      height: auto;
      padding: 48px 0 0;
    }

    .header-content {
      height: auto;
      gap: 24px;
    }

    .profile {
      text-align: center;
    }

    .avatar {
      width: 80px;
      height: 80px;
    }

    h1 {
      font-size: 1.8rem;
    }

    .tagline {
      max-width: none;
    }

    nav {
      display: none;
    }

    .social-links {
      margin-top: 0;
      justify-content: center;
    }
  }
</style>
