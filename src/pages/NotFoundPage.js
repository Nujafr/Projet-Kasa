import React from 'react';
import '../components/404.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <nav>
        <ul className="nav-return">
          <li><Link to="/">Retourner sur la page d'accueil</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NotFoundPage;
