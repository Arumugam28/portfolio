import { FiServer, FiLayout, FiDatabase, FiCloud } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
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
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <FiCloud />,
      skills: ['Containerisation', 'Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Cloud Platforms', 'Monitoring & Logging']
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Toolkit</span>
        </h2>
        
        <div className="skills-category-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card glass-panel">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
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
    </section>
  );
};

export default Skills;
