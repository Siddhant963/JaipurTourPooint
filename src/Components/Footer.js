import React from 'react'

const Footer = () => {
  return (
    <>
     <section className="footer">

<div className="box-container ">

  <div className="box">
  <section className="text-center mb-10  ">
            <h1
              className="text-3xl font-bold mb-4 underline text-white"
            >
              Welcome to JaipurTourPoint.com
            </h1>
            <p className="text-lg leading-relaxed">
              Experience the royal charm of Jaipur with{" "}
              <span className="font-semibold">JaipurTourPoint.com</span>! Discover majestic forts, vibrant bazaars, and rich Rajasthani culture with our expertly curated tours. {" "}
              <span className="text-yellow-500 font-bold">Padharo Mharo Des!</span>
            </p>
          </section>

  </div>
  {/* <div className="box">
    <h3>branch locations</h3>
    <a href="#">india</a>
    <a href="#">USA</a>
    <a href="#">japan</a>
    <a href="#">france</a>
  </div> */}
  <div className="box">
    <h3>quick links</h3>
    <a href="/">home</a>
    {/* <a href="#">book</a> */}
    <a href="/packages">packages</a>
    <a href="/fecilitys">services</a>
    <a href="/gallery">gallery</a>
    <a href="/contact">review</a>
    <a href="/about">contact</a>
  </div>
  <div className="box">
    <h3>follow us</h3>
    <a href="#">facebook</a>
    <a href="#">instagram</a>
    <a href="#">twitter</a>
    <h3>Contact us</h3>
    <a href="https://wa.me/+918209479644"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-2xl text-white  "
                style={{marginLeft:"5px",borderRadius:"20px", display:"flex"}}
              >
                Chat on WhatsApp
              </a>
   
  </div>
  
</div>
<hr/>
<h1 className="mt-10 text-center text-3xl text-gray-400">
            © {new Date().getFullYear()} JaipurTourPoint | All Rights Reserved.
          </h1>
          </section> 
    </>
  )
}

export default Footer
