import React from "react";
import SidebarFilters from "./SidebarFilters";
import TopFilters from "./TopFilters";
import ProductGrid from "./ProductGrid";
import "../../styles/ProductListPage.css";

interface Props {
  brand: string;
}

const ProductListPage: React.FC<Props> = ({ brand }) => {
  return (
    <div className="product-listing-container">
      <SidebarFilters />
      <div className="product-main-content">
        <TopFilters />
        <ProductGrid brand={brand} />
      </div>
    </div>
  );
};

export default ProductListPage;
