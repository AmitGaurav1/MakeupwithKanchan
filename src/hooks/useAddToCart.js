import { useState } from 'react';
import { useCart } from '../Context/CartContext';

export const useAddToCart = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems({ ...addedItems, [product.id]: true });
    setTimeout(() => {
      setAddedItems({ ...addedItems, [product.id]: false });
    }, 2000);
  };

  return { handleAddToCart, addedItems };
};

