import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import ProductDetailView from "../components/ProductListing/ProductDetailView";

// ✅ Importa o CSS geral que define a estrutura da área de fundo branco
import "../styles/DetailProduct.css";

const DetailProduct: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />

      {/* Envolve a área de produto em um container com fundo branco total */}
      <div className="detail-wrapper">
        <ProductDetailView />
      </div>

      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default DetailProduct;
