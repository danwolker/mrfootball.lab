import { useState } from "react";
import "../ProductRegistration/SoccerBootRegistrationForm.css";
import { useProducts } from "../../contexts/ProductsContext";
import { useRegistry } from "../../contexts/RegistryContext";

const SoccerBootRegistrationForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>();
  const [urlPreview, setUrlPreview] = useState<string | null>(null);
  const { colors, brands, lines } = useProducts();
  const { isSoccerBootOpen, isBrandOpen, isColorOpen, isLineOpen } =
    useRegistry();
  const types = ["Campo", "Salao", "Suico", "Trava-Mista", "Todas"];

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
    <div>
      {isSoccerBootOpen && (
        <form className="registration-form" onSubmit={handleRegistryProduct}>
          <h2>Registrar Chuteiras</h2>

          <div className="input-div">
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
            {urlPreview && (
              <img className="prev" src={urlPreview} alt="prévia da imagem" />
            )}
          </div>

          <div className="input-div">
            <label htmlFor="brands">Marca: </label>
            <select
              className="registry-select"
              required
              name="brands"
              id="brands"
            >
              {brands.map((brand) => (
                <option key={brand.brand} value={brand.brand}>
                  {brand.brand}
                </option>
              ))}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="lines">Linha: </label>
            <select
              className="registry-select"
              required
              name="lines"
              id="lines"
            >
              {lines.map((line) => (
                <option key={line.line} value={line.line}>
                  {line.line}
                </option>
              ))}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="colors">Cor: </label>
            <select
              className="registry-select"
              required
              name="colors"
              id="colors"
            >
              {colors.map((color) => (
                <option key={color.color} value={color.color}>
                  {color.color}
                </option>
              ))}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="bootie">Botinha: </label>
            <input required type="radio" id="bootie" name="bootie" />
          </div>

          <div className="input-div">
            <label htmlFor="price">Preço: </label>
            <input required type="number" id="price" name="price" />
          </div>

          <div className="input-div" id="filters-types">
            <label htmlFor="types">Tipo: </label>
            <select
              className="registry-select"
              required
              name="types"
              id="types"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="description">Descrição: </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              cols={50}
              required
            />
          </div>
          <button className="save-button" type="submit">
            Salvar Produto
          </button>
        </form>
      )}
      {isBrandOpen && (
        <div className="registration-form">
          <h2>Registrar Marcas</h2>
          <div className="input-div">
            <label htmlFor="brand">Marca:</label>
            <input type="text" name="brand" id="brand" />
          </div>
          <button className="save-button">Salvar Marca</button>
        </div>
      )}
      {isLineOpen && (
        <div className="registration-form">
          <h2>Registrar Linhas</h2>
          <div className="input-div">
            <label htmlFor="line">Linha:</label>
            <input type="text" name="line" id="line" />
          </div>
          <button className="save-button">Salvar Linha</button>
        </div>
      )}
      {isColorOpen && (
        <div className="registration-form">
          <h2>Registrar Cores</h2>
          <div className="input-div">
            <label htmlFor="color">Cor:</label>
            <input type="text" name="color" id="color" />
            <label htmlFor="code">Linear Gradient:</label>
            <input type="text" name="code" id="code" />
          </div>
          <button className="save-button">Salvar Cor</button>
        </div>
      )}
    </div>
  );
};

export default SoccerBootRegistrationForm;
