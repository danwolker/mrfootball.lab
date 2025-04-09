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
}

export interface Color {
  color: string;
  color_code: string;
}

export interface Brand {
  brand: string;
}

interface CartItem {
  cart_id: string;
  product: Product;
  amount: number;
}

interface ProductsContextType {
  products: Product[];
  colors: Color[];
  brands: Brand[];
  cartItems: CartItem[];
  fetchCartItems: () => void;
  changeSelectedBrand: (selectedBrand: string) => void;
  changeSelectedColor: (selectedColor: string) => void;
  changeBootType: (selectedBootType: string) => void;
  changeBootie: (selectedBootie: string) => void;
  handleAddToCartContext: (productToadd: Product) => void;
  handleIncreaseBootAmountInCart: (bootToIncrease: CartItem) => void;
  handleDecreaseBootAmountInCart: (bootToDecrease: CartItem) => void;
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
  const [bootie, setBootie] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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



  const handleAddToCartContext = async (productToAdd: Product) => {
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

  const handleIncreaseBootAmountInCart = async (bootToIncrease:CartItem) => { 
    const data = {
      cart_id: bootToIncrease.cart_id,
      boot_id: bootToIncrease.product.id,
      amount: bootToIncrease.amount,
    }
    try{
      const response = await fetch('http://127.0.0.1:8000/api/increase_boot_amount_in_cart',
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )
      await fetchCartItems();
    } catch(err) {
      console.log(err)
    }
  }

  const handleDecreaseBootAmountInCart = async (bootToDecrease:CartItem) => { 
    const data = {
      cart_id: bootToDecrease.cart_id,
      boot_id: bootToDecrease.product.id,
      amount: bootToDecrease.amount,
    }
    try{
      const response = await fetch('http://127.0.0.1:8000/api/decrease_boot_amount_in_cart',
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )
      await fetchCartItems();
    } catch(err) {
      console.log(err)
    }
  }

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
    fetch("http://127.0.0.1:8000/api/get_colors")
      .then((res) => res.json())
      .then((data) => setColors(data))
      .catch((err) => console.error(err));
  
    fetchCartItems()
    }, []);

  return (
    <ProductContext.Provider
      value={{
        fetchCartItems, 
        changeSelectedColor,
        changeSelectedBrand,
        changeBootType,
        changeBootie,
        handleAddToCartContext,
        handleIncreaseBootAmountInCart,
        handleDecreaseBootAmountInCart,
        products,
        cartItems,
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
