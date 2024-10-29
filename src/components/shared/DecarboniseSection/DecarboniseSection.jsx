import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";


const DecarboniseSection = () => {
  return (
    <section className="bg-white py-10 ">
      <div className="container mx-auto grid grid-cols-12 gap-4 px-4">
     
      

        {/* Main Text Section */}
        <div className="col-span-12 lg:col-span-12 border border-black">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Let's work together to decarbonise your business.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our sustainability experts will find the right solution for you.
            </p>
          </div>
        </div>

        {/* Schedule Button */}
        <div className="col-span-12 flex justify-center items-center lg:col-span-12">
        < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
        </div>
      </div>
    </section>
  );
};

export default DecarboniseSection;
