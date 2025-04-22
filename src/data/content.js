import React from 'react';

// Navigation links data
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

// Social media links data
const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', href: '#' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', href: '#' },
  { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
  { name: 'Instagram', icon: 'fab fa-instagram', href: '#' }
];

// About details data
const aboutDetails = [
  { 
    icon: 'fas fa-graduation-cap', 
    title: 'Education', 
    description: 'B.S. in Computer Science, Tech University' 
  },
  { 
    icon: 'fas fa-briefcase', 
    title: 'Experience', 
    description: '5+ Years in Full Stack Development' 
  },
  { 
    icon: 'fas fa-map-marker-alt', 
    title: 'Location', 
    description: 'San Francisco, CA' 
  },
  { 
    icon: 'fas fa-language', 
    title: 'Languages', 
    description: 'English, Spanish' 
  }
];

// Contact information data
const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'john.doe@example.com'
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    value: 'San Francisco, CA'
  }
];

export { navLinks, socialLinks, aboutDetails, contactInfo };
