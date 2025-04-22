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
  { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/mahdi33-gk' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/mehedi-mehedi-09a088349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' },
  { name: 'Twitter', icon: 'fab fa-twitter', href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Fgkmehdiy313%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExaTRCYjRvUGlhd1VpbFVUTgEeeUP0lqbdxCK2G-FWQD16IPSsHs836hXqwbACcdS3AdtC_7Z9ENtAhhLVHns_aem_hKXGNyctm17i9kQ8pLqr2A&h=AT1h2KvCU75PM0Xjg8B214EHUOZWEOQiuLrZQmHt0TwLAXeJ2ixE0_X_nrNKA9dra5q5E9mWZ_W1zjF4REZ9D9Fcgl4FXlY08cl0l6q2s-HKyl7mx3AOs5SY_tX7nB-y5tfA' },
  { name: 'Facebook', icon: 'fab fa-facebook', href: 'https://www.facebook.com/gk.mehidy3' }
];

// About details data
const aboutDetails = [
  { 
    icon: 'fas fa-graduation-cap', 
    title: 'Education', 
    description: '7th Semester Diploma in Computer Science (Running)' 
  },
  { 
    icon: 'fas fa-school', 
    title: 'SSC', 
    description: 'Completed SSC in Science from Ghonar Chala High School' 
  },
  { 
    icon: 'fas fa-briefcase', 
    title: 'Experience', 
    description: 'Learning and building real-world projects' 
  },
  { 
    icon: 'fas fa-map-marker-alt', 
    title: 'Location', 
    description: 'Bangladesh' 
  },
  { 
    icon: 'fas fa-language', 
    title: 'Languages', 
    description: 'Bangla, English, Hindi, Urdu' 
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
