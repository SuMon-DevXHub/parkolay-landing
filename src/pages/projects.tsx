import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Suspense, lazy } from "react";
import { SEO } from "../components/Seo";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../components/layout";
import IncreaseCapacity from "../components/Product/IncreaseCapacity";

// const Construction = lazy(() => import("../components/Construction/Construction"));
const ParkingSolution = lazy(() => import("../components/SubProducts/ParkingSolution"));
const EasyUse = lazy(() => import("../components/SubProducts/EasyUse"));
const DisplayCar = lazy(() => import("../components/SubProducts/DisplayCar"));


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

const ProjectsPage: React.FC<PageProps<DataProps>> = ({ 
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

//   return (
//     <Layout>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <Suspense fallback={<LoadingSpinner />}>
//         <section aria-label="Project running in parkolay">
//           <Construction />
//         </section>
//       </Suspense>
//     </Layout>
//   );
// };

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
      <section aria-label={`Details about parkolay parking`}>
        <DisplayCar />
      </section>
    </Suspense>
  </Layout>
);
};

export default ProjectsPage;

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