import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <h1>
          Hi, I'm <span>Shane Anne Gonzales Cosay</span>
        </h1>
        <p>
          A passionate IT student and aspiring software developer. <br />
          Welcome to my page!
        </p>
      </div>
    </header>
  );
};

export default Header;
