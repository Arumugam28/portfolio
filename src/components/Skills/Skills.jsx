import { FiServer, FiLayout, FiDatabase, FiCloud } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <FiServer />,
      skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'Express.js']
    },
    {
      title: 'Frontend Development',
      icon: <FiLayout />,
      skills: ['JavaScript', 'React', 'HTML', 'CSS']
    },
    {
      title: 'Databases',
      icon: <FiDatabase />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'DevOps & Tools',
      icon: <FiCloud />,
      skills: ['Docker', 'Git', 'GitHub', 'AWS', 'Postman']
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
