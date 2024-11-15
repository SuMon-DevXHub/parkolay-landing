import { graphql, useStaticQuery } from "gatsby";

// Define the structure of the `siteMetadata` object
interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

// Define the structure of the GraphQL query result
interface SiteMetadataQuery {
  site: {
    siteMetadata: SiteMetadata;
  };
}

// Custom hook with proper TypeScript types
export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
