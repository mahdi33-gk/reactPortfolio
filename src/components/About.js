// Update the About component to use the custom hooks and data
import React from "react";
import { aboutDetails } from "../data/content";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content flex flex-col md:flex-row items-center gap-12">
          <div className="about-image flex-1">
            <div className="image-container relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-highlight/30 to-transparent z-10"></div>
              <img
                src="/images/profile.jpg"
                alt="John Doe - MERN Stack Developer"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="about-text flex-1">
            <h3 className="text-3xl text-highlight mb-5">Who am I?</h3>
            <p>
              I’m a dedicated MERN Stack Developer pursuing a Diploma in
              Computer Science and Technology at Tangail Polytechnic Institute.
              My journey in tech began with a curiosity for how things work, and
              now, coding is my oxygen. Every
              day, I challenge myself to learn new technologies, from exploring
              modern frameworks to diving into the latest tools that push the
              boundaries of web development. 
              <br/><br/> Coding isn’t just a skill for me—it’s a mindset. I may not hit the gym daily, but my GitHub is my bodybuilder, showcasing my growth and creativity through projects. Whether crafting a sleek React frontend or a secure Node.js backend, I pour my heart into every line of code. I’m passionate about innovation and aim to contribute to impactful projects, collaborate with developers, and lead initiatives that drive progress. Check out my projects to see my passion in action, one commit at a time!
            </p>
            <div className="about-details grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {aboutDetails.map((detail, index) => (
                <div key={index} className="detail flex items-start gap-4">
                  <i className={`${detail.icon} text-2xl text-highlight`}></i>
                  <div>
                    <h4 className="text-lg mb-1">{detail.title}</h4>
                    <p className="mb-0">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
