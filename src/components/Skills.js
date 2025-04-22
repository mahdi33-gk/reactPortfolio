// Update the Skills component to use the custom hooks and data
import React, { useRef } from 'react';
import skills from '../data/skills';
import { useSkillAnimation } from '../hooks';

const Skills = () => {
  const { skillsRef, animated } = useSkillAnimation();
  
  return (
    <section id="skills" className="section bg-primary" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-content grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="skill-category">
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
            {skills.frontend.map((skill, index) => (
              <div key={index} className="skill-item mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-highlight">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-level ${animated ? 'animate' : ''}`}
                    style={{ 
                      width: animated ? `${skill.level}%` : '0%',
                      '--skill-percent': `${skill.level}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skill-category">
            <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
            {skills.backend.map((skill, index) => (
              <div key={index} className="skill-item mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-highlight">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-level ${animated ? 'animate' : ''}`}
                    style={{ 
                      width: animated ? `${skill.level}%` : '0%',
                      '--skill-percent': `${skill.level}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skill-category">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Others</h3>
            {skills.other.map((skill, index) => (
              <div key={index} className="skill-item mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-highlight">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-level ${animated ? 'animate' : ''}`}
                    style={{ 
                      width: animated ? `${skill.level}%` : '0%',
                      '--skill-percent': `${skill.level}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
