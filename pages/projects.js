import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Discord bots',
    description: 'My first bot[Uranus] on Discord.',
    details: 'Uranus was a bot that kicked off my ineterest on coding, I have made many other bots after it for fun',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4f_purFmLHJTSr3A5xqdZ7TaMqFJvEBm3Vcc5gnGqBw&s' 
  },
  {
    title: 'Weather App',
    description: 'A weather app that provides the current weather and forecast for a city.',
    details: 'A weather app that provides the current weather and forecast for a city, this projects has been made with express.js and openweathermap api.',
    link: 'https://github.com/Discobotdevlolhehe/simple-weather-app',
    thumbnail: 'https://i.pinimg.com/736x/e4/fb/9e/e4fb9efe4454eb1172aa95b9d1e9ab59.jpg' 
  },
  {
    title: 'Assistant',
    description: 'A simple personal assistant.',
    details: 'A simple personal assistant that can help you with your daily tasks, this projects has been made with express, ejs and css.',
    link: 'https://github.com/Discobotdevlolhehe/assitant-using-express.js',
    thumbnail: 'https://cdn.dribbble.com/users/5976/screenshots/2170135/media/6f2df44fcd4e1d79a1dd38b8dc1c63e3.jpg?resize=400x300&vertical=center'

  },
  {
    title: 'To-do list',
    description: 'A simple to-do list app.',
    details: 'A simple to-do list app that can help you with your daily tasks, this projects has been made with html, css and js.',
    link: 'https://github.com/Discobotdevlolhehe/to-do-list',
    thumbnail: 'https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png'
  },
  {
    title: 'Console calculator',
    description: 'A simple console calculator.',
    details: 'A calculator made purely in node.js and its interface is made with inquiry. The project is still under development. The project features almost all the possible calculations in MATHS json data. For any cbse students out there, this is a very usefull one for boards',
    thumbnail: 'https://media.gettyimages.com/id/1083487790/video/infrastructure-plan-line-icon-animation-with-alpha.jpg?s=640x640&k=20&c=XfQa5nIMjq6acmkxA0SLbFao5jy5I3jVzEhQOsq_ZU0='
  }
];


const ProjectCard = ({ project }) => {
  const [showShortDescription, setShowShortDescription] = useState(true);
  const [typedDescription, setTypedDescription] = useState('');
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!showShortDescription && typeof project.details === 'string') {
      // Simulate typing animation for long description
      const typingInterval = setInterval(() => {
        const currentLength = typedDescription.length;
        const targetLength = project.details.length;
        if (currentLength < targetLength) {
          setTypedDescription(project.details.substring(0, currentLength + 1));
        } else {
          clearInterval(typingInterval);
          setIsDescriptionDisplayed(true);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [showShortDescription, project.details, typedDescription]);

  return (
    <div
      className={`relative group p-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isDescriptionDisplayed? 'darken-card' : ''}`}
      onMouseEnter={() => {
        setShowShortDescription(false);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowShortDescription(true);
        setTypedDescription('');
        setIsDescriptionDisplayed(false);
        setIsHovered(false);
      }}
      style={{ transform: isDescriptionDisplayed? 'scale(0.95)' : 'scale(1)' }}
    >
      <div className={`overflow-hidden rounded-lg mb-4 ${isHovered? 'brightness-50' : ''}`}>
        <img src={project.thumbnail} alt={project.title} className={`w-full`} />
      </div>
      <h3 className={`text-xl mb-2 ${isHovered? 'text-white' : ''}`}>{project.title}</h3>
      {showShortDescription? (
        <p className={`mb-4 ${isHovered? 'text-white' : ''}`}>{project.description}</p>
      ) : (
        <p className={`mb-4 ${isHovered? 'text-white' : ''}`}>{typedDescription}</p>
      )}
      <div className="flex justify-center">
        {project.link? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">View Project</a>
        ) : (
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full cursor-not-allowed" disabled>Private Project</button>
        )}
      </div>
      {isDescriptionDisplayed && <div className="absolute inset-0 bg-black opacity-25"></div>}
    </div>
  );
};

export default function Projects() {
  return (
    <Layout>
      <h2 className="text-4xl text-center mt-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Layout>
  );
}