// src/components/ProductListing/TopFilters.tsx
import React from "react";

const TopFilters: React.FC = () => {
  return (
    <div className="top-filter">
      <span>Ordenar por:</span>
      <select>
        <option value="relevance">Relevância</option>
        <option value="price-low">Menor preço</option>
        <option value="price-high">Maior preço</option>
        <option value="latest">Lançamentos</option>
      </select>
    </div>
  );
};

export default TopFilters;
