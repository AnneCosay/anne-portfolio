import React from "react";
import "./Header.css";
import HSubtitle from "./HSubtitle"; 
import PortfolioButton from "./PortfolioButton"; 

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-content">
        <img src="/profile.png" alt="Profile" className="profile-pic" />
        <h1 className="Header-title">
          Hi, I'm <span className="highlight">Shane Anne Gonzales Cosay</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;