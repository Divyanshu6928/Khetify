import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className="footer-container">
            <div className='footer-col-1'>
                <div className='mt-5'>
                    <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1752729663/Khetify_logo_square_frhx9m.png" height={80} alt="logo can't load" className='footer-logo'/>
                    <p className='footer-tagline'>Modern Farming, Desi roots</p>
                </div>
                <div className='about-us-footer mt-5'>
                    <p className='footer-about-us-heading'>About Us</p>
                    <p className='footer-about-us-content'>A smart agri-tech platform dedicated to empowering Indian farmers with innovative tools, real-time insights, and sustainable solutions for modern farming.</p>
                    <div className='footer-icon'>
                        <span className='bi bi-twitter-x'></span>
                        <span className='bi bi-facebook'></span>
                        <span className='bi bi-instagram'></span>
                         <span className='bi bi-whatsapp'></span>
                    </div>
                </div>
            </div>
            <div className='footer-col-2'>
                <p className='footer-col-2-heading'>Category</p>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Shop</li>
                    <li>Services !!</li>
                </ul>
            </div>
            <div className='footer-col-3'>
                <button className='bi bi-globe community-btn'> Join the community</button> <br />
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1752729663/Khetify_logo_square_frhx9m.png" height={200} alt="" className='footer-img-logo'/>
            </div>
        </div>
    </div>
  )
}

export default Footer;