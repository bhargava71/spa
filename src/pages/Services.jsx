import React from 'react';
import Header1 from '../components/Header1'; // Ensure this path is correct

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
    <div className="min-h-screen bg-white mt-[-73px]">

      {/* Main Section */}
      <div className="flex flex-col items-center p-6 bg-white">
        <h2 className="text-3xl font-semibold text-purple-700 text-center mb-4 ml-[100px]">  {/* Decreased the left margin */}
          Choose From Collection
        </h2>
        <p className="text-gray-600 text-center mb-8 mx-auto ml-[105px]"> {/* Decreased the left margin */}
          When time is of the essence and you want your hair looking and feeling revitalized and healthy, our instant treatments will give that added boost.
        </p>

        {/* Centered grid of services */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-64 transition-transform transform hover:scale-105">
                <img src={service.image} alt={service.name} className="w-20 h-20 object-cover rounded-full" />
                <h3 className="text-purple-700 text-lg font-medium mt-4">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative  h-40 md:h-52 lg:h-64 flex justify-center items-center bg-cover bg-center w-[109%] h-[184px] mt-[45px] mb-[100px] w-[1349px]" 
        style={{ backgroundImage: "url('/assets/background.webp')" }}>

        {/* Discount Badge */}
        <img 
          src="/assets/services/sale-badge.png" 
          alt="25% OFF" 
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 ml-[174px]"
        />

        {/* Text Content */}
        <div className="text-center text-white">
          <h2 className="text-lg md:text-2xl font-semibold">Book Your Appointment Now</h2>
          <p className="text-sm md:text-lg">Awesome Monsoon Sale</p>
        </div>

        {/* Appointment Button */}
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-700 transition mr-[140px]">
          BOOK AN APPOINTMENT
        </button>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white mb-[50px]">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/assets/services/s2.jpg" 
            alt="Bridal Makeup" 
            className="rounded-2xl shadow-lg w-full md:w-[273px]"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 md:pl-10 text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 ml-[-90px]">  {/* Added negative margin to shift left */}
  The Best Bridal Makeup
</h2>
<p className="text-gray-600 mt-2 ml-[-90px]">
  Personal & distinct looks created through intensive make-up trial sessions with experts. 
  Unique skin and hair care.
</p>

          {/* List of Wedding Events with Proper Spacing */}
          <div className="mt-6">
            <p className="text-lg font-medium text-purple-700 cursor-pointer mb-[50px]">
              Pre-Wedding Photo Shoot
            </p>
            <p className="text-lg font-medium text-purple-700 cursor-pointer mt-[50px] ml-[-83px]">
              The Engagement Day
            </p>
            <p className="text-lg font-medium text-purple-700 cursor-pointer mt-[50px]">
              The Grand Wedding Day
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;
