import React, { useEffect, useState } from "react";
import "../styles/Title.css";

const slides = [
  {
    id: 1,
    title: "Velocidade e Estilo nos Seus Pés",
    subtitle: "Explore chuteiras que unem leveza, design inovador e explosão nos gramados.",
    image: "/products/amarelo-botinha-campo_0z2NxXJ.jpg",
  },
  {
    id: 2,
    title: "Domine o Campo com Precisão",
    subtitle: "Modelos feitos para controle absoluto da bola e performance inigualável.",
    image: "/products/Azul-botinha-campo-2.png",
  },
  {
    id: 3,
    title: "Conforto em Cada Movimento",
    subtitle: "Alta tecnologia para que você jogue com confiança, sem abrir mão do conforto.",
    image: "/products/creme-botinha-campo.png",
  },
];

const Title: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("fade-out");
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimation("fade-in");
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="title-carousel">
      <div className={`title-slide ${animation}`}>
        <div className="title-content">
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
          <button>Ver Chuteiras</button>
        </div>
        <div className="title-image">
          <img src={slide.image} alt="Chuteira" />
        </div>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Title;
