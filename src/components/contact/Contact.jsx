import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-2xl mx-auto bg-blue-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Title and Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Let's Connect
          </h2>
          <p className="text-sm text-gray-600">
            Feel free to reach out to me via email or connect with me on social
            media.
          </p>
        </div>

        {/* Right Side: Card with Links */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:chua17009@gmail.com"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl mr-4" />
              <span>chua17009@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chua-pei-jun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl mr-4" />
              <span>linkedin.com/chua-pei-jun</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ChuaPeiJun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaGithub className="text-2xl mr-4" />
              <span>github.com/ChuaPeiJun</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
