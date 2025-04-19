import { BaseRadioButton } from "../components/ProductListing/RadioColor.Style";
import { useState } from "react";
const ProductRegistrationForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelectedType = (type: string) => {
    const newType = selectedType === type ? null : type;
    setSelectedType(newType);
  };

    return (
      <div>
        <h1>Resgistrar Produtos</h1>
        <form>
            <h2>Chuteiras</h2>
            <input type="text" id="brand" name="brand"/>
            <label htmlFor="brand">Marca: </label>

            <input type="text" id="line" name="line"/>
            <label htmlFor="line">Linha: </label>

            <input type="text" id="color" name="color"/>
            <label htmlFor="color">Cor: </label>

            <input type="radio" id="bootie" name="bootie"/>
            <label htmlFor="bootie">Botinha: </label>

            <input type="number" id="price" name="price"/>
            <label htmlFor="price">Preço: </label>

            <div id="filters-types" >
              {["Campo", "Salao", "Suico", "Trava-Mista", "Todas"]
                .sort()
                .map((type) => (
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
           
            <input type="number" id="description" name="description"/>
            <label htmlFor="description">Descrição: </label>

        </form>
      </div>
    );
  };
  
  export default ProductRegistrationForm;