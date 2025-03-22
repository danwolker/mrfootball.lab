import React from "react";
import "../styles/Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <img src="/imagens/banner1.jpg" alt="Banner 1" className="banner-img" />
      <img src="/imagens/banner2.jpg" alt="Banner 2" className="banner-img" />
    </div>
  );
};

export default Banner;
