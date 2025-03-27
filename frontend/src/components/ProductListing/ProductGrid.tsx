// src/components/ProductListing/ProductGrid.tsx
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  brand: string;
  line: string;
  image: string;
  price: number;
  rating: number;
}

const ProductGrid: React.FC<{ brand: string }> = ({ brand }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/get_soccer_boots?brand=${brand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [brand]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={`http://127.0.0.1:8000${product.image}`} alt={product.brand} />
          <h4>{product.brand} {product.line}</h4>
          <p>R$ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
