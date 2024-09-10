import React from "react";
import { projects, PORTFOLIO } from "../constants";
import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";

const ProjectMiddleware = () => {
  const { id } = useParams();
  const project = projects[id];
  if (!project) {
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Project Not Found!!</h1>
    </div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {project.name}
        </h1>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-700 p-4 rounded-full mb-2 group-hover:bg-gray-600 transition duration-300">
              <FaGithub className="text-4xl" />
            </div>
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-purple-600 p-4 rounded-full mb-2 group-hover:bg-purple-700 transition duration-300">
              <FaExternalLinkAlt className="text-4xl" />
            </div>
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
        <div className="text-gray-300 text-center">
          <p className="mb-2">Want to see more projects? Check out my </p>
          <a
            href={PORTFOLIO}
            className="inline-flex items-center justify-center bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBriefcase className="mr-2 text-xl" />
            <span>Check out my portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectMiddleware;
