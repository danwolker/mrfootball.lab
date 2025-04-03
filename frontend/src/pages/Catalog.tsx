import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import ProductListPage from "../components/ProductListing/ProductListPage";

interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  color:string;
  price: number;
  rating: number;
  }

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fecthProducts();
  }, []);

  const fecthProducts = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_soccer_boots"
      );
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <Navbar />
      <Header />
      <ProductListPage />
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Catalog;
