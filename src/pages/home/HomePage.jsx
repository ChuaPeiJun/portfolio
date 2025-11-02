import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import About from "../../components/about/About";
import EducationTimeline from "../../components/education/EducationTimeline";
import Skill from "../../components/skill/Skill";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Skill />
      <EducationTimeline />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default HomePage;
