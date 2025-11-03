"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (key) =>
    setActiveDropdown(activeDropdown === key ? null : key);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
  ];

  const packages = [
    "2 Days Jaipur Special 1",
    "3 Days Package II",
    "4 Days Package",
    "7 Days Package",
    "9 Days Package",
  ];

  const services = [
    { name: "Cab Service", href: "/fecilitys/cars", icon: "fa-car" },
    { name: "Hotel Service", href: "/fecilitys/hotel", icon: "fa-bed" },
    { name: "Bus Service", href: "/fecilitys/bus", icon: "fa-bus" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold text-lg"
        >
          <img
            src="/favicon.png"
            alt="Jaipur Tour Point Logo"
            className="w-8 h-8 rounded-full border border-yellow-400 object-cover"
          />
          <span className="hidden sm:inline">
            Jaipur<span className="text-yellow-400">Tour</span>Point
          </span>
          <span className="sm:hidden text-yellow-400">JTP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-yellow-400 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Packages Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("packages")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              Packages
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${activeDropdown === "packages" ? "rotate-180" : ""
                  }`}
              ></i>
            </button>
            {activeDropdown === "packages" && (
              <div className="absolute mt-3 w-56 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                {packages.map((pkg, idx) => (
                  <Link
                    key={idx}
                    href={`/packages/${idx + 1}`}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    {pkg}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              Services
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${activeDropdown === "services" ? "rotate-180" : ""
                  }`}
              ></i>
            </button>
            {activeDropdown === "services" && (
              <div className="absolute mt-3 w-56 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                {services.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    <i className={`fas ${srv.icon} text-yellow-500`}></i>
                    {srv.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden text-white text-2xl"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block text-white py-2 px-2 rounded-md hover:bg-white/10 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Packages */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => toggleDropdown("packages")}
              className="w-full flex justify-between items-center text-white py-2 px-2 rounded-md hover:bg-white/10"
            >
              Packages
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${activeDropdown === "packages" ? "rotate-180" : ""
                  }`}
              ></i>
            </button>
            {activeDropdown === "packages" && (
              <div className="mt-2 pl-3 space-y-2">
                {packages.map((pkg, idx) => (
                  <Link
                    key={idx}
                    href={`/packages/${idx + 1}`}
                    onClick={closeMenu}
                    className="block text-white/80 text-sm py-2 px-2 rounded-md hover:bg-white/10 transition"
                  >
                    {pkg}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between items-center text-white py-2 px-2 rounded-md hover:bg-white/10"
            >
              Services
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${activeDropdown === "services" ? "rotate-180" : ""
                  }`}
              ></i>
            </button>
            {activeDropdown === "services" && (
              <div className="mt-2 pl-3 space-y-2">
                {services.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-white/80 text-sm py-2 px-2 rounded-md hover:bg-white/10 transition"
                  >
                    <i className={`fas ${srv.icon} text-yellow-400`}></i>
                    {srv.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
