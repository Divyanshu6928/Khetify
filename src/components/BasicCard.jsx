import React from 'react'

const data = [
    {
        "card_head" : "🚜 Who We Are??",
        "card_body" : "Khetify is a farmer-first initiative dedicated to modernizing agriculture while preserving its roots. We understand the challenges faced by Indian farmers and bring practical, tech-driven solutions to their fields. From resource optimization to real-time insights, Khetify is here to revolutionize rural agriculture with a human touch."
    }
]

const BasicCard = () => {
  return (
    <div className='basic-card-container'>
        {data.map((item, index) => (
        <div key={index} className="basic-card">
          <p className="basic-heading">{item.card_head}</p>
          <p className="basic-body">{item.card_body}</p>
        </div>
      ))}
    </div>
  );
};

export default BasicCard;