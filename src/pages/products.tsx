import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { SEO } from "../components/Seo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CarLift from "../components/Product/CarLift";
import IncreaseCapacity from "../components/Product/IncreaseCapacity";
type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const ProductRoute = ({ data: { site } }: PageProps<DataProps>) => {
  return (
    <main className="space-y-24 mx-auto bg-white">
      <Header />
      <CarLift />
      <IncreaseCapacity />
      <Footer />
    </main>
  );
};

export default ProductRoute;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <SEO title={`Products - ${data.site.siteMetadata.title}`} />
);
