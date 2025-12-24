import React from "react";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h1>
          Hi, I'm <span className="text-blue">Your Name</span>
        </h1>
        <p>Full Stack Developer Intern | Building Scalable Web Solutions</p>
        <a href="#projects" className="btn-primary">
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
