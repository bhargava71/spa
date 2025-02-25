import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
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
          scrolled ? "opacity-100" : ""
        }`}
        style={{
          backgroundImage: "url('/assets/homepage/main.jpg')", // Your background image
          backgroundPosition: "right -228px bottom -260px",
          backgroundSize: "120%",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full text-white flex items-center justify-between px-[64px] py-2 z-10 transition-all duration-300 ${
            navbarVisible ? "" : "transform -translate-y-full"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img src="/assets/logo.webp" alt="Logo" className="h-[6rem] w-[8rem]" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg space-x-0 font-philosopher" style={{ marginRight: "173px" }}>
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

      {/* Text Content */}
      <div className="absolute top-[35%] left-[10%] z-10 text-white max-w-lg font-philosopher">
        <h2 className="text-xl uppercase font-semibold text-purple-600">Welcome To</h2>
        <h1 className="text-5xl font-bold mt-2 text-purple-600">QBS Salon</h1>
        <p className="text-lg mt-4">
          QBS Salon Hair and Beauty, Make-up studio was established in 2016. It is now one of the biggest salon chains growing in India. We are looking for QBS Salon franchise and master franchisees in India, Malaysia, Maldives, and Sri Lanka.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            OWN A FRANCHISE
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            CONTACT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
