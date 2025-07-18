import React from 'react';

const Heading = ({ heading }) => {
  return (
    <div className="heading-container">  
        <div className="heading">          
            <div className="heading-text">{heading}</div>
        </div>
    </div>

  );
};

export default Heading;
