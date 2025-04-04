
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

export interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  price: number;
  rating: number;
}

export interface Color {
  color: string;
}

export interface Brand {
  brand: string;
}



interface ProductsContextType {
  products: Product[];
  colors: Color[];
  brands: Brand[];
  
  changeSelectedBrand: (selectedBrand: string) => void;
  changeSelectedColor: (selectedColor: string) => void;
  changeBootType: (selectedBootType: string) => void;
  changeBootie: (selectedBootie: string) => void;
}

const ProductContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [color, setColor] = useState("");
  const [brands, setBrands] = useState<Brand[]>([]);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [bootie, setBootie] = useState("")

  const changeBootType = (selectedBootType: string) => {
    setType(selectedBootType);
  };

  const changeSelectedColor = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const changeSelectedBrand = (seletedBrand: string) => {
    setBrand(seletedBrand);
  };

  const changeBootie = (selectedBootie:string) => {
    setBootie(selectedBootie)
  }

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/get_soccer_boots?color=${color}&brand=${brand}&type=${type}&bootie=${bootie}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [color, brand, type]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
    fetch("http://127.0.0.1:8000/api/get_colors")
      .then((res) => res.json())
      .then((data) => setColors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        changeSelectedColor,
        changeSelectedBrand,
        changeBootType,
        changeBootie,
        products,
        colors,
        brands,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Erro no Provider");
  }
  return context;
};
