import React from 'react'
import Heading from './Heading'

const Contact = () => {
  return (
    <div className="contact-section">
        <Heading heading = "CONTACT US" />
        <div className="contact-body">
            <div className='contact-body-text'>
                <p>LET'S</p>
                <p className='get-in'>GET IN</p>
                <p>TOUCH</p>
            </div>
            <div className="contact-form-body">
                <form className="contact-form">
                    <input type="text" placeholder="Your full name *" required className='form-control p-3 rounded-top-3'/>
                    <input type="email" placeholder="Your email-id" className='form-control p-3'/>
                    <input type="tel" placeholder="Mobile no. *" required className='form-control p-3'/>
                    <textarea placeholder="Any message" className='form-control p-3'></textarea>
                </form>
                <button className='btn btn-success mt-3 d-flex align-content-center justify-content-center w-50' type='submit'>Connect now !!</button>
            </div>
        </div>
        
    </div>
  );
};

export default Contact;