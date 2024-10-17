import React from 'react';
import planA from "../../../assets/planA.svg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import AICPA from "../../../assets/AICPA.webp" ;
import trustLogo from "../../../assets/trustLogo.webp" ;
import bestofworld from "../../../assets/bestofworld.webp" ;
import certifiedB from "../../../assets/certifiedB.webp" ;
import TUV from "../../../assets/TUV.webp" ;
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-5 grid-cols-2  ">
          {/* Logo */}
          <div className="w-full px-2">
          <img src={planA} alt="" />
          </div>

          {/* Product Column */}
          <div className=" px-2">
            <h3 className="text-white mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link  to="/EcoFuture/redirection" >Product overview</Link>
              <Link to="/EcoFuture/redirection" >Collect data</Link>
              <Link to="/EcoFuture/redirection" >Measure emissions</Link>
              <Link to="/EcoFuture/redirection" >Report on ESG</Link>
              <Link to="/EcoFuture/redirection" >Set targets</Link>
              <Link to="/EcoFuture/redirection" >Reduce carbon</Link>
              <Link to="/EcoFuture/redirection" >Improve strategy</Link>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="px-2">
            <h3 className="text-white mb-4 font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link to="/EcoFuture/redirection" >Offerings</Link>
              <Link to="/EcoFuture/redirection" >CSRD</Link>
            </ul>
          </div>

          {/* About Us Column */}
          <div className=" px-2">
            <h3 className="text-white mb-4 font-semibold">About us</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link to="/EcoFuture/redirection" >Mission</Link>
              <Link to="/EcoFuture/redirection" >Careers</Link>
              <Link to="/EcoFuture/redirection" >Press</Link>
              <Link to="/EcoFuture/redirection" >Sustainability Initiative</Link>
            </ul>
          </div>

          {/* Resources Column */}
          <div className=" px-2 ">
            <h3 className="text-white mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <Link to="/EcoFuture/redirection" >Academy</Link>
              <Link to="/EcoFuture/redirection" >Whitepaper centre</Link>
              <Link to="/EcoFuture/redirection" >Regulation centre</Link>
              <Link to="/EcoFuture/redirection" >Online courses</Link>
              <Link to="/EcoFuture/redirection" >Carbon scanner</Link>
              <Link to="/EcoFuture/redirection" >Corporate sustainability glossary</Link>
              <Link to="/EcoFuture/redirection" >Events Hub</Link>
              <Link to="/EcoFuture/redirection" >Best carbon accounting software</Link>
              <Link to="/EcoFuture/redirection" >All articles</Link>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex justify-evenly  flex-wrap space-y-8 md:space-y-0">
          {/* Certifications */}
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-white font-semibold mb-4">Certifications & Awards</h3>
            <div className="flex  flex-wrap justify-evenly items-center">
              <img src={TUV} alt="certification" className="h-[60px]  " />
              <img src={certifiedB} alt="certification" className="h-[60px] " />
              <img src={bestofworld} alt="certification" className="h-[60px] " />
              <img src={AICPA} alt="certification" className="h-[60px]  " />

            </div>
          </div>

          {/* Offices */}
          <div className="w-full md:w-1/2 ">
            <h3 className="text-white font-semibold mb-4 text-center">Offices</h3>
            <ul className="text-sm space-y-2 flex justify-center flex-col items-center flex flex-col ">
              <Link to="/EcoFuture/redirection"  className="w-full text-center"><div className="w-full"><h2>Paris </h2><h4>24 Rue de Mogador, 75009 Paris</h4></div></Link>
              <Link to="/EcoFuture/redirection"  className="w-full text-center"><div className=""> <h2>London</h2><h4>86–90 Paul Street, EC2A 4NE</h4> </div></Link>
              <Link to="/EcoFuture/redirection"  className="w-full text-center"><div className=""> <h2>Berlin</h2>  <h4>Schlesische Strasse 26, 10997 Berlin</h4></div></Link>
              <Link to="/EcoFuture/redirection"  className="w-full text-center"><div className=""> <h2>Munich</h2>  <h4>Rosental 7, 80331 Munich</h4></div></Link>
            </ul>
          </div>
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
