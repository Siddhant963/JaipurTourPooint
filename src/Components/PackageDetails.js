
'use client';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody, Typography, Avatar } from "@material-tailwind/react";
import Tourinfo from '@/Components/Tourinfo';
import PakegeInfo from './PakegeInfo';

const PackagePlacesCarousel = ({ packageData }) => {
  const [selectedPlace, setSelectedPlace] = useState(packageData.places[0]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* Package Name */}
      <br></br>
      <div 
  className=" banner relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center" 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white text-2xl md:text-4xl font-bold text-center">
    {packageData.packageName}
  </h1>
  <p className="relative text-white text-lg md:text-2xl font-bold text-center">
    Experience the royal charm of Rajasthan, the land of vibrant culture, majestic palaces, and golden deserts. {packageData.packageName} takes you through the heart of Rajasthan, covering its most iconic cities, historical landmarks, and cultural treasures.
  </p>
</div>
      <br></br>
      <br></br>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        
        {/* Left Sidebar (Timeline) */}
        <div className="hidden lg:block w-1/4 lg:sticky top-20 h-full">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Timeline>
              {packageData.places.map((place, index) => (
                <TimelineItem key={index}>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-0">
                      <Avatar size="sm" src={place.images[0]} alt="user 1" withBorder className="w-20 h-20" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray" className="hover:text-blue-500">
                      {place.title}
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8"></TimelineBody>
                </TimelineItem>
              ))}
            </Timeline>

            {/* Tourinfo and PackageInfo */}
            <br></br>
            <div className="mt-10 p-6 bg-white rounded-lg shadow-lg w-full">
  <Tourinfo />
  <br></br>
  <br></br>
  <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
    <PakegeInfo />
  </div>
</div>
          </div>
        </div>

        {/* Main Content (Tour Details & Images) */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-8 text-center">What we cover in this Tour?</h1>
          <div>
            {packageData.places.map((place, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-serif font-bold mb-4 text-center">{place.title}</h2>
                <p className="text-gray-900 mb-6 text-lg text-center">{place.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {place.images.map((image, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img
                        src={image}
                        alt={`image ${index + 1}`}
                        className="w-full h-128 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PackagePlacesCarousel;
