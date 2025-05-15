<footer>
  <p>
    © {new Date().getFullYear()} Callum Alexander Fay. All rights reserved.
  </p>
</footer>

<style>
  footer {
    margin-top: 50px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }
  }
</style>
