import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/nav';
import Footer from '../Components/Footer';
import { useCart } from '../Context/CartContext';
import '../CSS/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-page">
      <Nav />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart to get started!</p>
            <Link to="/makeup" className="shop-btn">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">{item.image}</div>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-price">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart} className="clear-cart-btn">
                  Clear Cart
                </button>
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

