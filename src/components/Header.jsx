import React from "react";

function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div className="flex items-center ">
          
          
          <span className="text-2xl font-bold  italic  ml-10">Instagram</span>
          
        </div>
        
        
        <div className="flex items-center">
          <button className="text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-5">
            Login
          </button>
          <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-8">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
