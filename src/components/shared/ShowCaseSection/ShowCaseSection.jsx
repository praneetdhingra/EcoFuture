import React from "react";
import { Button } from "@/components/ui/button"; // Import from shadcn/ui if needed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Import from shadcn/ui if needed

const ShowCaseSection = () => {
  return (
    <div className="py-6 px-8 bg-white">
         <section className="py-16 text-white">
      {/* Top Section */}
      <div className="text-center mb-12">
        <Button className=" text-black bg-white border border-black  hover:bg-black hover:text-white px-4 py-2 rounded-full mb-4">
          WHY PLAN A?
        </Button>
        <h2 className="text-4xl font-bold text-black">Your co-pilot to net-zero</h2>
      </div>

      {/* Grid Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        <Card className="bg-white border border-black md:flex items-center  ">
          <CardHeader className="flex items-center">
            {/* Icon */}
            <div className="w-[100px] h-[100px] bg-gray-400 rounded-md flex items-center justify-center">
              <svg /* Add your SVG icon here */></svg>
            </div>
            
          </CardHeader>
          <CardContent className="text-black">
          <CardTitle className=" text-xl font-semibold">
              Decarbonisation-first
            </CardTitle>
            <CardDescription className="text-black">
              We put carbon reduction at the centre of your sustainability strategy.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white border border-black md:flex items-center ">
          <CardHeader className="flex items-center">
            {/* Icon */}
            <div className="w-[100px] h-[100px] bg-gray-400 rounded-md flex items-center justify-center">
              <svg /* Add your SVG icon here */></svg>
            </div>
            
          </CardHeader>
          <CardContent>
          <CardTitle className=" text-xl font-semibold text-black">
              Science-based solution
            </CardTitle>
            <CardDescription className="text-black">
              We work with recognised scientists and experts to align your sustainability plans with the latest scientific standards.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white border border-black md:flex items-center">
          <CardHeader className="flex items-center">
            {/* Icon */}
            <div className="w-[100px] h-[100px] bg-gray-400 text-black rounded-md flex items-center justify-center">
              <svg /* Add your SVG icon here */></svg>
            </div>
            
          </CardHeader>
          <CardContent>
          <CardTitle className=" text-xl font-semibold text-black">
              Personalised services
            </CardTitle>
            <CardDescription className="text-black">
              We provide expert guidance and modular services tailored to your business needs.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white border border-black md:flex items-center">
          <CardHeader className="flex items-center">
            {/* Icon */}
            <div className="w-[100px] h-[100px] bg-gray-400 text-green-900 rounded-md flex items-center justify-center">
              <svg /* Add your SVG icon here */></svg>
            </div>
           
          </CardHeader>
          <CardContent className="">
          <CardTitle className=" text-xl font-semibold text-black">
              Leading sustainability community
            </CardTitle>
            <CardDescription className="text-black">
              We unlock connections, expertise, and solutions to expand your impact.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
    </div>
   
  );
};

export default ShowCaseSection;
