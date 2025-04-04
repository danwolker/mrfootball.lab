// src/components/ProductListing/SidebarFilters.tsx
import React from "react";
import { useState, useEffect } from "react";
import "../../styles/SideBarFilters.css";

interface Color {
  color: string;
}

const SidebarFilters: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_colors")
      .then((res) => res.json())
      .then((data) => setColors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      <div className="filter-group">
        {colors.map((color) => (
          <div key={color.color}>
            <input type="radio" name="color" id={color.color} />
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
