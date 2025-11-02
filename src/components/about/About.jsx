import React from "react";

const About = () => {
  return (
    <div id="about" className="p-8">
      <div className="max-w-screen-2xl mx-auto bg-blue-100 p-8 w-full rounded-2xl text-black flex flex-col lg:flex-row flex-wrap lg:justify-between lg:p-12 xl:pt-16 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center order-1">
          <img
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[480px] xl:h-[480px] bg-blue-400 rounded-2xl object-cover hover:shadow-2xl hover:shadow-blue-300 transition-shadow duration-300"
            src="peijun.jpg"
            alt="Pei Jun"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full h-full text-center lg:text-left order-2 lg:pl-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4 text-blue-600">
            About
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            I'm Chua Pei Jun
          </h1>
          <p className="text-md md:text-lg xl:text-xl mt-4 tracking-tight leading-relaxed">
            I am a Year 3 undergraduate Computer Science student at USM with a
            passion for front-end development and a strong interest in creating
            user-friendly and visually appealing web applications. My experience
            includes working on various projects using technologies such as
            React, JavaScript, Tailwind CSS, and Java, focusing on building
            intuitive interfaces and enhancing user experience. I'm always eager
            to learn, collaborate, and contribute to innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
