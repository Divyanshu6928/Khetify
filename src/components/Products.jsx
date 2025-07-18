import React from 'react';
import ProductCards from './ProductCards';
import Heading from './Heading';

const Products = () => {
  return (
    <div className='product-body'>
        <Heading heading="OUR PRODUCTS" />
        {/* <Heading name="OUR PRODUCTS" /> */}
        <ProductCards />
    </div>
  )
}

export default Products;