import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Pour obtenir l'ID à partir de l'URL
import logements from "../assets/logements.json";
import Collapse from "../components/Collapse.js";
import "../components/LogementDetail.css";

const LogementDetail = () => {
  const { id } = useParams();
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

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="logement-host">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-img"
          />
          <p>{logement.rating} stars</p>
        </div>
      </div>
      <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>
      <Collapse title="Equipements">
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default LogementDetail;
