import { HeadFC } from "gatsby";
import * as React from "react";
import { ReactNode, Suspense, lazy } from "react";
import SEO from "./Seo";
import LoadingSpinner from "./LoadingSpinner";
import Header from "./Header/Header";

// Lazy load Footer since it's below the fold
const Footer = lazy(() => import("./Footer/Footer"));

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  children: ReactNode;
  banner?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ banner, children }) => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      {banner && banner}
      <main
        className="xl:space-y-[120px] md:space-y-16 space-y-12 mx-auto text-[#53575A]"
        id="main-content"
        role="main"
      >
        {children}
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;

export const Head: HeadFC<LayoutProps> = ({
  data: { title, description, image },
  location,
}) => (
  <SEO
    title={title}
    description={description}
    image={image}
    pathname={location?.pathname}
  >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <html lang="en" />
  </SEO>
);
