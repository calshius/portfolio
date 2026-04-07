<footer>
  <p>
    Loosely inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.
    Built with <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer">SvelteKit</a> and
    deployed on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
  </p>
</footer>

<style>
  footer {
    padding: 48px 0 24px;
  }

  p {
    font-size: 0.8rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition);
  }

  a:hover {
    color: var(--accent);
    text-decoration: underline;
  }
</style>
