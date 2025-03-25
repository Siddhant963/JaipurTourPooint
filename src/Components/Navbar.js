"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const togglePackages = () => {
    setIsPackagesOpen(!isPackagesOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const onLoginClick = () => {
    // Handle login button click
    console.log("Login button clicked");
  };

  return (
    <header className="shadow-md w-full">
      <div className="mx-auto flex items-center justify-between p-4 w-screen text-3xl">
        {/* Menu Bar (Mobile) */}
        <div
          id="menu-bar"
          className="fas fa-bars text-2xl cursor-pointer md:hidden"
          onClick={toggleNav}
        ></div>

        {/* Logo */}
    
        <a href="/" className="text-3xl font-bold text-white flex items-center gap-2">
        <img src="./favicon.png" className="w-15 h-15" />
          Jaipur<span className="text-yellow-500">TOur</span>Point
        </a>

        {/* Navbar Links */}
        <nav
          className={`md:flex md:items-center gap-10 ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block mt-4 md:mt-0 text-white hover:text-yellow-500 font-bold"
          >
            Home
          </a>

          {/* Packages Dropdown */}
          <div
            className="relative mt-4 md:mt-0"
            onMouseEnter={togglePackages}
            onMouseLeave={togglePackages}
          >
            <a
              href="/packages"
              className="block text-white hover:text-yellow-500 cursor-pointer font-bold"
            >
              Packages
            </a>
            {isPackagesOpen && (
              <div className="absolute right-0 mt-2 text-sm md:text-2xl py-2 md:py-4 text-center font-bold w-[200px] md:w-[250px] max-w-screen bg-white border border-gray-200 rounded-lg shadow-lg z-50 h-[140px] overflow-y-auto">
                <a
                  href="/packages/5"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold text-2xl"
                >
                  2 Days Jaipur Special 1
                </a>
                <a
                  href="/packages/6"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold text-2xl"
                >
                  2 Days Jaipur Special 2
                </a>
                <a
                  href="/packages/7"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  3 Days Package I
                </a>
                <a
                  href="/packages/8"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  3 Days Package II
                </a>
                <a
                  href="/packages/9"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  3 Days Package III
                </a>
                <a
                  href="/packages/10"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  3 Days Package IV
                </a>
                <a
                  href="/packages/11"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  4 Days Package 
                </a>
                <a
                  href="/packages/1"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold text-2xl "
                >
                  5 Days Package
                </a>

                <a
                  href="/packages/2"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold text-2xl"
                >
                  5 Days Package 2
                </a>
                <a
                  href="/packages/3"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold text-2xl"
                >
                  7 Days Package
                </a>
                <a
                  href="/packages/4"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold text-2xl"
                >
                  9 Days Package
                </a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative mt-4 md:mt-0"
            onMouseEnter={toggleServices}
            onMouseLeave={toggleServices}
          >
            <a
              href="/fecilitys"
              className="block text-white hover:text-yellow-500 cursor-pointer font-bold"
            >
              Services
            </a>
            {isServicesOpen && (
              <div className="absolute right-0 mt-2 text-2xl md:text-base text-center font-bold w-[150px] md:w-[180px] max-w-screen bg-white border border-gray-200 rounded-lg shadow-lg z-50 h-[100px] overflow-y-auto">
                <a
                  href="/fecilitys/cars"
                  className="block px-4 py-4 text-2xl hover:bg-gray-400 font-bold"
                >
                  Cab Service
                </a>
                <a
                  href="/fecilitys/hotel"
                  className="block px-4 py-4 text-2xl hover:bg-gray-400 font-bold"
                >
                  Hotel Service
                </a>
                <a
                  href="/fecilitys/bus"
                  className="block px-4 py-4 text-2xl hover:bg-gray-400 font-bold"
                >
                  Bus Service
                </a>
              </div>
            )}
          </div>

          <a
            href="/gallery"
            className="block mt-4 md:mt-0 text-white hover:text-yellow-500 font-bold"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="block mt-4 md:mt-0 text-white hover:text-yellow-500 font-bold"
          >
            Contact
          </a>
          <a
            href="/about"
            className="block mt-4 md:mt-0 text-white hover:text-yellow-500 font-bold"
          >
            About Us
          </a>
        </nav>

        {/* Icons */}
      </div>
    </header>
  );
};

export default Navbar;