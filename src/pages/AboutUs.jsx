import React from 'react';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';

const AboutUs = () => {
  return (
    <div className='about-body' >
        <Header/>
        <div className='about-main-container'>
            <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1753932692/About-Us-img_jcl44p.png" alt="" width={1521} className='about-img'/>
            <p className='about-text'>ABOUT KHETIFY</p>
        </div>
        <div className="about-content">
            <BasicCard />
        </div>
    </div>

  )
}

export default AboutUs;