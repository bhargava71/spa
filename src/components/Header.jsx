import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full h-[60px] z-40 top-0 left-0 bg-blue-200 p-4 flex items-center justify-between px-6">
   
    <h1 className="text-lg font-semibold mx-auto">QBS</h1>
  
   
    <div className="flex items-center gap-2">
      <img 
        src="/images/logo.png" 
        alt="Profile" 
        className="w-10 h-10 rounded-full"
      />
      <span className="font-medium">John Doe</span>
    </div>
  </div>
  
  );
};

export default Header;
