// Update the About component to use the custom hooks and data
import React from 'react';
import { aboutDetails } from '../data/content';

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
              I'm a passionate MERN Stack Developer with 5+ years of experience building modern web applications. 
              I specialize in creating responsive, user-friendly interfaces with React on the frontend and robust, 
              scalable APIs with Node.js and Express on the backend.
            </p>
            <p>
              My journey in web development began during my Computer Science studies, where I discovered my passion 
              for creating interactive web experiences. Since then, I've worked with startups and established 
              companies to deliver high-quality web solutions.
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
            <a href="#" className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
