<h1 align="center">
  TypeScript Starter with Clean Architecture
</h1>

This starter is a **TypeScript project** structured with a **Clean Architecture** approach, providing a foundation for building modular, maintainable, and scalable applications. The structure includes distinct layers for **Presentation** (UI components), **Domain** (business logic and utility functions), **Data** (data fetching and transformations), and **Hooks** (reusable logic across components).

---

## 🚀 Quick Start

1.  **Create the Project**

    Clone this repository or use a package manager to initialize a new project with this setup.

    ```shell
    # Clone the repository
    git clone https://github.com/devxhub/gatsby-boilerplate my-project

    # Navigate into the project directory
    cd my-project

    # Install dependencies
    npm install
    ```

2.  **Start Developing**

    Start your development server.

    ```shell
    npm run develop
    ```

3.  **Open the Code and Start Customizing**

    Your development server should now be running. Open the code in your editor and start making changes.

4.  **Learn More**

    - **Documentation**: Learn more about TypeScript, clean architecture, and building modular applications with this starter.
    - **Additional Resources**: Explore TypeScript guides, architecture principles, and related tutorials to deepen your understanding.

---

## 📂 Project Structure

This project follows a **Clean Architecture** approach with clearly defined layers to improve modularity and maintainability:

```
project-root/
├── src/
│   ├── components/         # Presentation Layer - Pure UI components
│   ├── pages/              # Application pages and routes
│   ├── services/           # Data Layer - Data fetching and transformations
│   ├── domain/             # Domain Layer - Business logic and utility functions
│   │   ├── utils/          # Helper functions and utilities
│   │   └── entities/       # Domain entities and models
│   ├── hooks/              # Custom hooks for reusable logic across components
│   └── styles/             # Shared styles and CSS files
```

### Layer Descriptions

1. **Presentation Layer (`src/components/`)**  
   - **Purpose**: Contains UI components focused solely on rendering.
   - **Characteristics**: Pure, reusable components that do not manage data fetching or business logic.

2. **Domain Layer (`src/domain/`)**  
   - **Purpose**: Encapsulates business logic, utility functions, and domain-specific entities.
   - **Structure**:
     - `utils/`: Utility functions and helper methods, e.g., date formatting, calculations.
     - `entities/`: Domain models or classes representing core entities of the application.
   - **Characteristics**: Framework-agnostic code that can be tested and reused independently of the UI or data layers.

3. **Data Layer (`src/services/`)**  
   - **Purpose**: Manages data fetching and transformations, keeping data management separate from the UI.
   - **Characteristics**: Centralized API queries, data transformation functions, and reusable hooks for accessing data.

4. **Hooks (`src/hooks/`)**  
   - **Purpose**: Contains custom hooks that encapsulate and share logic across multiple components.
   - **Example Use Cases**: State management, data fetching hooks, event listeners, and reusable logic that needs to be shared between components.
   - **Characteristics**: Promotes reusability and maintains separation of concerns by keeping shared logic outside of individual components.

5. **Styles (`src/styles/`)**  
   - **Purpose**: Centralizes shared styles and CSS files.
   - **Structure**:
     - `global.css`: Global styles applied across the entire application.
     - Component-specific or utility-based styles can also be included here for reusable design tokens and themes.

---

## 💡 Best Practices

- **Keep Components Focused**: Components should focus on rendering and avoid handling complex logic or data transformations.
- **Encapsulate Domain Logic**: Place reusable business logic and domain-specific functions in the `domain/` folder to ensure they remain independent of any framework.
- **Organize Data Access**: Store data fetching functions in `services/` to centralize API access and ensure consistent data handling across the application.
- **Use Custom Hooks**: Utilize `hooks/` to encapsulate reusable logic, such as state management or event handling, that can be shared across components.
- **Use TypeScript for Type Safety**: Define types and interfaces for your entities, utility functions, and components to improve code reliability and maintainability.
- **Separate Styling Concerns**: Organize shared styles and component-specific styles in the `styles/` folder to promote consistency and modularity.
