// Update the Hero component to use the custom hooks and data
import React from 'react';
import { socialLinks } from '../data/content';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-transparent to-transparent"></div>
      <div className="container flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="hero-content max-w-xl">
          <h1 className="text-5xl md:text-6xl mb-2">John Doe</h1>
          <h2 className="text-3xl text-highlight mb-5 typing-effect">MERN Stack Developer</h2>
          <p className="text-xl mb-8">Building robust web applications with MongoDB, Express, React, and Node.js</p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="social-icons flex gap-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="social-icon" aria-label={link.name}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image mt-12 md:mt-0 max-w-md">
          <div className="code-snippet bg-secondary rounded-lg p-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-accent rounded-t-lg"></div>
            <div className="absolute top-0 left-4 text-white text-xl leading-8">• • •</div>
            <pre className="mt-8 font-code text-sm text-gray-200 overflow-x-auto">
              <code>
{`const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const skills = ['MongoDB', 'Express', 'React', 'Node.js'];
                        
  useEffect(() => {
    // Welcome to my portfolio
    setIsLoading(false);
  }, []);
                        
  return (
    <div className="portfolio">
      {!isLoading && (
        <Projects skills={skills} />
      )}
    </div>
  );
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
