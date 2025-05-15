<script>
  import { onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  import ChartDataLabels from "chartjs-plugin-datalabels";

  Chart.register(...registerables, ChartDataLabels);

  // Skill categories
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "Svelte", icon: "devicon-svelte-plain colored" },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "GraphQL", icon: "devicon-graphql-plain colored" },
        { name: "REST", icon: "fas fa-server" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MS SQL", icon: "devicon-microsoftsqlserver-plain colored" },
        { name: "Redis", icon: "devicon-redis-plain colored" },
        { name: "Kafka", icon: "devicon-apachekafka-original colored" },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
        { name: "Azure", icon: "devicon-azure-plain colored" },
        { name: "Ansible", icon: "devicon-ansible-plain colored" },
        { name: "Bash", icon: "devicon-bash-plain" },
        { name: "RHEL", icon: "devicon-redhat-plain colored" },
      ],
    },
    {
      name: "CI/CD & Version Control",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub Actions", icon: "devicon-github-original" },
        { name: "Jenkins", icon: "devicon-jenkins-line colored" },
        { name: "CI/CD", icon: "fas fa-sync-alt" },
      ],
    },
    {
      name: "Configuration Management",
      skills: [
        { name: "Ansible", icon: "devicon-ansible-plain colored" },
        { name: "GitOps", icon: "fas fa-code-branch" },
      ],
    },
    {
      name: "Monitoring & Observability",
      skills: [
        { name: "Grafana", icon: "devicon-grafana-original colored" },
        { name: "Prometheus", icon: "fas fa-chart-line" },
        { name: "Loki", icon: "fas fa-stream" },
        { name: "Jaeger", icon: "fas fa-network-wired" },
        { name: "Tempo", icon: "fas fa-clock" },
      ],
    },
    {
      name: "Testing",
      skills: [
        { name: "Jest", icon: "devicon-jest-plain colored" },
        { name: "Locust", icon: "fas fa-locust" },
        { name: "JMeter", icon: "fas fa-tachometer-alt" },
      ],
    },
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "Semantic Kernel", icon: "fas fa-brain" },
        { name: "Hugging Face", icon: "fas fa-robot" },
        { name: "RAG", icon: "fas fa-project-diagram" },
        { name: "LangChain", icon: "fas fa-link" },
        { name: "LangGraph", icon: "fas fa-sitemap" },
        { name: "Prompt Engineering", icon: "fas fa-keyboard" },
        { name: "Embeddings", icon: "fas fa-vector-square" },
        { name: "Agents", icon: "fas fa-user" },
        { name: "OpenAI API", icon: "fas fa-comment-dots" },
        { name: "Azure OpenAI", icon: "devicon-azure-plain colored" },
      ],
    },
  ];

  // URLs for the avatar images
  const githubAvatar = "https://github.com/calshius.png";
  const realAvatar = "/selfie.jpg"; // Using the locally saved image

  // Search functionality
  let searchQuery = "";

  // Function to filter skills based on search query
  function filterSkills(category) {
    if (!searchQuery.trim()) return category.skills;

    return category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Function to check if a category has any matching skills
  function categoryHasMatchingSkills(category) {
    return filterSkills(category).length > 0;
  }

  // Chart reference
  let chartCanvas;
  let skillsChart;

  // Chart colors - using your theme colors plus additional ones
  const chartColors = [
    "#EC8305", // Orange
    "#4a148c", // Purple
    "#7c4dff", // Light purple
    "#ff6e40", // Coral
    "#00c39a", // Teal
    "#45aaf2", // Blue
    "#fd7e14", // Orange-brown
    "#e6522c", // Red
    "#3d5afe", // Bright blue
    "#7b1fa2", // Dark purple
  ];

  // Function to create the pie chart
  function createSkillsChart() {
    if (!chartCanvas) return;

    // Prepare data for the chart
    const labels = skillCategories.map((category) => category.name);
    const data = skillCategories.map((category) => category.skills.length);

    // Calculate total skills for percentage calculation
    const totalSkills = data.reduce((sum, count) => sum + count, 0);

    // Destroy existing chart if it exists
    if (skillsChart) {
      skillsChart.destroy();
    }

    // Create new chart
    const ctx = chartCanvas.getContext("2d");
    skillsChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: chartColors.slice(0, labels.length),
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 12,
              },
              padding: 15,
              generateLabels: function (chart) {
                const datasets = chart.data.datasets;
                return chart.data.labels.map((label, i) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i);
                  const percent = Math.round(
                    (datasets[0].data[i] / totalSkills) * 100
                  );

                  return {
                    text: `${label} (${percent}%)`,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    lineWidth: style.borderWidth,
                    hidden: !chart.getDataVisibility(i),
                    index: i,
                    fontColor: "white",
                  };
                });
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleColor: "white",
            bodyColor: "white",
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw || 0;
                const percentage = Math.round((value / totalSkills) * 100);
                return `${label}: ${value} skills (${percentage}%)`;
              },
            },
          },
          datalabels: {
            formatter: (value, ctx) => {
              const percentage = Math.round((value / totalSkills) * 100);
              return percentage > 5 ? `${percentage}%` : "";
            },
            color: "white",
            font: {
              weight: "bold",
              size: 12,
            },
            textStrokeColor: "rgba(0, 0, 0, 0.5)",
            textStrokeWidth: 2,
            textShadowBlur: 5,
            textShadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    });
  }
  onMount(() => {
    createSkillsChart();

    // Handle window resize
    const handleResize = () => {
      if (skillsChart) {
        skillsChart.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (skillsChart) {
        skillsChart.destroy();
      }
    };
  });
</script>

<svelte:head>
  <!-- Add Font Awesome for icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <!-- Add Devicon for tech-specific icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<section class="about">
  <h1>About Me</h1>

  <div class="bio">
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <img
          src={githubAvatar}
          alt="Callum Alexander Fay"
          class="avatar github-avatar"
        />
        <img
          src={realAvatar}
          alt="Real Callum Alexander Fay"
          class="avatar real-avatar"
        />
      </div>
      <div class="hover-instruction">Hover here to reveal the real me!</div>
    </div>

    <div class="text-content">
      <p>
        Hello! I'm Callum Alexander Fay, a seasoned technology professional with
        over a decade of experience in software development, DevOps, and cloud
        technologies.
      </p>

      <p>
        Throughout my career, I've worked across the financial services
        industry, building expertise in containerization, Kubernetes, cloud
        platforms, and most recently, generative AI solutions. My journey has
        taken me through roles of increasing responsibility at major financial
        institutions, where I've focused on developing scalable, resilient
        systems.
      </p>

      <p>
        I have a passion for emerging technologies and enjoy tackling complex
        problems with innovative solutions. My technical background spans both
        frontend and backend development, with particular depth in cloud-native
        architectures.
      </p>

      <p>
        I'm keen to stay hands-on and be as involved as possible with fixing the
        issues at the coal face, believing that the best technical leaders never
        lose touch with implementation details.
      </p>
    </div>
  </div>

  <div class="skills">
    <h2>Skills</h2>

    <div class="search-container">
      <div class="search-wrapper">
        <i class="fas fa-search search-icon"></i>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="What do you need help with?"
          class="search-input"
        />
        {#if searchQuery}
          <button
            class="clear-search"
            on:click={() => (searchQuery = "")}
            aria-label="Clear search"
          >
            <i class="fas fa-times"></i>
          </button>
        {/if}
      </div>
    </div>

    <div class="chart-container">
      <canvas bind:this={chartCanvas}></canvas>
    </div>

    {#each skillCategories as category}
      {#if categoryHasMatchingSkills(category) || !searchQuery}
        <div class="skill-category">
          <h3>{category.name}</h3>
          <div class="skill-grid">
            {#each filterSkills(category) as skill}
              <div class="skill-item">
                <i class={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}

    {#if searchQuery && !skillCategories.some( (category) => categoryHasMatchingSkills(category) )}
      <div class="no-results">
        <i class="fas fa-search-minus"></i>
        <p>No skills found matching "{searchQuery}"</p>
        <button class="reset-search" on:click={() => (searchQuery = "")}>
          Clear search
        </button>
      </div>
    {/if}
  </div>
</section>

<style>
  .about {
    padding: 40px 0;
  }

  .bio-content {
    display: flex;
    gap: 30px;
    align-items: flex-start;
  }

  .bio {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .avatar-container {
    position: relative;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; /* Ensure full width */
  }

  .avatar-wrapper {
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #ec8305;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin: 0 auto; /* Center horizontally */
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .github-avatar {
    opacity: 1;
  }

  .real-avatar {
    opacity: 0;
    margin-top: -5px;
  }

  .avatar-wrapper:hover .github-avatar {
    opacity: 0;
  }

  .avatar-wrapper:hover .real-avatar {
    opacity: 1;
    margin-top: -5px;
  }

  .hover-instruction {
    position: relative; /* Change from absolute to relative */
    margin-top: 10px; /* Add some space between avatar and text */
    width: 100%;
    text-align: center;
    font-size: 1rem;
    color: #ec8305;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .avatar-wrapper:hover + .hover-instruction {
    opacity: 0;
  }

  .text-content {
    flex: 1;
  }

  @media (max-width: 768px) {
    .bio-content {
      flex-direction: column;
      align-items: center;
    }

    .avatar-container {
      margin-bottom: 40px;
    }
  }

  h1 {
    font-size: 3rem; /* Larger heading */
    margin-bottom: 30px;
    color: white;
  }

  .bio p {
    font-size: 1.2rem; /* Larger bio text */
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .skills {
    margin-top: 40px;
  }

  h2 {
    font-size: 2.2rem; /* Larger subheading */
    margin-bottom: 30px;
    color: white;
  }

  .skill-category {
    margin-bottom: 40px;
    background-color: rgba(
      255,
      255,
      255,
      0.1
    ); /* Lighter background with transparency */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: white;
    border-bottom: 2px solid #ec8305;
    padding-bottom: 8px;
    display: inline-block;
  }

  .skill-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(150px, 1fr)
    ); /* Slightly larger grid items */
    gap: 15px;
  }

  .skill-item {
    background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent white */
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .skill-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.25); /* Lighter on hover */
  }

  .skill-item i {
    font-size: 2.2rem; /* Larger icons */
    margin-bottom: 10px;
  }

  .skill-item span {
    display: block;
    font-size: 1rem; /* Larger skill text */
    color: white;
  }

  /* For icons that need specific coloring */
  .fas.fa-brain {
    color: #00a1f1;
  }

  .fas.fa-robot {
    color: #ffb71b;
  }

  .fas.fa-project-diagram {
    color: #19a974;
  }

  .fas.fa-server {
    color: #6c757d;
  }

  .fas.fa-sync-alt {
    color: #fd7e14;
  }

  .fas.fa-chart-line {
    color: #e6522c; /* Prometheus color */
  }

  .fas.fa-stream {
    color: #3d5afe; /* Loki color */
  }

  .fas.fa-network-wired {
    color: #1c3ed3; /* Jaeger color */
  }

  .fas.fa-clock {
    color: #7b1fa2; /* Tempo color */
  }

  .fas.fa-code-branch {
    color: #2188ff; /* GitOps color - GitHub blue */
  }

  .fas.fa-locust {
    color: #5fc427; /* Locust green color */
  }

  .fas.fa-tachometer-alt {
    color: #d22128; /* JMeter red color */
  }

  /* Colors for GenAI skills */
  .fas.fa-link {
    color: #00c39a; /* LangChain teal color */
  }

  .fas.fa-sitemap {
    color: #7b68ee; /* LangGraph purple color */
  }

  .fas.fa-keyboard {
    color: #ff6b6b; /* Prompt Engineering coral color */
  }

  .fas.fa-vector-square {
    color: #4ecdc4; /* Embeddings turquoise color */
  }

  .fas.fa-user {
    color: #45aaf2; /* Agents blue color */
  }

  .fas.fa-comment-dots {
    color: #26de81; /* OpenAI API green color */
  }

  /* Search styles */
  .search-container {
    margin-bottom: 30px;
  }

  .search-wrapper {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }

  .search-input {
    width: 100%;
    padding: 12px 40px;
    border-radius: 25px;
    border: none;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .search-input:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
  }

  .clear-search {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
  }

  .clear-search:hover {
    color: white;
  }

  /* No results styles */
  .no-results {
    text-align: center;
    padding: 40px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 20px;
  }

  .no-results i {
    font-size: 3rem;
    color: #ec8305;
    margin-bottom: 15px;
  }

  .no-results p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .reset-search {
    background-color: #ec8305;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .reset-search:hover {
    background-color: #d97304;
  }

  .chart-container {
    height: 400px;
    margin: 30px auto;
    max-width: 800px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
</style>
