

import React from 'react';

const NetZeroJourney = () => {
  return (
    <div className="bg-white min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-6 flex flex-col justify-between h-full">
          {/* Badge */}
          <div className="flex items-center">
            <span className="bg-[#a66b5c] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
              THE SUSTAINABILITY PLATFORM
            </span>
          </div>

          {/* Title */}
          <h1 className="text-black text-5xl font-bold leading-tight">
            Full support along your net-zero journey
          </h1>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between px-6 py-4 bg-white border border-[#223e35] rounded-lg hover:bg-black hover:text-white transition duration-300">
              <span className="text-lg font-semibold">Carbon accounting</span>
            </button>
            <button className="w-full flex items-center justify-end px-6 py-4 bg-white border border-[#223e35] rounded-lg hover:bg-black hover:text-white transition duration-300">
              <div>
                <div className="text-lg font-semibold text-end">CSRD-readiness</div>
                <p className="text-sm text-gray-500">
                  Get all the data, expertise, and support to align your company with CSRD.
                </p>
              </div>
            </button>
            <button className="w-full flex items-center justify-between px-6 py-4 bg-white border border-[#223e35] rounded-lg hover:bg-black hover:text-white transition duration-300">
              <span className="text-lg font-semibold">Decarbonisation</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <div className="rounded-lg ">
            <img
              src="https://placehold.co/600x400" // Replace with actual image
              alt="Man discussing"
              className="w-full object-cover"
            />
          </div>
          {/* Checklist Overlay */}
          {/* <div className=" inset-0 flex items-end p-4 bg-gradient-to-t from-[#f5f2ea]/90">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
              <ul className="space-y-3">
                {[
                  'Double materiality assessment',
                  'Gap analysis',
                  'Data collection and review',
                  'CSRD report',
                  'External assurance',
                  'ESG improvement',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#223e35] rounded-full"></div>
                    <span className="text-[#223e35] text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NetZeroJourney;

