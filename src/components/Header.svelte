<script>
  export let currentSection;
  export let switchSection;

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/calshius",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", // Replace with your actual LinkedIn username
      icon: "fab fa-linkedin",
    },
  ];
</script>

<header>
  <div class="logo">
    <a href="#about" on:click|preventDefault={() => switchSection("about")}
      >Callum Alexander Fay</a
    >
  </div>

  <div class="right-section">
    <nav>
      <ul>
        <li class:active={currentSection === "about"}>
          <a
            href="#about"
            on:click|preventDefault={() => switchSection("about")}>About</a
          >
        </li>
        <li class:active={currentSection === "experience"}>
          <a
            href="#experience"
            on:click|preventDefault={() => switchSection("experience")}
            >Experience</a
          >
        </li>
      </ul>
    </nav>

    <div class="social-links">
      {#each socialLinks as link}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label={link.name}
        >
          <i class={link.icon}></i>
        </a>
      {/each}
    </div>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .logo a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    padding: 5px 0;
    transition: all 0.3s ease;
  }

  .active a {
    color: #ec8305;
    border-bottom: 2px solid #ec8305;
    font-weight: bold;
  }

  nav a:hover {
    color: #ec8305;
  }

  .social-links {
    display: flex;
    gap: 20px;
  }

  .social-link {
    color: #ec8305;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .social-link:hover {
    color: white;
    background-color: #ec8305;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .right-section {
      gap: 15px;
    }

    nav ul {
      gap: 15px;
    }

    .social-link {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
      gap: 15px;
    }

    .right-section {
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
