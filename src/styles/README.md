# Shared Styles or CSS Files

In a Gatsby project, shared styles are essential for creating a cohesive look and feel across all components. By managing styles in a centralized and organized manner, you ensure consistency, maintainability, and scalability, especially as your project grows.

## Purpose of Shared Styles

Shared styles allow you to:
- **Maintain consistency** in typography, colors, spacing, and layout across all components.
- **Easily apply global styling rules** to ensure a unified design.
- **Define reusable styles** such as utility classes, themes, and component-specific styles.
- **Enhance maintainability** by avoiding redundant CSS code and promoting DRY (Don't Repeat Yourself) principles.

## Organizing Shared Styles

In Gatsby, CSS files can be organized within a `src/styles` directory for easy access and modular styling. Here’s an example structure for organizing shared styles:

```
project-root/
├── src/
│   ├── styles/
│   │   ├── global.css          # Global styles applied across the entire app
│   │   ├── typography.css      # Typography styles
│   │   ├── colors.css          # Color variables or Tailwind custom colors
│   │   ├── layout.css          # Layout and spacing classes
│   │   └── components/
│   │       └── button.css      # Component-specific style file
```

### Explanation of Style Files

1. **global.css**: Contains base styles applied across the entire site, such as reset styles, default font sizes, and body background color.
2. **typography.css**: Holds all typography-related styles, including font families, sizes, line heights, and heading styles.
3. **colors.css**: Defines a consistent color palette using CSS variables or Tailwind CSS custom colors.
4. **layout.css**: Includes classes for common layouts, spacing, and container sizes.
5. **components/**: Contains component-specific styles, which can be imported directly into components as needed.

## Using Global Styles

To apply global styles across your Gatsby site, you’ll typically import `global.css` into your `gatsby-browser.js` file. This ensures that the styles are available globally across all pages and components.

```javascript
// gatsby-browser.js
import './src/styles/global.css'
```

### Example of a Global CSS File

```css
/* src/styles/global.css */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

a {
  color: #007acc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

This file provides base styles for elements like `body` and `a`, which will apply across all components.

## Using CSS Modules for Component-Specific Styles

For styles that are specific to individual components, you can use **CSS Modules**. CSS Modules scope styles locally by default, preventing conflicts with other styles across the app.

1. **Create a CSS Module** file named with the `.module.css` suffix (e.g., `button.module.css`).
2. **Import the CSS Module** in the component to apply styles locally.

### Example

#### Button Component (`Button.tsx`)

```tsx
import React from 'react'
import styles from '../styles/components/button.module.css'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className={styles.primaryButton}>{text}</button>
)

export default Button
```

#### Button Styles (`button.module.css`)

```css
/* src/styles/components/button.module.css */
.primaryButton {
  background-color: #007acc;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.primaryButton:hover {
  background-color: #005fa3;
}
```

In this example:
- `primaryButton` is scoped to the `Button` component and won’t interfere with styles in other components.
- The component imports the module and applies the `primaryButton` class locally, ensuring style encapsulation.

## Using Tailwind CSS for Utility-First Styling

If you prefer a utility-first approach, **Tailwind CSS** can be used for shared styling in Gatsby. Tailwind allows you to apply classes directly to HTML elements without writing custom CSS for every component.

### Setting Up Tailwind CSS

1. Install Tailwind CSS:
   ```bash
   npm install tailwindcss postcss autoprefixer gatsby-plugin-postcss
   npx tailwindcss init -p
   ```

2. Configure Tailwind in `tailwind.config.js`:
   ```javascript
   // tailwind.config.js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}", // Scan these files for Tailwind CSS classes
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. Import Tailwind’s base, components, and utilities in `src/styles/global.css`:
   ```css
   /* src/styles/global.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

With Tailwind configured, you can now use its utility classes directly in your components, eliminating the need for custom CSS files for every component. This is especially helpful for rapid prototyping and consistent styling.

### Example Component Using Tailwind CSS

```tsx
// src/components/Card.tsx
import React from 'react'

interface CardProps {
  title: string
  content: string
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 mt-2">{content}</p>
  </div>
)

export default Card
```

Here, we use Tailwind’s utility classes to style the `Card` component without writing any additional CSS.

## Best Practices for Shared Styles

1. **Use Global Styles for Base Styles**: Apply styles that affect the entire site (e.g., body font, link color) in a global CSS file.
2. **Leverage CSS Modules for Component Encapsulation**: Use CSS Modules for styles that are specific to individual components, ensuring styles are scoped locally and avoiding conflicts.
3. **Use Tailwind CSS for Utility-Based Styling**: Tailwind is excellent for quick, consistent styling across components. Use it for common utility classes (e.g., padding, margins, typography).
4. **Organize Styles by Purpose**: Group shared styles logically, such as typography, colors, and layout, to keep the styling structure clean and modular.
5. **Follow a Naming Convention**: Use clear and descriptive names for classes, files, and folders to improve readability and maintainability.

## Summary

By organizing and centralizing shared styles in a Gatsby project, you create a consistent and maintainable styling structure. Whether you use global CSS, CSS Modules, or Tailwind CSS, each approach offers a unique way to manage and apply styles efficiently, helping you keep the styling layer clean and aligned with the overall project architecture.
