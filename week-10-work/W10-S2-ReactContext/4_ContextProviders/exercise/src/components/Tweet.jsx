import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Tweet = ({ content }) => {
  const { userId, theme } = useContext(AppContext);

  const darkMode = theme === "dark";

  const tweetStyles = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#f5f5f5" : "#000000",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div style={tweetStyles}>
      <p><strong>{userId}</strong></p>
      <p>{content}</p>
    </div>
  );
};

export default Tweet;