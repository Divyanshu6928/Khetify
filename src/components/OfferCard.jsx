import React from 'react';
import { offerDetails } from '../../data/productDetails';

const OfferCard = () => {
  return (
    <div className='product-card-container'>
          {/* <Heading heading = "DG" /> */}
          <div className='product-container offer-container'>
            {offerDetails.map((card, index) => (
              <div className='product-card offer-card' key={index}>
                <img src={card.img_url} alt={card.title} className='product-image offer-img'/>
                <div className='product-content'>
                  <h2 className='product-title offer-title'>{card.title}</h2>
                  <p className='product-description'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default OfferCard;