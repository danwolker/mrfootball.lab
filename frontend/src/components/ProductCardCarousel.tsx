import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/ProductCardCarousel.css";


const ProductCardCarousel: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [fade, setFade] = useState("fade-in");
  const handleAddToCart = ( product : any ) => {
    console.log("Product added to cart");
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  const fecthProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_soccer_boots");
      const data = await response.json();
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  const rotateLeft = () => {
    setFade("fade-out");
    setTimeout(() => {
      const first = products[0];
      setProducts([...products.slice(1), first]);
      setFade("fade-in");
    }, 100);
  };

  const rotateRight = () => {
    setFade("fade-out");
    setTimeout(() => {
      const last = products[products.length - 1];
      setProducts([last, ...products.slice(0, products.length - 1)]);
      setFade("fade-in");
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateLeft();
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  return (
    <section className="product-carousel-horizontal">
      <h2 className="carousel-title">Nossas Chuteiras</h2>
      <button className="arrow-btn left" onClick={rotateRight}>❮</button>

      <div className={`carousel-track ${fade}`}>
        {products.slice(0, 4).map((product, index) => (
          <div className="product-card" key={index}>
            <img src={`http://127.0.0.1:8000${product.image}`} alt={product.brand} className="product-img" />
            <h3>{product.brand}{product.line}</h3>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < product.rating ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <p className="price">{product.price}</p>
            <div className="card-buttons">
              <button className="fav-btn"><FaHeart /></button>
              <button onClick={() => handleAddToCart(product)}
                 className="cartshoes-btn"><FaShoppingCart /></button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow-btn right" onClick={rotateLeft}>❯</button>
    </section>
  );
};

export default ProductCardCarousel;
