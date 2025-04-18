import { BaseRadioButton } from "../ProductListing/RadioColor.Style";
import { useState } from "react";
import "../../styles/ProductsRegistrationForm.css"

interface Product {
  brand: string;
  line: string;
  image: string;
  price: number;
  color: string;
  type: string; // Ex: "Campo", "Futsal"
  bootie: boolean; // Se tem botinha ou não
  description?: string; // Descrição do produto, opcional
  boot_image: File;
}


const ProductRegistrationForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [image, setImage] = useState<File| null>()
  const [urlPreview, setUrlPreview] = useState<string | null>(null)
  const handleSelectedType = (type: string) => {
    const newType = selectedType === type ? null : type;
    setSelectedType(newType);
  };
  

  const handleRegistryProduct = async () => {
    const formData = new FormData()
    if (selectedType) formData.append('type', selectedType);
    if (image) formData.append('boot_image', image);
      
    const productData: Product = {
      brand: formData.get('brand') as string,
      line: formData.get('line') as string,
      image: urlPreview || '',
      price: Number(formData.get('price')),
      color: formData.get('color') as string,
      type: selectedType || '',
      bootie: formData.get('bootie') === 'on',
      description: formData.get('description') as string,
      boot_image: image as File
    };

  try {
    const response = fetch(
      'http://127.0.0.1:8000/registry-product', 
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(productData)
      },
    )
  } catch(e) {
    console.log(e)
  }

  }

  return (
    <div>
      <h1>Resgistrar Produtos</h1>
      <form className="registration-form" onSubmit={handleRegistryProduct}>
          <h2>Chuteiras</h2>

          <label htmlFor="image">Imagem: </label>
          <input type="file" name="image" id="image" onChange={(e) => {
            if (e.target.files && e.target.files[0]){
              setImage(e.target.files[0]);
              setUrlPreview(URL.createObjectURL(e.target.files[0]))
            }
          }}/>

          {urlPreview && <img src={urlPreview} alt="prévia da imagem" />}


          <label htmlFor="brand">Marca: </label>
          <input type="text" id="brand" name="brand"/>
          
          <label htmlFor="line">Linha: </label>
          <input type="text" id="line" name="line"/>
          
          <label htmlFor="color">Cor: </label>
          <input type="text" id="color" name="color"/>
          
          <label htmlFor="bootie">Botinha: </label>
          <input type="radio" id="bootie" name="bootie"/>

          <label htmlFor="price">Preço: </label>
          <input type="number" id="price" name="price"/>
          
          <div id="filters-types" >
            <p>Tipo: </p>
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
          
          <label htmlFor="description">Descrição: </label>
          <input type="text" id="description" name="description"/>
          
          <button type="submit">Salvar Produto</button>
      </form>
    </div>
  );
  };
  
  export default ProductRegistrationForm;