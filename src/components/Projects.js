import React from 'react';

const Projects = () => {
  const myProjects = [
    { title: "E-Commerce App", tech: "React & Node.js", link: "#" },
    { title: "Chat Application", tech: "Socket.io & Express", link: "#" },
    { title: "Portfolio Website", tech: "React & Netlify", link: "#" }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="project-list">
        {myProjects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>Built with: {proj.tech}</p>
            <a href={proj.link}>View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;