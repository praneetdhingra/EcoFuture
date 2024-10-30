import React from 'react'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className=" py-16 bg-white">
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
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm ">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center border ">
          
          <p className="text-black font-semibold ">
            Supporting +1500 companies
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center border">
         
          <p className="text-black font-semibold ">
            GHG Protocol compliant & TÜV certified
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center border">
         
          <p className="text-black font-semibold ">
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

    </div>
  </div>
</section>


  )
}

export default HeroSection ;
