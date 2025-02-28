import React from 'react';

const Franchise = () => {
  return (
    <div className="bg-white  py-10 text-gray-700 mt-[-90px] ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center ml-[82px]">
        
        {/* Left Section - Text Content */}
        <div className="lg:w-3/5">
          {/* Header Section */}
          <h1 className="text-purple-600 text-3xl font-semibold">Franchise</h1>
          <p className="mt-2 text-gray-600">
            We seek partners who are willing to share our vision. QBS Franchise Program is unique as it goes beyond the prevalent notions of franchising.
            What we are looking for is not a franchisee but a partner.
          </p>
          <p className="mt-2 text-gray-600">
            We intend to enter into a symbiotic relationship with individuals who can adapt our philosophy and replicate our business. We are looking for more
            salons and currently accepting applications for new franchisees interested in multi-unit development opportunities in all tier cities.
          </p>

          {/* Subheading */}
          <h1 className="mt-6 text-purple-600 text-3xl font-semibold">Franchise</h1>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Salon design & interior decoration</li>
            <li>Comprehensive training for staff during start and ongoing basis</li>
            <li>POS / Billing Software</li>
            <li>Complete Operations support throughout the term of agreement</li>
          </ul>

          {/* Criteria Section */}
          <h1 className="mt-6 text-purple-600 text-3xl font-semibold">Criteria</h1>
          <p className="text-gray-600">
            We are on the lookout for aspiring entrepreneurs from all walks of life, who are filled with a passion & desire to excel in the rapidly growing beauty & 
            wellness industry. The candidate should be resourceful and should have a keen interest in promoting the brand in his/her capacity.
          </p>

          {/* Contact Section */}
          <div className="mt-6">
            <h1 className="text-3xl text-purple-600 font-semibold">
              Contact for Franchise: <span className="text-blue-600">+91 9963587387</span>
            </h1>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-end">
          <img 
            src="./assets/Franchise/undraw_business_shop_qw5t-min.png" // Replace with your actual image URL
            alt="Franchise"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="relative  h-40 md:h-52 lg:h-64 flex justify-center items-center bg-cover bg-center  h-[184px] mt-[45px] mb-8 w-[1349px] " 
        style={{ backgroundImage: "url('/assets/background.webp')" }}>

       

        {/* Text Content */}
        <div className="text-center text-white">
          <h2 className="text-lg md:text-4xl font-semibold">Own A Franchise</h2>
          <p className="text-sm md:text-lg">Leverage the future growth potential of the burgeoning beauty+wellness sector and realize <br></br>your dream of entrepreneurial success.</p>
        </div>

        {/* Appointment Button */}
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-700 transition mr-[140px]">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Franchise;
