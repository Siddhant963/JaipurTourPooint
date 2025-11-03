"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Car, Bed, Bus, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const packages = [
    { name: "2 Days Jaipur Special 1", id: 5 },
    { name: "2 Days Jaipur Special 2", id: 6 },
    { name: "3 Days Package I", id: 7 },
    { name: "3 Days Package II", id: 8 },
    { name: "3 Days Package III", id: 9 },
    { name: "3 Days Package IV", id: 10 },
    { name: "4 Days Package", id: 11 },
    { name: "5 Days Package", id: 1 },
    { name: "5 Days Package 2", id: 2 },
    { name: "7 Days Package", id: 3 },
    { name: "9 Days Package", id: 4 },
  ];

  const services = [
    { name: "Cab Service", link: "/fecilitys/cars", icon: <Car size={16} /> },
    {
      name: "Hotel Service",
      link: "/fecilitys/hotel",
      icon: <Bed size={16} />,
    },
    { name: "Bus Service", link: "/fecilitys/bus", icon: <Bus size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Packages", dropdown: "packages" },
    { name: "Services", dropdown: "services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-800"
        >
          Travel<span className="text-blue-600">Buddy</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdown(item.dropdown)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {openDropdown === item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-3 bg-white shadow-lg rounded-xl border border-gray-100 p-3 w-56"
                    >
                      <ul className="space-y-1">
                        {item.dropdown === "packages"
                          ? packages.map((pkg) => (
                              <li key={pkg.id}>
                                <Link
                                  href={`/packages/${pkg.id}`}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition"
                                >
                                  {pkg.name}
                                </Link>
                              </li>
                            ))
                          : services.map((srv, i) => (
                              <li key={i}>
                                <Link
                                  href={srv.link}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition"
                                >
                                  {srv.icon}
                                  {srv.name}
                                </Link>
                              </li>
                            ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col px-5 py-3 space-y-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleDropdown(item.dropdown)}
                      className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`transition-transform ${
                          openDropdown === item.dropdown ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.dropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="pl-3 mt-1 border-l border-gray-200 space-y-1"
                        >
                          {item.dropdown === "packages"
                            ? packages.map((pkg) => (
                                <li key={pkg.id}>
                                  <Link
                                    href={`/packages/${pkg.id}`}
                                    className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 transition"
                                  >
                                    {pkg.name}
                                  </Link>
                                </li>
                              ))
                            : services.map((srv, i) => (
                                <li key={i}>
                                  <Link
                                    href={srv.link}
                                    className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 hover:text-blue-600 transition"
                                  >
                                    {srv.icon}
                                    {srv.name}
                                  </Link>
                                </li>
                              ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
