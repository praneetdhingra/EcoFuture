import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ClientShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for the carousel
  const carouselItems = [
    {
        category: "Finance",
        image: "https://via.placeholder.com/150", // Replace with actual Payhawk image
        text: "Performing a comprehensive assessment of ESG strategies, paving the way for scalable and sustainable growth.",
        link: "#",
    },
    {
      category: "Finance",
      image: "https://via.placeholder.com/150", // Replace with actual Payhawk image
      text: "Performing a comprehensive assessment of ESG strategies, paving the way for scalable and sustainable growth.",
      link: "#",
    },
    {
      category: "Software & IT",
      image: "https://via.placeholder.com/150", // Replace with actual Trivago image
      text: "Managing and reducing their Scope 1, 2, and 3 emissions.",
    },
    {category: "Finance",
        image: "https://via.placeholder.com/150", // Replace with actual Payhawk image
        text: "Performing a comprehensive assessment of ESG strategies, paving the way for scalable and sustainable growth.",
        link: "#",
      },
      {
        category: "Finance",
        image: "https://via.placeholder.com/150", // Replace with actual Payhawk image
        text: "Performing a comprehensive assessment of ESG strategies, paving the way for scalable and sustainable growth.",
        link: "#",
      },
      {
        category: "Software & IT",
        image: "https://via.placeholder.com/150", // Replace with actual Trivago image
        text: "Managing and reducing their Scope 1, 2, and 3 emissions.",
      },
  ];

  // Event handlers for next/previous navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 px-16 bg-[#f9f7f2]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-6xl mx-auto "
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="  md:basis-1/2 lg:basis-1/3 "
            >
              <Card className="h-full bg-white border border-black">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>{item.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.category}
                      className="mb-4 w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <CardDescription>{item.text}</CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext  />
      </Carousel>
    </div>
  );
};

export default ClientShowcase;
