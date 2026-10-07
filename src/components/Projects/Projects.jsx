import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Enterprise Job Board Platform',
      description: 'Architected a scalable job portal using Laravel and MySQL. Implemented complex Eloquent ORM relationships for employer-applicant data and developed a robust RESTful API with secure authentication via Laravel Sanctum. Optimized database indexing, reducing search query latency by 35%.',
      tags: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Eloquent', 'Sanctum'],
      githubLink: 'https://github.com/Arumugam28/php_Job-board'
    },
    {
      id: 2,
      title: 'Co-Curricular Activities Management System',
      description: 'Engineered an enterprise event management backend using Java and Spring Boot. Designed secure JWT-based role authorization (Student/Admin) and optimized the MySQL schema to handle 1000+ concurrent student registrations efficiently, improving transaction throughput.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Jest', 'JWT'],
      githubLink: 'https://github.com/Arumugam28/RIT-EVENT-PORTAL',
      liveLink: 'https://rit-event-portal.vercel.app'
    },
    {
      id: 3,
      title: 'Cloud-Integrated 3D Asset Manager',
      description: 'Developed a high-throughput backend service using Node.js and Express to orchestrate cloud storage operations. Integrated AWS S3 for scalable asset storage and implemented robust API endpoints to serve large 3D models (WebGL) to the client with minimal latency.',
      tags: ['Node.js', 'Express.js', 'AWS S3', 'React.js', 'Three.js'],
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
                  <FiGithub size={20} />
                  <span>View Repository</span>
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link" aria-label="View Live">
                    <FiExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
