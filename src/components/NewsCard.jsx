import React from 'react';
import NewsDetails from "../../data/NewsDetails";

const NewsCard = () => {
  return (
    <div className='news-card-body-container'>
      <div className="news-card-container">
        {NewsDetails.map((card,index) => (
        
        <div className='news-card' key={index}>
          <div>
            <img src={card.img_url} alt="News not found" className='news-card-img'/>
          </div>
          <div className='news-details'>
            <p className='news-heading'>{card.news_body}</p>
            <p className="news-content">{card.news_content}</p>
            <p className="news-arrow-btn"><span className='bi bi-arrow-right-circle'></span></p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default NewsCard;