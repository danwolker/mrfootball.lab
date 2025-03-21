import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";

const Brands: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>Brands</h1>
      <FooterInfo /> 
      <Footer />
    </div>
    
  );
};

export default Brands;
