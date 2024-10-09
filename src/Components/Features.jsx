import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadphones, FaUserFriends, FaMusic, FaNewspaper, FaFileAlt, FaRobot } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import Article from '../assets/Article.png';
import Audio from '../assets/Audio.png';
import Podcast from '../assets/Podcast.png';
import Music from '../assets/Music.png';
import SummaryImage from '../assets/Summary.png';
import ChatAIImage from '../assets/ChatAI.png';

const FeaturesPage = () => {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   window.location.href = 'https://sophia-wheat.vercel.app/';
  // };

  const features = [
    {
      icon: <FaNewspaper className="text-purple-400 text-4xl" />,
      title: 'Curated Top Articles',
      description: 'We sift through thousands of sources daily to bring you the most relevant articles, tailored to your interests.',
      image: Article,
    },
    {
      icon: <FaFileAlt className="text-blue-400 text-4xl" />,
      title: 'Summary at a Glance',
      description: 'Get concise, digestible summaries of the articles, allowing you to quickly grasp the key takeaways without reading the entire piece.',
      image: SummaryImage,
    },
    {
      icon: <FaHeadphones className="text-teal-400 text-4xl" />,
      title: 'Listen On the Go',
      description: 'Busy schedule? Transform articles into audio and listen on the go. Stay informed while commuting, working out, or during lunch breaks.',
      image: Audio,
    },
    {
      icon: <FaUserFriends className="text-sky-500 text-4xl" />,
      title: 'Engage with Persona Conversations',
      description: 'Gain unique insights as AI-generated personas, like industry leaders and experts from their perspectives.',
      image: Podcast,
    },
    {
      icon: <FaRobot className="text-pink-400 text-4xl" />,
      title: 'Chat with AI about this Article',
      description: 'Engage in dynamic, AI-driven conversations about the content, clarify doubts, and dive deeper into the topics.',
      image: ChatAIImage,
    },
    {
      icon: <FaMusic className="text-cyan-400 text-4xl" />,
      title: 'Personalize Your Audio Experience',
      description: 'Tailor your journey by selecting personas and topics that resonate with you for a truly customized experience.',
      image: Music,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-8 px-28 max-lg:px-8 max-md:px-2">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h1
          className="text-5xl font-bold mb-2 p-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-poppins"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: 'clamp(2rem, 3.2vw, 3.8rem)' }}
        >
          What We Offer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: 'clamp(1.2rem, 2vw, 1.25rem)' }}
        >
          Discover powerful features designed to enhance your learning and growth in your professional journey.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-full items-center border-[1px] border-gray-700 bg-gray-800 p-8 cursor-pointer rounded-xl shadow-xl text-center transition-transform duration-300 transform hover:scale-110 hover:bg-[#232f3f] hover:shadow-2xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className="flex-grow mb-6 flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h3
                className="text-2xl font-semibold mb-4 font-poppins"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-400 font-inter"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
              >
                {feature.description}
              </p>
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-lg shadow-lg mt-6 w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-3xl font-semibold mb-2 pb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-poppins"
          style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}
        >
          Ready to Personalize Your Learning?
        </h2>
        <p
          className="text-gray-400 max-w-xl mx-auto mb-8 font-inter"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          Explore curated content and engage with AI-driven insights for a richer, more meaningful learning experience.
        </p>

        <a href="https://sophia-wheat.vercel.app/" target="_self" rel="noopener noreferrer">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition font-inter"
          // onClick={handleButtonClick}
          >
            Get Started
          </button>
        </a>


      </motion.div>
    </div>
  );
};

export default FeaturesPage;
