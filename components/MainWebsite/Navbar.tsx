"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";
import ExampleComponent from "./ExampleComponent";
import ExampleComponent2 from "./ExampleComponent2";
import ExampleComponent3 from "./ExampleComponent3";
import { navLinks, NavLinkContent } from "@/lib/links";

const Navbar = () => {
  const [currentContent, setCurrentContent] = useState<NavLinkContent[]>([]);
  const [hoveredContent, setHoveredContent] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isLinkDropdownOpen, setIsLinkDropdownOpen] = useState(false);

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 10,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, when: "afterChildren" },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    closed: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  };

  const handleLinkHover = (linkContent: NavLinkContent[]) => {
    setCurrentContent(linkContent);
    setIsLinkDropdownOpen(true);
    setHoveredIcon(null); // Close icon content when hovering over links
  };

  const handleIconHover = (iconName: string) => {
    setHoveredIcon(iconName);
    setIsLinkDropdownOpen(false); // Close link content when hovering over icons
  };

  const handleDropdownMouseLeave = () => {
    setIsLinkDropdownOpen(false);
    setHoveredIcon(null);
  };

  return (
    <div className="absolute top-6 right-12 h-[64px] w-[846px] bg-yellow-400 shadow-lg z-10 rounded-sm flex items-center group/content">
      <div className="flex items-center justify-between w-full max-w-4xl m-auto px-10 py-2 relative group/navlinks">
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-noto text-black font-medium group/innerContent">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleLinkHover(link.content)}
            >
              <a
                href={link.href}
                className="hover:text-gray-800 hover:underline hover:underline-offset-4 duration-300"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Dropdown Box */}
        <motion.div
          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-y-auto p-6 opacity-0 invisible group-hover/navlinks:opacity-100 group-hover/navlinks:visible group-hover/content:opacity-100 group-hover/content:visible group-hover/innerContent:opacity-100 group-hover/innerContent:visible transition-opacity duration-300"
          style={{ height: "40rem" }} // Fixed height with scroll
          variants={dropdownVariants}
          initial="closed"
          animate={hoveredIcon || isLinkDropdownOpen ? "open" : "closed"}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {/* Conditionally render dropdown menu or specific icon component based on hover state */}
          {isLinkDropdownOpen && !hoveredIcon ? (
            <ul className="space-y-4">
              {currentContent.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onMouseEnter={() => setHoveredContent(item.name)}
                  className="relative group/contentLink"
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 text-3xl relative "
                  >
                    {/* Horizontal line on hover */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 -w-[120%] bg-black transition-all duration-600 group-hover/contentLink:w-8 group-hover/contentLink:h-[2px]"></span>
                    <span className="inline-block transform transition-transform duration-300 group-hover/contentLink:translate-x-10">
                      {item.name}
                    </span>
                  </a>

                  {/* Render innerContent if available and if this item is being hovered */}
                  {item.innerContent && hoveredContent === item.name && (
                    <motion.ul
                      className="pl-4 mt-2 space-y-2 pb-3"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      {item.innerContent.map((innerItem) => (
                        <motion.li
                          key={innerItem.name}
                          variants={itemVariants}
                          className="relative overflow-hidden group/innerContentLink pl-3"
                        >
                          <a
                            href={innerItem.href}
                            className="text-black text-lg inline-block px-2 py-1 transition-colors duration-300 relative z-10"
                          >
                            <span className="absolute inset-0 bg-yellow-400 transform -translate-x-[120%] group-hover/innerContentLink:translate-x-0 transition-transform duration-300 z-[-10] ease-out"></span>
                            {innerItem.name}
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.li>
              ))}
            </ul>
          ) : hoveredIcon === "search" ? (
            <ExampleComponent />
          ) : hoveredIcon === "cart" ? (
            <ExampleComponent2 />
          ) : hoveredIcon === "user" ? (
            <ExampleComponent3 />
          ) : null}
        </motion.div>

        {/* Icons */}
        <div className="flex items-center space-x-10 px-2">
          <div
            className="relative"
            onMouseEnter={() => handleIconHover("search")}
          >
            <Search
              strokeWidth={1}
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
            />
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleIconHover("cart")}
          >
            <ShoppingCart
              strokeWidth={1}
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
            />
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleIconHover("user")}
          >
            <User
              strokeWidth={1}
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
