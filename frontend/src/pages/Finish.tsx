import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterInfo from "../components/FooterInfo";
import AddressForm from "../components/AddresForm";

const Finish: React.FC = () => {
    return (
        <div>
            <Navbar />
            <AddressForm />
            <Header />
            <FooterInfo />
            <Footer />

        </div>
    )
}

export default Finish;