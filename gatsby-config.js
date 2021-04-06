module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "ln7xcgZG5s0mIfhXERFvoh05oM1VWYAb6M4kXbPu00w",
    //     spaceId: "8urwtin6d2ax",
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
