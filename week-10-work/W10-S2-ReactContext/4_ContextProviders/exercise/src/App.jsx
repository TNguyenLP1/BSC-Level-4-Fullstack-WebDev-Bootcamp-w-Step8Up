import React, { useState, useContext } from "react";
import Tweet from "./components/Tweet";
import { AppProvider, AppContext } from "./AppContext";
import "./App.css";

function AppContent() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const { userId, theme, toggleTheme } = useContext(AppContext);

  const handleInputChange = (e) => setNewTweet(e.target.value);

  const handlePostTweet = () => {
    if (newTweet.trim()) {
      const newTweetData = { username: userId, content: newTweet };
      setTweets([newTweetData, ...tweets]);
      setNewTweet("");
    }
  };

  const darkMode = theme === "dark";

  const appStyles = {
    width: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: darkMode ? "#121212" : "#f9f9f9",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  const buttonStyles = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#1DA1F2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={appStyles}>
      <h1>Y!?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label style={{ fontWeight: "bold" }}>T' Dark Mode</label>
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <textarea
          value={newTweet}
          onChange={handleInputChange}
          placeholder="What's happening t' thee?"
          rows="3"
          style={{ width: "95%", padding: "10px", fontSize: "16px" }}
        />
        <button onClick={handlePostTweet} style={buttonStyles}>
          Send t' message
        </button>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <Tweet key={index} content={tweet.content} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}