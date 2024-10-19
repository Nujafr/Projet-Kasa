import React from 'react';
import './Header.css';  // Tu vas créer ce fichier pour styliser

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo Kasa" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
