import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import ProductDetailView from "../components/ProductListing/ProductDetailView";

const DetailProduct: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductDetailView />
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default DetailProduct;
