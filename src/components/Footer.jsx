import React from 'react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {

  const navigate = useNavigate();


    return (
        <>
        {/* Footer */ }
        <footer className = "bg-[#1a1d2b] py-10 px-6 text-sm text-gray-300 border-t border-white/10" >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl">📘</span>
              <div>
                <h4 className="text-white font-semibold">GHOST</h4>
                <p className="text-xs text-gray-400 -mt-1">Dream • Learn • Achieve</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering millions of aspirants to achieve their government job dreams through innovative learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white cursor-pointer">About Us</a></li>
              <li><a className="hover:text-white cursor-pointer">Resources</a></li>
              <li><a onClick={() => navigate("/contact")} className="hover:text-white cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h4 className="text-white font-semibold mb-2">Popular Exams</h4>
            <ul className="space-y-1">
              <li><a className="hover:text-white cursor-pointer">UPSC CSE</a></li>
              <li><a className="hover:text-white cursor-pointer">SSC CGL</a></li>
              <li><a className="hover:text-white cursor-pointer">Banking PO</a></li>
              <li><a className="hover:text-white cursor-pointer">Railway Jobs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a onClick={() => navigate(`/contact`)} className="hover:text-white cursor-pointer">Help Center</a></li>
              <li><a onClick={() => navigate(`/contact`)} className="hover:text-white cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Live Chat</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          © 2025 GHOST. All rights reserved.
        </div>
      </footer >

        </>
        
  )
}

export default Footer