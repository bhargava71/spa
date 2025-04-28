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
      ? "bg-purple-600 text-white"
      : "text-gray-300 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) { // Only apply scroll behavior on desktop
        setNavbarVisible(window.scrollY < lastScrollY);
        setLastScrollY(window.scrollY);
      }
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const getTitle = (path) => {
    if (path === "/") return "QBS Salon";
    const title = path.replace("/", "").replaceAll("-", " ");
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const getSubtitle = (path) => {
    if (path === "/") {
      return "QBS Salon Hair and Beauty, Make-up studio was established in 2016. It is now one of the biggest salon chains growing in India. We are looking for QBS Salon franchise and master franchisees in India, Malaysia, Maldives, and Sri Lanka.";
    }
    return `Welcome to our ${getTitle(path)} page.`;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Background images for different pages
  const getBackgroundImage = (path) => {
    switch (path) {
      case "/services":
        return "/assets/services/service.jpg";
      case "/gallery":
        return "/assets/gallery/gallery.avif";
      case "/contact":
        return "/assets/contact/contact.avif";
      case "/about":
        return "/assets/about/aboutus.avif";
      default:
        return "/assets/home1.avif"; // use your homepage image
    }
  };
  

  const backgroundImage = getBackgroundImage(currentPath);

  return (
    <div className="relative">
      {/* Header Background */}
      <div
        className={`relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-white transition-all duration-300 ${
          scrolled ? "opacity-100" : ""
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          ...(!scrolled && {
            '@media (max-width: 768px)': {
              backgroundPosition: 'center top',
            }
          })
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full text-white z-50 px-4 md:px-16 py-2 transition-all duration-300 ${
            navbarVisible ? "" : "transform -translate-y-full"
          } ${scrolled ? "bg-black bg-opacity-90" : "bg-transparent"}`}
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-16 md:h-24 w-auto"
              />
            </div>

            {/* Desktop Nav Menu */}
            <ul className="hidden md:flex text-lg font-philosopher space-x-2">
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
                    className={`${isActive(path)} hover:bg-purple-700 cursor-pointer px-4 py-2 rounded-md transition-colors`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 w-full bg-black bg-opacity-95 transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col items-center space-y-4">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([path, label]) => (
                <li key={path} className="w-full text-center">
                  <a
                    href={path}
                    className={`${isActive(path)} block w-full py-3 px-4 rounded-md transition-colors`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Banner Content */}
      <div className="absolute top-[35%] left-[5%] md:left-[10%] z-10 text-white max-w-md md:max-w-lg font-philosopher px-4">
        <h2 className="text-xl uppercase font-semibold text-purple-400">
          {currentPath === "/" ? "Welcome To" : ""}
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-purple-400">
          {getTitle(currentPath)}
        </h1>
        <p className="text-base md:text-lg mt-4">{getSubtitle(currentPath)}</p>
      </div>
    </div>
  );
};

export default Header;