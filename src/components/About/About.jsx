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
              I'm a Software Developer focused on building scalable backend systems, REST APIs, database-driven applications, and modern web solutions. My primary development experience revolves around Java, Spring Boot, PHP, and Laravel, with a strong focus on clean architecture, API development, database design, validation, security, and maintainable code.
            </p>
            
            <h3 className="about-subtitle">What I bring to the table:</h3>
            <ul className="about-list">
              <li>
                <strong>Backend Engineering:</strong> Building robust and scalable backend services with Java, Spring Boot, PHP, and Laravel.
              </li>
              <li>
                <strong>API Development:</strong> Designing and integrating RESTful APIs with a focus on security, validation, and clean architecture.
              </li>
              <li>
                <strong>Database Systems:</strong> Modeling and managing complex data with MySQL and PostgreSQL for performance and reliability.
              </li>
            </ul>

            <div className="about-stats">
              <h3 className="about-subtitle stats-title">GitHub Activity</h3>
              <a href="https://github.com/Arumugam28" target="_blank" rel="noopener noreferrer" className="streak-link">
                <img 
                  src="https://streak-stats.demolab.com/?user=Arumugam28&theme=github-dark-blue&hide_border=true" 
                  alt="Arumugam28 GitHub Streak" 
                  className="streak-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
