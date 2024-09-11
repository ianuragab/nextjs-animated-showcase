"use client";

import { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';
import { Product } from '../../types';
import LoadingSpinner from '../../components/LoadingSpinner'; // Import the loading spinner
import { products } from '../../assets/dummyData';
import { useRouter } from 'next/navigation';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    const currentProduct = products.find((product) => product.id === params.id);
    setTimeout(() => {
      setProduct(currentProduct);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
  };

  const handleProductClick = (product: Product) => {
    console.log("Clicked ", product.id);
    router.push(`/product/${product.id}`)
  }

if (loading) {
  return <LoadingSpinner />;
}

if (!product) {
  return <div>Product not found</div>;
}

return <ProductDetail product={product} onAddToCart={handleAddToCart} allProducts={products} onProductClick={handleProductClick} />;
};

export default ProductPage;
