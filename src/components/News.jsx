import React from 'react';
import NewsCard from './NewsCard';
import Heading from './Heading';

const News = () => {
  return (
    <div className='news-body'>
        <Heading heading = "LATEST NEWS" />
        <NewsCard />
    </div>
  )
}

export default News