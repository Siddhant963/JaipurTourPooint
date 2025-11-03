"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar-simple.css";

const Dnavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      // Only set if it's different from current
      if (activeDropdown !== menu) {
        setActiveDropdown(menu);
      }
    }
  };

  const handleDropdownMouseLeave = (menu) => {
    if (window.innerWidth >= 768) {
      // Set timeout to close this specific dropdown
      const timeout = setTimeout(() => {
        // Only close if this dropdown is still the active one
        setActiveDropdown(current => current === menu ? null : current);
      }, 200);
      setHoverTimeout(timeout);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest("nav") && !event.target.closest("#menu-bar")) {
        closeNav();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <header className={`dnavbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="dnavbar-container">
        {/* Mobile Menu Button */}
        <button
          id="menu-bar"
          className="navbar-mobile-btn"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Logo */}
        <a href="/" className="dnavbar-logo">
          <img
            src="/favicon.png"
            alt="Jaipur Tour Point Logo"
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text-full">
            Jaipur<span className="navbar-logo-text-accent">TOur</span>Point
          </span>
          <span className="navbar-logo-text-short">
            J<span className="navbar-logo-text-accent">T</span>P
          </span>
        </a>

        {/* Navigation Links */}
        <nav className={`dnavbar-nav ${isNavOpen ? 'open' : 'closed'}`}>
          <div className="dnavbar-nav-container">
            <a href="/" className="dnavbar-nav-link" onClick={closeNav}>
              Home
            </a>

            {/* Packages Dropdown */}
            <div
              className="dnavbar-dropdown"
              onMouseEnter={() => handleDropdownMouseEnter("packages")}
              onMouseLeave={() => handleDropdownMouseLeave("packages")}
            >
              <button
                className="dnavbar-dropdown-btn"
                onClick={() => toggleDropdown("packages")}
              >
                Packages
                <i className={`fas fa-chevron-down navbar-dropdown-icon ${activeDropdown === "packages" ? "rotated" : ""}`}></i>
              </button>

              <div className={`dnavbar-dropdown-menu ${activeDropdown === "packages" ? "open" : "closed"}`}>
                <div className="navbar-dropdown-scroll-hidden">
                  {[
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
                  ].map((pkg) => (
                    <a
                      key={pkg.id}
                      href={`/packages/${pkg.id}`}
                      className="navbar-dropdown-item font-medium"
                      onClick={closeNav}
                    >
                      {pkg.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="dnavbar-dropdown"
              onMouseEnter={() => handleDropdownMouseEnter("services")}
              onMouseLeave={() => handleDropdownMouseLeave("services")}
            >
              <button
                className="dnavbar-dropdown-btn"
                onClick={() => toggleDropdown("services")}
              >
                Services
                <i className={`fas fa-chevron-down navbar-dropdown-icon ${activeDropdown === "services" ? "rotated" : ""}`}></i>
              </button>

              <div className={`dnavbar-dropdown-menu ${activeDropdown === "services" ? "open" : "closed"}`}>
                <div className="navbar-dropdown-scroll-hidden">
                  {[
                    { name: "Cab Service", link: "/fecilitys/cars", icon: "fa-car" },
                    { name: "Hotel Service", link: "/fecilitys/hotel", icon: "fa-bed" },
                    { name: "Bus Service", link: "/fecilitys/bus", icon: "fa-bus" },
                  ].map((srv, i) => (
                    <a
                      key={i}
                      href={srv.link}
                      className="navbar-dropdown-item font-medium"
                      onClick={closeNav}
                    >
                      <i className={`fas ${srv.icon} navbar-dropdown-item-icon`}></i>
                      {srv.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/gallery" className="dnavbar-nav-link" onClick={closeNav}>
              Gallery
            </a>
            <a href="/contact" className="dnavbar-nav-link" onClick={closeNav}>
              Contact
            </a>
            <a href="/about" className="dnavbar-nav-link" onClick={closeNav}>
              About Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Dnavbar;