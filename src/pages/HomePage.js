import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

const HomePage = () => {
  const locations = ['Titre de la location 1', 'Titre de la location 2', 'Titre de la location 3'];

  return (
    <div>
      <Banner />
      <section className="cards-section">
        <div className="cards-container">
          {locations.map((title, index) => (
            <Card key={index} title={title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
