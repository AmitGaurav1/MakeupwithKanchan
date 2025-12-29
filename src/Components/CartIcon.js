import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import '../CSS/CartIcon.css';

function CartIcon() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="cart-icon-link">
      <div className="cart-icon">
        <span className="cart-icon-emoji">🛒</span>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;

