import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
      animate={{ backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 1)' }}
      className="fixed w-full top-0 z-50 p-4"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl">My Portfolio</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link legacyBehavior href="/">
            <a className="header-link">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="header-link">About</a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a className="header-link">Projects</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="header-link">Contact</a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;