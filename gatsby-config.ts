/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby";

// Load environment variables from a .env file
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Parkolay`,
    description: `Devxhub Ltd. is one of the best Software, Web, and Mobile Application Development Outsourcing Companies in Asia, Bangladesh leading globally. We help to transform your idea into a digital business.`,
    twitterUsername: `@devxhubcom`,
    image: `/images/icon.png`,
    siteUrl: `https://devxhub.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devxhub Ltd.`,
        short_name: `Devxhub`,
        start_url: `/`,
        background_color: `#f8b123`,
        theme_color: `#8c5cf0`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "DxH_API",
        fieldName: "dxh",
        url: process.env.GATSBY_API_URL || "https://api.devxhub.com/graphql",
      },
    },
  ],
};

export default config;
