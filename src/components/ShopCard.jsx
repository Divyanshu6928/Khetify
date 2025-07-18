import React from 'react';
import ShopDetails from '../../data/ShopDetails';

const ShopCard = () => {
  return (
    <div className='shop-card-container'>
        <div className="shop-container">
            {ShopDetails.map((card,index)=> (
                <div className="shop-card" key={index}>
                    <div className='shop-products'>
                        <img src={card.img_url} alt={card.title} className='shop-img'/>
                        <p className='shop-title'>{card.title}</p>
                    </div>    
                    <div className='shop-product-details'>
                        <p className='shop-price'>{card.price}</p>
                        <button className="shop-card-btn bi bi-cart-fill">{card.cta_text}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShopCard;