import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadphones, FaUserFriends, FaMusic, FaNewspaper } from 'react-icons/fa';

const FeaturesPage = () => {
  const features = [
    {
      icon: <FaNewspaper className="text-blue-400 text-4xl" />,
      title: 'Curated Top Articles',
      description: 'We sift through thousands of sources daily to bring you the most relevant articles, tailored to your interests.',
      image: "https://via.placeholder.com/500x300", // Placeholder image for feature 1
    },
    {
      icon: <FaHeadphones className="text-teal-400 text-4xl" />,
      title: 'Listen On the Go',
      description: 'Busy schedule? Transform articles into audio and listen on the go. Stay informed while commuting, working out, or during lunch breaks.',
      image: "https://via.placeholder.com/500x300", // Placeholder image for feature 2
    },
    {
      icon: <FaUserFriends className="text-purple-400 text-4xl" />,
      title: 'Engage with Persona Conversations',
      description: 'Gain unique insights as AI-generated personas, like industry leaders and experts, explain articles from their perspectives.',
      image: "https://via.placeholder.com/500x300", // Placeholder image for feature 3
    },
    {
      icon: <FaMusic className="text-pink-400 text-4xl" />,
      title: 'Personalize Your Audio Experience',
      description: 'Tailor your journey by selecting personas and topics that resonate with you for a truly customized experience.',
      image: "https://via.placeholder.com/500x300", // Placeholder image for feature 4
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          className="text-5xl font-bold mb-4 p-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Features That Empower You
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover powerful features designed to enhance your learning and growth in your professional journey.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-full items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-grow mb-4 flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-lg shadow-lg mt-4 w-full h-32 object-cover"
            />
          </motion.div>
        ))}
      </div>


      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Ready to Personalize Your Learning?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Explore curated content and engage with AI-driven insights for a richer, more meaningful learning experience.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;
