import React from 'react';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
import Heading from '../components/Heading';
import OfferCard from '../components/OfferCard';
import { twofacecard } from '../../data/productDetails';
import Footer from '../components/Footer'


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
        <Heading heading="OUR VISION"/>
        
        <div className='about-card-container mt-5 mb-5'>
          <div className='about-img-container'>
            <img src={twofacecard[0].img_url} alt=""/>
          </div>
          <div className='about-text-container'>
            <p>{twofacecard[0].vision}</p>
          </div>
        </div>

        <Heading heading="WHY KHETIFY ??"/>

        <div className='about-card-container '>
          <div className='about-img-container'>
            <img src={twofacecard[1].img_url} alt="" height={300}/>
          </div>
          <div className='about-text-container'>
            <p>{twofacecard[1].why_us}</p>
          </div>
        </div>

        <div className='about-last-content'>
            <div className='about-last-content-p1'>
              <p>🔗 Join the Khetify Revolution</p>
            </div>
            <div className='about-last-content-p2'>
              <p>Whether you're a farmer, agripreneur, or simply passionate about rural development, <br/> Khetify 
              welcomes you to be part of our journey. <br/> Let’s grow together — smarter, greener, and stronger.</p>
            </div>
        </div>

       <Footer />
    </div>


  )
}

export default AboutUs;