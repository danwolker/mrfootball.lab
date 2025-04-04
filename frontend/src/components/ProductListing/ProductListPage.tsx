import React from "react";
import SidebarFilters from "./SidebarFilters";
import TopFilters from "./TopFilters";
import ProductGrid from "./ProductGrid";
import "../../styles/ProductListPage.css";
import { ProductProvider } from "../../contexts/ProductsContext";

const ProductListPage: React.FC = () => {
  return (
    <div className="product-listing-container">
      <ProductProvider>
        <SidebarFilters />
        <div className="product-main-content">
          <TopFilters />
          <ProductGrid />
        </div>
      </ProductProvider>
    </div>
  );
};

export default ProductListPage;
