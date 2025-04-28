import { FaPhone, FaEnvelope, FaAward, FaUsers, FaCut } from 'react-icons/fa';
import { GiHairStrands } from 'react-icons/gi';
import SocialIcons from '../components/socialicons';

const About = () => {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Hero Section */}
     

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <img
                src="./assets/about/about1.jpg"
                alt="BK SPA Salon Studio"
                className="w-full max-w-lg aspect-[4/5] object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <GiHairStrands className="text-purple-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Since</p>
                    <p className="text-2xl font-bold text-purple-700">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl">
              <span className="text-purple-600 font-semibold mb-2 inline-block">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Redefining Beauty Standards in Andhra Pradesh</h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in the heart of Narasaraopet, <strong className="text-purple-700">BK SPA </strong> has grown from a single chair establishment to becoming the region's most trusted name in professional grooming. Our philosophy revolves around three core principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <FaCut className="text-purple-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-900">Precision</h3>
                  <p className="text-sm text-gray-600">Artistic craftsmanship in every cut</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <FaUsers className="text-purple-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-900">Community</h3>
                  <p className="text-sm text-gray-600">Building lasting relationships</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <FaAward className="text-purple-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-sm text-gray-600">Award-winning services</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe your hair makes the first impression before eye contact. That's why we combine traditional techniques with modern trends to create looks that enhance your natural beauty and boost your confidence.
              </p>

              {/* Founder Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Meet Our Founder</h3>
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-700">CK</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">K. Priyanika</h4>
                    <p className="text-gray-600 mb-3">Master Stylist & Founder</p>
                    <div className="flex items-center text-gray-600 mb-1">
                      <FaPhone className="mr-2 text-purple-600" />
                      <span>+91 9392867609</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-purple-600" />
                      <span>bkspa23@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-700 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-700 mb-2">2K+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-700 mb-2">7+</div>
              <div className="text-gray-600">Professional Staff</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-700 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-xl flex items-center transition-all duration-300 transform hover:scale-105 z-50"
        aria-label="Contact Us"
      >
        <span className="mr-2 font-medium">Book Now</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21l-6-6m0 0l6-6m-6 6h18" />
        </svg>
      </button>
    </div>
  );
};

export default About;