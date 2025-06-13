"use client";
import React from "react";
import "../styles/ProductInfoBar.css";

const ProductInfoBar = () => {
  return (
    <section className="product-info-bar">
      <div className="product-info-left">
        <span className="item-count">3425 ITEMS</span>
        <button className="filter-toggle"> HIDE FILTER</button>
      </div>

      <div className="product-info-right">
        <label htmlFor="sort">SORT BY:</label>
        <select id="sort" className="sort-dropdown">
          <option value="recommended">RECOMMENDED</option>
          <option value="latest">LATEST</option>
          <option value="priceLowHigh">PRICE: LOW TO HIGH</option>
          <option value="priceHighLow">PRICE: HIGH TO LOW</option>
        </select>
      </div>
    </section>
  );
};

export default ProductInfoBar;
