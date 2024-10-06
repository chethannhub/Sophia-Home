import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSignInAlt, FaRocket, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    navigate('/');  // Navigate to Home page
    setTimeout(() => {
      const section = document.querySelector('#features');  // Scroll to the "Features" section
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);  // Delay to ensure Home page loads before scroll
  };

  const handleClick = () => {
    toggleMenu();
    handleFeaturesClick();
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900  via-gray-800 to-black">
        <div className="container mx-auto flex justify-between items-center p-4">
          <NavLink to="/">
            <div className="text-white font-bold text-2xl cursor-pointer">NewsTeller</div>
          </NavLink>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 items-center text-white">
            <NavLink to="/" className="hover:text-purple-400 transition">
              <FaHome className="inline mr-2" /> Home
            </NavLink>
            <NavLink to="/ourstory" className="hover:text-purple-400 transition">
              <FaInfoCircle className="inline mr-2" /> Our Story
            </NavLink>
            <NavLink href="/#" className="hover:text-purple-400 transition" onClick={handleFeaturesClick}>
              <FaRocket className="inline mr-2" /> Features
            </NavLink>

            {/* <NavLink to="/membership" className="hover:text-purple-400 transition">
              <FaUser className="inline mr-2" /> Membership
            </NavLink> */}
            {/* <NavLink to="/signin" className="hover:text-purple-400 transition">
              <FaSignInAlt className="inline mr-2" /> Signin
            </NavLink> */}
            <NavLink className='cursor-pointer ' to='/getstarted'>
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-600 '>Get Started</button>
            </NavLink>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <motion.div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-90 z-50 p-8 ${isOpen ? 'block' : 'hidden'}`}
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <button className="absolute top-5 right-5 text-white" onClick={toggleMenu}>
            <FaTimes size={30} />
          </button>

          <ul className="flex flex-col gap-6 mt-10 text-white">
            <NavLink to="/" onClick={toggleMenu}>
              <FaHome className="inline mr-2" /> Home
            </NavLink>
            <NavLink to="/ourstory" onClick={toggleMenu}>
              <FaInfoCircle className="inline mr-2" /> Our Story
            </NavLink>
            <NavLink href="/#" onClick={handleClick} >
              <FaRocket className="inline mr-2" /> Features
            </NavLink>
            {/* <NavLink to="/membership" onClick={toggleMenu} >
              <FaUser className="inline mr-2" /> Membership
            </NavLink> */}
            {/* <NavLink to="/signin" onClick={toggleMenu}>
              <FaSignInAlt className="inline mr-2" /> Signin
            </NavLink> */}
            <NavLink className='inline cursor-pointer ' to='/getstarted' onClick={toggleMenu}>
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-700'>Get Started</button>
            </NavLink>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
