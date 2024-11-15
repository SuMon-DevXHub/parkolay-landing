# Data Fetching Logic with GraphQL Queries (Data Layer)

The **Data Layer** in a Gatsby project is responsible for fetching and transforming data using GraphQL queries. Gatsby integrates GraphQL as a powerful tool for retrieving data from various sources, such as local files, APIs, and CMS platforms. By separating data fetching from other layers, we keep our components clean and focused on rendering, making the project more modular, scalable, and maintainable.

## Purpose of the Data Layer

The Data Layer:
- **Handles data fetching and transformation**: Isolates all data-related operations, so components don’t need to manage data directly.
- **Encapsulates external data sources**: Centralizes data-fetching logic, making it easy to adjust or replace data sources without affecting the rest of the app.
- **Provides reusable hooks and services**: Simplifies data access by creating reusable GraphQL queries and custom hooks.
- **Optimizes for performance**: GraphQL allows for fetching only the required data, reducing payload and improving performance.

## Organizing Data Fetching Logic

To keep data fetching organized and in line with clean architecture, place GraphQL queries and related hooks in a dedicated `src/services` folder (or `src/hooks` if preferred). This structure ensures that components in the Presentation Layer do not directly handle data fetching.

```
project-root/
├── src/
│   ├── services/
│   │   ├── useSiteMetadata.ts       # Hook for fetching site metadata
│   │   ├── usePosts.ts              # Hook for fetching blog posts
│   │   └── queries/
│   │       └── siteMetadataQuery.ts # Centralized GraphQL query
```

In this setup:
- Each hook (e.g., `useSiteMetadata`, `usePosts`) encapsulates a specific data-fetching task, making it reusable across components.
- Placing the GraphQL queries in a separate `queries` folder allows you to centralize and reuse them if needed.

## Example: Fetching Site Metadata with a Custom Hook

To fetch site metadata, such as the site title and description, create a reusable hook that uses Gatsby’s `useStaticQuery`.

### Step 1: Define the GraphQL Query

Define the GraphQL query in a separate file within `queries` to keep your logic modular.

```typescript
// src/services/queries/siteMetadataQuery.ts
import { graphql } from "gatsby"

export const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        twitterUsername
        image
        siteUrl
      }
    }
  }
`
```

### Step 2: Create the Custom Hook

Use the `useStaticQuery` hook to execute the query and return the data. This custom hook can now be reused across components needing site metadata.

```typescript
// src/services/useSiteMetadata.ts
import { useStaticQuery } from "gatsby"
import { siteMetadataQuery } from "./queries/siteMetadataQuery"

// Define the shape of the site metadata
interface SiteMetadata {
  title: string
  description: string
  twitterUsername: string
  image: string
  siteUrl: string
}

// Custom hook to fetch site metadata
export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(siteMetadataQuery)
  return data.site.siteMetadata
}
```

### Explanation

1. **GraphQL Query Encapsulation**: `siteMetadataQuery` is kept in a separate file, making it reusable and easy to manage.
2. **TypeScript Typing**: The `SiteMetadata` interface defines the expected structure of the data, ensuring type safety and improving readability.
3. **Data Layer Separation**: By using a custom hook, components can access site metadata without handling data-fetching logic directly.

## Example: Fetching Blog Posts with Dynamic Pages

In cases where pages are generated dynamically (e.g., for blog posts), use the `createPages` API in `gatsby-node.js` and a GraphQL query to fetch data for each page.

### Step 1: Define the GraphQL Query for Posts

Define a query for fetching blog posts, including essential fields like title, date, and slug.

```typescript
// src/services/queries/postsQuery.ts
import { graphql } from "gatsby"

export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
```

### Step 2: Create a Custom Hook for Blog Posts

Using the `useStaticQuery` hook, you can fetch all blog posts and make them accessible to components that need them.

```typescript
// src/services/usePosts.ts
import { useStaticQuery } from "gatsby"
import { postsQuery } from "./queries/postsQuery"

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

export const usePosts = (): Post[] => {
  const data = useStaticQuery(postsQuery)
  return data.allMarkdownRemark.edges.map((edge: any) => ({
    slug: edge.node.fields.slug,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    excerpt: edge.node.excerpt,
  }))
}
```

### Explanation

1. **Query Reusability**: By centralizing the query in `postsQuery.ts`, it becomes easy to modify the query without directly changing the hook.
2. **Data Mapping**: The hook transforms the query result into an array of `Post` objects, ensuring a clean structure that’s easy to work with.
3. **Separation from Components**: Components can call `usePosts` to access blog posts without managing any data-fetching logic.

## Using Data Hooks in Components

With these hooks in place, components can now access data without any knowledge of GraphQL or data-fetching logic.

```tsx
// src/pages/blog.tsx
import React from 'react'
import { usePosts } from '../services/usePosts'

const BlogPage: React.FC = () => {
  const posts = usePosts()

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default BlogPage
```

### Explanation

- **Encapsulation of Data Logic**: The `BlogPage` component simply calls `usePosts` to get blog post data. It’s not aware of the underlying GraphQL query, making it simpler and more focused on rendering.
- **Easy to Maintain**: If the data source changes (e.g., switching from Markdown files to a CMS), only the hook needs updating, and the component remains unaffected.

## Best Practices for Data Layer

1. **Centralize Queries**: Place GraphQL queries in separate files to make them reusable and easy to manage.
2. **Use Custom Hooks**: Encapsulate data fetching and transformations in custom hooks to keep components clean and maintain separation of concerns.
3. **Type Safety with TypeScript**: Define TypeScript interfaces for the expected data structure, improving code quality and error checking.
4. **Minimize Data Dependencies in Components**: Let the data layer handle all data transformations, so components only receive data in a ready-to-render format.

## Summary

The Data Layer in Gatsby provides a clean, organized way to manage data fetching with GraphQL. By centralizing queries and encapsulating logic within custom hooks, you ensure that your application remains modular, scalable, and maintainable while keeping components free from direct data-fetching responsibilities.
