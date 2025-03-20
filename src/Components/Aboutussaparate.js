import React from 'react';
import Image from "next/legacy/image";

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      {/* Container for centering content */}
      <div className="max-w-full mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tour Manager <span className="text-red-500">- About Us</span>
          </h2>
          <br></br>
          <p className="text-lg text-gray-900 mt-4 max-w-4xl font-bold mx-auto text-center">
            We are a dedicated and experienced tour management company based in Jaipur, Rajasthan, 
            offering Rajasthan tour packages and services.
          </p>
          <br></br>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Why Choose Jaipur TOur Point?
            </h3>
            <p className="italic text-gray-600 text-lg">
              Get the most authentic experience
            </p>
            <div className="mt-2 text-xl">
              <h4 className="font-bold text-gray-900">Rohit Mishra – A Visionary in the Tourism Industry</h4>
              <p className="text-gray-700 mt-2 leading-relaxed">
              Rohit Mishra is the Managing Director of Jaipur Tour Ponit. With over 
                <span className="font-bold"> 15 years of experience</span>, he has worked 
                in the tourism industry for 11+ years. Rohit’s career in the tourism sector spans more than 11 years, during which he has built a strong network of travel partners, ensuring seamless and luxurious journeys for travelers. His early years in the industry included working with two major travel companies for 8 years, where he gained hands-on experience in tour planning, customer service, and destination management.
                Driven by his deep passion for hospitality, Rohit believes in delivering experiences that go beyond expectations. His commitment to quality and attention to detail have positioned Jaipur Tour Point as one of the leading travel service providers in Rajasthan.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-120 lg:w-120 flex justify-center">
            <Image
              src="/images/image.png" // Ensure the image is in the public folder
              alt="rohit mishra"
              width={600}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;