import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "./ProjectsDetails"; 

const Projects = () => {
  return (
    <div id="Projects">
    <div className="bg-gray-100 p-4 md:p-8 lg:p-12 text-center">
      <p className="text-gray-500 text-sm md:text-base">Explore My</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-2 tracking-wide">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Project.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center space-x-2 mb-4">
              <span className="text-gray-500">Tech used:</span>
              {project.techUsed.map((tech, techIndex) => (
                <span key={techIndex} className="text-blue-500 mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                GitHub <FiExternalLink className="ml-1" />
              </a>
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center"
                >
                  Live Demo <FiExternalLink className="ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
