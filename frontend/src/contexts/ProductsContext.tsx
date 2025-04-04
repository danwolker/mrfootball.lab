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

interface ProductsContextType {
  products: Product[];
  changeSelectedColor: (selectedColor: string) => void;
  colors: Color[];
}

const ProductContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [color, setColor] = useState("");

  const changeSelectedColor = (selectedColor: string) => {
    setColor(selectedColor);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/get_soccer_boots?color=${color}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [color]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_colors")
      .then((res) => res.json())
      .then((data) => setColors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ProductContext.Provider value={{ changeSelectedColor, products, colors }}>
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
