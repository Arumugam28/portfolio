import { FiServer, FiLayout, FiDatabase } from 'react-icons/fi';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend & Architecture',
      icon: <FiServer />,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'Frontend Development',
      icon: <FiLayout />,
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Databases & Tools',
      icon: <FiDatabase />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Postman', 'Docker']
    }
  ];

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
          
          <div className="about-skills">
            <h3 className="skills-title">My Toolkit</h3>
            <div className="skills-category-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category-card glass-panel">
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <div className="category-skills">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
