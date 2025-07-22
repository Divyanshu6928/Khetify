import React from 'react';
// import './TestimonialSection.css';
import Heading from './Heading';

const videos = [
  {
    title: 'Deepali Speaks – Why Khetify Matters?',
  },
  {
    title: 'Khetify x Ankit: A Farmer’s Voice!',
  },
  {
    title: 'Mitti Se Mobile Tak – Dinkar Talks About Khetify',
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Heading heading = "WHAT PEOPLE SAY"/>

      <div className="testimonial-body">
        {/* <div></div> */}
        <div className="video-card">
            <iframe width={450} height={250} src="https://www.youtube.com/embed/iyPjWmsu-pg?si=X2MbI-y6WpASjRZr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          
            <p>{videos[2].title}</p>
        </div>

        <div className="video-card">
            <iframe width={450} height={250} src="https://www.youtube.com/embed/YFTQYDjdBX4?si=h5Ce_1TSTzKJalKl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          
            <p>{videos[1].title}</p>
        </div>


        <div className="bottom-video">
          <div className="video-card">
            <iframe width={450} height={250} src="https://www.youtube.com/embed/5oJu9we2jrI?si=AYKfbTvJupbMuyrL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            
            <p>{videos[2].title}</p>
          </div>
        </div>

        <div className="video-card">
            <iframe width={450} height={250} src="https://www.youtube.com/embed/iyPjWmsu-pg?si=X2MbI-y6WpASjRZr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          
            <p>{videos[2].title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
