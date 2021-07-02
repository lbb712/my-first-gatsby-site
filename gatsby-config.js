module.exports = {
  siteMetadata: {
    title: "Welcome to My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `weel1`,
        path: `${__dirname}/week1/`,
      },
    },
],
};
