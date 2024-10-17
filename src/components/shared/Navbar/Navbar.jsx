
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for open/close
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState({
    product: false,
    solutions: false,
    aboutUs: false,
    resources: false,
  });

  const toggleDropdown = (key, value) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  // bg-[#173f31]
  return (
    <nav className="bg-black text-white w-full px-4 py-2 md:px-10 shadow-md fixed top-0 z-50 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">
              plan<span className="text-gray-500">A</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold cursor-pointer" >
          <li className="relative"
              onMouseEnter={() => toggleDropdown('product', true)}
              onMouseLeave={() => toggleDropdown('product', false)}
          >
            <button
              className=" transition-all"
            >
              Product
            </button>
            {isDropdownOpen.product && (
              <div 
                className="absolute bg-white text-black p-6 shadow-lg space-y-2 rounded-lg transition-all duration-300 transform"
                onMouseEnter={() => toggleDropdown('product', true)}
                onMouseLeave={() => toggleDropdown('product', false)}
              >
                <Link to="/redirection" className="block hover:text-gray-500">Mission</Link>
                <Link to="/redirection"  className="block hover:text-gray-500">Sustainability Initiative</Link>
                <Link to="/redirection"  className="block hover:text-gray-500">Careers</Link>
                <Link to="/redirection"  className="block hover:text-gray-500">Press</Link>
              </div>
            )}
          </li>
          <li className="relative"
              onMouseEnter={() => toggleDropdown('solutions', true)}
              onMouseLeave={() => toggleDropdown('solutions', false)}
              >
            <button
              className=" transition-all"
            >
              Solutions
            </button>
            {isDropdownOpen.solutions && (
              <div 
                className="absolute bg-white text-black p-6 shadow-lg  space-y-2 rounded-lg transition-all duration-300 transform"
                onMouseEnter={() => toggleDropdown('solutions', true)}
                onMouseLeave={() => toggleDropdown('solutions', false)}
              >
                <Link to="/redirection" className="block hover:text-gray-500">Partners</Link>
                <Link to="/redirection"  className="block hover:text-gray-500">Join Plan A</Link>
              </div>
            )}
          </li>
          <li className="relative"
              onMouseEnter={() => toggleDropdown('aboutUs', true)}
              onMouseLeave={() => toggleDropdown('aboutUs', false)}
              >
            <button
              className=" transition-all"
            >
              About Us
            </button>
            {isDropdownOpen.aboutUs && (
              <div 
                className="absolute  bg-white text-black p-6 shadow-lg  space-y-2 rounded-lg transition-all duration-300 transform"
                onMouseEnter={() => toggleDropdown('aboutUs', true)}
                onMouseLeave={() => toggleDropdown('aboutUs', false)}
              >
                <Link to="/redirection"  className="block hover:text-gray-500">Sustainability</Link>
                <Link to="/redirection"  className="block hover:text-gray-500">Partners</Link>
              </div>
            )}
          </li>
          <li className=" transition-all">Resources</li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/auth/signin">
            <button className="font-bold bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-[#173f31] transition">
              Log in
            </button>
          </Link>
          <Link to="/redirection">
          <button className="font-bold bg-white text-black px-6 py-2 border border-white rounded hover:bg-black hover:text-white transition">
            Schedule a call
          </button>
          </Link>
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="font-bold lg:hidden bg-white text-black p-6 shadow-lg mt-2 space-y-4 rounded-lg transition-all duration-300">
          <div>
            <button className="w-full text-left py-2 px-4 hover:bg-gray-200" onClick={() => toggleDropdown('product', !isDropdownOpen.product)}>
              Product
            </button>
            {isDropdownOpen.product && (
              <div className="pl-4 space-y-2">
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Mission</Link>
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Sustainability Initiative</Link>
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Careers</Link>
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Press</Link>
              </div>
            )}
          </div>
          <div>
            <button className="w-full px-4 text-left py-2 hover:bg-gray-200" onClick={() => toggleDropdown('solutions', !isDropdownOpen.solutions)}>
              Solutions
            </button>
            {isDropdownOpen.solutions && (
              <div className="pl-4 space-y-2">
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Partners</Link>
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Join Plan A</Link>
              </div>
            )}
          </div>
          <div>
            <button className="w-full px-4 text-left py-2 hover:bg-gray-200" onClick={() => toggleDropdown('aboutUs', !isDropdownOpen.aboutUs)}>
              About Us
            </button>
            {isDropdownOpen.aboutUs && (
              <div className="pl-4 space-y-2">
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Sustainability</Link>
                <Link to="/redirection"  className="block hover:text-gray-500 px-3">Partners</Link>
              </div>
            )}
          </div>
          <button className="w-full  px-4 text-left py-2 hover:bg-gray-200">
            Resources
          </button>

          {/* Mobile Buttons */}
          <div className="flex space-x-4 pt-4">
            <button className="bg-transparent border border-black  text-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
              Log in
            </button>
            <button className="bg-black  border  border-black text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              Schedule a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
