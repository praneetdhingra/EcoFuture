import React from "react";

const DecarbonisationStats = () => {
  return (
    <section className="bg-black py-12">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center text-white mb-8">
        <div className="inline-block border border-white bg-black py-1 px-4 rounded-full text-sm font-medium uppercase mb-4">
          The Opportunity
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Gain a competitive advantage through decarbonisation
        </h2>
      </div>
  
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
        {/* Stat 1 */}
        <div>
          <p className="text-6xl font-light">↑67%</p>
          <p className="text-lg  mt-2">Higher Return</p>
          <p className="text-sm mt-2">
            Companies that disclose environmental data and pursue ambitious emissions reduction targets have a 67% higher ROI.
          </p>
          <p className="text-xs mt-4 ">Source: CDP</p>
        </div>
  
        {/* Stat 2 */}
        <div>
          <p className="text-6xl font-light">↑60%</p>
          <p className="text-lg  mt-2">Investor Pressure</p>
          <p className="text-sm mt-2">
            Majority of investors say they will increase their investments in companies prioritizing sustainability.
          </p>
          <p className="text-xs mt-4 ">Source: McKinsey</p>
        </div>
  
        {/* Stat 3 */}
        <div>
          <p className="text-6xl font-light">↑5.6%</p>
          <p className="text-lg  mt-2">Competitive Advantage</p>
          <p className="text-sm mt-2">
            Companies with science-based targets outperform peers by 5.6% in shareholder returns.
          </p>
          <p className="text-xs mt-4 ">Source: CDP</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default DecarbonisationStats;
