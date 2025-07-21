import React from 'react';
import ShopCard from './ShopCard';
import Heading from './Heading';

const Shop = () => {
  return (
    <div className='shop-body'>
        <Heading heading="SHOP WITH US" />
        <ShopCard />
        <button className='shop-btn'>Shop more...</button>
    </div>
  )
}

export default Shop;