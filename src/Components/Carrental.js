"use client";
import Image from "next/image";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutcr from "@/Components/Aboutvehiclesandsidemenu";
import WhyChooseAndFAQ from "./WhyChooseAndFAQ";

export default function Home({ data = [] }) {
  const [carData, setCarData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (carData.length === 0) {
    return <p className="text-center text-lg font-semibold mt-5">No car data available.</p>;
  }

  const nextCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const prevCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  return (
    <>

      {/* Hero Image */}
      <div 
  className=" banner-f relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center" 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white text-2xl md:text-4xl font-bold text-center">
   
  </h1>
 
</div>

      <div className="p-5 w-100 text-center">
        <h1 className="text-dark fw-bolder fs-4">Our Services</h1>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto p-4 md:p-10 bg-white min-h-screen">
        <h1 className="text-2xl md:text-4xl text-gray-800 mb-4 packageheadingbg p-3 text-center bg-gray-200 font-bold">
           Jaipur Tour Point 
        </h1>

        <p className="text-gray-600 text-lg text-center mb-5 leading-relaxed">
          To make travel convenient and safe, avail car rental services to avoid hassles of transportation in and around the city. We offer a clean, well-maintained, and comfortable fleet of car rentals that ensures a safe and hassle-free journey...
        </p>

        {/* Vehicle Cards and Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5 mb-5">
          {/* Car Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {carData.map((car, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src={car.img}
                    alt={car.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="bg-black bg-opacity-70 text-white text-center py-2 font-semibold">
                  {car.name} - {car.capacity} 
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="border rounded-lg shadow-md p-4 relative bg-white">
            <div className="relative w-full h-52">
              <Image
                src={carData[currentIndex].img}
                alt={carData[currentIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mt-3">{carData[currentIndex].name}</h2>
            <p className="text-gray-700"> {carData[currentIndex].capacity}</p>
            <p className="text-sm text-gray-500 mt-2"> {carData[currentIndex].Note} </p>

            {/* Carousel Navigation */}
            <div className="flex justify-between mt-4">
              <button onClick={prevCar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Previous</button>
              <button onClick={nextCar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>

      <Aboutcr />
      <WhyChooseAndFAQ />
    </>
  );
}
