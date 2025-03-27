// src/components/ProductListing/SidebarFilters.tsx
import React from "react";

const SidebarFilters: React.FC = () => {
  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      <div className="filter-group">
        <label><input type="checkbox" /> Tamanho 39</label>
        <label><input type="checkbox" /> Tamanho 40</label>
        <label><input type="checkbox" /> Promoções</label>
      </div>
      <div className="filter-group">
        <h4>Faixa de Preço</h4>
        <label><input type="radio" name="price" /> até R$ 199</label>
        <label><input type="radio" name="price" /> R$ 200 - R$ 499</label>
      </div>
    </aside>
  );
};

export default SidebarFilters;
