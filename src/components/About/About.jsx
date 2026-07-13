import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am a Full-Stack Engineer with a strong foundation in backend architecture and modern frontend frameworks. I specialize in bridging the gap between high-performance data systems and seamless user interfaces.
            </p>
            
            <h3 className="about-subtitle">What I bring to the table:</h3>
            <ul className="about-list">
              <li>
                <strong>Enterprise Reliability:</strong> Deep understanding of Java, Spring Boot, and Microservices for secure, multi-tier applications.
              </li>
              <li>
                <strong>Modern Web Agility:</strong> Full-stack JavaScript proficiency using the MERN stack to build fast, responsive, and SEO-friendly single-page applications.
              </li>
              <li>
                <strong>Architectural Balance:</strong> The ability to choose the exact right tool for the job, whether a project needs a relational SQL structure or a flexible NoSQL database.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
