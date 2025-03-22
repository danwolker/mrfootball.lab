import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/ProductCardCarousel.css";

const initialProducts = [
  {
    image: "/imagens/chuteira1.jpg",
    name: "Nike Phantom GX",
    price: "R$ 499,90",
    rating: 5,
  },
  {
    image: "/imagens/chuteira2.jpg",
    name: "Adidas Predator Edge",
    price: "R$ 459,90",
    rating: 4,
  },
  {
    image: "/imagens/chuteira3.jpg",
    name: "Puma Future Z",
    price: "R$ 429,90",
    rating: 4,
  },
  {
    image: "/imagens/chuteira4.jpg",
    name: "Mizuno Morelia Neo",
    price: "R$ 399,90",
    rating: 5,
  },
  {
    image: "/imagens/chuteira5.jpg",
    name: "Nike Mercurial Vapor",
    price: "R$ 529,90",
    rating: 5,
  },
  {
    image: "/imagens/chuteira6.jpg",
    name: "Adidas X Speedflow",
    price: "R$ 479,90",
    rating: 4,
  },
  {
    image: "/imagens/chuteira7.jpg",
    name: "Umbro Velocita",
    price: "R$ 389,90",
    rating: 3,
  },
  {
    image: "/imagens/chuteira8.jpg",
    name: "New Balance Furon",
    price: "R$ 449,90",
    rating: 4,
  },
];

const ProductCardCarousel: React.FC = () => {
  const [products, setProducts] = useState(initialProducts);

  const rotateLeft = () => {
    const first = products[0];
    setProducts([...products.slice(1), first]);
  };

  const rotateRight = () => {
    const last = products[products.length - 1];
    setProducts([last, ...products.slice(0, products.length - 1)]);
  };

  return (
    <section className="product-carousel-horizontal">
      <h2 className="carousel-title">Nossas Chuteiras</h2>
      <button className="arrow-btn left" onClick={rotateRight}>❮</button>

      <div className="carousel-track">
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
              <button className="cart-btn"><FaShoppingCart /></button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow-btn right" onClick={rotateLeft}>❯</button>
    </section>
  );
};

export default ProductCardCarousel;
