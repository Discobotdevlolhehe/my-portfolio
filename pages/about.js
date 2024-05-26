import Layout from '../components/Layout';
import Typing from 'react-typing-effect';

export default function About() {
  return (
    <Layout>
      <div className="text-center mt-16">
        <h2 className="text-4xl">
          <Typing text={["Hello, I&apos;m Unknown Leaf"]} speed={100} eraseSpeed={50} />
        </h2>
        <div className="mt-8 max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">About Me</h3>
          <p className="mb-4">
          Hello there, I am Unknown Leaf, a passionate web developer. My coding journey began in 2020 when I followed a tutorial to create a Discord bot. Since then, I&apos;ve built numerous bots and contributed to open-source projects. My first website was for a school project on agriculture, where I successfully demonstrated that a website could present details just as effectively as a PPT presentation.
          </p>
          <p className="mb-4">
            In my free time, I love to explore nature, hang out with my friends, and contribute to open-source projects. 
            I believe in continuous growth and strive to be better every day. Let&apos;s connect and create something amazing together!
          </p>
        </div>
        <div className="mt-8 max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">My Proficiency</h3>
          <div className="mb-4">
            <label>MongoDB</label>
            <div className="bg-gray-200 w-full h-4 rounded">
              <div className="bg-blue-500 h-4 rounded" style={{ width: '79%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label>HTML/CSS/JS</label>
            <div className="bg-gray-200 w-full h-4 rounded">
              <div className="bg-blue-500 h-4 rounded" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label>Express</label>
            <div className="bg-gray-200 w-full h-4 rounded">
              <div className="bg-blue-500 h-4 rounded" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
