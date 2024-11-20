import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Suspense, lazy } from "react";
import { SEO } from "../components/Seo";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../components/layout";
import CarLift from "../components/Product/CarLift";

const IncreaseCapacity = lazy(
  () => import("../components/Product/IncreaseCapacity")
);
const TicketLessSolution = lazy(
  () => import("../components/Product/TicketLessSolution")
);
const FlexibleTariff = lazy(
  () => import("../components/Product/FlexibleTariff")
);
const CloudBased = lazy(() => import("../components/Product/CloudBased"));
const WebBased = lazy(() => import("../components/Product/WebBased"));
const Complaint = lazy(() => import("../components/Product/Complaint"));
const EasyUse = lazy(() => import("../components/Product/EasyUse"));

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

const ProductsPage: React.FC<PageProps<DataProps>> = ({
  data: { site },
  location,
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
    <Layout banner={<CarLift />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <section aria-label="Car lift option in parkolay">
          <IncreaseCapacity />
        </section>
        <section aria-label="TicketLess solutions in parkolay">
          <TicketLessSolution />
        </section>
        <section aria-label="Flexible tariff in parkolay">
          <FlexibleTariff />
        </section>
        <section aria-label="Cloud based integrated system">
          <CloudBased />
        </section>
        <section aria-label="Web based service system">
          <WebBased />
        </section>
        <section aria-label="Complain to get better service">
          <Complaint />
        </section>
        <section aria-label="Easy to use all the feature">
          <EasyUse />
        </section>
      </Suspense>
    </Layout>
  );
};

export default ProductsPage;

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
