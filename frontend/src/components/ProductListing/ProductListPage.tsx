import React from "react";
import SidebarFilters from "./SidebarFilters";;
import ProductGrid from "./ProductGrid";
import "../../styles/ProductListPage.css";


const ProductListPage: React.FC = () => {
  return (
    <div className="product-listing-container">

        <SidebarFilters />
        <div className="product-main-content">
        
          <ProductGrid />
        </div>
    
    </div>
  );
};

export default ProductListPage;
