 <Navbar />
      <br/>
      <br/>
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4 font-serif text-center">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-blue-600 mb-10 mt-20">
          {packageData.packageName}
        </h1>
        <br/><br/>

        {/* Places */}
        <div className="space-y-12 w-full mx-auto pakediv">
          
          {packageData.places.map((place) => (
            <div
              key={place.id}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 "
            >
              {/* Place Title */}
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                {place.title}
              </h2>
              <br/><br/>
              {/* Place Description */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {place.description}
              </p>

              {/* Images Grid */}
              <div className=" pakeimgdiv">
                {place.images.map((image, index) => (
                  <div
                    key={index}
                    className=" h-90   rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                  >
                      <br/><br/>
                    <img
                      src={image}
                      alt={`Place ${index + 1}`}
                      className="w-full h-76 object-cover object-fill"
                    />
                  </div>
                ))}
              </div>
              <br/><br/>
            </div>
            
          ))}
        
          
        </div>
      </div>
      <Footer />



      import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <section className="text-center mb-10">
            <h1
              className="text-4xl font-bold mb-4 underline text-orange-500"
            >
              Welcome to JaipurTourPoint.com
            </h1>
            <p className="text-lg leading-relaxed">
              Experience the royal charm of Jaipur with{" "}
              <span className="font-semibold">JaipurTourPoint.com</span>! Discover majestic forts, vibrant bazaars, and rich Rajasthani culture with our expertly curated tours. From historic landmarks to thrilling safaris and local delicacies, we ensure a seamless and unforgettable journey.{" "}
              <span className="text-yellow-500 font-bold">Padharo Mharo Des!</span>
            </p>
          </section>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                <li><a href="#" className="hover:text-yellow-500">Packages</a></li>
                <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                <li><a href="#" className="hover:text-yellow-500">Gallery</a></li>
                <li><a href="#" className="hover:text-yellow-500">Review</a></li>
                <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-500">Facebook</a></li>
                <li><a href="#" className="hover:text-yellow-500">Instagram</a></li>
                <li><a href="#" className="hover:text-yellow-500">Twitter</a></li>
                <li>
                  <a
                    href="https://wa.me/+918209479644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us / Credits */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Created by <span className="font-bold">JaipurTourPoint</span></p>
              <p className="mb-2">Email: info@jaipurtourpoint.com</p>
              <p>Phone: +91 8209479644</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} JaipurTourPoint | All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
