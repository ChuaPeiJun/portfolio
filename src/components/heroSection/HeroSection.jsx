import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="mt-18 text-black flex flex-col lg:flex-row flex-wrap w-full lg:justify-between p-8 lg:p-20 xl:p-40 items-center max-w-screen-2xl mx-auto"
    >
      {/* Right Section (Image) - Order 1 on small screens, default on larger screens */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-4 mb-4 lg:mt-0 order-1 lg:order-2">
        <img
          className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[440px] xl:h-[440px] bg-blue-200 rounded-full object-cover hover:shadow-2xl hover:shadow-blue-200"
          src="peijun.png"
          alt="Pei Jun"
        />
      </div>

      {/* Left Section (Text Content) - Order 2 on small screens, default on larger screens */}
      <div className="lg:w-1/2 w-full text-center lg:text-left lg:pt-10 order-2 lg:order-1">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm<br></br> <span className="text-blue-600">Chua Pei Jun</span>
        </h1>
        <p className="text-lg md:text-2xl mt-4 tracking-tight text-gray-700">
          Year 3 Computer Science Student at USM.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center lg:justify-start mt-6">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/chua-pei-jun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-blue-600 hover:text-blue-700 transition-all duration-500 transform hover:rotate-[360deg]"
              size={35}
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/pjchua_1008/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-blue-600 hover:text-blue-700 transition-all duration-500 transform hover:rotate-[360deg]"
              size={35}
            />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/ChuaPeiJun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-blue-600 hover:text-blue-700 transition-all duration-500 transform hover:rotate-[360deg]"
              size={35}
            />
          </a>

          {/* Email Icon */}
          <a href="mailto:chua17009@gmail.com">
            <FaEnvelope
              className="text-blue-600 hover:text-blue-700 transition-all duration-500 transform hover:rotate-[360deg]"
              size={35}
            />
          </a>
        </div>

        {/* Contact Me Button */}
        <a href="mailto:chua17009@gmail.com">
          <button className="mt-6 text-white py-2 px-6 text-lg md:text-xl hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-500 cursor-pointer">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
