import "../../styles/SideBarFilters.css";
import { useProducts } from "../../contexts/ProductsContext";
import { BaseRadioButton, RadioButtonColor } from "./RadioColor.Style";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { useState } from "react";

const SidebarFilters: React.FC = () => {
  const {
    changeBootType,
    changeBootie,
    changeSelectedColor,
    changeSelectedBrand,
    colors,
    brands,
  } = useProducts();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBootie, setSelectedBootie] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleDisplay = (id: string) => {
    const el = document.getElementById(id) as HTMLElement;
    el.classList.toggle("hidden");
  };

  const handleColorFilter = (color: string) => {
    const newColor = selectedColor === color ? null : color;
    setSelectedColor(newColor);
    changeSelectedColor(newColor ?? "");
  };

  const handleBrandFilter = (brand: string) => {
    const newBrand = selectedBrand === brand ? null : brand;
    setSelectedBrand(newBrand);
    changeSelectedBrand(newBrand ?? "");
  };

  const handleSelectedType = (type: string) => {
    const newType = selectedType === type ? null : type;
    setSelectedType(newType);
    changeBootType(newType ?? "");
  };

  const handleSelectedBootie = (value: string) => {
    const newBootie = selectedBootie === value ? null : value;
    setSelectedBootie(newBootie);
    changeBootie(newBootie ?? "");
  };

  return (
    <>
      <button
        className="mobile-filter-toggle"
        onClick={() => setShowMobileFilters((prev) => !prev)}
      >
        <FaFilter />
        Filtros
      </button>

      <aside className={`sidebar ${showMobileFilters ? "mobile-active" : ""}`}>
        <div id="sidebar-filters">
          <div>
            <button className="display-button" onClick={() => toggleDisplay("filters-colors")}>
              <h2 className="button-title">Cores <FaAngleDown /></h2>
            </button>
            <div id="filters-colors" className="filter-group-colors">
              {colors.map((color) => (
                <div className="radio-container" key={color.color}>
                  <RadioButtonColor
                    type="radio"
                    name="color"
                    id={color.color}
                    $buttoncolor={color.color_code}
                    checked={selectedColor === color.color}
                    onChange={() => handleColorFilter(color.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <button className="display-button" onClick={() => toggleDisplay("filters-brands")}>
              <h2 className="button-title">Marcas <FaAngleDown /></h2>
            </button>
            <div id="filters-brands" className="filter-group list-left">
              {brands.sort((a, b) => a.brand.localeCompare(b.brand)).map((brand) => (
                <div className="radio-container" key={brand.brand}>
                  <BaseRadioButton
                    type="radio"
                    name="brand"
                    id={brand.brand}
                    checked={selectedBrand === brand.brand}
                    onChange={() => handleBrandFilter(brand.brand)}
                  />
                  <label className="label" htmlFor={brand.brand}>{brand.brand}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button className="display-button" onClick={() => toggleDisplay("filters-types")}>
              <h2 className="button-title">Tipos <FaAngleDown /></h2>
            </button>
            <div id="filters-types" className="filter-group list-left">
              {["Campo", "Salao", "Suico", "Trava-Mista", "Todas"].sort().map((type) => (
                <div className="radio-container" key={type}>
                  <BaseRadioButton
                    type="radio"
                    name="type"
                    id={type}
                    checked={selectedType === type}
                    onChange={() => handleSelectedType(type)}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button className="display-button" onClick={() => toggleDisplay("bootie-type")}>
              <h2 className="button-title">Botinha <FaAngleDown /></h2>
            </button>
            <div id="bootie-type" className="filter-group list-left">
              {["com", "sem", "todas"].map((value) => (
                <div className="radio-container" key={value}>
                  <BaseRadioButton
                    type="radio"
                    name="bootie"
                    id={value}
                    checked={selectedBootie === value}
                    onChange={() => handleSelectedBootie(value)}
                  />
                  <label htmlFor={value}>
                    {value === "com" ? "Com Botinha" : value === "sem" ? "Sem Botinha" : "Todas"}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarFilters;
