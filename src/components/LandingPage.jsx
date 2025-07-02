// import React, { useState } from 'react';
// import Body from '../assets/Body.png';
// import { useNavigate } from 'react-router-dom';
// import { BsRocketTakeoffFill, BsBook } from "react-icons/bs";
// import { IoSearch, IoBarChart } from "react-icons/io5";
// import { LuChartNoAxesCombined } from "react-icons/lu";
// import { SiCodementor } from "react-icons/si";
// import { TfiWrite } from "react-icons/tfi";
// import { TbTargetArrow } from "react-icons/tb";
// import { CiBank } from "react-icons/ci";
// import { MdOutlineTrain } from "react-icons/md";
// import { RiGovernmentLine } from "react-icons/ri";
// import { FaShield, FaShieldHalved } from "react-icons/fa6";
// import NavBar from './NavBar';
// import Footer from './Footer';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { PiWarningCircleLight } from "react-icons/pi";
// import { SiTarget } from "react-icons/si";
// import {
//     FaClipboardList, FaCalendarCheck, FaChartPie, FaChalkboardTeacher,
//     FaLandmark, FaUserFriends, FaUniversity, FaTrain, FaShieldAlt, FaRegBuilding
// } from "react-icons/fa";


// const examCategories = [
//     {
//         title: "UPSC",
//         description: "Civil Service Examination",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-green-600",
//         icon: <FaLandmark size={32} className="text-white" />,
//     },
//     {
//         title: "SSC",
//         description: "Staff Selection Commission",
//         applicants: "50L+",
//         subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
//         color: "bg-purple-600",
//         icon: <FaUserFriends size={32} className="text-white" />,
//     },
//     {
//         title: "Banking",
//         description: "IBPS, SBI, RBI Exams",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-blue-600",
//         icon: <FaUniversity size={32} className="text-white" />,
//     },
//     {
//         title: "Railway",
//         description: "RRB & Railway Recruitment",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-red-600",
//         icon: <FaTrain size={32} className="text-white" />,
//     },
//     {
//         title: "Defence",
//         description: "Army, Air Force, Navy Exams",
//         applicants: "50L+",
//         subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
//         color: "bg-orange-500",
//         icon: <FaShieldAlt size={32} className="text-white" />,
//     },
//     {
//         title: "State PSC",
//         description: "State Public Service Commission",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-blue-500",
//         icon: <FaRegBuilding size={32} className="text-white" />,
//     },
//     {
//         title: "TNPSC",
//         description: "State Public Service Commission",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-blue-500",
//         icon: <FaRegBuilding size={32} className="text-white" />,
//     },
//     {
//         title: "VAO Exams",
//         description: "State Public Service Commission",
//         applicants: "10L+",
//         subjects: ["General studies", "CSAT", "+2 more"],
//         color: "bg-blue-500",
//         icon: <FaRegBuilding size={32} className="text-white" />,
//     },
// ];



// export default function LandingPage() {
//     const [activeLink, setActiveLink] = useState('Home');
//     const [showLogin, setShowLogin] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
//     const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
//     const [showContest, setShowContest] = useState(false);
//     const navigate = useNavigate();

//     const [selectedCategory, setSelectedCategory] = useState(null);


//     const closeModal = () => {
//         setIsClosing(true);
//         setTimeout(() => {
//             setSelectedCategory(null);
//             setIsClosing(false);
//         }, 300); // Match animation duration
//     };
//     return (
//         <>
//             <NavBar />
//             <div className="min-h-screen bg-[#fbfbfe] text-white font-sans overflow-hidden">
//                 {/* Background Image Section (Navbar + Hero) */}
//                 <div
//                     className="relative"
//                     style={{
//                         backgroundImage: `url(${Body})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                     }}
//                 >


//                     {/* Hero Section */}
//                     <section className="relative text-center py-16 px-4 overflow-hidden text-white">
//                         {/* Dark overlay for readability */}
//                         <div className="absolute inset-0 bg-black/50 z-0" />
//                         <div className="max-w-4xl mx-auto relative z-10">
//                             <div className="flex w-96 mx-auto justify-center place-items-center gap-3 bg-white/10 text-purple-200 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-white/20">
//                                 <BsRocketTakeoffFill className='text-red-500' /> India's #1 Government Exam Platform
//                             </div>
//                             <h2 className="text-5xl sm:text-6xl font-bold mb-2">Your Dream Job</h2>
//                             <h3 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#C084FC] text-transparent bg-clip-text">
//                                 Awaits You
//                             </h3>
//                             <p className="text-lg mb-8 text-gray-200">
//                                 Master UPSC, SSC, Banking & more with AI-powered learning,<br />
//                                 expert mentorship, and personalized study plans<br />
//                                 designed for your success.
//                             </p>

//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <div className="flex items-center px-4 py-2 bg-white/10 rounded-md w-full sm:w-72 text-left text-sm text-white placeholder:text-gray-400">
//                                     <IoSearch className='w-6 h-5' />
//                                     <input
//                                         type="text"
//                                         placeholder="Search your dream exam..."
//                                         className="bg-transparent outline-none px-2 w-full"
//                                     />
//                                 </div>
//                                 <button className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
//                                     Start Learning Free
//                                 </button>
//                             </div>

//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-sm text-center">
//                                 {[
//                                     ['50L+', 'Success Stories', '#C084FC'],
//                                     ['98%', 'Success Rate', '#F472B6'],
//                                     ['500+', 'Expert Mentors', '#FACC15'],
//                                     ['24/7', 'Live Support', '#34D399'],
//                                 ].map(([num, label, color], idx) => (
//                                     <div
//                                         key={idx}
//                                         className="px-4 py-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20"
//                                     >
//                                         <p className="text-2xl font-bold" style={{ color }}>{num}</p>
//                                         <p className="text-gray-200">{label}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 </div>





//                 {/* Category Section */}
//                 <section className="py-20 px-4 bg-gradient-to-b from-[#1c0139] to-[#2d0752] text-white text-center">


//                     <div className="flex flex-col items-center w-full mt-10">
//                         {/* Title */}
//                         <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
//                             Choose Your Exam Category
//                         </h1>
//                         {/* Subtitle */}
//                         <p className="text-center text-base md:text-lg text-white mb-8 max-w-3xl">
//                             Comprehensive preparation materials and strategic guidance for all major government competitive exams
//                         </p>
//                         {/* Search & Filters */}
//                         <div className="flex flex-row items-center bg-white rounded-md shadow-lg px-4 py-3 space-x-3 w-full max-w-3xl mb-8">
//                             <input
//                                 type="text"
//                                 placeholder="Search exams ,Categories ,Subjects etc...."
//                                 className="flex-grow px-3 py-2 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
//                             />
//                             <select className="px-4 py-2 rounded border text-black border-gray-300 bg-white text-sm">
//                                 <option>Levels</option>
//                                 {/* Add options here */}
//                             </select>
//                             <select className="px-4 py-2 rounded border text-black border-gray-300 bg-white text-sm">
//                                 <option>Sort by vacancies</option>
//                                 {/* Add options here */}
//                             </select>
//                         </div>
//                     </div>

//                     <div className="w-full flex flex-wrap justify-center gap-6 mt-8">
//                         {examCategories.map((cat) => (
//                             <div
//                                 key={cat.title}
//                                 className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:scale-105 transition "
//                                 style={{ minHeight: 305 }}
//                             >
//                                 <div className={`flex items-center justify-between px-4 py-4 ${cat.color}`}>
//                                     <div>
//                                         <div className="text-lg font-semibold text-white text-start">{cat.title}</div>
//                                         <div className="text-sm text-white">{cat.description}</div>
//                                     </div>
//                                     <div>{cat.icon}</div>
//                                 </div>
//                                 <div className="flex flex-col flex-1 px-5 py-4 text-start gap-1">
//                                     <div className="text-xs text-gray-400 mb-1">Applicants</div>
//                                     <div className="text-sm text-gray-700 mb-2">{cat.applicants}</div>
//                                     <div className="text-xs text-gray-400 mb-1">Key Subjects</div>
//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                         {cat.subjects.map((subj, i) => (
//                                             <span
//                                                 key={i}
//                                                 className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700"
//                                             >
//                                                 {subj}
//                                             </span>
//                                         ))}
//                                     </div>
//                                     <button
//                                         className="mt-auto bg-black text-white rounded-full px-4 py-2 text-sm font-medium shadow hover:bg-blue-300 hover:scale-105 transition"
//                                         onClick={() => navigate(`/blogs`)}
//                                     >
//                                         Explore Resources
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {selectedCategory && (
//                         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
//                             <div
//                                 className={`bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative ${isClosing ? "animate-zoomOut" : "animate-zoomIn"
//                                     }`}
//                             >
//                                 <button
//                                     onClick={closeModal}
//                                     className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
//                                 >
//                                     &times;
//                                 </button>
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <div className={`p-2 rounded-full ${selectedCategory.color}`}>
//                                         {selectedCategory.icon}
//                                     </div>
//                                     <div>
//                                         <h2 className="text-lg font-bold">{selectedCategory.title}</h2>
//                                         <p className="text-sm text-gray-500">{selectedCategory.description}</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm mb-2">
//                                         <strong>Applicants:</strong> {selectedCategory.applicants}
//                                     </p>
//                                     <p className="text-sm mb-2">
//                                         <strong>Subjects:</strong> {selectedCategory.subjects.join(", ").replace("+2 more", "and others")}
//                                     </p>
//                                     <p className="text-sm text-gray-600 mt-4">
//                                         More resources and practice sets will be available here soon. Stay tuned!
//                                     </p>
//                                     <button className='mt-4 bg-blue-400 w-full p-2 rounded text-white font-semibold' onClick={() => navigate(`/CourseEnroll`)}>Enroll Now</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <div>
//                         <button className='bg-blue-500 w-96 mt-10 p-3 rounded-lg font-semibold hover:bg-blue-600 transition' onClick={() => navigate(`/Exams`)}>Explore More</button>
//                     </div>
//                 </section>

//                 {/* Why Choose Section */}
//                 <section className="py-20 px-4 bg-gradient-to-b from-[#1c0139] to-[#2d0752] text-white text-center">
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose ExamAce?</h2>
//                     <p className="text-gray-300 max-w-xl mx-auto mb-12">
//                         Experience the future of exam preparation with cutting-edge technology and proven methodologies
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//                         {[
//                             {
//                                 icon: <BsBook />,
//                                 label: "Smart Learning",
//                                 desc: "AI-powered personalized study plans"
//                             },
//                             {
//                                 icon: <LuChartNoAxesCombined />,
//                                 label: "Progress Tracking",
//                                 desc: "Real-time performance analytics"
//                             },
//                             {
//                                 icon: <SiCodementor />,
//                                 label: "Expert Mentorship",
//                                 desc: "1-on-1 guidance from toppers"
//                             },
//                             {
//                                 icon: <TfiWrite />,
//                                 label: "Mock Tests",
//                                 desc: "Unlimited practice with detailed solutions"
//                             }
//                         ].map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center text-center"
//                             >
//                                 <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
//                                     {item.icon}
//                                 </div>
//                                 <h4 className="text-lg font-semibold mb-1">{item.label}</h4>
//                                 <p className="text-sm text-gray-300">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <Footer />

//             </div>
//         </>
//     );
// }



import React, { useState } from 'react';
import Body from '../assets/Body.png';
import { useNavigate } from 'react-router-dom';
import { BsRocketTakeoffFill, BsBook } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { SiCodementor } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { FaShieldAlt, FaTrain, FaUniversity, FaRegBuilding, FaLandmark, FaUserFriends } from "react-icons/fa";
import NavBar from './NavBar';
import Footer from './Footer';

const examCategories = [
  {
    title: "UPSC",
    description: "Civil Service Examination",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-green-600",
    icon: <FaLandmark size={32} className="text-white" />,
  },
  {
    title: "SSC",
    description: "Staff Selection Commission",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-purple-600",
    icon: <FaUserFriends size={32} className="text-white" />,
  },
  {
    title: "Banking",
    description: "IBPS, SBI, RBI Exams",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-600",
    icon: <FaUniversity size={32} className="text-white" />,
  },
  {
    title: "Railway",
    description: "RRB & Railway Recruitment",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-red-600",
    icon: <FaTrain size={32} className="text-white" />,
  },
  {
    title: "Defence",
    description: "Army, Air Force, Navy Exams",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-orange-500",
    icon: <FaShieldAlt size={32} className="text-white" />,
  },
  {
    title: "State PSC",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-500",
    icon: <FaRegBuilding size={32} className="text-white" />,
  },
  {
    title: "TNPSC",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-500",
    icon: <FaRegBuilding size={32} className="text-white" />,
  },
  {
    title: "IAS",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-500",
    icon: <FaRegBuilding size={32} className="text-white" />,
  },
];

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#E5E4E2] font-sans overflow-x-hidden text-white">

        {/* Hero Section */}
        <div
          className="relative"
          // style={{
          //   backgroundImage: `url(${Body})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          //   backgroundRepeat: 'no-repeat',
          // }}
        >
          <section className="relative text-center py-16 px-4 sm:px-6 md:px-8 text-white">
            <div className="absolute inset-0 z-0" />
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="flex flex-wrap justify-center items-center w-full sm:w-96 mx-auto gap-2 sm:gap-3 bg-white/10 text-[#272727] px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-white/20">
                <BsRocketTakeoffFill className='text-red-500' /> India's #1 Government Exam Platform
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">Your Dream Job</h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#C084FC] text-transparent bg-clip-text">
                Awaits You
              </h3>
              <p className="text-base sm:text-lg mb-8 text-gray-200">
                Master UPSC, SSC, Banking & more with AI-powered learning,<br />
                expert mentorship, and personalized study plans<br />
                designed for your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-xl mx-auto">
                <div className="flex items-center px-4 py-2 bg-white/10 rounded-md w-full sm:w-72 text-left text-sm text-white">
                  <IoSearch className='w-6 h-5' />
                  <input
                    type="text"
                    placeholder="Search your dream exam..."
                    className="bg-transparent outline-none px-2 w-full"
                  />
                </div>
                <button className="bg-[#D8D5DB] text-black px-6 py-2 rounded-md font-semibold hover:opacity-90">
                  Start Learning Free
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-sm text-center">
                {[
                  ['50L+', 'Success Stories', '#C084FC'],
                  ['98%', 'Success Rate', '#F472B6'],
                  ['500+', 'Expert Mentors', '#FACC15'],
                  ['24/7', 'Live Support', '#34D399'],
                ].map(([num, label, color], idx) => (
                  <div
                    key={idx}
                    className="px-4 py-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20"
                  >
                    <p className="text-2xl font-bold" style={{ color }}>{num}</p>
                    <p className="text-gray-200">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Category Section */}
        <section className="py-20 px-4 bg-[#E5E4E2] text-white text-center">
          <div className="flex flex-col items-center w-full mt-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Choose Your Exam Category</h1>
            <p className="text-base md:text-lg text-white mb-8 max-w-3xl">
              Comprehensive preparation materials and strategic guidance for all major government competitive exams
            </p>

            {/* ✅ Responsive Filter Bar */}
            <div className="flex flex-col md:flex-row gap-3 bg-white rounded-md shadow-lg px-4 py-3 w-full max-w-3xl mb-8">
              <input
                type="text"
                placeholder="Search exams, Categories, Subjects etc...."
                className="w-full px-3 py-2 rounded border text-black border-gray-300 bg-white focus:outline-none focus:ring-blue-200 text-sm"
              />
              <select className="w-full md:w-[150px] px-4 py-2 rounded border text-black border-gray-300 text-sm max-w-full">
                <option>Levels</option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
              </select>
              <select className="w-full md:w-[180px] px-4 py-2 rounded border text-black border-gray-300 bg-white text-sm max-w-full">
                <option>Sort by vacancies</option>
                <option>High to Low</option>
                <option>Low to High</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="w-full flex flex-wrap justify-center gap-6 mt-8 px-2 sm:px-6">
            {examCategories.map((cat) => (
              <div
                key={cat.title}
                className="w-full sm:w-[300px] bg-white rounded-lg shadow-md flex flex-col hover:scale-105 transition"
                style={{ minHeight: 305 }}
              >
                <div className={`flex items-center justify-between rounded-lg px-4 py-4 ${cat.color}`}>
                  <div>
                    <div className="text-lg font-semibold text-white text-start">{cat.title}</div>
                    <div className="text-sm text-white">{cat.description}</div>
                  </div>
                  <div>{cat.icon}</div>
                </div>
                <div className="flex flex-col flex-1 px-5 py-4 text-start gap-1">
                  <div className="text-xs text-gray-400 mb-1">Applicants</div>
                  <div className="text-sm text-gray-700 mb-2">{cat.applicants}</div>
                  <div className="text-xs text-gray-400 mb-1">Key Subjects</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.subjects.map((subj, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-auto bg-black text-white rounded-full px-4 py-2 text-sm font-medium shadow hover:bg-blue-300 hover:scale-105 transition"
                    onClick={() => navigate(`/blogs`)}
                  >
                    Explore Resources
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-10">
            <button
              className="w-full sm:w-96 p-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
              onClick={() => navigate(`/Exams`)}
            >
              Explore More
            </button>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-[#E5E4E2] text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose ExamAce?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-12">
            Experience the future of exam preparation with cutting-edge technology and proven methodologies
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-2">
            {[
              { icon: <BsBook />, label: "Smart Learning", desc: "AI-powered personalized study plans" },
              { icon: <LuChartNoAxesCombined />, label: "Progress Tracking", desc: "Real-time performance analytics" },
              { icon: <SiCodementor />, label: "Expert Mentorship", desc: "1-on-1 guidance from toppers" },
              { icon: <TfiWrite />, label: "Mock Tests", desc: "Unlimited practice with detailed solutions" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-1">{item.label}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

