import React from 'react'
import Header from '../components/Header'



const Shop = () => {
  return (
    <div className='shop-body-container'>
        <Header />
        <div className="shop-page-top">
            <div className='shop-body-hero-container'>
                <p className='shop-body-hero-container-p1'>Bringing Innovation to Your Fields</p>
                <p className='shop-body-hero-container-p2'>Welcome to the Khetify Shop — your one-stop destination for reliable, farmer-friendly agricultural solutions. We offer tools, kits, and digital services that empower you to make informed decisions and increase crop productivity.</p>
                <button className='btn btn-success btn-scroll-down'>Scroll Down !!</button>
            </div>
            <div className='shop-body-hero-img'> 
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1754562024/Shop-page-farmer_kqbhxl.png" className='mt-4' alt="" height={760}/>
            </div>
        </div>

    </div>
  )
}

export default Shop