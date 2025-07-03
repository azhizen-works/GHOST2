import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const navigate = useNavigate();

  return (
    <>
      <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-[#F8FAFC] border shadow-md text-black z-50 sticky top-0 font-GentiumBookPlus">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate(`/`)}>
          <div className="text-2xl">📖</div>
          <div>
            <h1 className="text-xl font-bold leading-none mb-3 text-[#272727]">GHOST</h1>
            <p className="text-xs text-[#272727] -mt-1">Dream • Learn • Achieve</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm items-center text-black relative">
          {/* Home */}
          <div className="relative text-[#272727] font-bold">
            <button
              onClick={() => {
                setActiveLink('Home');
                navigate('/');
              }}>
              Home
            </button>
          </div>

          {/* Exams */}
          <div className="relative text-[#272727] font-bold">
            <button
              onClick={() => {
                setActiveLink('Exams');
                navigate('/examCategory');
              }}>
              Exams
            </button>
          </div>

          {/* Resources */}
          <div className="relative text-[#272727] font-bold">
            <button
              onClick={() => {
                setActiveLink('Resources');
                // setShowResourcesDropdown((prev) => !prev);
              }}>
              Resources
            </button>
          </div>

          {/* Contest */}
          <div className="relative text-[#272727] font-bold">
            <button
              onClick={() => {
                navigate('/loginSignUp');
              }} >
              Contest
            </button>
          </div>

          {/* Contact */}
          <div className="relative text-[#272727] font-bold">
            <button
              onClick={() => {
                setActiveLink('Contact');
                navigate('/contact');
              }} >
              Contact
            </button>
          </div>
        </nav>

        {/* Dashboard Button */}
        <div className="flex items-center rounded-md overflow-hidden text-sm">
          <button
            className="bg-gray-300 text-black px-4 py-1.5 hover:bg-gray-100 transition"
            onClick={() => navigate(`/dashboard`)}
          >
            Dashboard
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
