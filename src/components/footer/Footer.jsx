import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  // Height of the navbar (adjust based on your navbar height)
  const navbarHeight = 72; // Example: 80px

  return (
    <footer className="bg-blue-50 rounded-lg shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-2xl mx-auto p-4 flex flex-col items-center text-center">
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Chua Pei Jun
        </span>
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center items-center my-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Add offset
                className="hover:underline mx-4 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Add offset
                className="hover:underline mx-4 cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Add offset
                className="hover:underline mx-4 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Add offset
                className="hover:underline mx-4 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="w-full my-2 border-gray-200 dark:border-gray-700" />
        <div className="px-4 py-6 bg-blue-50 dark:bg-gray-700 md:flex md:items-center md:justify-between w-full">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025 Chua Pei Jun's Portfolio. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse text-gray-500">
            {/* LinkedIn Icon */}
            <div>
              <a
                href="https://www.linkedin.com/in/chua-pei-jun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  size={24}
                />
              </a>
            </div>

            {/* Instagram Icon */}
            <div>
              <a
                href="https://www.instagram.com/pjchua_1008/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                  size={24}
                />
              </a>
            </div>

            {/* GitHub Icon */}
            <div>
              <a
                href="https://github.com/ChuaPeiJun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                  size={24}
                />
              </a>
            </div>

            {/* Email Icon */}
            <div>
              <a href="mailto:chua17009@gmail.com">
                <FaEnvelope
                  className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
