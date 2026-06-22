import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link for a working frontend-only form solution
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Open default mail client with pre-filled details
    window.location.href = `mailto:arumugajai447@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form after submission attempt
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Talk</h3>
            <p className="contact-desc">
              Have a project in mind, or just want to say hi? Feel free to reach out. I'm currently open to new opportunities and exciting collaborations.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <FiMail className="contact-icon" />
                <a href="mailto:arumugajai447@gmail.com" className="contact-link">arumugajai447@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <FiPhone className="contact-icon" />
                <a href="tel:+916374772352" className="contact-link">+91 6374772352</a>
              </div>
              <div className="contact-detail-item">
                <FiMapPin className="contact-icon" />
                <span>Chennai, Tamil Nadu, IN</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/Arumugam28" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/arumugam-b-760090255" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container glass-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
