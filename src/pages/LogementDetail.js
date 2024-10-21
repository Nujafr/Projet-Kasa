import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Pour obtenir l'ID à partir de l'URL
import logements from '../assets/logements.json';

const LogementDetail = () => {
    const { id } = useParams(); // Récupère l'ID à partir de l'URL
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        // Trouver le logement avec l'ID correspondant
        const selectedLogement = logements.find((log) => log.id === id);
        setLogement(selectedLogement);
    }, [id]);

    if (!logement) {
        return <div>Logement non trouvé...</div>;
    }

    return (
        <div className="logement-detail">
            <img src={logement.cover} alt={logement.title} className="logement-img" />
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
            <div className="logement-info">
                <p>Location: {logement.location}</p>
                <p>Host: {logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} className="host-img" />
                <p>Rating: {logement.rating} stars</p>
            </div>
            <div className="logement-equipments">
                <h3>Equipements</h3>
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogementDetail;
