import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'


export interface Product {
    id: number;
    brand: string;
    line: string;
    image: string;
    price: number;
    rating: number;
    color: string;
    amount: number;
  }

const ProductDetail: React.FC = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const boot_id = id
            const response = await fetch(`http://127.0.0.1:8000/api/get_filtered_boots?boot_id=${boot_id}`);
            const data = await response.json();
            setProduct(data);
          } catch (error) {
            console.error("Erro ao buscar produto:", error);
          }
        };
    
        fetchProduct();
      }, [id]); //
    
    
    return (
       
        <div> <h1>{product?.brand} ------{product?.line} ------------ {product?.color}---------- {product?.image} -------R${(product?.price)?.toFixed(2)} </h1><p></p></div>
    )
}

export default ProductDetail