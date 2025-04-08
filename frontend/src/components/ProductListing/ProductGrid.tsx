// src/components/ProductListing/ProductGrid.tsx
import React, { useEffect, useState } from "react";
import { FaShoppingCart} from "react-icons/fa";
import { useProducts } from "../../contexts/ProductsContext";
import "../../styles/ProductGrid.css";


interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  price: number;
  rating: number;
}

const ProductGrid: React.FC = () => {
  
  const {products} = useProducts()

  const handleAddToCart = async (productToAdd: Product) => {
    const getOrCreateCartId = () => {
      let cartId = localStorage.getItem("cartId");
      if (!cartId) {
        cartId = crypto.randomUUID();
        sessionStorage.setItem("cartId", cartId);
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={`http://127.0.0.1:8000${product.image}`}
            alt={product.brand}
          />
          <h4>
            {product.brand} {product.line}
          </h4>
          <p>R$ {product.price.toFixed(2)}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="cartshoes-btn"
          >
            <FaShoppingCart />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
