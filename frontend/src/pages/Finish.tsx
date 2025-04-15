import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterInfo from "../components/FooterInfo";
import AddressForm from "../components/AddresForm";
import CheckProducts from "../components/CheckProducts";
import { PaymentsProvider } from "../contexts/PaymentsContext";
const Finish: React.FC = () => {
  return (
    <div>
      <PaymentsProvider>
        <Navbar />
        <Header />
        <CheckProducts />
        <AddressForm />
        <FooterInfo />
        <Footer />
      </PaymentsProvider>
    </div>
  );
};

export default Finish;
