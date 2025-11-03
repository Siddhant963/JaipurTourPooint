import React from 'react';
import {
  FaRegCalendarAlt,
  FaMapMarkedAlt,
  FaHotel,
  FaUtensils,
  
} from 'react-icons/fa';
import { FaCarRear } from "react-icons/fa6";

const Tourinfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col transition-transform transform hover:scale-105">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
        <h3 className="text-lg sm:text-xl font-bold text-center">Tour Information</h3>
      </div>

      {/* Details Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Info Row */}
        {[
          { icon: <FaRegCalendarAlt />, label: 'Duration', value: '10 Days / 9 Nights' },
          { icon: <FaMapMarkedAlt />, label: 'Destinations', value: '8 Cities' },
          { icon: <FaHotel />, label: 'Hotels', value: '2★ , 3★ Accommodation' },
          { icon: <FaUtensils />, label: 'Meals', value: 'Breakfast Included' },
          { icon: <FaCarRear />, label: 'Transportation', value: ' Included' }
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-blue-500 text-xl">{item.icon}</span>
              <span className="text-sm sm:text-base">{item.label}</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tourinfo;