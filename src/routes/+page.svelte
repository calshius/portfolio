<script>
  import About from '../components/About.svelte';
  import Accolades from '../components/Accolades.svelte';
  import Experience from '../components/Experience.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  let activeSection = $state('about');
  const sections = ['about', 'experience', 'accolades'];

  let mouseX = $state(0);
  let mouseY = $state(0);

  /** @param {MouseEvent} e */
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });
</script>

<div class="spotlight" style:background="radial-gradient(600px at {mouseX}px {mouseY}px, rgba(56, 139, 253, 0.06), transparent 80%)" aria-hidden="true"></div>

<div class="layout" role="presentation" onmousemove={handleMouseMove}>
  <Header {activeSection} />

  <main>
    <section id="about">
      <About />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="accolades">
      <Accolades />
    </section>
  </main>
</div>

<Footer />

<style>
  .spotlight {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 50;
    transition: background 0.3s;
  }

  .layout {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    min-height: 100vh;
    display: flex;
    gap: 16px;
  }

  main {
    flex: 1;
    padding: 96px 0;
  }

  main section {
    margin-bottom: 120px;
    scroll-margin-top: 96px;
  }

  main section:last-child {
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
      padding: 0 20px;
      gap: 0;
    }

    main {
      padding: 24px 0 64px;
    }

    main section {
      margin-bottom: 80px;
      scroll-margin-top: 24px;
    }
  }
</style>
