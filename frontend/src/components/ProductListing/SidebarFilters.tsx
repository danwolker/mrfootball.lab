// src/components/ProductListing/SidebarFilters.tsx
import React from "react";
import { useState, useEffect } from "react";
import "../../styles/SideBarFilters.css";
import { useProducts } from "../../contexts/ProductsContext";



const SidebarFilters: React.FC = () => {
  const {colors, changeSelectedColor,} = useProducts()

  function handleColorFilter(selectedColor:string) {
    if (selectedColor){
      console.log(selectedColor)
    }
    changeSelectedColor(selectedColor)
  }

  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      <div className="filter-group">
        {colors.map((color) => (
          <div key={color.color}>
            <input type="radio" name="color" onChange={() => handleColorFilter(color.color)} id={color.color} />
            <label className="label" htmlFor={color.color}>
              {color.color}
            </label>
          </div>
        ))}
      </div>
      <div className="filter-group">
        <h4>Faixa de Preço</h4>
        <label>
          <input type="radio" name="price" /> até R$ 199
        </label>
        <label>
          <input type="radio" name="price" /> R$ 200 - R$ 499
        </label>
      </div>
    </aside>
  );
};

export default SidebarFilters;
