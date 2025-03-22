import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";

const Favorites: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>Favorites</h1>
      <p>Your favorite products will appear here.</p>
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Favorites;
