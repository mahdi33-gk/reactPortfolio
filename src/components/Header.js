// Update the Header component to use the custom hooks and data
import React from 'react';
import { navLinks } from '../data/content';
import { useMobileMenu } from '../hooks';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isOpen, toggleMenu } = useMobileMenu();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <a href="#hero" className="font-heading text-2xl font-bold">
            JD<span className="text-highlight">.</span>
          </a>
        </div>
        <nav>
          <ul className={`nav-links flex ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="ml-8">
                <a 
                  href={link.href} 
                  className="font-heading text-sm font-semibold uppercase tracking-wider relative hover:after:w-full after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-highlight after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`bar ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bar ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
