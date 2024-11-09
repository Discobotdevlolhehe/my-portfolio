import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FaGithub, FaInstagram, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const textColor = submitted ? 'text-green-500' : 'text-gray-700';
const backgroundColor = submitted ? 'bg-white' : 'bg-gray-100';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error('Failed to submit the form');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center p-4">
        <motion.h2
          className="text-4xl text-white text-center mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="text-center mt-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            <FaGoogle className="inline-block mr-2" />
            Work Email:{' '}
            <Link legacyBehavior href="mailto:tongko225@gmail.com">
              <a className="text-gray-300">tongko225@gmail.com</a>
            </Link>
          </p>
          <p>
            <FaGithub className="inline-block mr-2" />
            GitHub:{' '}
            <Link legacyBehavior href="https://github.com/Discobotdevlolhehe">
              <a className="text-gray-300">github.com/Discobotdevlolhehe</a>
            </Link>
          </p>
          <p>
            <FaInstagram className="inline-block mr-2" />
            Instagram:{' '}
            <Link legacyBehavior href="https://instagram.com/wandering._entity">
              <a className="text-gray-300">instagram.com/wandering._entity</a>
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-2xl mb-4">Send Me a Message</h3>
          {submitted ? (
            <div>
            <p className="text-green-500">Thank you for your message!</p>
            <button
              onClick={handleReset}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Send Another Message
            </button>
          </div>) : (
            
          
            <p className="text-green-500">Thank you for your message!</p>
          ) && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-2 border border-gray-300 rounded ${textColor}`}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  rows="4"
                  className={`w-full p-2 border border-gray-300 rounded ${textColor}`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`w-full p-2 border border-gray-300 rounded ${textColor}`}
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
