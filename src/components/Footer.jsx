import { 
  FaFacebookF, 
  FaTwitter, 
  FaPinterest, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(233, 213, 255, 0.8)" }} className="text-gray-800 pt-12 pb-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Information */}
          <div className="flex flex-col items-start space-y-4">
            <img 
              src="/assets/logo.png" 
              alt="QBS Salon Logo" 
              className="h-24 w-auto object-contain"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              We understand the importance of appearance and well-being. 
              We're dedicated to helping you experience the bountiful 
              benefits of professional grooming.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <FaPinterest className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white-700 font-semibold text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white-700 font-semibold text-lg uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-700 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">BK SPA, Narasaraopet, Andhrapradesh, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-purple-700" />
                <p className="text-gray-700 text-sm">+91 9392867609</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-700" />
                <p className="text-gray-700 text-sm">bkspa23@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white-700 font-semibold text-lg uppercase tracking-wider">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700 text-sm">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm">
                <span>Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm">
                <span>Sunday</span>
                <span>11:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="pt-4">
              <a href="./Contact.jsx">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                Book an Appointment
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-purple-300 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm text-center md:text-left">
              Copyright © {new Date().getFullYear()} BK SPA. All rights reserved.
            </p>
            <p className="text-gray-700 text-sm mt-2 md:mt-0">
              Powered by <a href="#" className="text-purple-700 hover:underline">Twin Front</a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <button className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-xl flex items-center justify-center z-50 transition-all transform hover:scale-110">
        <FaPhoneAlt className="w-5 h-5" />
        <span className="sr-only">Contact Us</span>
      </button>
    </footer>
  );
};

export default Footer;