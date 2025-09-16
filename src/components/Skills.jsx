import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "React", img: "/react.png" },
  { name: "JavaScript", img: "/javascript.png" },
  { name: "HTML & CSS", img: "/htmlcss.png" },
  { name: "Git & GitHub", img: "/git.png" },
  { name: "Node.js", img: "/node.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
