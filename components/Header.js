import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
      animate={{ backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 1)' }}
      className="fixed w-full top-0 z-50 p-4"
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-white text-2xl md:text-3xl">My Portfolio</h1>
        <div className="flex space-x-4">
          <Link legacyBehavior href="/">
            <a className="text-white mx-2">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-white mx-2">About</a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a className="text-white mx-2">Projects</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-white mx-2">Contact</a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
