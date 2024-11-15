/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Parkolay`,
    description: `Your site description`,
    siteUrl: `https://www.yourdomain.com`,
    twitterUsername: `@yourtwitterhandle`,
    image: `/default-og-image.jpg`,
  },
  // More gatsby configs...
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
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
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "YourAPI",
    //     fieldName: "yourapi",
    //     url:
    //       process.env.GATSBY_API_URL ||
    //       "https://your-actual-api-url.com/graphql",
    //   },
    // },
  ],
};

export default config;
