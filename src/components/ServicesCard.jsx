// src/components/FeatureCards.jsx
import React from 'react';
import ServiceDetails from '../../data/ServicesDetails';

const ServicesCard = () => {
  return (
    <div className="feature-cards-wrapper services-card-container">
      {ServiceDetails.map((card, index) => (
        <div className="feature-card" key={index}>
            <h3 className="feature-card-title">{card.heading}</h3>
          <div className="feature-card-content">
            <img src={card.img_url} alt={card.heading} className="feature-card-img" />
            <p className="feature-card-desc">{card.description}</p>
            <button className="feature-card-btn">{card.cta_text}</button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ServicesCard;
