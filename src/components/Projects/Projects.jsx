import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Co-Curricular Activities Management System',
      description: 'A scalable enterprise-grade application built to streamline academic event management, student registrations, and workflow scheduling.',
      image: '/cc_management_mockup.png', 
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Jest', 'REST APIs'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Full-Stack E-Learning Platform',
      description: 'An interactive, end-to-end educational portal featuring course management, real-time student progress tracking, and seamless content delivery.',
      image: '/elearning_mockup.png', 
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: '3D Model Viewer & Cloud Storage Platform',
      description: 'A high-performance cloud-integrated application allowing users to seamlessly upload, store, and interact with complex 3D assets in real-time.',
      image: '/3dviewer_mockup.png', 
      tags: ['React.js', 'Three.js / WebGL', 'Node.js', 'Express.js', 'AWS S3', 'Jest'],
      liveLink: '#',
      githubLink: '#'
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
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" aria-label="View Live">
                      <FiExternalLink />
                    </a>
                    <a href={project.githubLink} className="project-link" aria-label="View Source">
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
