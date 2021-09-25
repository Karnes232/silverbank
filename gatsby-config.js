module.exports = {
  siteMetadata: {
    title: `Silverbank whales`,
    description: `The chance of a lifetime to be able to swim in warm tropical waters and be face to face with these beautiful humpback whales.`,
    keywords: `whale watching, humpback whales, snorkeling with whales, whale watching dominican republic`,
    url: `https://www.silverbankwhales.com/`,
    siteUrl: `https://www.silverbankwhales.com/`,
    author: `@karnes`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.webp",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
