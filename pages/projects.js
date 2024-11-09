import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = {
  discord: [
    {
      title: 'Discord bots',
      description: 'My first bot [Uranus] on Discord.',
      details: 'Uranus was a bot that kicked off my interest in coding. I have made many other bots after it for fun.',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4f_purFmLHJTSr3A5xqdZ7TaMqFJvEBm3Vcc5gnGqBw&s'
    },
    {
      title: 'Discord-Pyro',
      description: 'My attempt at making my own discord.js framework.',
      details: 'I made an attempt to make a discord.js framework that would make discord bot development very easy. I tried multiple times but ended with failure and realized that I am not knowledgeable enough, so for now, that challenge is on hold.',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN4MAWnGIsvKZHoTUjau-9owcIJ1ELCa-wg&s'
    }
  ],
  web: [
    {
      title: 'Weather App',
      description: 'A weather app that provides the current weather and forecast for a city.',
      details: 'A weather app that provides the current weather and forecast for a city. This project has been made with express.js and openweathermap API.',
      link: 'https://github.com/Discobotdevlolhehe/simple-weather-app',
      thumbnail: 'https://i.pinimg.com/736x/e4/fb/9e/e4fb9efe4454eb1172aa95b9d1e9ab59.jpg'
    },
    {
      title: 'To-do list',
      description: 'A simple to-do list app.',
      details: 'A simple to-do list app that can help you with your daily tasks. This project has been made with HTML, CSS, and JS.',
      link: 'https://github.com/Discobotdevlolhehe/to-do-list',
      thumbnail: 'https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png'
    },
    {
      title: 'Portfolio',
      description: 'The portfolio you are currently seeing',
      details: 'This is another project I made. This is my first project I made with Next.js, React.js, and Tailwind CSS. It was a fun project and I see myself doing more of this. I may make a public template in the near future once I am more experienced with front-end development.',
      thumbnail: 'https://w7.pngwing.com/pngs/449/539/png-transparent-career-portfolio-artist-s-portfolio-portfolio-miscellaneous-angle-kitchen-thumbnail.png'
    }
  ],
  server: [
    {
      title: 'Assistant',
      description: 'A simple personal assistant.',
      details: 'A simple personal assistant that can help you with your daily tasks. This project has been made with Express, EJS, and CSS.',
      link: 'https://github.com/Discobotdevlolhehe/assitant-using-express.js',
      thumbnail: 'https://cdn.dribbble.com/users/5976/screenshots/2170135/media/6f2df44fcd4e1d79a1dd38b8dc1c63e3.jpg?resize=400x300&vertical=center'
    },
    {
      title: 'Console calculator',
      description: 'A simple console calculator.',
      details: 'A calculator made purely in node.js and its interface is made with inquirer. The project is still under development. The project is capable of doing calculations as simple as addition to finding the determinant of a 5x5 matrix. For any CBSE students out there, this is a very useful one for boards. [statistics plugin coming soon]',
      link: 'https://github.com/Discobotdevlolhehe/NodeJS-Console-Calculator',
      thumbnail: 'https://media.gettyimages.com/id/1083487790/video/infrastructure-plan-line-icon-animation-with-alpha.jpg?s=640x640&k=20&c=XfQa5nIMjq6acmkxA0SLbFao5jy5I3jVzEhQOsq_ZU0='
    }
  ]
};

const ProjectCard = ({ project }) => {
  const [showShortDescription, setShowShortDescription] = useState(true);
  const [typedDescription, setTypedDescription] = useState('');
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!showShortDescription && typeof project.details === 'string') {
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
      className={`relative group p-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isDescriptionDisplayed ? 'darken-card' : ''}`}
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
      style={{ transform: isDescriptionDisplayed ? 'scale(0.95)' : 'scale(1)' }}
    >
      <div className={`overflow-hidden rounded-lg mb-4 ${isHovered ? 'brightness-50' : ''}`}>
        <img src={project.thumbnail} alt={project.title} className={`w-full`} />
      </div>
      <h3 className={`text-xl mb-2 ${isHovered ? 'text-white' : ''}`}>{project.title}</h3>
      {showShortDescription ? (
        <p className={`mb-4 ${isHovered ? 'text-white' : ''}`}>{project.description}</p>
      ) : (
        <p className={`mb-4 ${isHovered ? 'text-white' : ''}`}>{typedDescription}</p>
      )}
      <div className="flex justify-center">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">View Project</a>
        ) : (
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full cursor-not-allowed" disabled>Private Project</button>
        )}
      </div>
      {isDescriptionDisplayed && <div className="absolute inset-0 bg-black opacity-25"></div>}
    </div>
  );
};

const Projects = () => {
  return (
    <Layout>
      <h2 className="text-4xl text-center mt-16">My Projects</h2>

      <section className="mt-12">
        <h3 className="text-3xl mb-6">Discord Bots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.discord.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl mb-6">Web Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.web.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl mb-6">Server End Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.server.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;