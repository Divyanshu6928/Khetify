import React from 'react';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
import Heading from '../components/Heading';
import OfferCard from '../components/OfferCard';


const AboutUs = () => {
  return (
    <div className='about-body' >
        <Header/>
        <div className="about-main">
          <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1753932692/About-Us-img_jcl44p.png" alt="" width={1520 }  />
          <p className='about-khetify'>ABOUT KHETIFY</p>
        </div>

        <BasicCard/>

        <Heading heading="WHAT WE OFFER"/>

        <OfferCard/>
    </div>


  )
}

export default AboutUs;