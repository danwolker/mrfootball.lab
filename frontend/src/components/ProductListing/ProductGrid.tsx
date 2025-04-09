// src/components/ProductListing/ProductGrid.tsx

import { FaShoppingCart} from "react-icons/fa";
import { Product, useProducts } from "../../contexts/ProductsContext";




const ProductGrid: React.FC = () => {
  
  const {products, handleAddToCartContext} = useProducts()
  
  function handleAddToCart(productToAdd:Product) {
    handleAddToCartContext(productToAdd)
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={`http://127.0.0.1:8000${product.image}`}
            alt={product.brand}
          />
          <h4>
            {product.brand} {product.line} 
          </h4>
          <p>R$ {product.price.toFixed(2)}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="cartshoes-btn"
          >
            <FaShoppingCart />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
