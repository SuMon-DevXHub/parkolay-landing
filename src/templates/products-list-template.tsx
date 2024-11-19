import React from "react";
import { Link } from "gatsby";

// Import the PRODUCTS array from gatsby-node.js or define it here
const PRODUCTS = [
  {
    slug: 'parkonfor11',
    title: 'Product A1 temp',
  },
  {
    slug: 'parkonfor110',
    title: 'Product A2 temp',
  },
  {
    slug: 'parkonfor111',
    title: 'Product B1 temp',
  },
  {
    slug: 'parkonfor110pt',
    title: 'Product B2 temp',
  },
  {
    slug: 'parkonfor11pt',
    title: 'Product C1 temp',
  },
  {
    slug: 'parkonfor111pt',
    title: 'Product C2 temp',
  },
];

const ProductsListTemplate: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map(product => (
          <li key={product.slug}>
            <Link to={`/products/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsListTemplate;