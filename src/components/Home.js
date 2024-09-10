import React from "react";
import { Link } from "react-router-dom";
import {
  BeakerIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { projects } from "../constants";

const ProjectLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
  >
    {children}
  </Link>
);

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to My Projects
      </h1>
      <div className="space-y-4 w-full max-w-md">
        <ProjectLink to="/project/1">
          <BeakerIcon className="w-6 h-12 inline-block mr-2" />
          {projects[1].name}
        </ProjectLink>
        <ProjectLink to="/project/2">
          <CodeBracketIcon className="w-6 h-12 inline-block mr-2" />
          {projects[2].name}
        </ProjectLink>
        <ProjectLink to="/project/3">
          <GlobeAltIcon className="w-6 h-12 inline-block mr-2" />
          {projects[3].name}
        </ProjectLink>
      </div>
    </div>
  );
};

export default Home;
