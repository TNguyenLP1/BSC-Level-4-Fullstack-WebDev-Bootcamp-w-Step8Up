import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // optional, for global styles

// Get the root DOM node
const root = createRoot(document.getElementById("root"));

// Render the App inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);