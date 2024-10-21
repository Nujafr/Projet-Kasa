import React, { useEffect, useState } from 'react';
import logementsData from '../assets/logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import bannerHome from '../assets/e270fc8fc902a1eb738458e7b29c1899.jpg';

const HomePage = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    console.log('Données des logements:', logementsData);
    setLogements(logementsData);
}, []);

  return (
    <div>
      <Banner imageUrl={bannerHome} altText="Paysage Accueil" bannerTitle="Chez vous, partout et ailleurs" />
      <section>
        <div className="cards-container">
        {logements && logements.length > 0 ? (
                logements.map((logement, index) => (
                    <Card key={logement.id || index} logement={logement} />
                ))
            ) : (
                <p>Aucun logement disponible</p>
            )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
