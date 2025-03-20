import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div 
  className=" banner-sr relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center" 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white bg-yellow-400 text-3xl md:text-4xl font-bold text-center">
  Jaipura TOur Point - Services
  </h1>
  
</div>
      <Services/>
      <Footer/>
    </div>
  )
}

export default page
