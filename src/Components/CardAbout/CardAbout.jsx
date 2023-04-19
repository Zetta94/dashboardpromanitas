import React from 'react';
import './CardAbout.css'; 


const CardAbout = ({ image, name, description, linkedin, github }) => {
  return (
    <div className="card2">
        <div className="card-about">
          <img src={image} alt={name} className="card-about__image" />
          <h3 className="card-about__name">{name}</h3>
          <p className="card-about__description">{description}</p>
          <a href={linkedin} className="card-about__linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={github} className="card-about__github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
    </div>
    
  );
};

export default CardAbout;
