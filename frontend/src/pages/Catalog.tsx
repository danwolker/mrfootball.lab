import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";

const Catalog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>Catalog</h1>
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Catalog;
