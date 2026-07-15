import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Co-Curricular Activities Management System',
      description: 'A scalable enterprise-grade application built to streamline academic event management, student registrations, and workflow scheduling.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Jest', 'REST APIs'],
      githubLink: 'https://github.com/Arumugam28'
    },
    {
      id: 2,
      title: 'Full-Stack E-Learning Platform',
      description: 'An interactive, end-to-end educational portal featuring course management, real-time student progress tracking, and seamless content delivery.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/Arumugam28/E-Learner'
    },
    {
      id: 3,
      title: '3D Model Viewer & Cloud Storage Platform',
      description: 'A high-performance cloud-integrated application allowing users to seamlessly upload, store, and interact with complex 3D assets in real-time.',
      tags: ['React.js', 'Three.js / WebGL', 'Node.js', 'Express.js', 'AWS S3', 'Jest'],
      githubLink: 'https://github.com/Arumugam28/3d_viewer'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="section-title">
          Selected <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-overlay">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Source">
                  <FiGithub size={24} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
