import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("In the next step, we will connect this to your Node.js backend!");
  };

  return (
    <section id="contact" className="section bg-light">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br/>
        <br/>
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br/>
        <br/>
        <textarea
          placeholder="Your Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <br/>
        <br/>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
