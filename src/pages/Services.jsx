import React from 'react';
import SocialIcons from '../components/socialicons';
import { motion } from "framer-motion";

const services = [
  { name: "Nail Art", image: "/assets/services/nail.png" },
  { name: "Salon", image: "/assets/services/Salon.png" },
  { name: "Beauty", image: "/assets/services/Relax.png" },
  { name: "Stocked Cosmetic Store", image: "/assets/services/Cosmetics-free.png" },
  { name: "Makeup Artist", image: "/assets/services/mark.png" },
  { name: "Authorized Botox", image: "/assets/services/lips.png" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white mt-0 md:">
      {/* Header */}
      <div className="flex flex-col items-center p-4 md:p-6 bg-white mx-2 md:ml-[124px]">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 text-center mb-3 md:mb-4 ">
          Choose From Collection
        </h2>
        <p className="text-gray-800 text-center mb-6 md:mb-8 max-w-2xl text-sm md:text-base">
          When time is of the essence and you want your hair looking and feeling revitalized and healthy, our instant treatments will give that added boost.
        </p>

        {/* Services Grid - Always 2 columns on mobile, 3 columns on large screens */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-3 md:p-6 w-full max-w-[150px] sm:max-w-[180px] md:w-64 transition-transform transform hover:scale-105">
                {/* Applied better filter combination for purple color */}
                <div className="flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-full"
                    style={{ 
                      filter: "invert(27%) sepia(51%) saturate(2878%) hue-rotate(270deg) brightness(104%) contrast(97%)"
                    }}
                  />
                </div>
                <h3 className="text-purple-700 text-sm sm:text-base md:text-lg font-medium mt-2 md:mt-4 text-center">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SocialIcons />

      {/* Background Section */}
      <motion.section
        className="relative py-16 md:py-24 bg-fixed bg-cover bg-center w-full md:w-[118%] mx-auto md:mr-[-15%]"
        style={{
          backgroundImage: `url('/assets/background.webp')`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Discount Badge */}
          <img
            src="/assets/services/sale-badge.png"
            alt="25% OFF"
            className="w-14 h-14 md:w-20 md:h-20 absolute left-4 md:left-6 top-[-20px] md:top-1/2 md:transform md:-translate-y-1/2"
          />

          {/* Text + Button */}
          <div className="text-center text-white flex-1 mt-8 md:mt-0">
            <h2 className="text-xl md:text-2xl font-semibold">Book Your Appointment Now</h2>
            <p className="text-sm md:text-lg">Awesome Monsoon Sale</p>
          </div>

          <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-700 transition mt-4 md:mt-0 md:ml-8">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </motion.section>

      {/* Bridal Makeup Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white my-8 md:my-12 px-4">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/services/s2.jpg"
            alt="Bridal Makeup"
            className="rounded-2xl shadow-lg w-full max-w-[250px] md:max-w-[273px]"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-semibold text-purple-700 md:ml-[-90px]">
            The Best Bridal Makeup
          </h2>
          <p className="text-gray-800 mt-2 text-sm md:text-base">
            Personal & distinct looks created through intensive make-up trial sessions with experts. Unique skin and hair care.
          </p>

          <div className="mt-6 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
            <p className="text-base md:text-lg font-medium text-purple-700 cursor-pointer">
              Pre-Wedding Photo Shoot
            </p>
            <p className="text-base md:text-lg font-medium text-purple-700 cursor-pointer md:ml-[-83px]">
              The Engagement Day
            </p>
            <p className="text-base md:text-lg font-medium text-purple-700 cursor-pointer md:mt-[50px]">
              The Grand Wedding Day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;