
import React, { useState } from 'react';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';
// import ContestPage from './ContestPage';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);
  // const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  // const [showContest, setShowContest] = useState(false);
  const navigate = useNavigate();

//   if (showLogin) return <LoginPage setShowLogin={setShowLogin} setShowSignup={setShowSignup} />;
//   if (showSignup) return <SignupPage setShowSignup={setShowSignup} setShowLogin={setShowLogin} />;
//   if (showContest) return <ContestPage setShowContest={setShowContest} />;

  return (
    <>
      <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-[#fbfbfe] text-black rounded-b-lg z-50 sticky top-0">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={()=> navigate(`/`)}>
          <div className="text-2xl">📖</div>
          <div>
            <h1 className="text-xl font-bold leading-none mb-3">ExamAce</h1>
            <p className="text-xs text-black -mt-1">Dream • Learn • Achieve</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm items-center text-black relative">
          {/* Home */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveLink('Home');
                navigate('/');
              }}
              // className={`px-3 py-1 rounded-md transition ${
              //   activeLink === 'Home' ? 'bg-slate-300 text-white shadow-inner' : 'hover:text-black'
              // }`}
            >
              Home
            </button>
          </div>

          {/* Exams */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveLink('Exams');
                navigate('/exams');
              }}
              // className={`px-3 py-1 rounded-md transition ${
              //   activeLink === 'Exams' ? 'bg-slate-300 text-white shadow-inner' : 'hover:text-black'
              // }`}
            >
              Exams
            </button>
          </div>

          {/* Resources */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveLink('Resources');
                // setShowResourcesDropdown((prev) => !prev);
              }}
              // onBlur={() => setTimeout(() => setShowResourcesDropdown(false), 150)}
              // className={`px-3 py-1 rounded-md transition ${
              //   activeLink === 'Resources' ? 'bg-slate-300 text-white shadow-inner' : 'hover:text-black'
              // }`}
            >
              Resources <span className="text-xs ml-1">▼</span>
            </button>

            {/* Dropdown for Resources
            {showResourcesDropdown && (
              <div className="absolute left-0 mt-2 bg-white/80 backdrop-blur-lg border border-white/20 text-black rounded-md shadow-lg z-50 w-44">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-white/20"
                >
                  Study Blogs
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-white/20"
                >
                  Current Affairs
                </button>
              </div>
            )} */}
          </div>

          {/* Contest */}
          <div className="relative">
            <button
              onClick={() => {
                navigate('/loginSignUp');
              }}
              // className={`px-3 py-1 rounded-md transition ${
              //   activeLink === 'Success Stories'
              //     ? 'bg-slate-300 text-white shadow-inner'
              //     : 'hover:text-black'
              // }`}
            >
              Contest
            </button>
          </div>

          {/* Contact */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveLink('Contact');
                navigate('/contact');
              }}
              // className={`px-3 py-1 rounded-md transition ${
              //   activeLink === 'Contact' ? 'bg-slate-300 text-white shadow-inner' : 'hover:text-black'
              // }`}
            >
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
