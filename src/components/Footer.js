// Update the Footer component to use the custom hooks and data
import React from 'react';
import { navLinks, socialLinks } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="footer-about">
            <div className="footer-logo mb-4">
              <a href="#hero" className="font-heading text-3xl font-bold">
                Mehedi<span className="text-highlight">.</span>
              </a>
            </div>
            <p className="mb-4">
              A passionate MERN stack developer focused on creating responsive, 
              user-friendly web applications with modern technologies.
            </p>
            <div className="social-links flex gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="social-icon" aria-label={link.name}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-textSecondary hover:text-highlight transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to my newsletter to receive updates on my latest projects and tech articles.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-primary border border-accent rounded-l p-3 focus:outline-none focus:border-highlight"
              />
              <button 
                type="submit" 
                className="bg-highlight text-white px-4 rounded-r hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-accent mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary">
            &copy; {currentYear} Mehedi. All rights reserved.
          </p>
          <a 
            href="#hero" 
            className="back-to-top mt-4 md:mt-0 bg-accent hover:bg-highlight text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
