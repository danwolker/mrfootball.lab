import { FaShoppingCart } from "react-icons/fa";
import { Product, useProducts } from "../../contexts/ProductsContext";
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const ProductGrid: React.FC = () => {
  const { products, handleAddToCartContext, handleOpenCart } = useProducts();
  const [size, setSize] = useState(38);

  function handleAddToCart(productToAdd: Product, size: number) {
    handleAddToCartContext(productToAdd, size);
    handleOpenCart(true);
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSize(parseInt(e.target.value));
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product-detail/${product.id}`}>
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={product.brand}
            />
          </Link>
          <h4>
            {product.brand} {product.line}
          </h4>
          <p className="product-price">R$ {product.price.toFixed(2)}</p>
          <p className="size-label">
            Tamanho:
            <select defaultValue={"40"} onChange={handleSizeChange}>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
            </select>
          </p>

          <button
            onClick={() => handleAddToCart(product, size)}
            className="cartshoes-btn"
          >
            <FaShoppingCart size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
