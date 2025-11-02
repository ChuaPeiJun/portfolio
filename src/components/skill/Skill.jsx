import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  const skillsData = {
    frontend: [
      {
        name: "HTML",
        icon: (
          <FaHtml5 className="text-6xl mb-4 text-orange-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "CSS",
        icon: (
          <FaCss3 className="text-6xl mb-4 text-blue-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <FaJs className="text-6xl mb-4 text-yellow-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "React",
        icon: (
          <FaReact className="text-6xl mb-4 text-blue-400 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="text-6xl mb-4 text-blue-300 hover:scale-110 transition-transform duration-300" />
        ),
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: (
          <FaNodeJs className="text-6xl mb-4 text-green-600 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "Firebase",
        icon: (
          <SiFirebase className="text-6xl mb-4 text-yellow-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "Oracle",
        icon: (
          <FaDatabase className="text-6xl mb-4 text-red-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
    ],
    designTools: [
      {
        name: "Figma",
        icon: (
          <FaFigma className="text-6xl mb-4 text-purple-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
      {
        name: "Git",
        icon: (
          <FaGitAlt className="text-6xl mb-4 text-red-500 hover:scale-110 transition-transform duration-300" />
        ),
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        My Skills
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-100">
          <h3 className="text-xl font-bold text-center mb-6 text-blue-600">
            Frontend
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.frontend.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                {skill.icon}
                <p className="text-lg font-semibold text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-green-100">
          <h3 className="text-xl font-bold text-center mb-6 text-green-600">
            Backend
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.backend.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:bg-green-50 transition-colors duration-300"
              >
                {skill.icon}
                <p className="text-lg font-semibold text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Design & Tools Skills */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-100">
          <h3 className="text-xl font-bold text-center mb-6 text-purple-600">
            Design & Tools
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.designTools.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:bg-purple-50 transition-colors duration-300"
              >
                {skill.icon}
                <p className="text-lg font-semibold text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
