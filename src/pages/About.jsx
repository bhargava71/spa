import { useState, useEffect } from 'react';
import { FaFacebookF, FaXTwitter, FaPinterest, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

const About = () => {
  // State to control visibility of social media icons
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 200) { // You can change this threshold as needed
        setShowSocialMedia(true);
      } else {
        setShowSocialMedia(false);
      }
    };

    // Attach the event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen mt-[-99px] mb-[-134px]">
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-full flex justify-center">
          <img
            src="./assets/about/about1.jpg"
            alt="About QBS"
            className="max-w-[45%] h-auto rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600">It's All About QBS Story</h2>
          <p className="text-lg text-purple-500 font-semibold mt-2">
            “QBS makes your Hair contact before Eye contact”
          </p>
          <p className="text-gray-700 mt-4">
            Our story dated back to our first store in Vijayawada, known as the economic capital of Andhra Pradesh.
            Operating under the name **QBS SALON**, we have remained faithful to our core values:
            **Charm, Performance, and Continuance.**
          </p>
          <p className="text-gray-700 mt-4">
            Nurturing a highly intimate relationship with our customers, we adapt to the latest trends and feedback,
            ensuring the best grooming experience.
          </p>

          {/* Contact Information */}
          <div className="mt-6">
            <h3 className="text-xl text-purple-500 font-semibold">K Suresh</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <FaPhone className="mr-2 text-purple-500" />
              <span>+91 98486 09996</span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
              <FaEnvelope className="mr-2 text-purple-500" />
              <span>info@qbssalon.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Social Media Icons (Left Side) */}
      {showSocialMedia && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
          <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
            <FaXTwitter />
          </a>
          <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
            <FaPinterest />
          </a>
          <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
            <FaLinkedinIn />
          </a>
        </div>
      )}

      {/* Contact Button - Bottom Right */}
      <button className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
        <span className="mr-2">Contact Us</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21l-6-6m0 0l6-6m-6 6h18" />
        </svg>
      </button>
    </div>
  );
};

export default About;
