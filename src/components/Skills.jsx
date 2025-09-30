import React from "react";
import "./Skills.css";

const skillsData = [
  { 
    name: "React", 
    img: "/react.png", 
    description: "Building interactive and dynamic user interfaces with React components." 
  },
  { 
    name: "JavaScript", 
    img: "/javascript.png", 
    description: "Proficient in ES6+ syntax, DOM manipulation, and problem solving." 
  },
  { 
    name: "HTML & CSS", 
    img: "/htmlcss.png", 
    description: "Creating structured, accessible websites styled with modern CSS." 
  },
  { 
    name: "Git & GitHub", 
    img: "/git.png", 
    description: "Version control, collaboration, and managing repositories effectively." 
  },
  { 
    name: "Node.js", 
    img: "/node.png", 
    description: "Building scalable backend applications and REST APIs with Node.js." 
  },
  { 
    name: "Canva", 
    img: "/canva.png", 
    description: "Designing professional graphics, presentations, and social media content." 
  },
  { 
    name: "Godot", 
    img: "/godot.png", 
    description: "Creating 2D and 3D games using the Godot game engine." 
  },
  { 
    name: "WordPress", 
    img: "/wordpress.png", 
    description: "Developing and customizing websites using WordPress CMS." 
  },
  { 
    name: "Figma", 
    img: "/figma.png", 
    description: "Designing wireframes, prototypes, and UI/UX layouts for apps and websites." 
  },
  { 
    name: "Flutter", 
    img: "/flutter.png", 
    description: "Building cross-platform mobile applications with a single codebase." 
  },
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
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
