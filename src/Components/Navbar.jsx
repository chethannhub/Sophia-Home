import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSignInAlt, FaRocket, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Logo from '../assets/Logo2.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const section = document.querySelector('#features');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    toggleMenu();

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  }

  return (
    <>
      {/* <nav className="bg-gradient-to-r from-blue-900  via-gray-800 to-black"> */}
      <nav className={`sticky top-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'} bg-gradient-to-r from-black via-gray-800 to-blue-900`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <NavLink to="/">
            <div className="logo text-white font-bold text-2xl cursor-pointer">
              <img className='w-28' src={Logo} alt="" />
            </div>
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

            <NavLink className='cursor-pointer ' to='https://sophia-wheat.vercel.app/'>
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-600 '>Get Started</button>
            </NavLink>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <motion.div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 z-50 p-8 ${isOpen ? 'block' : 'hidden'}`}
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <button className="absolute top-5 right-5 text-white" onClick={toggleMenu}>
            <FaTimes size={30} />
          </button>

          <ul className="flex flex-col gap-6 mt-10 text-white">
            <NavLink to="/" onClick={toggleMenu} className="hover:text-purple-400 transition">
              <FaHome className="inline mr-2" /> Home
            </NavLink>
            <NavLink to="/ourstory" onClick={toggleMenu} className="hover:text-purple-400 transition">
              <FaInfoCircle className="inline mr-2" /> Our Story
            </NavLink>
            <NavLink href="/#" onClick={handleFeaturesClick} className="hover:text-purple-400 transition">
              <FaRocket className="inline mr-2" /> Features
            </NavLink>
            {/* <NavLink to="/membership" onClick={toggleMenu} className="hover:text-purple-400 transition">
              <FaUser className="inline mr-2" /> Membership
            </NavLink> */}
            {/* <NavLink to="/signin" onClick={toggleMenu} className="hover:text-purple-400 transition">
              <FaSignInAlt className="inline mr-2" /> Signin
            </NavLink> */}
            <NavLink className='inline cursor-pointer transition' to='https://sophia-wheat.vercel.app/' onClick={toggleMenu} >
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-700'>Get Started</button>
            </NavLink>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
