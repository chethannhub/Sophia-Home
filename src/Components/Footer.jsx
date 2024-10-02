import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0D1117] text-gray-400 ">
            <div className='border-b border-white'></div>
            <div className="container mx-auto py-4 text-center">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#" className="hover:underline">Feedback</a></li>
                    <li><a href="#" className="hover:underline">Help</a></li>
                    <li><a href="#" className="hover:underline">Status</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Terms</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
