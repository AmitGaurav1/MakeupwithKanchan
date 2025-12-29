import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import { useAddToCart } from "../hooks/useAddToCart";
import '../CSS/ProductPage.css';

function Lipsticks() {
  const { handleAddToCart, addedItems } = useAddToCart();

  const products = [
    {
      id: "lipstick-1",
      name: "Matte Red Lipstick",
      price: "$24.99",
      description: "Long-lasting matte finish in vibrant red",
      image: "💄"
    },
    {
      id: "lipstick-2",
      name: "Nude Lipstick Collection",
      price: "$22.99",
      description: "Perfect everyday shades for natural look",
      image: "💋"
    },
    {
      id: "lipstick-3",
      name: "Glossy Pink Lipstick",
      price: "$19.99",
      description: "Shiny finish with hydrating formula",
      image: "👄"
    },
    {
      id: "lipstick-4",
      name: "Bold Berry Lipstick",
      price: "$26.99",
      description: "Rich berry shade for special occasions",
      image: "💄"
    },
    {
      id: "lipstick-5",
      name: "Coral Sunset Lipstick",
      price: "$23.99",
      description: "Warm coral tone perfect for summer",
      image: "💋"
    },
    {
      id: "lipstick-6",
      name: "Plum Perfect Lipstick",
      price: "$25.99",
      description: "Deep plum shade for evening glamour",
      image: "👄"
    }
  ];


  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>💄 Lipsticks Collection</h1>
          <p className="subtitle">Discover our stunning range of long-lasting lipsticks</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button 
                    className={`add-to-cart-btn ${addedItems[product.id] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedItems[product.id] ? '✓ Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lipsticks;

