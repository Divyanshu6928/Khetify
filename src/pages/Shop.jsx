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
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1754562024/Shop-page-farmer_kqbhxl.png" className='mt-4' alt="" height={765}/>
            </div>
        </div>

        <div className='category-section d-flex justify-content-evenly align-content-center' style = {{marginTop : "50px"}}>
            {categories.map((item, index) => (
                <div key={index} className='d-flex justify-content-evenly align-content-center text-center categories-shop'>
                    <img src={item.img_url} alt="can't load" height={80} className='category-section-img'/>
                    <p>{item.text}</p>
                </div>
            ))}
            
            <button className="see-all-btn d-flex flex-column align-items-center justify-content-center p-3 rounded" style={{ minWidth: '100px' }}>
                <span style={{ fontSize: '1.5rem' }} className='bi bi-arrow-right-circle'></span>
                <span className="fw-bold see-all-btn-text">See all</span>
            </button>

        </div>

        <div className='usp-container d-flex justify-content-between mt-5 p-3'>
            <div className="usp-img">
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1754626759/water-level-adjuster_fltczy.png" alt="" />
            </div>
            <div className="usp-content">
                <p className='usp-content-p1'>Water Level Adjuster</p>
                <p className='usp-content-p2'>This IoT device will automatically adjust water supply to fields based on the soil type, field area, crop and the weather conditions. All these four parameters will be used to estimate the expected water supply to fields and this device will get a power supply from solar panels which will increase the efficiency and profitability.</p>
                <div className='d-flex justify-content-between w-25'>
                    <span>₹ 12,999</span>
                    <span className='cart-count-container'>
                        <div className='cart-button'>
                            <button id='decrementCartCount' className='border border-0'>-</button>
                            <span id='iotCartCount' >1</span>
                            <button id='incrementCount' className='border border-0'>+</button>
                        </div>
                    </span>
                </div>
                <div>
                    <span>
                        <button className='buy-now-btn ms-2'>Buy Now </button>
                        <button className='add-to-cart-btn ms-3'><span className='bi bi-cart-fill'></span> Add to cart</button>
                    </span>
                    <span></span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Shop