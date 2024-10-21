import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import bannerHome from '../assets/e270fc8fc902a1eb738458e7b29c1899.jpg';

const HomePage = () => {
  const [logements, setLogements] = useState([]);

  // Charger les données de logements.json
  useEffect(() => {
    fetch('/logements.json') 
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur lors du chargement des données:', error));
  }, []);

  return (
    <div>
      <Banner imageUrl={bannerHome} altText="Paysage Accueil" bannerTitle="Chez vous, partout et ailleurs" />
      <section>
        <div className="cards-container">
          {logements.map((logement) => (
            <Card 
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
