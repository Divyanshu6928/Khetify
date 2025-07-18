import React from 'react'
// import Heading from './Heading';
import productDetails from '../../data/productDetails';
import Heading from './Heading';

const ProductCards = () => {
  return (
    <div className='product-card-container'>
      {/* <Heading heading = "DG" /> */}
      <div className='product-container'>
        {productDetails.map((card, index) => (
          <div className='product-card' key={index}>
            <img src={card.img_url} alt={card.title} className='product-image'/>
            <div className='product-content'>
              <h2 className='product-title'>{card.title}</h2>
              <p className='product-description'>{card.description}</p>
            </div>
            <div className='bi bi-arrow-right-circle arrow-button'></div>
          </div>
        ))}
      </div>
      <div className='youtube-ad'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6AmTYvlGoaI?si=T-e_ttR6kSawAqi6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default ProductCards;