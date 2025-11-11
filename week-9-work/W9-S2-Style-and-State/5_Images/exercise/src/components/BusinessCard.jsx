import React from 'react';
import './BusinessCard.css';

function BusinessCard({ contact }) {
  const { name, position, email, phone, website, image } = contact;

  // If image path is local, use import.meta.url resolution
  const imgSrc = image.startsWith('http')
    ? image
    : new URL(image, import.meta.url).href;

  return (
    <div className="business-card">
      <div className="photo-placeholder">
        <img src={imgSrc} alt={`${name}'s profile`} className="profile-img" />
      </div>
      <div className="contact-info">
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
