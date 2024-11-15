// src/pages/404.tsx
import React from "react"
import { HeadFC, Link } from "gatsby"
import { SEO } from "../components/Seo"

const NotFoundPage: React.FC = () => {
  return (
    <main className="h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-600 underline">
          Go back to the homepage
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

// Gatsby Head API for the 404 page's SEO metadata
export const Head: HeadFC = () => <SEO title="404: Page Not Found" description="This page does not exist." />
