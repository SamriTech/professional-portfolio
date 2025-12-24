import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/contact', formData);
    if (response.data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
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
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <br />
        <textarea
          placeholder="Your Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <br />
        <br />
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
