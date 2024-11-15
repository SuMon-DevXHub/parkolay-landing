# Gatsby Pages and Routes

In Gatsby, **pages** are responsible for defining routes and rendering content at specific URLs. Gatsby provides a built-in file-based routing system, making it easy to create pages by simply adding components to the `src/pages` directory. Understanding how Gatsby handles pages and routes is crucial for building a scalable and well-organized project.

## How Gatsby Pages and Routing Work

1. **Automatic Routing**:
   - Gatsby automatically creates routes based on the folder and file structure within `src/pages`.
   - For example, `src/pages/about.tsx` will be accessible at `/about`, and `src/pages/blog/index.tsx` will be available at `/blog`.

2. **Dynamic Routing**:
   - Gatsby also allows for dynamic route creation using the `createPages` API in `gatsby-node.js`. This is useful for creating pages programmatically, such as blog posts or product pages based on data from a CMS or GraphQL query.

## Project Structure for Pages

Here’s an example structure for organizing pages in a Gatsby project:

```
project-root/
├── src/
│   ├── pages/
│   │   ├── index.tsx               # Homepage
│   │   ├── about.tsx               # About page
│   │   ├── blog/
│   │   │   └── index.tsx           # Blog index page
│   │   ├── 404.tsx                 # Custom 404 page
```

In this setup:
- Each page is placed within `src/pages`, which automatically generates a route.
- Pages can be organized into folders (like `blog`) to group related pages and keep the structure clean.

## Creating a Basic Page

Here’s an example of a simple page component, `about.tsx`, in `src/pages`:

```tsx
// src/pages/about.tsx
import React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/SEO'

const AboutPage: React.FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">This is the about page of our website.</p>
      <Link to="/" className="text-blue-600 underline">Go back to the homepage</Link>
    </main>
  )
}

export default AboutPage

export const Head = () => <SEO title="About Us" description="Learn more about us." />
```

### Explanation of the `about.tsx` Page

- **Static Route**: This page is automatically created at the `/about` URL based on its location in `src/pages`.
- **SEO Component**: The `Head` export uses the `SEO` component to set page-specific metadata.
- **Navigation**: The `Link` component from Gatsby enables internal navigation to the homepage.

## Creating Dynamic Pages with `createPages`

For pages that need to be generated dynamically (e.g., blog posts or product pages), use the `createPages` API in `gatsby-node.js`. This allows you to create pages based on data, such as Markdown files, CMS entries, or GraphQL queries.

### Example: Generating Blog Post Pages

1. **Create a Template Component**: In `src/templates/BlogPost.tsx`, create a template component for blog posts.

   ```tsx
   // src/templates/BlogPost.tsx
   import React from 'react'
   import { graphql, PageProps } from 'gatsby'
   import { SEO } from '../components/SEO'

   interface BlogPostProps extends PageProps {
     data: {
       markdownRemark: {
         frontmatter: { title: string; date: string }
         html: string
       }
     }
   }

   const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
     const { frontmatter, html } = data.markdownRemark
     return (
       <article className="p-6">
         <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
         <p className="text-sm text-gray-500">{frontmatter.date}</p>
         <div className="mt-6" dangerouslySetInnerHTML={{ __html: html }} />
       </article>
     )
   }

   export default BlogPost

   export const Head = ({ data }: BlogPostProps) => (
     <SEO title={data.markdownRemark.frontmatter.title} description="Blog post page" />
   )

   export const query = graphql`
     query BlogPostBySlug($slug: String!) {
       markdownRemark(fields: { slug: { eq: $slug } }) {
         frontmatter {
           title
           date
         }
         html
       }
     }
   `
   ```

2. **Generate Pages with `createPages` in `gatsby-node.js`**:

   ```javascript
   // gatsby-node.js
   const path = require('path')

   exports.createPages = async ({ graphql, actions }) => {
     const { createPage } = actions
     const result = await graphql(`
       query {
         allMarkdownRemark {
           edges {
             node {
               fields {
                 slug
               }
             }
           }
         }
       }
     `)

     const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       createPage({
         path: `/blog/${node.fields.slug}`,
         component: blogPostTemplate,
         context: {
           slug: node.fields.slug,
         },
       })
     })
   }
   ```

### Explanation of Dynamic Page Creation

- **Template Component**: The `BlogPost` component serves as a template for individual blog post pages, using GraphQL to query post-specific data.
- **Programmatic Page Creation**: In `gatsby-node.js`, the `createPages` function generates pages dynamically for each post based on its slug, defining the path (`/blog/:slug`) and template to use.

## Custom 404 Page

A custom 404 page enhances the user experience for visitors who land on non-existent routes. Gatsby automatically uses `src/pages/404.tsx` as the 404 page.

```tsx
// src/pages/404.tsx
import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/SEO"

const NotFoundPage: React.FC = () => (
  <main className="h-screen flex items-center justify-center text-center p-6">
    <div>
      <h1 className="text-5xl font-bold mb-4">404: Page Not Found</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 underline">Go back to the homepage</Link>
    </div>
  </main>
)

export default NotFoundPage

export const Head = () => <SEO title="404: Page Not Found" description="This page does not exist." />
```

## Best Practices for Pages and Routes

1. **Use Consistent Naming**: Name pages and components clearly to reflect their purpose. This improves readability and helps others understand the structure.
2. **Limit Logic in Page Components**: Keep pages focused on rendering. Move complex logic to custom hooks, utility functions, or the Domain Layer.
3. **Use Templates for Repeated Layouts**: Use template components for dynamically generated pages (e.g., blog posts or product pages) to standardize structure and style.
4. **Optimize for SEO**: Add unique metadata to each page using the `SEO` component, ensuring better search engine optimization.

## Summary

Gatsby’s pages and routing system offers flexibility through automatic file-based routing and dynamic page creation. By following clean architecture principles, you can maintain a well-organized, scalable project structure that is easy to understand and extend.
