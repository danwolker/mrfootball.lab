import "../../styles/SideBarFilters.css";
import { useProducts } from "../../contexts/ProductsContext";
import { BaseRadioButton, RadioButtonColor } from "./RadioColor.Style";

import { FaAngleDown } from "react-icons/fa";
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
    const filtersColorsDiv = document.getElementById(
      "filters-colors"
    ) as HTMLElement;
    if (filtersColorsDiv.style.display == "flex") {
      filtersColorsDiv.style.display = "none";
    } else {
      filtersColorsDiv.style.display = "flex";
    }
  }

  function handleBrandsDisplay() {
    const filtersBrandsDiv = document.getElementById(
      "filters-brands"
    ) as HTMLElement;
    if (filtersBrandsDiv.style.display == "flex") {
      filtersBrandsDiv.style.display = "none";
    } else {
      filtersBrandsDiv.style.display = "flex";
    }
  }

  function handleTypesDisplay() {
    const filtersBrandsDiv = document.getElementById(
      "filters-types"
    ) as HTMLElement;
    if (filtersBrandsDiv.style.display == "flex") {
      filtersBrandsDiv.style.display = "none";
    } else {
      filtersBrandsDiv.style.display = "flex";
    }
  }

  function handleBootieDisplay() {
    const filtersBrandsDiv = document.getElementById(
      "bootie-type"
    ) as HTMLElement;
    if (filtersBrandsDiv.style.display == "flex") {
      filtersBrandsDiv.style.display = "none";
    } else {
      filtersBrandsDiv.style.display = "flex";
    }
  }

  return (
    <aside className="sidebar">
      <div>
        <button className="display-button" onClick={handleColorsDisplay}>
          <h2 className="button-title">
            Cores
            <FaAngleDown />
          </h2>
        </button>
        <div id="filters-colors" className="filter-group-colors">
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
      </div>
      <div>
        <button className="display-button" onClick={handleBrandsDisplay}>
          <h2 className="button-title">
            Marcas <FaAngleDown />
          </h2>
        </button>
        <div id="filters-brands" className="filter-group">
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
      </div>

      <div>
        <button className="display-button" onClick={handleTypesDisplay}>
          <h2 className="button-title">
            Tipos <FaAngleDown />
          </h2>
        </button>
        <div id="filters-types" className="filter-group">
          <div className="radio-container">
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
          <div className="radio-container">
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
          <div className="radio-container">
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
          <div className="radio-container">
            <BaseRadioButton
              onChange={() => handleSelectedType("Trava-Mista")}
              className="label"
              type="radio"
              name="type"
              id="mista"
            />
            <label htmlFor="mista">Trava Mista</label>
          </div>
          <div className="radio-container">
            <BaseRadioButton
              onChange={() => handleSelectedType("Todas")}
              className="label"
              type="radio"
              name="type"
              id="all"
            />
            <label htmlFor="all">Todas</label>
          </div>
        </div>
      </div>

      <div>
        <button className="display-button" onClick={handleBootieDisplay}>
          <h2 className="button-title">
            Botinha <FaAngleDown />
          </h2>
        </button>
        <div id="bootie-type" className="filter-group">
          <div className="radio-container">
            <BaseRadioButton
              onChange={() => handleSelectedBootie("com")}
              type="radio"
              name="bootie"
              id="with"
            />
            <label htmlFor="with">Com Botinha</label>
          </div>
          <div className="radio-container">
            <BaseRadioButton
              onChange={() => handleSelectedBootie("sem")}
              type="radio"
              name="bootie"
              id="without"
            />
            <label htmlFor="without">Sem Botinha</label>
          </div>
          <div className="radio-container">
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
