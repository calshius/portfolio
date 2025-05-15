<script>
  import { onMount } from 'svelte';
  import "@fontsource/didact-gothic";
  
  let fontLoaded = false;
  
  onMount(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        fontLoaded = true;
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(() => {
        fontLoaded = true;
      }, 300);
    }
  });
</script>

<svelte:head>
  <!-- Add Font Awesome for icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  
  <link
    rel="preload"
    href="/node_modules/@fontsource/didact-gothic/files/didact-gothic-latin-400-normal.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<slot></slot>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family:
      "Didact Gothic",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: white;
    background-color: #091057;
    font-size: 18px;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: "Didact Gothic", sans-serif;
    font-weight: bold;
    color: white; /* Change heading color to white */
  }

  :global(p) {
    font-size: 1.1rem; /* Larger paragraph text */
    line-height: 1.7; /* Increased line height for readability */
  }

  :global(a) {
    color: #ec8305; /* Orange from the color scheme for links */
  }

  :global(a:hover) {
    color: #dbd3d3; /* Light gray on hover */
  }
</style>
