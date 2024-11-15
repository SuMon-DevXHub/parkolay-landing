# Custom Hooks (for Reusable Logic Across Components)

**Custom hooks** are an essential tool in a Gatsby project, allowing you to encapsulate and reuse complex logic across multiple components. By abstracting logic out of individual components, you keep your code DRY (Don't Repeat Yourself), improve readability, and enhance testability. Custom hooks also help keep components focused solely on rendering, which aligns well with clean architecture principles.

## Purpose of Custom Hooks

Custom hooks:
- **Encapsulate reusable logic**: Common behaviors such as data fetching, state management, and event handling can be isolated into custom hooks.
- **Separate concerns**: Moving logic out of components keeps them simple, enabling better separation of concerns and more maintainable code.
- **Enable sharing of stateful logic**: Hooks allow for the sharing of complex state management and side effects without needing higher-order components or render props.
- **Integrate with Gatsby’s data layer**: Hooks can simplify querying with Gatsby’s GraphQL and working with APIs.

## Project Structure for Hooks

Custom hooks are typically stored in a dedicated folder, such as `src/hooks`, to keep them organized and easily accessible.

```
project-root/
├── src/
│   ├── hooks/
│   │   ├── useSiteMetadata.ts    # Example hook for fetching site metadata
│   │   ├── useWindowSize.ts      # Example hook for getting the window dimensions
│   │   └── usePosts.ts           # Example hook for fetching posts
```

## Example: A Custom Hook for Site Metadata

In Gatsby, querying site metadata with GraphQL is common. You can create a custom hook that encapsulates this query and makes the data easily accessible throughout the application.

```tsx
// src/hooks/useSiteMetadata.ts
import { graphql, useStaticQuery } from "gatsby"

// Define the shape of the site metadata
interface SiteMetadata {
  title: string
  description: string
  twitterUsername: string
  image: string
  siteUrl: string
}

interface SiteMetadataQuery {
  site: {
    siteMetadata: SiteMetadata
  }
}

// Custom hook to fetch site metadata
export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
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
  `)

  return data.site.siteMetadata
}
```

### Explanation of `useSiteMetadata`

1. **GraphQL Query Encapsulation**: The GraphQL query is defined within the hook, allowing components to simply call the hook without managing the query details.
2. **TypeScript Typing**: The hook is typed with TypeScript to ensure type safety, specifying the structure of the returned `siteMetadata`.
3. **Reusable Data Access**: Now, any component can access site metadata by calling `useSiteMetadata`, reducing the need to duplicate queries across components.

## Example: A Custom Hook for Window Size

Another common use case for custom hooks is managing side effects, such as listening to window resize events. The `useWindowSize` hook allows components to respond to window size changes in a reusable way.

```tsx
// src/hooks/useWindowSize.ts
import { useState, useEffect } from "react"

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
```

### Explanation of `useWindowSize`

1. **State Management**: The hook manages the `windowSize` state, which stores the current dimensions of the window.
2. **Effect Handling**: It sets up an event listener for window resizing within a `useEffect` hook, ensuring that the component is responsive to size changes.
3. **Reusable Across Components**: Components needing window dimensions can simply call `useWindowSize`, making the logic reusable and avoiding duplication.

## Best Practices for Custom Hooks

1. **Prefix with `use`**: Always prefix custom hooks with `use` to follow React’s conventions. This allows React to identify and manage hooks’ rules properly.
2. **Keep Hooks Focused**: Each hook should handle one specific piece of logic. This makes them reusable and composable across different components.
3. **Use TypeScript for Types**: Define interfaces for the hook's return values and input parameters. TypeScript improves type safety, especially when sharing state across components.
4. **Encapsulate Side Effects**: Hooks like `useEffect` should manage side effects (e.g., event listeners, fetching data) within the hook, keeping components free from complex logic.

## Using Custom Hooks in Components

Here’s how to use a custom hook like `useSiteMetadata` within a component:

```tsx
// src/components/Header.tsx
import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Header: React.FC = () => {
  const { title, description } = useSiteMetadata()

  return (
    <header className="p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
    </header>
  )
}

export default Header
```

In this example:
- The `Header` component calls `useSiteMetadata` to retrieve site information, keeping the component focused on presentation.
- The logic to fetch site metadata is abstracted into a reusable hook, making it accessible to any component that needs it.

## Summary

Custom hooks provide a way to encapsulate and share complex logic across components in a Gatsby project. They improve code organization, simplify components, and enable reusability, aligning well with clean architecture principles.
