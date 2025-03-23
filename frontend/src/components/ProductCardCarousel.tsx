import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/ProductCardCarousel.css";

const initialProducts = [
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Nike Phantom GX",
    price: "R$ 499,90",
    rating: 5,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Adidas Predator Edge",
    price: "R$ 459,90",
    rating: 4,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Puma Future Z",
    price: "R$ 429,90",
    rating: 4,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Mizuno Morelia Neo",
    price: "R$ 399,90",
    rating: 5,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Nike Mercurial Vapor",
    price: "R$ 529,90",
    rating: 5,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Adidas X Speedflow",
    price: "R$ 479,90",
    rating: 4,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "Umbro Velocita",
    price: "R$ 389,90",
    rating: 3,
  },
  {
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
    name: "New Balance Furon",
    price: "R$ 449,90",
    rating: 4,
  },
];

const ProductCardCarousel: React.FC = () => {
  const [products, setProducts] = useState(initialProducts);
  const [fade, setFade] = useState("fade-in");
  const handleAddToCart = ( product : any ) => {
    console.log("Product added to cart");
  };

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
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
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
