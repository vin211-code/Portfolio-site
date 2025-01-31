import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const scrollToHeader = () => {
    const headerSection = document.getElementById("header");
    if (headerSection) {
      headerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formVisible, setFormVisible] = useState(true); // Ensures form is visible

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logs to check if inputs exist in the DOM
    console.log('Name:', document.getElementById('name'));
    console.log('Email:', document.getElementById('email'));
    console.log('Message:', document.getElementById('message'));

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Submitting:', { name, email, message });

    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>
        We’d love to connect! If you have a project or need assistance with IT-related tasks, feel free to
        reach out to us.
      </p>
      {formVisible && (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required={!!name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required={!!email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              required={!!message}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
      <div className='but'>
      <button onClick={scrollToHeader}>Back to Top</button>
      </div>
    </section>
  );
};

export default Contact;
