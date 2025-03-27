
import React from "react";
import ProductListPage from "../../components/ProductListing/ProductListPage";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterInfo from "../../components/FooterInfo";
import FooterNewsletter from "../../components/FooterNewsletter";

const NewBalancePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ProductListPage brand="new-balance" />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </>
  );
};

export default NewBalancePage;
