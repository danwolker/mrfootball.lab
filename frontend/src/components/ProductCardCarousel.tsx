import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/ProductCardCarousel.css";

interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  price: number;
  rating: number;
}

const ProductCardCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [fade, setFade] = useState<"fade-in" | "fade-out">("fade-in");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleAddToCart = async (productToAdd: Product) => {
    {
      const toCartData = {
        product: productToAdd,
      };
      try {
        await fetch("http://127.0.0.1:8000/api/add_boot_to_cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toCartData),
        });
        console.log("Produto Adicionado ao carrinho!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_soccer_boots"
      );
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const rotateLeft = () => {
    const first = products[0];
    setProducts([...products.slice(1), first]);
    setFade("fade-in");
  };

  const rotateRight = () => {
    const last = products[products.length - 1];
    setProducts([last, ...products.slice(0, products.length - 1)]);
    setFade("fade-in");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateLeft();
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  const handleVisibleProducts = () => {
    if (windowWidth <= 550) {
      return products.slice(0, 1);
    } else if (windowWidth <= 768) {
      return products.slice(0, 2);
    } else if (windowWidth <= 1500) {
      return products.slice(0, 3);
    } else {
      return products.slice(0, 4);
    }
  };
  const visibleProducts = handleVisibleProducts();

  return (
    <section className="product-carousel-horizontal">
      <h2 className="carousel-title">Nossas Chuteiras</h2>
      <button className="arrow-btn left" onClick={rotateRight}>
        ❮
      </button>
      <div className={`carousel-track ${fade}`}>
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={product.brand}
              className="product-img"
            />
            <h3>
              {product.brand} {product.line}
            </h3>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
            <p className="price">R$: {product.price}</p>
            <div className="card-buttons">
              <button
                onClick={() => handleAddToCart(product)}
                className="cartshoes-btn"
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow-btn right" onClick={rotateLeft}>
        ❯
      </button>
    </section>
  );
};

export default ProductCardCarousel;
