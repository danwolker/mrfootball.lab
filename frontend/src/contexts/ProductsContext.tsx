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
  color: string;
  amount: number;
  type: string; // Ex: "Campo", "Futsal"
  boot: boolean; // Se tem botinha ou não
  description?: string; // Descrição do produto, opcional
}

export interface Color {
  color: string;
  color_code: string;
}

export interface Brand {
  brand: string;
}

export interface Line {
  line:string;
}

interface CartItem {
  cart_id: string;
  product: Product;
  amount: number;
  size: number;
}

interface ProductsContextType {
  products: Product[];
  colors: Color[];
  brands: Brand[];
  lines: Line[];
  cartItems: CartItem[];
  isCartOpen: boolean;
  fetchCartItems: () => void;
  changeSelectedBrand: (selectedBrand: string) => void;
  changeSelectedColor: (selectedColor: string) => void;
  changeBootType: (selectedBootType: string) => void;
  changeBootie: (selectedBootie: string) => void;
  clearCartItems: () => void;
  handleAddToCartContext: (productToadd: Product, size: number) => void;
  handleIncreaseBootAmountInCart: (bootToIncrease: CartItem) => void;
  handleDecreaseBootAmountInCart: (bootToDecrease: CartItem) => void;
  handleRemoveBootFromCart: (bootToRemove: CartItem) => void;
  handleOpenCart: (value: boolean) => void;
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
  const [lines, setLines] = useState<Line[]>([]);
  const [type, setType] = useState("");
  const [bootie, setBootie] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/get_boots_in_cart`
      );
      const data = await response.json();
      setCartItems(data);
    } catch (err) {
      console.error("Erro ao buscar itens do carrinho:", err);
    }
  };

  const clearCartItems = async () => {
    setCartItems([]);
  };

  const handleAddToCartContext = async (
    productToAdd: Product,
    size: number
  ) => {
    const getOrCreateCartId = () => {
      let cartId = localStorage.getItem("cartId");
      if (!cartId) {
        cartId = crypto.randomUUID();
        localStorage.setItem("cartId", cartId);
      }
      return cartId;
    };

    const toCartData = {
      product: productToAdd,
      cart_id: getOrCreateCartId(),
      size,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/add_boot_to_cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toCartData),
        }
      );
      console.log("Produto Adicionado ao carrinho!");

      // Após adicionar, atualize o carrinho
      await fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const handleIncreaseBootAmountInCart = async (bootToIncrease: CartItem) => {
    const data = {
      cart_id: bootToIncrease.cart_id,
      boot_id: bootToIncrease.product.id,
      amount: bootToIncrease.amount,
      size: bootToIncrease.size,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/increase_boot_amount_in_cart",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecreaseBootAmountInCart = async (bootToDecrease: CartItem) => {
    const data = {
      cart_id: bootToDecrease.cart_id,
      boot_id: bootToDecrease.product.id,
      amount: bootToDecrease.amount,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/decrease_boot_amount_in_cart",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveBootFromCart = async (bootToRemove: CartItem) => {
    const data = {
      cart_id: bootToRemove.cart_id,
      boot_id: bootToRemove.product.id,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/remove_boot_from_cart",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const changeBootType = (selectedBootType: string) => {
    setType(selectedBootType);
  };

  const changeSelectedColor = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const changeSelectedBrand = (seletedBrand: string) => {
    setBrand(seletedBrand);
  };

  const changeBootie = (selectedBootie: string) => {
    setBootie(selectedBootie);
  };

  const handleOpenCart = (value: boolean) => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/get_soccer_boots?color=${color}&brand=${brand}&type=${type}&bootie=${bootie}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [color, brand, type, bootie]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
    fetch("http://127.0.0.1:8000/api/get_lines")
      .then((res) => res.json())
      .then((data) => setLines(data))
      .catch((err) => console.error(err));
    fetch("http://127.0.0.1:8000/api/get_colors")
      .then((res) => res.json())
      .then((data) => setColors(data))
      .catch((err) => console.error(err));

    fetchCartItems();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        fetchCartItems,
        changeSelectedColor,
        changeSelectedBrand,
        changeBootType,
        changeBootie,
        clearCartItems,
        handleAddToCartContext,
        handleIncreaseBootAmountInCart,
        handleDecreaseBootAmountInCart,
        handleRemoveBootFromCart,
        handleOpenCart,
        products,
        cartItems,
        colors,
        brands,
        lines,
        isCartOpen,
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
