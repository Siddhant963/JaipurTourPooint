"use client"
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <div 
  className=" banner-c relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center " 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white text-4xl md:text-4xl font-bold text-center border-amber-300">
    Contact Us -  Jaipur Tour Point
  </h1>
  <p className="relative text-white text-lg md:text-2xl font-bold text-center">
   
  </p>
</div>
      <Contact/>
      <Footer/>
    </>
  )
}

export default page
