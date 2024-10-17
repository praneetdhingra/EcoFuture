
import Marquee from '@/components/ui/marquee';
import React from 'react';

const CertifiedPlatform = () => {
  return (
    <div className="w-full bg-[#f7f4eb] py-12">
      <div className="bg-white border border-black  py-8 md:px-16 px-4  mx-auto max-w-5xl">
      <div className="w-full lg:flex justify-between">
        {/* Grid Layout for Text and Marquee */}
        <div className="lg:w-[40%] flex flex-col justify-between ">
          {/* Heading Section */}
          <div className="flex-1 ">
          <div className="text-black text-xl  h-full py-2">
            A certified platform combining cutting-edge technology and the latest scientific standards
          </div>
          </div>
          

          {/* Marquee Section for Logos */}
          <div className="overflow-hidden py-3 ">
            <Marquee className="flex space-x-8 items-center ">
              {/* Replace the src with actual logo paths */}
              <img src="https://placehold.co/100x20" alt="Logo 1" className="h-10 w-auto" />
              <img src="https://placehold.co/100x20" alt="Logo 2" className="h-10 w-auto" />
              <img src="https://placehold.co/100x20" alt="Logo 3" className="h-10 w-auto" />
              <img src="https://placehold.co/100x20" alt="Logo 4" className="h-10 w-auto" />
              <img src="https://placehold.co/100x20" alt="Logo 5" className="h-10 w-auto" />
              <img src="https://placehold.co/100x20" alt="Logo 6" className="h-10 w-auto" />
              {/* Add or repeat logos as needed */}
            </Marquee>
          </div>
        </div>

        {/* Information Cards Section */}
        <div className="flex flex-col justify-between gap-2 lg:gap-2 lg:w-[55%] text-sm">
          {/* Card 1 */}
          <div className="bg-[#f5f5f5] p-2 rounded-lg shadow-md flex items-center justify-center text-center">
            <p className="">
              GHG Protocol compliant & TÜV Rheinland certified
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f5f5] p-2 rounded-lg shadow-md flex items-center justify-center text-center">
            <p className="">
              Listed as Global top 5% in B Corp "Governance"
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f5f5] p-2 rounded-lg shadow-md flex items-center justify-center text-center">
            <p className="">
              Committed to Science-based targets and The Climate Pledge
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CertifiedPlatform;
