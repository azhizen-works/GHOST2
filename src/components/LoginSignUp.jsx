import React, { useState } from 'react';
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiPhone,
  FiHome,
  FiX,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function AuthPage({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    address: '',
    qualification: '',
    stream: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDummyLogin = () => {
    if (form.email === 'test@example.com' && form.password === '123456') {
      alert('✅ Login successful!');
      navigate('/contest');
    } else {
      alert('❌ Invalid credentials');
    }
  };

  const handleSignup = () => {
    if (form.password !== form.confirmPassword) {
      return alert('❗ Passwords do not match');
    }
    console.log('Enrolled User:', form);
    alert('🎉 Account created successfully!');
    navigate('/contest');
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen py-10 px-4 flex items-center justify-center bg-[#e0e0e04b] font-GentiumBookPlus">
      <div
        className={`relative bg-white/10 backdrop-blur-xl border border-white rounded-xl w-full ${isLogin ? 'max-w-xl' : 'max-w-3xl'
          } p-6 md:p-8 text-white shadow-lg`}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-white text-xl"
          onClick={() => {
            onClose?.();
            navigate('/');
          }}
        >
          <FiX />
        </button>

        {/* Logo + Title */}
        <div className="flex items-center justify-center mb-6 mt-2">
          <div className="bg-gradient-to-r from-pink-500 to-purple-700 p-2 rounded-lg">
            <span className="text-xl">📘</span>
          </div>
          <div className="ml-3 text-left">
            <h1 className="text-lg font-bold text-[#2d3142]">ExamAce</h1>
            <p className="text-xs text-[#2d3142]">Dream • Learn • Achieve</p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2 text-[#2d3142]">
          {isLogin ? 'Welcome Back' : 'Course Enrollment'}
        </h2>
        <p className="text-center text-sm text-[#2d3142] mb-6">
          {isLogin
            ? 'Sign in to continue your journey'
            : 'Please fill out the details below'}
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-[#2d3142]">Email</label>
          <div className="flex items-center border border-[#2d3142] px-3 py-2 rounded-md">
            <FiMail className="text-[#2d3142]" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-[#2d3142]">Password</label>
          <div className="flex items-center border border-[#2d3142] bg-white/5 px-3 py-2 rounded-md">
            <FiLock className="text-[#2d3142]" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
              placeholder="Enter password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="text-gray-400 hover:text-[#2d3142]"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* SIGN UP Fields */}
        {!isLogin && (
          <>
            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-[#2d3142]">Confirm Password</label>
              <div className="flex items-center border border-[#2d3142] bg-white/5 px-3 py-2 rounded-md">
                <FiLock className="text-[#2d3142]" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
                  placeholder="Confirm password"
                />
                <button
                  onClick={() => setShowConfirm(!showConfirm)}
                  type="button"
                  className="text-gray-400 hover:text-[#2d3142]"
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-[#2d3142]">Full Name</label>
                <div className="flex items-center border border-[#2d3142] bg-white/5 px-3 py-2 rounded-md">
                  <FiUser className="text-[#2d3142]" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#2d3142]">Phone</label>
                <div className="flex items-center border border-[#2d3142] bg-white/5 px-3 py-2 rounded-md">
                  <FiPhone className="text-[#2d3142]" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1 text-[#2d3142]">Address</label>
                <div className="flex items-center border border-[#2d3142] bg-white/5 px-3 py-2 rounded-md">
                  <FiHome className="text-[#2d3142]" />
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-[#2d3142]"
                    placeholder="Full address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#2d3142]">Qualification</label>
                <select
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  className="w-full text-sm bg-white/5 border border-[#2d3142] px-3 py-2 rounded-md text-[#2d3142] outline-none"
                >
                  <option value="">Select</option>
                  <option>10th</option>
                  <option>12th</option>
                  <option>Diploma</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#2d3142]">Stream</label>
                <input
                  type="text"
                  name="stream"
                  value={form.stream}
                  onChange={handleChange}
                  placeholder="Science / Arts / Commerce"
                  className="w-full text-sm bg-white/5 border border-[#2d3142] px-3 py-2 rounded-md text-[#2d3142] outline-none"
                />
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-center text-sm mt-6 mb-2">
              <input type="checkbox" className="mr-2 accent-[#2d3142]" />
              <label className='text-[#2d3142]'>
                I agree to the{' '}
                <span className="underline text-blue-500 cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="underline text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          onClick={isLogin ? handleDummyLogin : handleSignup}
          className="w-full py-2 mt-4 rounded-md bg-[#2d3142] font-semibold text-white hover:opacity-90 transition"
        >
          {isLogin ? 'Sign In' : 'Enroll Now'}
        </button>

        {/* Toggle */}
        <p className="text-sm text-center text-[#2d3142] mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-[#2d3142] font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </span>
        </p>
      </div>
    </div>
    </>
  );
}
