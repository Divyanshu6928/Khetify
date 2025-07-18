import React from 'react'
import Heading from './Heading';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div className='services-body'>
        <Heading heading ="SERVICES WE OFFER" />
        <ServicesCard />
    </div>
  )
}

export default Services;