// MyCard.jsx
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, tags }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <Tags text={tags.text} backgroundColor={tags.backgroundColor} />
      </div>
    </div>
  );
};

export default MyCard;


