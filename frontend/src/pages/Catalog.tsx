import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import ProductListPage from "../components/ProductListing/ProductListPage";
import { ProductProvider } from "../contexts/ProductsContext";

interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  color: string;
  price: number;
  rating: number;
}

const Catalog: React.FC = () => {
  return (
    <div>
      
      <ProductProvider>
        <Navbar />
        <Header />
        <ProductListPage />
        <Banner />
        <BrandsSection />
        <FooterNewsletter />
        <FooterInfo />
        <Footer />
      </ProductProvider>
    </div>
  );
};

export default Catalog;
