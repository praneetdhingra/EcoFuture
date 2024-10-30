
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScrollSpyComponent = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  const getClassNames = (section) =>
    `cursor-pointer transition duration-300 ${
      activeSection === section ? 'text-white bg-black font-bold' : 'text-black font-bold' 
    }`;

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" py-[100px] bg-white">
    <div className=" max-w-5xl flex  flex-col   mx-auto ">
      {/* Navigation Bar */}
      <nav className="   rounded-xl top-10 sticky  z-40 w-full flex justify-center py-4 flex-wrap px-2  ">
        <ul className={`py-4  bg-gray-100  shadow-2xl rounded-xl font-semibold w-[800px]  px-4  grid sm:grid-cols-4 gap-2 grid-cols-2  `}>
          
          <li className={`text-[10px] sm:text-sm py-2 px-4 border border-black text-black rounded-xl my-2 text-center  ${getClassNames('section1')} `} >
            <div to="section1" smooth={true} spy={true} className={`${getClassNames('section1')} w-full`}>
              Carbon accounting
            </div>
          </li>
         
          
          <li className={`text-[10px] sm:text-sm py-2 px-4  border border-black text-black rounded-xl my-2 text-center  ${getClassNames('section2')} `}>
            <Link to="section2" smooth={true} spy={true} className={getClassNames('section2')}>
              Decarbonisation
            </Link>
          </li>
         
          
          
          <li className={`text-[10px] sm:text-sm py-2 px-4  border border-black text-black rounded-xl my-2 text-center  ${getClassNames('section3')} `}>
            <Link to="section3" smooth={true} spy={true} className={getClassNames('section3')}>
              CSRD-readiness
            </Link>
          </li>
          
         
          <li className={`text-[10px] sm:text-sm py-2 px-4  border border-black text-black rounded-xl my-2 text-center  ${getClassNames('section4')} `}>
            <Link to="section4" smooth={true} spy={true} className={getClassNames('section4')}>
              Expert services
            </Link>
          </li>
          
          
        </ul>
      </nav>




<div className="my-8 text-sm">
<section id="section1" className=" flex justify-center items-center py-16 bg-white">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    {/* Left Column */}
    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Calculate Your Emissions
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Calculate your emissions in line with the latest scientific standards to ensure greater accuracy.
      </p>
      <ul className="mt-6 space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Simplify data collection across all your teams and suppliers
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Calculate your emissions with scientific accuracy
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Analyze data with customizable dashboards and charts
        </li>
      </ul>
      < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
    </div>
    {/* Right Column */}
    <div className="md:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md ">
        <img
          src="https://via.placeholder.com/500x300?text=Dashboard+Image"
          alt="Dashboard Placeholder"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

<section id="section2" className=" flex  justify-center items-center py-12 bg-white">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    {/* Left Column */}
    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Calculate Your Emissions
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Calculate your emissions in line with the latest scientific standards to ensure greater accuracy.
      </p>
      <ul className="mt-6 space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Simplify data collection across all your teams and suppliers
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Calculate your emissions with scientific accuracy
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Analyze data with customizable dashboards and charts
        </li>
      </ul>
      < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
    </div>
    {/* Right Column */}
    <div className="md:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/500x300?text=Dashboard+Image"
          alt="Dashboard Placeholder"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

<section id="section3" className=" flex justify-center items-center py-12 bg-white">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    {/* Left Column */}
    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Calculate Your Emissions
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Calculate your emissions in line with the latest scientific standards to ensure greater accuracy.
      </p>
      <ul className="mt-6 space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Simplify data collection across all your teams and suppliers
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Calculate your emissions with scientific accuracy
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Analyze data with customizable dashboards and charts
        </li>
      </ul>
      < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
    </div>
    {/* Right Column */}
    <div className="md:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/500x300?text=Dashboard+Image"
          alt="Dashboard Placeholder"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

<section id="section4" className=" flex justify-center items-center py-12 bg-white">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    {/* Left Column */}
    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Calculate Your Emissions
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Calculate your emissions in line with the latest scientific standards to ensure greater accuracy.
      </p>
      <ul className="mt-6 space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Simplify data collection across all your teams and suppliers
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Calculate your emissions with scientific accuracy
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-green-600">✓</span> 
          Analyze data with customizable dashboards and charts
        </li>
      </ul>
      < Link to="/redirection">
     <button className="mt-8 font-bold bg-black text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Schedule a call
      </button>
      </Link>
    </div>
    {/* Right Column */}
    <div className="md:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/500x300?text=Dashboard+Image"
          alt="Dashboard Placeholder"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>
</div>





    </div>
    </div>
 
  );
};

export default ScrollSpyComponent;
