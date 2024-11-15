# Utility Functions and Helpers (Domain Layer)

In a Gatsby project, **utility functions and helpers** are stored in the Domain Layer, allowing you to encapsulate reusable logic that is independent of the presentation or data layers. These functions perform calculations, data transformations, or text manipulations, supporting business logic without being tied to specific components or data sources.

## Purpose of Utility Functions and Helpers

Utility functions and helpers:
- **Encapsulate reusable logic**: Provide common functions that can be reused across various parts of the project.
- **Keep components focused**: By moving complex logic out of components, components remain clean and focused on rendering.
- **Remain framework-agnostic**: Utilities should be pure JavaScript or TypeScript functions without dependencies on Gatsby or React, making them versatile and easy to test.
- **Improve maintainability**: By centralizing common logic, utilities reduce redundancy and make code updates simpler.

## Project Structure for Utilities

Organize utility functions and helpers within the `src/domain/utils` folder to keep them modular and separate from other concerns in the Domain Layer.

```
project-root/
├── src/
│   ├── domain/
│   │   ├── utils/
│   │   │   ├── formatDate.ts       # Helper function for date formatting
│   │   │   ├── calculateDiscount.ts # Function for calculating discounts
│   │   │   └── stringUtils.ts      # Text and string manipulation functions
│   │   └── entities/
│   │       └── Post.ts             # Domain-specific entity class
```

In this setup:
- **Utilities and helpers** are grouped under `utils` within the `domain` folder.
- Each utility file (e.g., `formatDate.ts` and `stringUtils.ts`) contains pure functions that are reusable across the project.

## Example: Date Formatting Utility

Date formatting is a common need in most applications. Rather than implementing date formatting in each component, create a reusable function in the Domain Layer.

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

- **Pure Function**: `formatDate` is a pure function that takes a date string and returns a formatted date.
- **Reusable Logic**: Any component needing date formatting can import and use this function, ensuring consistent date formats across the project.

## Example: Discount Calculation Utility

If your project has a business rule for calculating discounts, encapsulate this logic in a helper function, making it easy to adjust discount rules globally.

```typescript
// src/domain/utils/calculateDiscount.ts

/**
 * Calculates the discounted price based on the original price and discount percentage.
 * @param originalPrice - The original price of the item.
 * @param discountPercentage - The discount percentage to apply.
 * @returns The discounted price.
 */
export const calculateDiscount = (originalPrice: number, discountPercentage: number): number => {
  return originalPrice - (originalPrice * (discountPercentage / 100))
}
```

### Explanation

- **Single Responsibility**: The `calculateDiscount` function performs one task, making it simple and reusable.
- **Domain-Specific Logic**: Encapsulating this business rule (discount calculation) allows easy updates in one place if the rule changes.

## Example: String Manipulation Helpers

For text manipulation tasks like capitalizing titles or truncating descriptions, centralize these operations in a utility file.

```typescript
// src/domain/utils/stringUtils.ts

/**
 * Capitalizes the first letter of each word in a given string.
 * @param text - The text to capitalize.
 * @returns The capitalized string.
 */
export const capitalizeWords = (text: string): string => {
  return text.replace(/\b\w/g, char => char.toUpperCase())
}

/**
 * Truncates a string to a specified length, adding an ellipsis if needed.
 * @param text - The text to truncate.
 * @param maxLength - The maximum length of the truncated text.
 * @returns The truncated string with ellipsis if truncated.
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
```

### Explanation

- **Modular String Utilities**: Each function serves a specific purpose, making them modular and reusable.
- **Pure Functions**: Both `capitalizeWords` and `truncateText` are pure functions, ensuring they’re easy to use and test across the project.

## Using Utility Functions in Components

With these utility functions defined, you can import and use them in components as needed, keeping components focused on rendering rather than complex logic.

### Example Usage in a Component

```tsx
// src/components/PostCard.tsx
import React from 'react'
import { formatDate } from '../domain/utils/formatDate'
import { capitalizeWords, truncateText } from '../domain/utils/stringUtils'

interface PostCardProps {
  title: string
  content: string
  date: string
}

const PostCard: React.FC<PostCardProps> = ({ title, content, date }) => (
  <article className="p-4 border rounded shadow">
    <h2 className="text-2xl font-bold">{capitalizeWords(title)}</h2>
    <p className="text-sm text-gray-500">{formatDate(date)}</p>
    <p>{truncateText(content, 100)}</p>
  </article>
)

export default PostCard
```

### Explanation

- **Encapsulated Logic**: The `PostCard` component doesn’t handle date formatting or string manipulation directly. Instead, it relies on reusable functions from the Domain Layer.
- **Consistent**: Formatting and manipulation are consistent across the app, making maintenance easier.

## Best Practices for Utility Functions and Helpers

1. **Keep Functions Pure**: Ensure utility functions are pure, meaning they produce the same output for the same input and have no side effects.
2. **Use Descriptive Naming**: Name functions clearly based on their functionality to improve readability.
3. **Avoid Framework-Specific Code**: Keep utilities independent of Gatsby, React, or other frameworks, making them versatile.
4. **Organize Logically**: Group related utilities in the same file or module (e.g., `stringUtils.ts` for text manipulations).
5. **Document Functions**: Use comments or JSDoc annotations to describe what each function does, improving readability and understanding.

## Summary

Utility functions and helpers in the Domain Layer enable reusable, framework-agnostic logic in a Gatsby project. By centralizing common logic in functions that are easy to test and maintain, you keep the codebase clean, organized, and aligned with clean architecture principles.
