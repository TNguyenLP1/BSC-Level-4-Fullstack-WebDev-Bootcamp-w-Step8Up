import React from "react";
import "./BusinessCard.css";

function BusinessCard({ contact }) {
  const { name, position, email, phone, website, avatar } = contact;

  return (
    <div className="business-card">
      <div className="photo-placeholder">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "#ccc",
            }}
          />
        )}
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
