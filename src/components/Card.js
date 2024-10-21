import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ logement }) => {
  console.log('Logement reçu par la card:', logement); // Log pour voir si les données arrivent
  if (!logement) {
    return null;
}
    return (
        <div className="card">
            <Link to={`/logement/${logement.id}`} style={{ textDecoration: 'none' }} >
                <img src={logement.cover} alt={logement.title} className="card-img" />
                <h3 className="card-title">{logement.title}</h3>
            </Link>
        </div>
    );
};

export default Card;
