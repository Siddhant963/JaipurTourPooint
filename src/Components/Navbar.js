"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar-simple.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleNav = () => setNavOpen(!navOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeNav = () => {
    setNavOpen(false);
    setOpenDropdown(null);
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setOpenDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setOpenDropdown(null);
      }, 150);
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
      if (navOpen && !event.target.closest("nav") && !event.target.closest(".navbar-mobile-btn")) {
        closeNav();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [navOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
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

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-btn"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${navOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-nav ${navOpen ? 'open' : 'closed'}`}>
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item">
              <a href="/" className="navbar-nav-link" onClick={closeNav}>
                Home
              </a>
            </li>

            {/* Packages Dropdown */}
            <li
              className="navbar-nav-item"
              onMouseEnter={() => handleMouseEnter("packages")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="navbar-dropdown-btn"
                onClick={() => toggleDropdown("packages")}
              >
                Packages
                <i className={`fas fa-chevron-down navbar-dropdown-icon ${openDropdown === "packages" ? "rotated" : ""}`}></i>
              </button>

              <div className={`navbar-dropdown-menu ${openDropdown === "packages" ? "open" : "closed"}`}>
                <div className="navbar-dropdown-scroll-hidden">
                  {[
                    "2 Days Jaipur Special 1",
                    "2 Days Jaipur Special 2",
                    "3 Days Package I",
                    "3 Days Package II",
                    "3 Days Package III",
                    "3 Days Package IV",
                    "4 Days Package",
                    "5 Days Package",
                    "5 Days Package 2",
                    "7 Days Package",
                    "9 Days Package",
                  ].map((pkg, i) => (
                    <a
                      key={i}
                      href={`/packages/${i + 1}`}
                      className="navbar-dropdown-item"
                      onClick={closeNav}
                    >
                      {pkg}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* Services Dropdown */}
            <li
              className="navbar-nav-item"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="navbar-dropdown-btn"
                onClick={() => toggleDropdown("services")}
              >
                Services
                <i className={`fas fa-chevron-down navbar-dropdown-icon ${openDropdown === "services" ? "rotated" : ""}`}></i>
              </button>

              <div className={`navbar-dropdown-menu ${openDropdown === "services" ? "open" : "closed"}`}>
                <div className="navbar-dropdown-scroll-hidden">
                  {[
                    { name: "Cab Service", link: "/fecilitys/cars", icon: "fa-car" },
                    { name: "Hotel Service", link: "/fecilitys/hotel", icon: "fa-bed" },
                    { name: "Bus Service", link: "/fecilitys/bus", icon: "fa-bus" },
                  ].map((srv, i) => (
                    <a
                      key={i}
                      href={srv.link}
                      className="navbar-dropdown-item"
                      onClick={closeNav}
                    >
                      <i className={`fas ${srv.icon} navbar-dropdown-item-icon`}></i>
                      {srv.name}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="navbar-nav-item">
              <a href="/gallery" className="navbar-nav-link" onClick={closeNav}>
                Gallery
              </a>
            </li>
            <li className="navbar-nav-item">
              <a href="/contact" className="navbar-nav-link" onClick={closeNav}>
                Contact
              </a>
            </li>
            <li className="navbar-nav-item">
              <a href="/about" className="navbar-nav-link" onClick={closeNav}>
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;