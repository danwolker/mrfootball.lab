import { BaseRadioButton } from "../ProductListing/RadioColor.Style";
import { useState } from "react";
import "../ProductRegistration/SoccerBootRegistrationForm.css";
import { useProducts } from "../../contexts/ProductsContext";

const SoccerBootRegistrationForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>();
  const [urlPreview, setUrlPreview] = useState<string | null>(null);
  const { colors, brands, lines } = useProducts();
  const handleSelectedType = (type: string) => {
    const newType = selectedType === type ? null : type;
    setSelectedType(newType);
  };

  const handleRegistryProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    if (selectedType) formData.append("type", selectedType);
    if (image) formData.append("boot_image", image);
    const bootieValue = formData.get("bootie") ? "on" : "off";
    formData.set("bootie", bootieValue);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/registry_product",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleRegistryProduct}>
        <h2>Chuteiras</h2>

        <div>
          <label htmlFor="image">Imagem: </label>
          <input
            className="input-img"
            type="file"
            name="image"
            id="image"
            required
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
                setUrlPreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {urlPreview && <img src={urlPreview} alt="prévia da imagem" />}
        </div>

        <div>
          <label htmlFor="brands">Marca: </label>
          <select name="brands" id="brands">
            {brands.map((brand) => (
              <option value={brand.brand}>{brand.brand}</option>
            ))}
          </select>
        </div>

        <div>
        <label htmlFor="lines">Linha: </label>
          <select name="lines" id="lines">
            {lines.map((line) => (
              <option value={line.line}>{line.line}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="colors">Cor: </label>
          <select name="colors" id="colors">
            {colors.map((color) => (
              <option value={color.color}>{color.color}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bootie">Botinha: </label>
          <input type="radio" id="bootie" name="bootie" />
        </div>

        <div>
          <label htmlFor="price">Preço: </label>
          <input type="number" id="price" name="price" />
        </div>

        <div id="filters-types">
          <p>Tipo: </p>
          {["Campo", "Salao", "Suico", "Trava-Mista", "Todas"]
            .sort()
            .map((type) => (
              <div className="radio-container" key={type}>
                <label htmlFor={type}>{type}</label>
                <BaseRadioButton
                  type="radio"
                  name="type"
                  id={type}
                  checked={selectedType === type}
                  onChange={() => handleSelectedType(type)}
                />
              </div>
            ))}
        </div>

        <div>
          <label htmlFor="description">Descrição: </label>
          <input type="text" id="description" name="description" />
        </div>

        <button type="submit">Salvar Produto</button>
      </form>
    </div>
  );
};

export default SoccerBootRegistrationForm;
