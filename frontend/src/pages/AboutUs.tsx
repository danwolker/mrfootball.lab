import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import "../styles/AboutUs.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <section className="about-us-section">
        <h1 className="about-title">Sobre a Mr Football Lab</h1>
        <p className="about-description">
          Localizada em Santa Catarina - RS, a <strong>Mr Football Lab</strong> nasceu da paixão pelo futebol e pela tecnologia.
          Nossa missão é oferecer aos apaixonados por chuteiras a melhor experiência de compra online, com variedade, qualidade e
          atendimento especializado.
        </p>
        <p className="about-description">
          Trabalhamos com as maiores marcas do mercado como Nike, Adidas, Puma e New Balance, sempre buscando entregar produtos de
          alta performance para todos os estilos de jogo.
        </p>
        <p className="about-description">
          Na Mr Football Lab, você encontra mais do que chuteiras — você encontra a confiança de um time que entende de campo,
          estilo e desempenho. Seja você amador ou profissional, aqui é o seu lugar!
        </p>

        <div className="social-container">
          <h3>Conecte-se com a gente:</h3>
          <div className="social-icons">
            <a href="https://instagram.com/mrfootball.lab" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon insta" />
            </a>
            <a href="https://facebook.com/mrfootball.lab" target="_blank" rel="noreferrer">
              <FaFacebookF className="social-icon face" />
            </a>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noreferrer">
              <FaWhatsapp className="social-icon whats" />
            </a>
          </div>
        </div>
      </section>

      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default AboutUs;
