import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const PakegeInfo = () => {
    const inclusions = [
        "Everyday Breakfast and Dinner",
        "AC Vehicle",
        "English talking guide amid the city visit",
        "Mineral Water",
        "Driver Allowance",
        "Toll Taxes and Parking",
        "State charges",
        "Fuel",
    ];

    const exclusions = [
        "Monument charges",
        "Tips, Laundry, Phone calls",
        "Some other costs not specified previously.",
    ];

    return (
        <div className="w-full bg-white p-8 sm:p-10 rounded-lg shadow-lg mt-10">
            {/* Package Inclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Inclusion</h2>
            <ul className="space-y-4 mb-8">
                {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                        <FaCheckCircle className="text-blue-900 text-2xl mt-1" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* Package Exclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Exclusion</h2>
            <ul className="space-y-4">
                {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                        <FaCheckCircle className="text-blue-900 text-2xl mt-1" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PakegeInfo;
