import React from "react";
import { motion } from "framer-motion";

const EducationTimeline = () => {
  const educationData = [
    {
      year: "2023 - Present",
      degree:
        "Bachelor of Computer Science (Intelligent Computing) with Honours",
      institution: "Universiti Sains Malaysia (USM)",
      result: "CGPA: 3.83",
      description:
        "Currently pursuing a degree in Computer Science with a focus on intelligent computing and software development. Throughout the program, I have gained strong foundations in front-end development, data structures and algorithms, database design, operating systems, and machine learning fundamentals in Artificial Intelligence (AI).",
      logo: "usm.png",
    },
    {
      year: "2022 - 2023",
      degree: "Foundation in Science",
      institution: "Kolej Matrikulasi Pulau Pinang (KMPP)",
      result: "CGPA: 4.00, MUET: Band 4",
      description:
        "Completed a foundation program emphasizing mathematics, physics, chemistry, and computer science fundamentals.",
      logo: "kmpp.png",
    },
    {
      year: "2017 - 2022",
      degree: "Sijil Pelajaran Malaysia (SPM)",
      institution: "SMJK Phor Tay",
      result: "3A+ 5A 1A- 1B",
      description:
        "Completed secondary education with excellent results in Mathematics, Physics, and Chemistry.",
      logo: "phortay.png",
    },
  ];

  return (
    <div id="education" className="py-16 px-6 bg-blue-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-700 tracking-tight">
          Education
        </h2>

        <ol className="relative border-s-4 border-blue-200 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ms-6 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full -start-3 ring-4 ring-white group-hover:scale-125 transition-transform duration-300"></span>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-6">
                {/* Logo Section */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-16 h-16 object-contain rounded-lg shadow-sm border border-gray-100 bg-gray-50"
                  />
                </div>

                {/* Content Section */}
                <div>
                  <time className="text-sm font-medium text-blue-500 uppercase tracking-wide">
                    {edu.year}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 font-medium mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{edu.result}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default EducationTimeline;
