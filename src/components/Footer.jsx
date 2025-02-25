import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Description (Logo above paragraph) */}
          <div className="flex flex-col items-center space-y-4"> {/* Keep flex-col for vertical stacking */}
            <img src="/assets/logo.webp" alt="Logo" className="h-[6rem] w-[8rem] ml-[-12rem]" /> {/* Added ml-4 to move logo left */}
            <p className="text-gray-400 text-center">
              We understand the importance of appearance and well-being. We are in the business of helping you experience the bountiful benefits of professional grooming.
            </p>
          </div>

          {/* Right Section - Contact Info (Positioned Right) */}
          <div className="absolute bottom-8 right-8 text-left space-y-4 mb-24"> {/* Added mt-2 to add some margin-top */}
  <h3 className="text-purple-500 font-semibold text-lg">Say Hi!</h3>
  <p className="text-gray-300">info@qbssalon.com</p>
  <h3 className="text-purple-500 font-semibold text-lg">Call Us</h3>
  <p className="text-gray-300">Phone: +91 98486 09996</p>
</div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Qbs &nbsp; Powered by <a href="#" className="text-purple-500">Twin Front</a>
          </p>
        </div>
      </div>

      {/* Contact Button - Bottom Right */}
      <button className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
        <span className="mr-2">Contact Us</span>
        {/* Replaced the arrow icon with a phone icon */}
        <FaPhoneAlt className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
