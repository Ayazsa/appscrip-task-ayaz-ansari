// components/FilterSidebar.jsx
import React from "react";
import "../styles/FilterSidebar.css";

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      {/* CUSTOMIZABLE */}
      <div className="filter-item checkbox-item">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      {/* Divider */}
      <hr />

      {/* IDEAL FOR */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">IDEAL FOR</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>

      <hr />

      {/* OCCASION */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">OCCASION</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* WORK */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">WORK</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* FABRIC */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">FABRIC</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* SEGMENT */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">SEGMENT</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* SUITABLE FOR */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">SUITABLE FOR</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* RAW MATERIALS */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">RAW MATERIALS</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
      <hr />
      {/* PATTERN */}
      <div className="filter-item dropdown-item">
        <div className="label-row">
          <span className="filter-label">PATTERN</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="filter-value">All</div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
