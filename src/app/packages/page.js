import Dfooter from '@/Components/Dfooter'
import Dnavbar from '@/Components/Dnavbar'
import Pakages from '@/Components/Pakages'
import React from 'react'

const plan = () => {
  return (
    <>
 <Dnavbar/>
      <div 
  className=" banner relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center" 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white text-2xl md:text-4xl font-bold text-center">
    Jaipur Tour Point
  </h1>
 
</div>
      <Pakages/>
    <Dfooter/>
    </>
  )
}

export default plan
