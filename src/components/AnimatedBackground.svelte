<script>
  import { onMount } from 'svelte';
  
  // New color scheme from ColorHunt with darker colors
  export let colors = ['#040729', '#01285A', '#A65A03', '#6B6969'];
  let currentColorIndex = 0;
  
  // Create an array for the gradients
  let gradients = [
    { left: '0%', top: '0%', color: colors[0] },
    { left: '50%', top: '20%', color: colors[1] },
    { left: '20%', top: '70%', color: colors[2] },
    { left: '70%', top: '50%', color: colors[3] }
  ];
  
  // Function to update gradient colors
  function updateGradientColors() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    gradients = gradients.map((gradient, index) => {
      return {
        ...gradient,
        color: colors[(currentColorIndex + index) % colors.length]
      };
    });
  }
  
  onMount(() => {
    // Set up interval to animate the gradients
    const intervalId = setInterval(updateGradientColors, 4000);
    
    // Clean up the interval when the component is destroyed
    return () => clearInterval(intervalId);
  });
</script>

<div class="animated-background">
  <div class="overlay"></div>
  {#each gradients as gradient}
    <div 
      class="gradient" 
      style="left: {gradient.left}; top: {gradient.top}; background-color: {gradient.color};"
    ></div>
  {/each}
</div>

<style>
  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 16, 87, 0.7); /* Dark blue overlay to darken everything */
    z-index: 1;
  }
  
  .gradient {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.5;
    transition: background-color 3s ease;
    z-index: 0;
  }
</style>
