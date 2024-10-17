import React from 'react'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className=" py-16 bg-[#f7f4eb]">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-6">
    {/* Left Side - Text Content */}
    <div className="lg:w-[40%] mb-12 lg:mb-0 ">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        Manage your emissions, <br /> decarbonise your business
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
        A certified carbon management platform and the personal support of
        leading experts enable you to streamline carbon accounting, align with
        CSRD, and reach net-zero emissions.
      </p>
     < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
      

      {/* Supporting Information */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm cursor-pointer">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center ">
          
          <p className="text-black font-semibold hover:text-gray-500">
            Supporting +1500 companies
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
         
          <p className="text-black font-semibold hover:text-gray-500">
            GHG Protocol compliant & TÜV certified
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
         
          <p className="text-black font-semibold hover:text-gray-500">
            Global top 5% in B Corp "Governance"
          </p>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="flex-1 relative px-10">
      <div className="relative ">
        <img
          src="https://via.placeholder.com/600x400?text=Dashboard+Placeholder"
          alt="Company dashboard"
          className="w-full rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 transform translate-x-6 translate-y-6 z-0">
        <img
          src="https://via.placeholder.com/200x150?text=Meeting+Placeholder"
          alt="Meeting Placeholder"
          className="w-40 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</section>


  )
}

export default HeroSection ;
