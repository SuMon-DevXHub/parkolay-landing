import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC } from "gatsby";
import { Link } from "gatsby";

// Schema for better SEO
const underConstructionSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Page Under Construction",
  description: "This page is currently under construction. We're working hard to bring you new features and content.",
  publisher: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  },
  inLanguage: "en",
  isPartOf: {
    "@type": "Website",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const Construction: React.FC = () => {
  return (
    <div 
      className="flex items-center justify-center"
      aria-label="Under construction parklay page"
    >
      <div 
        className="overflow-hidden max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12"
        aria-labelledby="construction-heading"
      >
        <div className="text-center mb-8">
          <h1 
            id="construction-heading"
            className="lg:text-3xl text-xl font-bold mb-4"
          >
            Page Under Construction
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            role="status"
          >
            We're working hard to bring you something amazing. Please check back soon!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div 
            className="w-full max-w-md"
            role="img"
            aria-label="Under construction illustration"
          >
            <StaticImage
              src="../../assets/images/under_construction.png"
              alt="Page under construction illustration"
              className="w-full h-auto rounded-lg shadow-lg"
              placeholder="blurred"
              width={480}
              height={480}
              loading="eager"
              formats={["auto", "webp", "avif", "png"]}
              quality={90}
              transformOptions={{
                fit: "cover",
              }}
            />
          </div>

          <div className="w-full max-w-md space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">
                Expected Features
              </h2>
              <ul className="space-y-2 text-gray-600" role="list">
                <li className="flex items-center">
                  <span className="mr-2">🔨</span>
                  New Design Implementation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>
                  Enhanced Performance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎯</span>
                  Improved User Experience
                </li>
              </ul>
            </div>

            <div 
              className="bg-blue-50 p-4 rounded-md"
              role="alert"
              aria-live="polite"
            >
              <p className="text-blue-700 text-sm">
                Want to be notified when we launch? 
                <Link 
                  to="/"
                  className="ml-1 font-medium underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;

export const Head: HeadFC = () => (
  <>
    <title>Under Construction | Parkolay</title>
    <meta 
      name="description" 
      content="This page is currently under construction. We're working hard to bring you new features and content." 
    />
    <meta name="robots" content="noindex,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://parkolay.com/construction" />
    <meta property="og:title" content="Under Construction | Parkolay" />
    <meta 
      property="og:description" 
      content="This page is currently under construction. We're working hard to bring you new features and content." 
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Parkolay" />
    
    {/* Structured data */}
    <script type="application/ld+json">
      {JSON.stringify(underConstructionSchema)}
    </script>
  </>
);