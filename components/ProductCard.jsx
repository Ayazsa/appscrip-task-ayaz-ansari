// components/ProductCard.jsx
"use client";
import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.outOfStock && (
          <span className="out-of-stock">OUT OF STOCK</span>
        )}
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-pricing-link">
        <a href="#">Sign in or Create an account to see pricing</a>
      </p>
      <div className="wishlist-icon">♡</div>
    </div>
  );
};

export default ProductCard;
