import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="absolute top-6 right-12 h-[64px] w-[846px] bg-yellow-400 shadow-md z-10 rounded-sm flex items-center">
      <div className="flex items-center justify-between w-full max-w-4xl m-auto px-10 py-2">
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-noto text-black font-medium">
          <a href="#shop" className="hover:text-gray-800">
            Shop
          </a>
          <a href="#activities" className="hover:text-gray-800">
            Activities
          </a>
          <a href="#explore" className="hover:text-gray-800">
            Explore
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-10 px-2">
          <Search
            strokeWidth={1}
            className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
          />
          <div className="relative">
            <ShoppingCart
              strokeWidth={1}
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
            />
            {/* Notification badge */}
            {/* <div className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              1
            </div> */}
          </div>
          <User
            strokeWidth={1}
            className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
