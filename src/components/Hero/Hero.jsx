import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background aesthetic blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="hero-content">
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-title">
          <span className="text-gradient">Arumugam B</span>
        </h1>
        <h3 className="hero-subtitle">Full-Stack Software Engineer</h3>
        
        <p className="hero-description">
          Whether it's crafting secure, high-throughput enterprise systems with Java, Spring Boot, and SQL, or building highly responsive, real-time web applications with MongoDB, Express, React, and Node.js, I engineer end-to-end solutions that scale.
        </p>
        
        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            View My Work <FiArrowRight className="btn-icon" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
