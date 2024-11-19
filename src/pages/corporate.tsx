import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Suspense, lazy } from "react";
import { SEO } from "../components/Seo";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../components/layout";

const Construction = lazy(() => import("../components/Construction/Construction"));

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      image: string;
    };
  };
}

const CorporatePage: React.FC<PageProps<DataProps>> = ({ 
  data: { site }, 
  location 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: site.siteMetadata.title,
    description: site.siteMetadata.description,
    url: `${site.siteMetadata.siteUrl}${location.pathname}`,
    image: site.siteMetadata.image,
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <section aria-label="Corporate service in parkolay">
          <Construction />
        </section>
      </Suspense>
    </Layout>
  );
};

export default CorporatePage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data, location }) => (
  <SEO
    title={data.site.siteMetadata.title}
    description={data.site.siteMetadata.description}
    image={data.site.siteMetadata.image}
    pathname={location.pathname}
  >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <html lang="en" />
  </SEO>
);