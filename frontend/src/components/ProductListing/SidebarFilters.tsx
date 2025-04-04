// src/components/ProductListing/SidebarFilters.tsx
import React from "react";
import { useState, useEffect } from "react";
import "../../styles/SideBarFilters.css";
import { useProducts } from "../../contexts/ProductsContext";

const SidebarFilters: React.FC = () => {
  const {changeBootType, changeSelectedColor, changeSelectedBrand, colors, brands } =
    useProducts();

  function handleColorFilter(selectedColor: string) {
    if (selectedColor) {
      console.log(selectedColor);
    }
    changeSelectedColor(selectedColor);
  }

  function handleBrandFilter(selectedBrand: string) {
    if (selectedBrand) {
      console.log(selectedBrand);
    }
    changeSelectedBrand(selectedBrand);
  }

  function handleSelectedType(selectedBootType:string) {
    if (selectedBootType) {
      console.log(selectedBootType)
    }
    changeBootType(selectedBootType)
  }

  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      <div className="filter-group">
        <h2>Cores</h2>
        {colors.map((color) => (
          <div key={color.color}>
            <input
              type="radio"
              name="color"
              onChange={() => handleColorFilter(color.color)}
              id={color.color}
            />
            <label className="label" htmlFor={color.color}>
              {color.color}
            </label>
          </div>
        ))}
        <div className="filter-group">
          <h2>Marcas</h2>
          {brands.map((brand) => (
            <div key={brand.brand}>
              <input
                type="radio"
                name="brand"
                onChange={() => handleBrandFilter(brand.brand)}
                id={brand.brand}
              />
              <label className="label" htmlFor={brand.brand}>
                {brand.brand}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h2>Tipos</h2>

          <div>
            <input onChange={() => handleSelectedType('Campo')} type="radio" name="type" id="campo"/>
            <label className="label" htmlFor="campo">Campo</label>
          </div>    

          <div>
            <input onChange={() => handleSelectedType('Salao')} type="radio" name="type" id="salao"/>
            <label className="label" htmlFor="salao">Salão</label>
          </div>

          <div>
            <input onChange={() => handleSelectedType('Suico')} type="radio" name="type" id="suico"/>
            <label className="label" htmlFor="suico">Suiço</label>
          </div>

          <div>
            <input onChange={() => handleSelectedType('Trava-Mista')} className="label" type="radio" name="type" id="mista"/>
            <label htmlFor="mista">Trava Mista</label>
          </div>
          <div className="filter-group">
            <h2>Botinha</h2>
            <div>
              <input type="radio" name="bootie" id="true" />
              <label htmlFor="true">Com Botinha</label>
            </div>
            <div>
              <input type="radio" name="bootie" id="false" />
              <label htmlFor="true">Sem Botinha</label>
            </div>

          </div>
      </div>
    </aside>
  );
};

export default SidebarFilters;
