import React from "react";

const tourPackages = [
  {
    title: "Jaipur Luxury Tour Package",
    duration: "03 Nights 04 Days",
    image:
      "https://www.tripsavvy.com/thmb/somehotelinterior.jpg",
  },
  {
    title: "Jaipur Tour Package for Family",
    duration: "02 Nights 03 Days",
    image:
      "https://www.tripsavvy.com/thmb/familyresortjaipur.jpg",
  },
  {
    title: "Jaipur Honeymoon Tour Packages",
    duration: "03 Nights 04 Days",
    image:
      "https://www.tripsavvy.com/thmb/desertcampfire.jpg",
  },
  {
    title: "Jaipur Group Tour Package",
    duration: "04 Nights 05 Days",
    image:
      "https://www.tripsavvy.com/thmb/diningunderstars.jpg",
  },
  {
    title: "Jaipur Tour Package for Couple",
    duration: "03 Nights 04 Days",
    image:
      "https://www.tripsavvy.com/thmb/elephantride.jpg",
  },
  {
    title: "Jaipur Temple Tour",
    duration: "03 Nights 04 Days",
    image:
      "https://www.tripsavvy.com/thmb/templetour.jpg",
  },
  {
    title: "Jaipur Agra 4 Days Tour Package",
    duration: "03 Nights 04 Days",
    destination: "Jaipur, Agra",
    image:
      "https://www.tripsavvy.com/thmb/agrafortview.jpg",
  },
  {
    title: "Jaipur Ajmer Pushkar 4 Days Tour",
    duration: "03 Nights 04 Days",
    destination: "Jaipur, Ajmer, Pushkar",
    image:
      "https://www.tripsavvy.com/thmb/pushkarlake.jpg",
  },
];

export default function Placestovisit() {
  return (
    <div className="px-4 container py-8 pb-5">
    <div className="bg-gray-100 p-4 mb-4 mb-5">
        <h2 className="text-xl font-bold text-gray-800">Places to Visit in Jaipur</h2>
    </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tourPackages.map((pkg, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">
              10% OFF
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-white p-4">
              <h3 className="font-bold text-lg mb-1 leading-tight">
                {pkg.title}
              </h3>
              <p className="text-sm">
                <span className="font-semibold">Duration:</span> {pkg.duration}
              </p>
              {pkg.destination && (
                <p className="text-sm">
                  <span className="font-semibold">Destination:</span> {pkg.destination}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
