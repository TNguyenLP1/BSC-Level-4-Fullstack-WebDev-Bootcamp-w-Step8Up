import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId] = useState("user123"); // global user ID
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ userId, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};