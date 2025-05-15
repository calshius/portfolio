<script>
  import { onMount } from 'svelte';
  import About from '../components/About.svelte';
  import Experience from '../components/Experience.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import AnimatedBackground from '../components/AnimatedBackground.svelte';
  
  let currentSection = 'about';
  
  function switchSection(section) {
    currentSection = section;
  }
  
  onMount(() => {
    // Check URL hash for direct navigation
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (['about', 'experience'].includes(hash)) {
        currentSection = hash;
      }
    }
  });
</script>

<AnimatedBackground />

<main>
  <Header {currentSection} {switchSection} />
  
  <div class="content">
    {#if currentSection === 'about'}
      <About />
    {:else if currentSection === 'experience'}
      <Experience />
    {/if}
  </div>
  
  <Footer />
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }
  
  .content {
    min-height: 80vh;
    position: relative;
  }
</style>
