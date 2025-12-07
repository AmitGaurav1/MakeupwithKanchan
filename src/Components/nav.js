import React from 'react'
import AuthSection from './AuthSection';
import '../CSS/nav.css'

function nav() {
  return (
    <div>
        <nav>
    <div class="logo">GlowMuse</div>

    <ul>
        <li><a href="/">Makeup</a></li>
        <li><a href="/">Skincare</a></li>
        <li><a href="/">Beauty Tips</a></li>
        <li><a href="/">Tutorials</a></li>
    </ul>

    <AuthSection />

    
</nav>
    </div>
  )
}

export default nav