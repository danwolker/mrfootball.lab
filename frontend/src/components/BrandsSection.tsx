import React, { useEffect, useState } from "react";
import "../styles/BrandsSection.css";

const logos = [
  { image: "/imagens/logoadidas.png", alt: "Adidas" },
  { image: "/imagens/logonewbalance.png", alt: "New Balance" },
  { image: "/imagens/logonike.jpg", alt: "Nike" },
  { image: "/imagens/logopuma.png", alt: "Puma" },
];

const BrandsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setStartIndex((prev) => (prev + 2) % logos.length);
        setFade("fade-in");
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    logos[startIndex],
    logos[(startIndex + 1) % logos.length],
  ];

  return (
    <section className="brands-section">
      <h2 className="brands-title">Nossas marcas parceiras</h2>
      <div className={`brands-carousel ${fade}`}>
        {visibleLogos.map((logo, index) => (
          <div className="brand-card" key={index}>
            <img src={logo.image} alt={logo.alt} className="brand-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
