import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { BiSolidMessage } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to make Navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full  bg-[#148F50] p-4 shadow-md flex items-center justify-between z-200 transition-all ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      {/* Left: Logo & Search Bar */}
      <div className="flex items-center gap-4 md:gap-8">
        <img src={logo} alt="Logo" className="h-12 md:h-16" />

        {/* Search Bar (Hidden on mobile) */}
        <input
          type="search"
          className="hidden md:block ml-24 w-56 p-2 rounded-md bg-[#FFFFFF4F] text-white border outline-none placeholder-white"
          placeholder="Search..."
        />
      </div>

      {/* Mobile Profile Button */}
      <button
        className="md:hidden text-white mr-9 profile-dropdown"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgProfile className="text-2xl" />
      </button>

      {/* Desktop Profile Info */}
      <div className="hidden md:flex items-center space-x-4 md:mr-10">
        <div className="flex items-center space-x-4">
          <BiSolidMessage className="text-[#148F50] text-3xl bg-white p-2 rounded-full" />
          <div className="flex items-center rounded-xl px-2 gap-2 bg-gradient-to-l from-[#6E5C4200] to-[#1DB768] text-white">
            <IoNotifications className="text-white" /> 14
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg font-bold">
          S
        </div>
        <span className="text-lg font-medium text-white">Sushmita</span>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white p-4 w-48 rounded-lg shadow-lg flex flex-col items-center space-y-4 md:hidden profile-dropdown">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg font-bold">
            S
          </div>
          <span className="text-lg font-medium text-gray-800">Sushmita</span>
          <div className="flex space-x-4">
            <BiSolidMessage className="text-[#148F50] text-2xl bg-gray-200 p-2 rounded-full" />
            <div className="relative">
              <IoNotifications className="text-[#148F50] text-2xl bg-gray-200 p-2 rounded-full" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                14
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
