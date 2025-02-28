import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa"; // Importing icons
const socialicons = () => {
  return (
    <div>
      {/* Social Media Floating Buttons */}
            <div className="fixed left-4 top-1/3 flex flex-col space-y-3 z-50">
              <button className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaFacebookF />
              </button>
              <button className="bg-black text-white p-3 rounded-full shadow-md">
                <FaTwitter />
              </button>
              <button className="bg-red-600 text-white p-3 rounded-full shadow-md">
                <FaPinterestP />
              </button>
              <button className="bg-blue-700 text-white p-3 rounded-full shadow-md">
                <FaLinkedinIn />
              </button>
            </div>
      
    </div>
  )
}

export default socialicons
