import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Import the FaBars icon for mobile menu

const Header1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [navbarVisible, setNavbarVisible] = useState(true); // Track navbar visibility

  // Monitor the scroll position to change the navbar style and background
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down or up
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setNavbarVisible(false); // Hide navbar when scrolling down
      } else {
        // Scrolling up
        setNavbarVisible(true); // Show navbar when scrolling up
      }

      // Update last scroll position
      setLastScrollY(window.scrollY);

      // Toggle background and navbar on scroll
      if (window.scrollY > 0) {
        setScrolled(true); // Background disappears after scrolling
      } else {
        setScrolled(false); // Reset navbar to original state when at the top
      }
    };

    // Attach the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* Header Background Image with Black Overlay */}
      <div
        className={`relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-white transition-all duration-300 ${
          scrolled ? "opacity-100" : "" // Keep the image fully visible even on scroll
        }`}
        style={{
          backgroundImage: "url('./assets/background2.jpg')", // Directly set background image
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent black overlay */}

        {/* About Us Text on Background */}
        <div className="absolute text-center text-white z-10">
          <h4 className="text-4xl font-bold mb-4">About QBS</h4>
          <p className="text-lg max-w-2xl mx-auto">
          </p>
        </div>

        {/* Curved Bottom SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full text-white flex items-center justify-between px-[64px] py-2 z-10 transition-all duration-300 ${
          navbarVisible ? "" : "transform -translate-y-full" // Hide navbar when scrolling down
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.webp" alt="Logo" className="h-[6rem] w-[8rem]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg space-x-0 font-philosopher" style={{ marginRight: '173px' }}>
          <li className="bg-purple-600 text-white px-3 py-4">Home</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">About</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Training Academy</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Services</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Gallery</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Locator</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Franchise</li>
          <li className="bg-black text-gray-300 hover:text-white cursor-pointer px-3 py-4">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer">
          <FaBars />
        </div>
      </nav>
    </div>
  );
};

export default Header1;
