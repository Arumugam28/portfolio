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
      fullWidth: true,
      detailedSkills: [
        { name: 'Containerisation', desc: 'Packaging scalable applications securely into portable units using Docker.' },
        { name: 'Orchestration', desc: 'Managing multi-container production deployments seamlessly via Kubernetes.' },
        { name: 'CI/CD Pipelines', desc: 'Automated building, testing, and deploying using GitHub Actions or GitLab.' },
        { name: 'Infrastructure as Code', desc: 'Scripting infrastructure setups reproducibly with Terraform or Ansible.' },
        { name: 'Cloud Platforms', desc: 'Cloud architecture deployment hosting on AWS, Google Cloud, or Azure.' },
        { name: 'Monitoring & Logging', desc: 'Real-time system health and error tracking using Prometheus or ELK.' }
      ]
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
            <div key={index} className={`skill-category-card glass-panel ${category.fullWidth ? 'full-width' : ''}`}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              {category.skills && (
                <div className="category-skills">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              )}

              {category.detailedSkills && (
                <div className="detailed-skills-grid">
                  {category.detailedSkills.map((item, i) => (
                    <div key={i} className="detailed-skill-item">
                      <strong className="detailed-skill-name">{item.name}</strong>
                      <span className="detailed-skill-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
