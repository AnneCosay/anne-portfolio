import React from "react";
import "./About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-card">
        <div className="about-left">
          <img src="profile.png" alt="Profile" className="about-image" />
        </div>
        <div className="about-right">
          <h3 className="about-name">Shane Anne Gonzales Cosay</h3>
          <p>21, Bulacan, Philippines</p>
          <p><strong>Address:</strong> Purok 4, San Agustin, Hagonoy, Bulacan</p>
          <p><strong>Birthday:</strong> May 2, 2004</p>
          <p><strong>Contact:</strong> +63 919 600 9900</p>
          <p><strong>Email:</strong> cosayanne@email.com</p>
          <p><strong>Citizenship:</strong> Filipino</p>
          <p><strong>Civil Status:</strong> Single</p>
          <p><strong>Languages:</strong> Filipino, English</p>
          <p className="about-bio">
            My name is Shane Anne Gonzales Cosay, a BS Information Technology student,
            also included in the Dean's List, longing to share my passion for crafting
            abstract ideas into useful digital products. It is not just about getting
            grades in my case but an academic voyage.
          </p>
          <p className="about-bio">
            Creativity married with practitioners means addressing real business
            problems. Whether engaging the frontiers of professional practice or simply
            taking a swing at home, I embrace bringing ideas to life in ways that can
            have impact.
          </p>
          <p className="about-bio">
            During this journey I developed my software development skills further,
            while also engaging with people and projects that pushed me beyond
            boundaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
