"use client";
import React, { useEffect, useState } from "react";

import "../styles/ProductGrid.css";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Limit to 18 products only
        const sliced = data.slice(0, 18);

        const formatted = sliced.map((item, idx) => ({
          id: item.id,
          name: item.title,
          image: item.image,
          outOfStock: idx % 5 === 0, // Example logic
          tag: idx % 2 === 0 ? "BESTSELLER" : null,
        }));

        setProducts(formatted);
      });
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
