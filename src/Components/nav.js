import React from 'react'
import { Link } from 'react-router-dom';
import AuthSection from './AuthSection';
import CartIcon from './CartIcon';
import '../CSS/nav.css'

function Nav() {
  return (
    <div>
        <nav>
    <Link to="/" className="logo">GlowMuse</Link>

    <ul>
        <li><Link to="/makeup">Makeup</Link></li>
        <li><Link to="/skincare">Skincare</Link></li>
        <li><Link to="/beauty-tips">Beauty Tips</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>

    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <CartIcon />
      <AuthSection />
    </div>

    
</nav>
    </div>
  )
}

export default Nav