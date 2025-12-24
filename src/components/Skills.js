import React from "react";

const Skills = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "CSS/Tailwind",
    "Git/GitHub",
  ];

  return (
    <section id="skills" className="section bg-light">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
