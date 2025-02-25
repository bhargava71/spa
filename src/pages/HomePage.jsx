  import { useState, useEffect } from 'react';
  import { FaFacebookF, FaPinterest, FaLinkedinIn } from "react-icons/fa";

  const HomePage = () => {
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowSocialMedia(true);
        } else {
          setShowSocialMedia(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const services = [
      {
        title: "Wedding Makeup",
        description:
          "Bridal makeup is an essential part of the wedding planning process and designing the perfect look for your wedding day is my number one priority.",
        image: "/assets/homepage/wedding.svg", // Adding the image as part of the service
      },
      {
        title: "Party Makeup",
        description:
          "Getting ready for a fancy party isn't just about the dress and hair -- your makeup is one of the key components to achieving your fancy look.",
        image: "/assets/homepage/drinks.svg", // Repeating the same image path as an example
      },
      {
        title: "Fashion Makeup",
        description:
          "Makeup for fashion settings is usually designed to be high impact, and is meant to show the model and the design being modeled to the best effect.",
        image: "/assets/homepage/comb.svg", // Repeating the same image path as an example
      },
      {
        title: "Photo-Shoot",
        description:
          "Cosmetics such as lipstick or powder applied to the face, used to enhance or alter the appearance for best photo shoot.",
        image: "/assets/homepage/photo.svg", // Repeating the same image path as an example
      },
    ];

    return (
      <div>
        {/* Main Content Section */}
        <div className="bg-white min-h-screen flex flex-col ">
          {/* Floating Social Media Icons */}
          {showSocialMedia && (
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
              <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
                <FaPinterest />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600">
                <FaLinkedinIn />
              </a>
            </div>
          )}

          {/* Main Content Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12 mt-20 ml-24">
            {/* Image Layout */}
            <div className="relative flex gap-2 mb-6 md:mb-0">
  <img
    src="/assets/homepage/w1.jpg"
    alt="Bridal Look"
    className="w-32 h-96 object-cover relative -top-8 border-4 border-transparent hover:border-[#933EA] transition-all"
  />
  <img
    src="/assets/homepage/w2.jpg"
    alt="Bridal Jewelry"
    className="w-32 h-96 object-cover relative top-8 border-4 border-transparent hover:border-[#933EA] transition-all"
  />
  <img
    src="/assets/homepage/w3.jpeg"
    alt="Bridal Look"
    className="w-32 h-96 object-cover relative -top-8 border-4 border-transparent hover:border-[#933EA] transition-all"
  />
  <img
    src="/assets/homepage/w4.jpg"
    alt="Bridal Jewelry"
    className="w-32 h-96 object-cover relative top-8 border-4 border-transparent hover:border-[#933EA] transition-all"
  />
</div>




            {/* Text Content */}
            <div className="text-center md:text-left md:ml-12 max-w-md">
              <p className="text-purple-600 font-semibold">Welcome To</p>
              <h1 className="text-3xl font-bold text-purple-700">QBS Salon</h1>
              <p className="mt-4 text-gray-700">
                Our beauty experts are armed with ultramodern equipment, world-class products, and unmatched skill,
                setting our beauty services apart from the rest.
              </p>
              <button className="mt-6 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-100 py-12 ml-[100px]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-purple-600">
        Services For Every Occasion
      </h2>
      <p className="text-gray-600 mt-2">
        Look and feel your best. Experience the finest beauty and wellness services.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200"
        >
          {/* Displaying the SVG icon and applying the color */}
          <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 object-cover fill-[#933EA]"
            />
          </div>
          <h3 className="text-xl font-semibold text-purple-700">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </div>

  <div
  className="relative bg-cover bg-center h-[300px] flex items-center justify-center mr-[-96px]"
  style={{
    backgroundImage: `url('/assets/background.webp')`, // Replace with your actual image path
    backgroundSize: 'cover', // Ensure the image covers the area
    backgroundPosition: 'center', // Keep the image centered
    backgroundRepeat: 'no-repeat', // Prevent image repetition
    backgroundAttachment: 'fixed', // Optional: Fix the image during scroll for parallax effect
  }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}

  <div className="relative text-white px-6 flex justify-between items-center">
    <div className="max-w-lg">
      <h2 className="text-3xl font-bold">Own A Franchise</h2>
      <p className="mt-2">
        Leverage the future growth potential of the burgeoning beauty + wellness sector and
        realize your dream of entrepreneurial success.
      </p>
    </div>
    <button className="mt-4 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
      CONTACT US
    </button>
  </div>
</div>


<div className="bg-white">
      {/* Header Section */}
      <div className="flex justify-center items-center py-12">
        <div className="bg-white shadow-lg p-8 rounded-lg text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-purple-600">QBS Salon</h2>
          <p className="text-purple-500 mt-2">
            Come join the QBS family and begin your journey to the heights of
            business success.
          </p>
        </div>
      </div>
      </div>


      </div>
    );
  };

  export default HomePage;
