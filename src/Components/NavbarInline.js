"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarInline = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const closeNav = () => {
        setNavOpen(false);
        setOpenDropdown(null);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Inline styles
    const headerStyle = {
        backgroundColor: scrolled ? 'rgba(17, 17, 17, 0.95)' : '#111111',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(4px)' : 'none'
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        transition: 'transform 0.2s ease'
    };

    const logoImgStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    };

    const mobileButtonStyle = {
        display: window.innerWidth >= 768 ? 'none' : 'block',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        padding: '0.5rem',
        borderRadius: '4px'
    };

    const navStyle = {
        position: window.innerWidth >= 768 ? 'static' : 'absolute',
        top: window.innerWidth >= 768 ? 'auto' : '100%',
        left: window.innerWidth >= 768 ? 'auto' : 0,
        width: window.innerWidth >= 768 ? 'auto' : '100%',
        backgroundColor: window.innerWidth >= 768 ? 'transparent' : '#111111',
        borderTop: window.innerWidth >= 768 ? 'none' : '1px solid #333',
        opacity: window.innerWidth >= 768 ? 1 : (navOpen ? 1 : 0),
        visibility: window.innerWidth >= 768 ? 'visible' : (navOpen ? 'visible' : 'hidden'),
        transition: 'all 0.3s ease'
    };

    const navListStyle = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
        alignItems: window.innerWidth >= 768 ? 'center' : 'stretch',
        gap: window.innerWidth >= 768 ? '0.5rem' : 0
    };

    const navLinkStyle = {
        display: 'block',
        padding: window.innerWidth >= 768 ? '0.75rem 1rem' : '1rem',
        color: 'white',
        textDecoration: 'none',
        borderBottom: window.innerWidth >= 768 ? 'none' : '1px solid #333',
        borderRadius: window.innerWidth >= 768 ? '4px' : 0,
        transition: 'all 0.2s ease'
    };

    const dropdownButtonStyle = {
        width: window.innerWidth >= 768 ? 'auto' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: window.innerWidth >= 768 ? '0.75rem 1rem' : '1rem',
        background: 'none',
        border: 'none',
        color: 'white',
        textAlign: 'left',
        cursor: 'pointer',
        borderBottom: window.innerWidth >= 768 ? 'none' : '1px solid #333',
        borderRadius: window.innerWidth >= 768 ? '4px' : 0,
        transition: 'all 0.2s ease',
        fontSize: '1rem'
    };

    const dropdownMenuStyle = {
        position: window.innerWidth >= 768 ? 'absolute' : 'static',
        top: window.innerWidth >= 768 ? '100%' : 'auto',
        left: window.innerWidth >= 768 ? 0 : 'auto',
        backgroundColor: 'white',
        color: '#333',
        minWidth: window.innerWidth >= 768 ? '250px' : 'auto',
        borderRadius: window.innerWidth >= 768 ? '8px' : 0,
        boxShadow: window.innerWidth >= 768 ? '0 10px 25px rgba(0,0,0,0.15)' : 'none',
        border: window.innerWidth >= 768 ? '1px solid #ddd' : 'none',
        overflow: 'hidden',
        maxHeight: openDropdown ? '400px' : '0',
        opacity: openDropdown ? 1 : 0,
        transition: 'all 0.3s ease'
    };

    const dropdownItemStyle = {
        display: 'block',
        padding: '0.75rem 1rem',
        color: '#333',
        textDecoration: 'none',
        borderBottom: '1px solid #eee',
        transition: 'all 0.2s ease'
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                {/* Logo */}
                <a href="/" style={logoStyle}>
                    <img
                        src="/favicon.png"
                        alt="Jaipur Tour Point Logo"
                        style={logoImgStyle}
                    />
                    <span style={{ display: window.innerWidth >= 640 ? 'inline' : 'none' }}>
                        Jaipur<span style={{ color: '#eab308' }}>TOur</span>Point
                    </span>
                    <span style={{ display: window.innerWidth >= 640 ? 'none' : 'inline' }}>
                        J<span style={{ color: '#eab308' }}>T</span>P
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    style={mobileButtonStyle}
                    onClick={toggleNav}
                    aria-label="Toggle navigation menu"
                >
                    <i className={`fas ${navOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Navigation Links */}
                <nav style={navStyle}>
                    <ul style={navListStyle}>
                        <li>
                            <a href="/" style={navLinkStyle} onClick={closeNav}>
                                Home
                            </a>
                        </li>

                        {/* Packages Dropdown */}
                        <li style={{ position: 'relative' }}>
                            <button
                                style={dropdownButtonStyle}
                                onClick={() => toggleDropdown("packages")}
                                onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("packages")}
                                onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
                            >
                                Packages
                                <i className={`fas fa-chevron-down`} style={{
                                    marginLeft: '0.5rem',
                                    transform: openDropdown === "packages" ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                }}></i>
                            </button>

                            <div
                                style={{
                                    ...dropdownMenuStyle,
                                    maxHeight: openDropdown === "packages" ? '400px' : '0',
                                    opacity: openDropdown === "packages" ? 1 : 0
                                }}
                                onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("packages")}
                                onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
                            >
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
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
                                            style={dropdownItemStyle}
                                            onClick={closeNav}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#fef3c7';
                                                e.target.style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = 'transparent';
                                                e.target.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {pkg}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>

                        {/* Services Dropdown */}
                        <li style={{ position: 'relative' }}>
                            <button
                                style={dropdownButtonStyle}
                                onClick={() => toggleDropdown("services")}
                                onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("services")}
                                onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
                            >
                                Services
                                <i className={`fas fa-chevron-down`} style={{
                                    marginLeft: '0.5rem',
                                    transform: openDropdown === "services" ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                }}></i>
                            </button>

                            <div
                                style={{
                                    ...dropdownMenuStyle,
                                    maxHeight: openDropdown === "services" ? '200px' : '0',
                                    opacity: openDropdown === "services" ? 1 : 0
                                }}
                                onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("services")}
                                onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
                            >
                                {[
                                    { name: "Cab Service", link: "/fecilitys/cars", icon: "fa-car" },
                                    { name: "Hotel Service", link: "/fecilitys/hotel", icon: "fa-bed" },
                                    { name: "Bus Service", link: "/fecilitys/bus", icon: "fa-bus" },
                                ].map((srv, i) => (
                                    <a
                                        key={i}
                                        href={srv.link}
                                        style={{
                                            ...dropdownItemStyle,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onClick={closeNav}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#fef3c7';
                                            e.target.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <i className={`fas ${srv.icon}`} style={{ color: '#ca8a04' }}></i>
                                        {srv.name}
                                    </a>
                                ))}
                            </div>
                        </li>

                        <li>
                            <a href="/gallery" style={navLinkStyle} onClick={closeNav}>
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="/contact" style={navLinkStyle} onClick={closeNav}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/about" style={navLinkStyle} onClick={closeNav}>
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavbarInline;