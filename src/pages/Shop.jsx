import React from 'react'
import Header from '../components/Header';
import { categories } from '../../data/productDetails';



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

        <div className='category-section d-flex justify-content-evenly align-content-center' style = {{marginTop : "50px"}}>
            {categories.map((item, index) => (
                <div key={index} className='d-flex justify-content-evenly align-content-center text-center categories-shop'>
                    <img src={item.img_url} alt="can't load" height={80}/>
                    <p>{item.text}</p>
                </div>
            ))}
            
            <button className="see-all-btn d-flex flex-column align-items-center justify-content-center p-3 rounded" style={{ minWidth: '100px' }}>
                <span style={{ fontSize: '1.5rem' }} className='bi bi-arrow-right-circle'></span>
                <span className="fw-bold see-all-btn-text">See all</span>
            </button>

        </div>



    </div>
  )
}

export default Shop