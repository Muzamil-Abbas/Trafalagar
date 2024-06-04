import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import './Style/Header.css'; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <header className="bg-white py-4  px-4 xl:px-28 shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-400 rounded-full p-2 mr-4 flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
            <span className="text-white text-2xl font-bold">T</span>
          </div>
          <div className="text-base md:text-2xl font-bold text-gray-800">Trafalgar</div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <MdClose className="w-6 h-6 text-gray-700 transition duration-300 transform hover:scale-110" /> : <MdMenu className="w-6 h-6 text-gray-700 transition duration-300 transform hover:scale-110" />}
          </button>
        </div>
        <nav className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className={`text-gray-600 hover:text-black text-lg ${activeLink === "#home" ? 'active' : ''} block md:inline-block py-2 px-4 md:py-0 md:px-0 md:mt-0 md:ml-6 md:mr-0 transition duration-300`} onClick={() => handleLinkClick("#home")} >Home</a>
          <a href="#services" className={`text-gray-600 hover:text-black ${activeLink === "#services" ? 'active' : ''} block md:inline-block py-2 px-4 md:py-0 md:px-0 md:mt-0 md:ml-6 md:mr-0 transition duration-300`} onClick={() => handleLinkClick("#services")}>Find a doctor</a>
          <a href="#mobile-apps" className={`text-gray-600 hover:text-black ${activeLink === "#mobile-apps" ? 'active' : ''} block md:inline-block py-2 px-4 md:py-0 md:px-0 md:mt-0 md:ml-6 md:mr-0 transition duration-300`} onClick={() => handleLinkClick("#mobile-apps")}>Apps</a>
          <a href="#testimonials" className={`text-gray-600 hover:text-black ${activeLink === "#testimonials" ? 'active' : ''} block md:inline-block py-2 px-4 md:py-0 md:px-0 md:mt-0 md:ml-6 md:mr-0 transition duration-300`} onClick={() => handleLinkClick("#testimonials")}>Testimonials</a>
          <a href="#articles" className={`text-gray-600 hover:text-black ${activeLink === "#articles" ? 'active' : ''} block md:inline-block py-2 px-4 md:py-0 md:px-0 md:mt-0 md:ml-6 md:mr-0 transition duration-300`} onClick={() => handleLinkClick("#articles")}>About us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;