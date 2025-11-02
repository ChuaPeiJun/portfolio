import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Height of the navbar (adjust based on your navbar height)
  const navbarHeight = 72; // Example: 80px

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-50 border-gray-200 dark:bg-gray-900 drop-shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-5 px-12">
        {/* Logo or Name */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Chua Pei Jun
        </span>

        {/* Hamburger Menu (for mobile) */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:cursor-pointer hover:bg-blue-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col mt-4 border border-gray-100 rounded-lg bg-blue-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="block py-3 px-3 text-gray-900 rounded-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                onClick={toggleDropdown} // Close dropdown on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="block py-3 px-3 text-gray-900 rounded-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                onClick={toggleDropdown} // Close dropdown on link click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="block py-3 px-3 text-gray-900 rounded-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                onClick={toggleDropdown} // Close dropdown on link click
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="block py-3 px-3 text-gray-900 rounded-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                onClick={toggleDropdown} // Close dropdown on link click
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="block py-3 px-3 text-gray-900 rounded-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                onClick={toggleDropdown} // Close dropdown on link click
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
