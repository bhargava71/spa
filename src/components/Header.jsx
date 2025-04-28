import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) =>
    currentPath === path
      ? "bg-pink-500 text-white shadow-md"
      : "text-gray-300 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setNavbarVisible(window.scrollY < lastScrollY);
        setLastScrollY(window.scrollY);
      }
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderFloatingFlowers = () => {
    const flowerSymbols = ["✿", "❀", "❁", "✾", "❃", "❋", "✽", "✺", "❇", "❈", "✤", "✻"];
    const flowers = [];
    for (let i = 0; i < 30; i++) {
      const randomFlower = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
      const left = `${Math.random() * 90 + 5}%`;
      const top = `${Math.random() * 80 + 10}%`;
      const animationDuration = `${Math.random() * 12 + 8}s`;
      const delay = `${Math.random() * 6}s`;
      const size = `${Math.random() * 1.8 + 0.8}rem`;
      const opacity = Math.random() * 0.4 + 0.2;
      const zIndex = Math.floor(Math.random() * 20) + 10;
      const translateZ = Math.floor(Math.random() * 80) - 40;
      const rotateX = Math.floor(Math.random() * 360);
      const rotateY = Math.floor(Math.random() * 360);
      const blur = Math.random() * 2;
      flowers.push(
        <div
          key={i}
          className="absolute text-purple-200"
          style={{
            left,
            top,
            fontSize: size,
            opacity,
            zIndex,
            animation: `float3D ${animationDuration} ease-in-out ${delay} infinite`,
            transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            filter: `blur(${blur}px)`,
            textShadow: "0 0 5px rgba(221, 214, 254, 0.7)",
          }}
        >
          {randomFlower}
        </div>
      );
    }
    return flowers;
  };

  const renderCornerFlowers = () => {
    const positions = [
      "top-0 left-0 transform rotate-45",
      "top-0 right-0 transform -rotate-45",
      "bottom-0 left-0 transform -rotate-45",
      "bottom-0 right-0 transform rotate-45"
    ];

    return positions.map((position, index) => (
      <div
        key={`corner-${index}`}
        className={`absolute ${position} z-20 opacity-80 perspective-corner`}
        style={{
          transform: `${position.includes("rotate") ? position.split("transform ")[1] : ""} translateZ(20px)`,
          transformStyle: "preserve-3d",
          animation: `pulse3D 4s ease-in-out ${index * 0.5}s infinite`
        }}
      >
        <div className="text-pink-300 text-4xl transform-gpu" style={{ textShadow: "0 0 10px rgba(244, 114, 182, 0.8)" }}>❁</div>
        <div className="text-purple-300 text-3xl -mt-2 ml-4 transform-gpu" style={{ transform: "translateZ(15px)", textShadow: "0 0 8px rgba(168, 85, 247, 0.8)" }}>✿</div>
        <div className="text-indigo-300 text-2xl -mt-1 ml-1 transform-gpu" style={{ transform: "translateZ(30px)", textShadow: "0 0 12px rgba(129, 140, 248, 0.8)" }}>❋</div>
      </div>
    ));
  };

  // Function to get title based on current path
  const getTitle = (path) => {
    switch (path) {
      case "/": return "Welcome to Our Sanctuary";
      case "/about": return "Our Story";
      case "/services": return "Our Offerings";
      case "/gallery": return "Moments of Bliss";
      case "/contact": return "Connect With Us";
      default: return "Welcome";
    }
  };

  // Function to get subtitle based on current path
  const getSubtitle = (path) => {
    switch (path) {
      case "/": return "Discover peace and harmony in our sacred space";
      case "/about": return "Learn about our journey and philosophy";
      case "/services": return "Explore our healing services and treatments";
      case "/gallery": return "Witness the beauty of our sanctuary";
      case "/contact": return "We'd love to hear from you";
      default: return "Find your inner peace";
    }
  };

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className={`relative bg-cover flex items-center justify-center text-white transition-all duration-300 overflow-hidden h-[400px] md:h-[500px]`}
        style={{
          backgroundImage: "url('./assets/home1.avif')", // Corrected file extension here
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/40 to-indigo-900/40"></div>
        <div className="absolute inset-0">{renderFloatingFlowers()}</div>
        {renderCornerFlowers()}
      </div>


      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full text-white z-50 px-4 md:px-16 py-2 transition-all duration-300 ${navbarVisible ? "" : "transform -translate-y-full"
          } ${scrolled ? "bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-85 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex-shrink-0" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-12 md:h-24 w-auto filter drop-shadow-lg"
              style={{ transition: "transform 0.3s ease" }}
            />
          </div>
          <ul className="hidden md:flex text-lg font-philosopher space-x-2" style={{ perspective: "600px" }}>
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={path}>
                <a
                  href={path}
                  className={`${isActive(path)} hover:bg-pink-400 cursor-pointer px-4 py-2 rounded-md transition-all duration-300`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-2xl text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-purple-900 to-indigo-900 bg-opacity-95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
            }`}
          style={{
            height: mobileMenuOpen ? "calc(100vh - 4rem)" : "0",
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-2">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([path, label], index) => (
              <li
                key={path}
                className="w-full text-center"
                style={{
                  transform: `translateZ(${index * 5}px)`,
                  transition: `transform 0.3s ease ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`,
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                <a
                  href={path}
                  className={`${isActive(path)} block w-11/12 mx-auto py-3 px-4 rounded-md transition-colors duration-300 hover:bg-pink-600`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Title Section */}
      <div
        className="absolute top-[35%] left-[5%] md:left-[10%] z-20 text-white max-w-[85%] md:max-w-lg font-philosopher px-4"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
          transform: "translateZ(30px)",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <h1
          className="text-3xl md:text-5xl font-bold mt-2 text-purple-200"
          style={{
            textShadow: "0 0 15px rgba(233, 213, 255, 0.8), 0 10px 20px rgba(139, 92, 246, 0.4)",
            transform: "translateZ(40px)",
            animation: "titlePulse 4s ease-in-out infinite",
          }}
        >
          {getTitle(currentPath)}
        </h1>

        <p
          className="text-sm md:text-lg mt-4"
          style={{
            textShadow: "0 5px 10px rgba(233, 213, 255, 0.6)",
            transform: "translateZ(20px)",
          }}
        >
          {getSubtitle(currentPath)}
        </p>
      </div>
    </div>
  );
};

export default Header;