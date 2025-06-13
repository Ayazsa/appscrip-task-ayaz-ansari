// components/MainLayoutGrid.jsx
import React from "react";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import "../styles/MainLayoutGrid.css";

const MainLayoutGrid = () => {
  return (
    <section className="main-layout">
      <FilterSidebar />
      <ProductGrid />
    </section>
  );
};

export default MainLayoutGrid;
