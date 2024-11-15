# Business Logic (Domain Layer)

The **Domain Layer** in a Gatsby project contains core business logic and domain-specific rules that are reusable and framework-agnostic. This layer is designed to handle logic independently of the Presentation Layer (UI components) and the Data Layer (data fetching and persistence), making it highly modular, testable, and resilient to changes in other parts of the application.

## Purpose of the Domain Layer

The Domain Layer:
- **Encapsulates business rules** and **domain-specific logic** that should remain independent of any UI framework.
- **Centralizes reusable logic** (e.g., calculations, transformations) to ensure consistency across the project.
- **Stays isolated from the framework** by avoiding dependencies on Gatsby, React, or other frameworks, which makes the logic easy to test and reusable in other environments.
- **Improves maintainability** by separating core logic from presentation, making it easier to update or refactor as requirements evolve.

## Structure and Organization

The Domain Layer can be organized into subdirectories like `utils` for utility functions and `entities` for domain-specific models or classes, as shown below:

```
project-root/
├── src/
│   ├── domain/
│   │   ├── utils/
│   │   │   ├── formatDate.ts        # Helper function for date formatting
│   │   │   ├── calculateDiscount.ts # Function for calculating discounts
│   │   │   └── stringUtils.ts       # Text and string manipulation functions
│   │   └── entities/
│   │       └── Post.ts              # Domain-specific entity class
```

### Explanation of Folder Structure

- **`utils/`**: This folder contains helper functions or utilities that encapsulate common logic, such as date formatting, string manipulation, or calculations. These are simple, reusable functions that support various aspects of the application.
- **`entities/`**: This folder contains domain-specific classes or data models that represent core entities in your project. For example, a `Post` class might encapsulate all data and methods related to a blog post.

## Example of a Utility Function

Utility functions are designed to perform specific tasks and can be reused across multiple components. Below is an example of a date formatting utility.

```typescript
// src/domain/utils/formatDate.ts

/**
 * Formats a date string into a readable format.
 * @param dateString - ISO date string to format.
 * @returns Formatted date string (e.g., "January 1, 2023").
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
```

### Explanation

- **Pure Function**: This function is a pure utility, meaning it doesn’t have side effects and returns the same output given the same input, making it easy to test and reuse.
- **Centralized Logic**: Having this logic in a single function ensures that date formatting is consistent across the application.

## Example of a Domain Entity

Entities represent key concepts or data models in your application. For instance, a `Post` entity could represent a blog post and contain methods relevant to posts.

```typescript
// src/domain/entities/Post.ts

interface PostProps {
  title: string
  content: string
  createdAt: string
}

export class Post {
  title: string
  content: string
  createdAt: Date

  constructor({ title, content, createdAt }: PostProps) {
    this.title = title
    this.content = content
    this.createdAt = new Date(createdAt)
  }

  // Method to format the post's creation date
  getFormattedDate(): string {
    return this.createdAt.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Additional domain logic methods can go here
}
```

### Explanation

- **Encapsulated Data**: The `Post` class encapsulates all data related to a post, such as title, content, and creation date.
- **Domain-Specific Methods**: Methods like `getFormattedDate` are specific to the post and provide reusable functionality, making them available across any components that use the `Post` class.

## Using Domain Logic in Components

You can import and use domain functions or entities in the Data Layer or Presentation Layer as needed. For example, if you want to display a formatted date in a component, you can import `formatDate` or use a method like `getFormattedDate()` on a `Post` entity.

```tsx
// src/components/PostCard.tsx
import React from 'react'
import { Post } from '../domain/entities/Post'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <article className="p-4 border rounded shadow">
    <h2 className="text-2xl font-bold">{post.title}</h2>
    <p className="text-sm text-gray-500">{post.getFormattedDate()}</p>
    <p>{post.content}</p>
  </article>
)

export default PostCard
```

### Explanation

- **Encapsulated Logic**: The `PostCard` component relies on the `Post` entity to manage date formatting, keeping the component focused on presentation.
- **Consistency**: By using methods from the `Post` class, formatting is consistent across components that display posts.

## Best Practices for the Domain Layer

1. **Keep Logic Pure and Framework-Agnostic**: Avoid dependencies on Gatsby, React, or other frameworks in the Domain Layer, making it versatile and testable.
2. **Use TypeScript for Strong Typing**: Define interfaces and types for your entities and utility functions to improve type safety and clarity.
3. **Organize by Purpose**: Group related utilities in the `utils` folder and domain-specific classes or data models in the `entities` folder.
4. **Centralize Common Logic**: Keep core logic in a single place (e.g., discount calculations, date formatting) to ensure consistency and facilitate updates.

## Summary

The Domain Layer is the core of your application’s business logic, handling essential transformations, calculations, and domain-specific rules in a modular, framework-independent way. By keeping this layer separate from presentation and data layers, you maintain a clean, organized, and scalable architecture.
