import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center gap-8  bg-white">
      
      {/* First Row - Two Images */}
      <div className="flex justify-center gap-6 w-full">
        {/* First Image */}
        <div className="w-80 h-52 rounded-lg overflow-hidden shadow-lg ml-[210px]">
          <img
            src="/assets/gallery/g1.jpg"
            alt="Student Discount Offer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="w-80 h-52 rounded-lg overflow-hidden shadow-lg ml-[155px]">
          <img
            src="/assets/gallery/g2.jpg"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second Row - Background Image Section */}
      <div className="relative  h-40 md:h-52 lg:h-64 flex justify-center items-center bg-cover bg-center w-[109%] h-[184px] mt-[45px]  w-[1349px]" 
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

    </div>
  );
};

export default Gallery;
