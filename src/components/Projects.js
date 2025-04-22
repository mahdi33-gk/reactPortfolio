// Update the Projects component to use the custom hooks and data
import React from 'react';
import projectsData from '../data/projects';
import { useProjectFilter } from '../hooks';

const Projects = () => {
  const { filter, setFilter, filteredProjects } = useProjectFilter(projectsData);
  
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="filter-buttons flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card bg-primary rounded-lg overflow-hidden shadow-lg">
              <div className="project-img">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="project-content p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="project-tech mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-accent text-white py-1 px-2 rounded text-xs font-medium mr-2 mb-2 inline-block">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a href={project.demoLink} className="btn btn-primary btn-small">
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                  </a>
                  <a href={project.codeLink} className="btn btn-secondary btn-small">
                    <i className="fas fa-code mr-2"></i> Code
                  </a>
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
