// src/components/ProductListing/SidebarFilters.tsx
import React, { useEffect } from "react";
import "../../styles/SideBarFilters.css";
import { useProducts } from "../../contexts/ProductsContext";
import { BaseRadioButton, RadioButtonColor } from "./RadioColor.Style";
import { CaseUpper, Container } from "lucide-react";

const SidebarFilters: React.FC = () => {
  const {
    changeBootType,
    changeBootie,
    changeSelectedColor,
    changeSelectedBrand,
    colors,
    brands,
  } = useProducts();

  function handleColorFilter(selectedColor: string) {
    changeSelectedColor(selectedColor);
  }

  function handleBrandFilter(selectedBrand: string) {
    changeSelectedBrand(selectedBrand);
  }

  function handleSelectedType(selectedBootType: string) {
    changeBootType(selectedBootType);
  }

  function handleSelectedBootie(selectedValue: string) {
    changeBootie(selectedValue);
  }


  function handleColorsDisplay() {
    const filtersColorsDiv = document.getElementById('filters-colors') as HTMLElement
    if (filtersColorsDiv.style.display == 'flex') {
      filtersColorsDiv.style.display = 'none'
    } else {
      filtersColorsDiv.style.display = 'flex'
    }
  }


  return (
    <aside className="sidebar">
       <button className="colors-button" onClick={handleColorsDisplay}>
         <h2 className="colors-title">Cores <i class="ph ph-arrow-bend-right-down"></i></h2>
       </button>
      <div id='filters-colors' className="filter-group-colors">
        {colors.map((color) => (
          <div className="radio-container" key={color.color}>
            <RadioButtonColor
              type="radio"
              name="color"
              onChange={() => handleColorFilter(color.color)}
              id={color.color}
              buttoncolor={color.color_code}
            />

            <label className="label" htmlFor={color.color}>
              {color.color}
            </label>
          </div>
        ))}


      </div>
      <div className="filter-group">
        <h2>Marcas</h2>
        {brands.map((brand) => (
          <div className="radio-container" key={brand.brand}>
            <BaseRadioButton
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


      <div className="filter-group">
        <h2>Tipos</h2>

        <div className="radio-container" >
          <BaseRadioButton
            onChange={() => handleSelectedType("Campo")}
            type="radio"
            name="type"
            id="campo"
          />
          <label className="label" htmlFor="campo">
            Campo
          </label>
        </div>

        <div className="radio-container" >
          <BaseRadioButton
            onChange={() => handleSelectedType("Salao")}
            type="radio"
            name="type"
            id="salao"
          />
          <label className="label" htmlFor="salao">
            Salão
          </label>
        </div>

        <div className="radio-container" >
          <BaseRadioButton
            onChange={() => handleSelectedType("Suico")}
            type="radio"
            name="type"
            id="suico"
          />
          <label className="label" htmlFor="suico">
            Suiço
          </label>
        </div>

        <div className="radio-container" >
          <BaseRadioButton
            onChange={() => handleSelectedType("Trava-Mista")}
            className="label"
            type="radio"
            name="type"
            id="mista"
          />
          <label htmlFor="mista">Trava Mista</label>
        </div>
        <div className="radio-container" >
          <BaseRadioButton
            onChange={() => handleSelectedType("Todas")}
            className="label"
            type="radio"
            name="type"
            id="all"
          />
          <label htmlFor="all">Todas</label>
        </div>
        <div className="filter-group">
          <h2>Botinha</h2>
          <div className="radio-container" >
            <BaseRadioButton
              onChange={() => handleSelectedBootie("com")}
              type="radio"
              name="bootie"
              id="with"
            />
            <label htmlFor="with">Com Botinha</label>
          </div>
          <div className="radio-container" >
            <BaseRadioButton
              onChange={() => handleSelectedBootie("sem")}
              type="radio"
              name="bootie"
              id="without"
            />
            <label htmlFor="without">Sem Botinha</label>
          </div>
          <div className="radio-container" >
            <BaseRadioButton
              onChange={() => handleSelectedBootie("todas")}
              type="radio"
              name="bootie"
              id="with-and-without"
            />
            <label htmlFor="with-and-without">Todas</label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilters;
