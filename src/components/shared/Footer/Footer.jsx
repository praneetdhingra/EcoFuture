import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-5 grid-cols-2  ">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center space-x-2 ">
            <span className="font-bold text-xl text-white">
              Eco<span className="text-gray-500">Future</span>
            </span>
          </div>
        </Link>

          {/* Product Column */}
          <div className=" px-2">
            <h3 className="text-white mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link  to="/redirection" >Product overview</Link>
              <Link to="/redirection" >Collect data</Link>
              <Link to="/redirection" >Measure emissions</Link>
              <Link to="/redirection" >Report on ESG</Link>
              <Link to="/redirection" >Set targets</Link>
              <Link to="/redirection" >Reduce carbon</Link>
              <Link to="/redirection" >Improve strategy</Link>
            </ul>
          </div>

          {/* Contact US Column */}
          <div className="w-full  ">
            <h3 className="px-2 text-white font-semibold mb-4 text-start">Contact Us</h3>
            <ul className="px-2 text-sm space-y-2 flex justify-center flex-col items-center  ">
              <Link to="/redirection"  className="w-full text-start"><div className="flex gap-2 justify-start items-center"><span><MdEmail/></span> <span>examplemail@gmail.com</span> </div></Link>
              <Link to="/redirection"  className="w-full text-start"><div className="flex gap-2 justify-start items-center"><span><FaPhoneAlt/></span> <span>+91 0000000000</span> </div></Link>
              
            </ul>
          </div>

          {/* About Us Column */}
          <div className=" px-2">
            <h3 className="text-white mb-4 font-semibold">About us</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link to="/redirection" >Mission</Link>
              <Link to="/redirection" >Sustainability Initiative</Link>
              <Link to="/redirection" >Offerings</Link>
              <Link to="/redirection" >CSRD</Link>
            </ul>
          </div>

          {/* Resources Column */}
          <div className=" px-2 ">
            <h3 className="text-white mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm flex flex-col">
            <Link to="/redirection" className="block hover:text-gray-500">
                  Glossary
                </Link>
                <Link to="/redirection" className="block hover:text-gray-500">
                  Carbon Accounting
                </Link>
                <Link to="/redirection" className="block hover:text-gray-500">
                  Carbon Insetting
                </Link>
                <Link to="/redirection" className="block hover:text-gray-500">
                  Decarbonisation
                </Link>
                <Link to="/redirection" className="block hover:text-gray-500">
                  Environment, Social, Governance (ESG)
                </Link>
                <Link to="/redirection" className="block hover:text-gray-500">
                  Scope 3 emissions
                </Link>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex justify-evenly  flex-wrap space-y-8 md:space-y-0">
          {/* Certifications */}
          {/* <div className="w-full md:w-1/2 text-center">
            <h3 className="text-white font-semibold mb-4">Certifications & Awards</h3>
            <div className="flex  flex-wrap justify-evenly items-center">
              <img src={TUV} alt="certification" className="h-[60px]  " />
              <img src={certifiedB} alt="certification" className="h-[60px] " />
              <img src={bestofworld} alt="certification" className="h-[60px] " />
              <img src={AICPA} alt="certification" className="h-[60px]  " />

            </div>
          </div> */}

          {/* Offices */}
         
        </div>
        <div className="py-4">
          <hr />
        </div>
        

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-evenly space-x-6">
          <a href="#" className="text-white hover:text-green-400 text-2xl flex items-center justify-center">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white hover:text-green-400 text-2xl flex items-center justify-center">
            <i className="fab fa-xing"></i>
          </a>
          <a href="#" className="text-white hover:text-green-400 text-2xl flex items-center justify-center">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-green-400 text-2xl flex items-center justify-center">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
