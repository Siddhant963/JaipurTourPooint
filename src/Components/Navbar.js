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
    <header className="bg-white shadow-md w-full">
      <div className="mx-auto flex items-center justify-between p-4 w-screen text-3xl">
        {/* Menu Bar (Mobile) */}
        <div
          id="menu-bar"
          className="fas fa-bars text-2xl cursor-pointer md:hidden"
          onClick={toggleNav}
        ></div>

        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-white">
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
              <div className="absolute left-0 mt-2 text-sm md:text-2xl py-2 md:py-4 text-center font-bold w-[200px] md:w-[250px] max-w-screen bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <a
                  href="/packages/1"
                  className="block px-3 py-2 md:px-5 md:py-3 hover:bg-gray-400 font-bold"
                >
                  5 Days Package
                </a>

                <a
                  href="/packages/2"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold"
                >
                  5 Days Package 2
                </a>
                <a
                  href="/packages/3"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold"
                >
                  7 Days Package
                </a>
                <a
                  href="/packages/4"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold"
                >
                  9 Days Package
                </a>
                <a
                  href="/packages/5"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold"
                >
                  2 Days Jaipur Special 1
                </a>
                <a
                  href="/packages/6"
                  className="block px-3 py-2 md:px-4 md:py-3 hover:bg-gray-400 font-bold"
                >
                  2 Days Jaipur Special 2
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
              <div className="absolute left-0 mt-2 text-sm md:text-base text-center font-bold w-[120px] md:w-[150px] max-w-screen bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <a
                  href="/fecilitys/bus"
                  className="block px-3 py-2 hover:bg-gray-400 font-bold"
                >
                  Bus Service
                </a>
                <a
                  href="/fecilitys/cars"
                  className="block px-3 py-2 hover:bg-gray-400 font-bold"
                >
                  Cab Service
                </a>
                <a
                  href="/hotel-service"
                  className="block px-3 py-2 hover:bg-gray-400 font-bold"
                >
                  Hotel Service
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
            className="block mt-4 md:mt-0 text-white hover:text-yellow-500 font-bold">
              About Us
            </a>
        </nav>

        {/* Icons */}
        
      </div>
    </header>
  );
};

export default Navbar;