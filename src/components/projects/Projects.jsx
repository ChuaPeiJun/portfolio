import React from "react";
import { FaGithub, FaVideo, FaGlobe } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "My Little Ones - E-commerce for Pregnancy Products",
      image: "my-little-ones.png",
      description:
        "My Little Ones is an eCommerce platform for pregnancy-related products. The project consists of a React frontend and a Java Servlet backend running on Tomcat with MongoDB as the database.",
      githubLink: "https://github.com/ChuaPeiJun/My-Little-Ones",
      skills: [
        "React.js",
        "Java Servlet",
        "MongoDB",
        "Tomcat",
        "Full Stack Development",
      ],
    },
    {
      id: 2,
      title: "Penang Go Fun!",
      image: "penang-go-fun.png",
      description:
        "A simple React.js + Tailwind CSS webpage showcasing Penang tourist attractions, including sections for Tourist Spots, Local Food, Hotels, and Events. The site is designed for educational and demonstration purposes, featuring clean UI, responsive design, and easy navigation.",
      githubLink:
        "https://github.com/ChuaPeiJun/CAT201-Assignment2-TouristAttractions",
      demoLink: "https://penanggofun.vercel.app/",
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
    },
    {
      id: 3,
      title: "Heart Disease Prediction using Machine Learning Model",
      image: "heart-disease.png",
      description:
        "This project applies machine learning algorithms to predict the likelihood of heart disease based on patient health data. K-Nearest Neighbors (KNN), Decision Tree, and Support Vector Machine (SVM) were implemented and compared to identify the champion model with the best performance.",
      githubLink:
        "https://github.com/ChuaPeiJun/Heart-Disease-Prediction-using-Machine-Learning-Model",
      skills: [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "Data Preprocessing",
      ],
    },
    {
      id: 4,
      title: "Library Management System (JavaFX)",
      image: "library-management-system.png",
      description:
        "The Library Management System is a desktop application built using Java and JavaFX that provides an intuitive interface for managing books and users in a library environment. The system includes separate functionalities for Administrators and Users, enabling efficient management of books, borrowing, and penalties.",
      githubLink: "https://github.com/ChuaPeiJun/Library-Management-System",
      skills: ["Java", "JavaFX", "GUI Development", "OOP"],
    },
    {
      id: 5,
      title: "Exploratory Data Analysis on Car Prices",
      image: "car-prices.png",
      description:
        "This project focuses on performing Exploratory Data Analysis (EDA) on a Car Prices dataset. The objective is to uncover insights about factors influencing car prices through statistical summaries, visualizations, and data correlations.",
      githubLink: "https://github.com/ChuaPeiJun/Data-Analysis-Car-Prices",
      skills: ["Python", "Pandas", "Matplotlib", "Data Visualization", "EDA"],
    },
    {
      id: 6,
      title: "Bakery Order Management System (C++)",
      image: "bakery-management.png",
      description:
        "The Bakery Order Management System is a C++ console-based application that helps manage bakery operations efficiently. It provides separate functionalities for admins and customers, demonstrating key object-oriented programming (OOP) concepts and file handling for data persistence.",
      githubLink:
        "https://github.com/ChuaPeiJun/Bakery-Order-Management-System",
      skills: ["C++", "Object-Oriented Programming", "File Handling"],
    },
    {
      id: 7,
      title: "Rental Housing Management System",
      image: "rental-housing.png",
      description:
        "A web-based system built with Oracle APEX to manage property listings, tenants, and rental transactions. It features role-based access and demonstrates skills in database design, SQL integration, and UI development.",
      skills: ["Oracle APEX", "SQL", "Database Design", "Relational Modeling"],
    },
  ];

  return (
    <div id="projects" className="p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            {/* Project Title */}
            <h3 className="text-xl font-bold text-center mt-4 text-gray-800 px-2">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600 text-center px-4 mt-2 flex-grow">
              {project.description}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 px-4">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-center gap-4 my-6">
              {/* GitHub Link (only show if exists) */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaGithub className="text-2xl mr-2" />
                  <span>View Code</span>
                </a>
              )}

              {/* Demo/Website Link */}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaGlobe className="text-2xl mr-2" />
                  <span>Visit Site</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
