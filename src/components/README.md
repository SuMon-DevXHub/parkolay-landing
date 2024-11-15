# Pure UI Components (Presentation Layer)

This section explains how to create and use Pure UI components in a Gatsby project. Following clean architecture principles, these components form the **Presentation Layer**, focusing solely on displaying data without handling any business or data-fetching logic. Each component is built with **TypeScript** for type safety and **Tailwind CSS** for utility-first styling.

## About the Presentation Layer

Pure UI components:
- Are **independent, reusable, and maintainable**.
- Receive data through **props**, keeping them focused on rendering rather than processing.
- Use **Tailwind CSS** for quick styling without the need for custom CSS files, improving readability and development speed.

By organizing your components in this way, you maintain a clear separation of concerns and make your project more modular.

## Creating a Pure UI Component

Here’s an example of a `Post` component, designed to display a blog post title and content. The component accepts props for the `title` and `content`, making it flexible and reusable across the application.

```tsx
import React from 'react';

interface PostProps {
   title: string;
   content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => (
   <article className="border border-gray-200 rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
   </article>
);

export default Post;
```

### Explanation of the `Post` Component

1. **TypeScript Interface**:
   - `PostProps` defines the expected `title` and `content` props. Using TypeScript interfaces enhances type safety and improves code readability by clearly outlining the data requirements for the component.

2. **Component Layout**:
   - The component uses semantic HTML tags, like `<article>` and `<h2>`, improving accessibility and SEO.

3. **Tailwind CSS Styling**:
   - Utility classes from Tailwind CSS (e.g., `border`, `rounded-lg`, `shadow-md`) allow you to style the component concisely and consistently.
   - This approach keeps the styling close to the component, reducing the need for external CSS files and enabling faster prototyping.

### Using the `Post` Component

To use this `Post` component in a Gatsby page or another component, simply import it and pass the `title` and `content` as props.

```tsx
import React from 'react';
import Post from '../components/Post';

const BlogPage: React.FC = () => {
   return (
      <div className="container mx-auto px-4">
         <Post title="Hello World" content="This is a sample blog post content." />
      </div>
   );
};

export default BlogPage;
```

## Additional Tips for Pure UI Components

- **Keep Components Stateless**: Aim to keep components focused on presentation. Avoid handling state or business logic within Pure UI components to maintain separation of concerns.
- **Leverage TypeScript for Prop Validation**: Define prop types with TypeScript interfaces or types. This improves type safety and makes components easier to understand and refactor.
- **Reuse Utility Classes**: Tailwind CSS provides a robust set of utilities. Utilize these to keep your components lightweight and consistent across the project.

By following these practices, you’ll maintain a clean, modular, and testable component library that aligns with clean architecture principles.
