// src/components/Title.tsx
import React, { useEffect, useState } from "react";
import "../styles/Title.css";

const slides = [
  {
    id: 1,
    title: "Velocidade e Estilo nos Seus Pés",
    subtitle: "Confira as chuteiras que vão transformar seu jogo",
    image: "./products/nikeverde.jpg",
  },
  {
    id: 2,
    title: "Explore Performance sem Limites",
    subtitle: "Modelos projetados para dominar o campo com leveza e potência",
    image: "./products/adidasvermelha.png",
  },
  {
    id: 3,
    title: "Tecnologia e Conforto em Cada Passo",
    subtitle: "Experimente a nova geração de chuteiras profissionais",
    image: "/products/adidascreme.png",
  },
];

const Title: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState("fade-in");

  const nextSlide = () => {
    setFade("fade-out");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade("fade-in");
    }, 300);
  };

  const prevSlide = () => {
    setFade("fade-out");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade("fade-in");
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="title-carousel">
      <button onClick={prevSlide} className="arrow-btn left">❮</button>

      <div className={`title-slide ${fade}`}>
        <div className="title-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <button className="title-btn">Ver Chuteiras</button>
        </div>
        <div className="title-image">
          <img src={slides[currentSlide].image} alt="Chuteira" />
        </div>
      </div>

      <button onClick={nextSlide} className="arrow-btn right">❯</button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Title;
