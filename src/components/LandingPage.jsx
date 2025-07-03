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
    color: "bg-[#61f2f5]",
    icon: <FaLandmark size={32} className="text-[#2d3142]" />,
  },
  {
    title: "SSC",
    description: "Staff Selection Commission",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaUserFriends size={32} className="text-[#2d3142]" />,
  },
  {
    title: "Banking",
    description: "IBPS, SBI, RBI Exams",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaUniversity size={32} className="text-[#2d3142]" />,
  },
  {
    title: "Railway",
    description: "RRB & Railway Recruitment",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaTrain size={32} className="text-[#2d3142]" />,
  },
  {
    title: "Defence",
    description: "Army, Air Force, Navy Exams",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaShieldAlt size={32} className="text-[#2d3142]" />,
  },
  {
    title: "State PSC",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaRegBuilding size={32} className="text-[#2d3142]" />,
  },
  {
    title: "TNPSC",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaRegBuilding size={32} className="text-[#2d3142]" />,
  },
  {
    title: "IAS",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-[#61f2f5]",
    icon: <FaRegBuilding size={32} className="text-[#2d3142]" />,
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
      <div className="min-h-screen overflow-x-hidden text-white font-GentiumBookPlus">

        {/* Hero Section */}
        <div
          className="relative bg-[#F8FAFC]">
          <section className="relative text-center py-16 px-4 sm:px-6 md:px-8 text-white">
            <div className="absolute inset-0 z-0" />
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="flex flex-wrap justify-center items-center w-full sm:w-96 mx-auto gap-2 sm:gap-3 text-[#272727] px-4 py- font-semibold mb-6 font-Felipa text-2xl">
                <BsRocketTakeoffFill className='text-red-500' /> India's #1 Government Exam Platform
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-[#272727]">Your Dream Job</h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#C084FC] text-transparent bg-clip-text">
                Awaits You
              </h3>
              <p className="text-base sm:text-lg mb-8 text-[#272727]">
                Master UPSC, SSC, Banking & more with AI-powered learning,<br />
                expert mentorship, and personalized study plans<br />
                designed for your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-xl mx-auto">
                <div className="flex items-center px-4 py-2 bg-[#bcccdcbd] rounded-md w-full sm:w-72 text-left text-sm text-white">
                  <IoSearch className='w-6 h-5 text-[#272727]' />
                  <input
                    type="text"
                    placeholder="Search your dream exam..."
                    className="bg-transparent outline-none px-2 w-full text-[#2D3142]"
                  />
                </div>
                <button className="bg-[#D9EAFD] text-black px-6 py-2 rounded-md font-semibold hover:opacity-90">
                  Start Learning Free
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-sm text-center">
                {[
                  ['50L+', 'Success Stories', '#C084FC'],
                  ['98%', 'Success Rate', '#F472B6'],
                  ['500+', 'Expert Mentors', '#356A04'],
                  ['24/7', 'Live Support', '#34D399'],
                ].map(([num, label, color], idx) => (
                  <div
                    key={idx}
                    className="px-4 py-6 rounded-xl backdrop-blur-sm bg-[#bcccdc55] shadow-lg"
                  >
                    <p className="text-2xl font-bold" style={{ color }}>{num}</p>
                    <p className="text-[#272727]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Category Section */}
        <section className="py-20 px-4 bg-[#e0e0e04b] text-white text-center">
          <div className="flex flex-col items-center w-full mt-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#272727]">Choose Your Exam Category</h1>
            <p className="text-base md:text-lg text-[#272727] mb-8 max-w-3xl">
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
                className="w-full sm:w-[300px] bg-[#ffffff] rounded-lg shadow-sm flex flex-col transition"
                style={{ minHeight: 305 }}
              >
                <div className={`flex items-center justify-between rounded-lg px-4 py-4 ${cat.color}`}>
                  <div>
                    <div className="text-lg font-semibold text-[#2d3142] text-start">{cat.title}</div>
                    <div className="text-sm text-[#2d3142]">{cat.description}</div>
                  </div>
                  <div>{cat.icon}</div>
                </div>
                <div className="flex flex-col flex-1 px-5 py-4 text-start gap-1">
                  <div className="text-xs text-[#2d3142] mb-1">Applicants</div>
                  <div className="text-sm font-semibold text-[#272727] mb-2">{cat.applicants}</div>
                  <div className="text-xs text-[#2d3142] mb-1">Key Subjects</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.subjects.map((subj, i) => (
                      <span
                        key={i}
                        className="bg-[#b19f911b] rounded-full px-3 py-1 text-xs text-gray-700"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-auto bg-[#2d3142] text-white rounded-lg px-4 py-2 text-sm font-medium shadow hover:bg-[#2d3142] hover:scale-105 transition"
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
              className="w-full sm:w-96 p-3 bg-[#2D3142] rounded-lg font-semibold hover:bg-[#2d3142d3] transition"
              onClick={() => navigate(`/examCategory`)}
            >
              Explore More
            </button>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-[##F8FAFC] text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#272727]">Why Choose ExamAce?</h2>
          <p className="text-[#272727] max-w-xl mx-auto mb-12">
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
                className="bg-[#ffffff] backdrop-blur-sm shadow-md rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="bg-[#61f2f5] text-[#272727] text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-1 text-[#272727]">{item.label}</h4>
                <p className="text-sm text-[#272727]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

