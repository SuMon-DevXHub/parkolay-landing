import React, { lazy, Suspense } from "react";
import { SEO } from "../components/Seo";
import Layout from "../components/layout";
import LoadingSpinner from "../components/LoadingSpinner";
import IncreaseCapacity from "../components/Product/IncreaseCapacity";

interface ProductTemplateProps {
  pageContext: {
    slug: string;
    title: string;
    description: string;
  };
}

const ParkingSolution = lazy(() => import("../components/SubProducts/ParkingSolution"));
const EasyUse = lazy(() => import("../components/SubProducts/EasyUse"));
const DisplayCar = lazy(() => import("../components/SubProducts/DisplayCar"));

const ProductTemplate = ({ pageContext }: ProductTemplateProps) => {
  const { title, description, slug } = pageContext;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `${window.location.origin}/products/${slug}`,
    image: "URL_TO_IMAGE",
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <section aria-label="Car lift products in parkolay">
          <IncreaseCapacity />
        </section>
        <section aria-label="Parkolay service">
          <ParkingSolution />
        </section>
        <section aria-label="Parkolay all system">
          <EasyUse />
        </section>
        <section aria-label={`Details about ${title}`}>
          <DisplayCar />
        </section>
      </Suspense>
    </Layout>
  );
};

export default ProductTemplate;

export const Head = ({ pageContext }: ProductTemplateProps) => {
  const { title } = pageContext;

  return (
    <SEO
      title={`${title} | Your Site Name`}
      description={`Details about ${title}`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="en" />
    </SEO>
  );
};