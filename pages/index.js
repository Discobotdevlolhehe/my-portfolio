import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const waveVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 15, -10, 15, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

export default function Home() {
  useEffect(() => {
    const bgContainer = document.getElementById('bg-container');
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${x}%`);
      document.body.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center mt-8">
        <motion.div
          className="text-6xl mb-4"
          variants={waveVariants}
          initial="initial"
          animate="animate"
        >
          👋
        </motion.div>
        <h1 className="text-5xl mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          Hi there! I am Unknown Leaf, a passionate web developer specializing in creating dynamic and responsive web applications.
          Explore my projects, learn more about my skills, and feel free to get in touch!
        </p>
        <div className="mt-8 max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">About This Portfolio</h2>
          <p className="mb-4">
            This portfolio showcases some of the projects I have worked on, demonstrating my skills in web development using modern technologies like  HTML, CSS, JS, node.js and Express.
            Each project highlights different aspects of my expertise, from front-end design to back-end development.
          </p>
          <p className="mb-4">
            I believe in continuous learning and improvement. Whether it&apos;s mastering a new framework or refining my existing skills, I&apos;m always eager to take on new challenges.
            Feel free to browse through my projects, and connect with me on social media.
          </p>
        </div>
      </div>
    </Layout>
  );
}
