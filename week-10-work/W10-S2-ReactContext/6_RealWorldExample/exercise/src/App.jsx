import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BasketProvider } from "./contexts/BasketContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import CartSummary from "./components/CartSummary";
import "./App.css";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div>
        <Link to="/">Home</Link> | <Link to="/basket">Basket</Link>
      </div>
      <div>
        <CartSummary />
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BasketProvider>
        <Router>
          <AppContent />
        </Router>
      </BasketProvider>
    </ThemeProvider>
  );
}

export default App;