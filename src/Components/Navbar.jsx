import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='bg-[#0D1117]'>
        <div className='container mx-auto flex justify-between items-center p-2'>
          <div className='Logo text-white font-bold text-xl'>NewsTeller</div>

          <div className='block md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>

          {/* Links - Hidden on Mobile, Visible on larger screens */}
          <ul className='hidden md:flex gap-8 items-center text-white'>
            <NavLink className='cursor-pointer hover:font-semibold' to='/'><li>Our Story</li></NavLink>
            <NavLink className='cursor-pointer hover:font-semibold' to='/features'><li>Features</li></NavLink>
            <NavLink className='cursor-pointer hover:font-semibold' to='/membership'><li>Membership</li></NavLink>
            <NavLink className='cursor-pointer hover:font-semibold' to='/signin'><li>Signin</li></NavLink>
            <NavLink className='cursor-pointer hover:font-semibold' to='/get-started'>
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-700'>Get Started</button>
            </NavLink>
          </ul>

          {/* Side Drawer for Mobile */}
          <div className={`fixed top-0 right-0 w-64 h-full bg-[#0D1117] z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-between items-center p-4'>
              {/* Logo stays in place */}
              <div className='text-white font-bold text-xl'>NewsTeller</div>

              {/* Close Icon */}
              <button onClick={toggleMenu} className='text-white focus:outline-none'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>

            {/* Links inside side drawer */}
            <ul className='flex flex-col gap-6 p-4 text-white'>
              <NavLink className='cursor-pointer hover:font-semibold' to='/'><li>Our Story</li></NavLink>
              <NavLink className='cursor-pointer hover:font-semibold' to='/features'><li>Features</li></NavLink>
              <NavLink className='cursor-pointer hover:font-semibold' to='/membership'><li>Membership</li></NavLink>
              <NavLink className='cursor-pointer hover:font-semibold' to='/signin'><li>Signin</li></NavLink>
              <NavLink className='cursor-pointer hover:font-semibold' to='/get-started'>
                <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-700'>Get Started</button>
              </NavLink>
            </ul>
          </div>

          
        </div>
        <div className='border-b border-white'></div>
      </nav>
    </>
  );
};

export default Navbar;
