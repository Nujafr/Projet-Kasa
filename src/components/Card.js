import React from 'react';
import './Card.css';  // Style pour la carte

function Card({ title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
