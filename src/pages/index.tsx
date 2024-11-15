import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Suspense, lazy } from "react";
import { SEO } from "../components/Seo";
import Banner from "../components/Home/Banner";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../components/layout";

const CarLiftSection = lazy(() => import("../components/Home/CarLiftSection"));
const GarageSection = lazy(() => import("../components/Home/GarageSection"));
const Approach = lazy(() => import("../components/Home/Approach/ApproachSection"));
const OurClientSection = lazy(() => import("../components/Home/OurClientSection"));
const ServicesSection = lazy(() => import("../components/Home/ServicesSection"));
const CaseStudySection = lazy(() => import("../components/Home/CaseStudySection"));

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

const IndexRoute: React.FC<PageProps<DataProps>> = ({ 
  data: { site }, 
  location 
}) => {
  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: site.siteMetadata.title,
    description: site.siteMetadata.description,
    url: `${site.siteMetadata.siteUrl}${location.pathname}`,
    image: site.siteMetadata.image,
  };

  return (
    <Layout
      banner={<Banner />}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <section aria-label="Car lift solutions">
          <CarLiftSection />
        </section>
        
        <section aria-label="Garage solutions">
          <GarageSection />
        </section>
        
        <section aria-label="Our approach">
          <Approach />
        </section>
        
        <section aria-label="Our clients">
          <OurClientSection />
        </section>
        
        <section aria-label="Our services">
          <ServicesSection />
        </section>
        
        <section aria-label="Case studies">
          <CaseStudySection />
        </section>
      </Suspense>
    </Layout>
  );
};

export default IndexRoute;

// Enhanced GraphQL query
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