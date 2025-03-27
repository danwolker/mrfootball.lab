import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
      fetchProducts();
      fetchBrands();
    }, []);
  
  const fetchProducts = async (brand = '') => {
    try {
      let url = "http://127.0.0.1:8000/api/get_soccer_boots"
      if (brand) {
        url += `?brand=${encodeURIComponent(brand)}`
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_brands");
      const data = await response.json();
      setBrands(data)
    } catch (err) {
      console.log(err)
    }
  }

  const addToCart = async (productToAdd) => {
    const getOrCreateCartId = () => {
      let cartId = localStorage.getItem('cartId');
      if (!cartId) {
          cartId = crypto.randomUUID(); 
          localStorage.setItem('cartId', cartId);
      }
      return cartId;
    }

    const toCartData = {
      product: productToAdd,
      cart_id: getOrCreateCartId()
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_boot_to_cart", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toCartData),
        }
      )
      console.log('Produto Adicionado ao carrinho!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Navbar />
      <Header />
      <h1>Catalog</h1>
      {brands.map((brand, index) => 
        <div key={index}>
          <button onClick={ () => {
            fetchProducts(brand.brand)
            }}>
              {brand.brand}
          </button>
        </div>
        )
      }
      {products.map((product, index) => 
        <div className="product-card" key={index}>
          <img src={`http://127.0.0.1:8000${product.image}`} alt={product.brand} className="product-img" />
          <h3>{product.brand}{product.line}</h3>
          <p>{product.color}</p>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < product.rating ? "#ffc107" : "#e4e5e9"} />
            ))}
          </div>
          <p className="price">{product.price}</p>
          <button onClick={ async () => {
            addToCart(product);
          }}>
            Adicionar ao carrinho
          </button>
        </div>
      )}
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Catalog;
