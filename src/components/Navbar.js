import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Bengali",
    "Gujarati",
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Flag and Government details */}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="India Flag"
              className="w-10 h-6 mr-2 ml-2"
            />
            <div className="text-white">
              <span className="text-lg font-semibold">GOVERNMENT OF INDIA</span>
            </div>
          </div>

          {/* Language Switcher and Sign In */}
          <div className="text-white flex items-center space-x-4 relative">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-white text-pink-500 rounded-full px-4 py-1"
              >
                {language}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-white text-black rounded-md shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => selectLanguage(lang)}
                      className="block w-full text-left px-4 py-2 hover:bg-pink-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/login">
              <button className="bg-white text-pink-500 rounded-full px-4 py-1">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <img src="/logo192.png" alt="Indian Emblem" className="w-10 h-10 rounded-full mx-2 pd-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-700">my GOV</span>
              <span className="text-xs text-gray-500">मेरी सरकार</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-gray-700">
            {/* Add Home Link */}
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            <a href="#" className="hover:text-orange-500">
              Activities
            </a>
            <a href="#" className="hover:text-orange-500">
              MyGov States
            </a>
            <a href="#" className="hover:text-orange-500">
              Help/Feedback
            </a>
            <Link to="/contact" className="hover:text-orange-500">
              Contact Us
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
          </div>

          {/* Search Icon and User Icon */}
          <div className="flex space-x-4 items-center">
            <button className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
                ></path>
              </svg>
            </button>
            <button className="text-gray-700">
              <svg
                className="w-8 h-8 rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
