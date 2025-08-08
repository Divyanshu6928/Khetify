import React from 'react';
import SeedDetails from '../../data/SeedDetails';


const Seeds = () => {
  return (
    <div className='shop-card-container'>
        <div className=" seed-container">
            {SeedDetails.map((card,index)=> (
                <div className="shop-card seed-card" key={index}>
                    <div className='shop-products'>
                        <img src={card.img_url} alt={card.pro_name} className='shop-img' height={500}/>
                        <p className='shop-title'>{card.pro_name}</p>
                    </div>    
                    <div className='shop-product-details'>
                        <p className='shop-price seed-price'>{card.pro_price}</p>
                        <button className="seed-card-btn">Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Seeds