module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Callum Fay',
    description: 'Full stack product enginner',
    keywords: 'DevOps, SRE, T shaped Developer, Culture driver, Agile Coach',
    url: 'https://friendly-euclid-5f365e.netlify.com/'
  }
};
