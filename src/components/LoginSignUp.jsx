// // import React, { useState } from 'react';
// // import {
// //   FiUser,
// //   FiMail,
// //   FiLock,
// //   FiEye,
// //   FiEyeOff,
// //   FiX,
// // } from 'react-icons/fi';
// // import { useNavigate } from 'react-router-dom';

// // export default function AuthPage({ onClose }) {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirm, setShowConfirm] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleDummyLogin = () => {
// //     if (email === 'test@example.com' && password === '123456') {
// //       alert('Login successful! ✅');
// //       navigate(`/contest`)
// //     } else {
// //       alert('Invalid credentials ❌');
// //     }
// //   };

// //   const handleSignup = () => {
// //     if (password !== confirmPassword) {
// //       alert('Passwords do not match ❗');
// //     } else {
// //       alert('Account created! 🎉');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e014c] via-[#300871] to-[#5a267a] relative overflow-hidden">
// //       {/* Background circles */}
// //       <div className="absolute w-60 h-60 bg-purple-300 rounded-full blur-[120px] top-[-50px] left-[-50px] opacity-30" />
// //       <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-[120px] bottom-[-60px] left-12 opacity-30" />
// //       <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-[100px] top-[-40px] right-[-40px] opacity-20" />

// //       <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-10 w-full max-w-md text-white">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-300 hover:text-white text-lg"
// //         >
// //           <FiX onClick={() => navigate(`/`)} />
// //         </button>

// //         {/* Logo + Title */}
// //         <div className="flex items-center justify-center mb-6 mt-4">
// //           <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] p-2 rounded-lg">
// //             <span className="text-xl">📘</span>
// //           </div>
// //           <div className="ml-3 text-left">
// //             <h1 className="text-lg font-bold">ExamAce</h1>
// //             <p className="text-xs text-gray-300">Dream • Learn • Achieve</p>
// //           </div>
// //         </div>

// //         <h2 className="text-2xl font-semibold text-center mb-2">
// //           {isLogin ? 'Welcome Back' : 'Create Account'}
// //         </h2>
// //         <p className="text-center text-sm text-gray-300 mb-6">
// //           {isLogin
// //             ? 'Sign in to continue your exam preparation journey'
// //             : 'Start your exam preparation journey today'}
// //         </p>

// //         {/* Email */}
// //         <div className="mb-4">
// //           <label className="block text-sm mb-1">Email</label>
// //           <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
// //             <FiMail className="text-gray-300" />
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               className="bg-transparent outline-none text-sm px-2 w-full text-white"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* Password */}
// //         <div className="mb-4">
// //           <label className="block text-sm mb-1">Password</label>
// //           <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
// //             <FiLock className="text-gray-300" />
// //             <input
// //               type={showPassword ? 'text' : 'password'}
// //               placeholder={isLogin ? 'Enter your password' : 'Create a password'}
// //               className="bg-transparent outline-none text-sm px-2 w-full text-white"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <button
// //               type="button"
// //               onClick={() => setShowPassword(!showPassword)}
// //               className="text-gray-400 hover:text-gray-200"
// //             >
// //               {showPassword ? <FiEyeOff /> : <FiEye />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Confirm Password */}
// //         {!isLogin && (
// //           <>
// //             <div className="mb-4">
// //               <label className="block text-sm mb-1">Confirm Password</label>
// //               <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
// //                 <FiLock className="text-gray-300" />
// //                 <input
// //                   type={showConfirm ? 'text' : 'password'}
// //                   placeholder="Confirm password"
// //                   className="bg-transparent outline-none text-sm px-2 w-full text-white"
// //                   value={confirmPassword}
// //                   onChange={(e) => setConfirmPassword(e.target.value)}
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowConfirm(!showConfirm)}
// //                   className="text-gray-400 hover:text-gray-200"
// //                 >
// //                   {showConfirm ? <FiEyeOff /> : <FiEye />}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Checkbox */}
// //             <div className="flex items-center text-sm mb-6">
// //               <input type="checkbox" className="mr-2 accent-pink-500" />
// //               <label>
// //                 I agree to the{' '}
// //                 <span className="underline cursor-pointer text-purple-200">
// //                   Terms of Service
// //                 </span>{' '}
// //                 and{' '}
// //                 <span className="underline cursor-pointer text-purple-200">
// //                   Privacy Policy
// //                 </span>
// //               </label>
// //             </div>
// //           </>
// //         )}

// //         {/* Submit Button */}
// //         <button
// //           onClick={isLogin ? handleDummyLogin : handleSignup}
// //           className="w-full py-2 rounded-md bg-gradient-to-r from-[#9333EA] to-[#DB2777] font-semibold text-white hover:opacity-90 transition mb-4"
// //         >
// //           {isLogin ? 'Sign in' : 'Create account'}
// //         </button>

// //         {/* Toggle link */}
// //         <p className="text-sm text-center text-gray-300">
// //           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
// //           <span
// //             className="text-white font-semibold cursor-pointer hover:underline"
// //             onClick={() => setIsLogin(!isLogin)}
// //           >
// //             {isLogin ? 'Sign up' : 'Sign in'}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }







// // Imports
// import React, { useState } from 'react';
// import {
//   FiUser,
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiX,
//   FiPhone,
//   FiHome,
//   FiImage,
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';

// export default function AuthPage({ onClose }) {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [qualification, setQualification] = useState('');
//   const [stream, setStream] = useState('');
// //   const [photo, setPhoto] = useState(null);

//   const navigate = useNavigate();

//   const handleDummyLogin = () => {
//     if (email === 'test@example.com' && password === '123456') {
//       alert('Login successful! ✅');
//       navigate(`/contest`);
//     } else {
//       alert('Invalid credentials ❌');
//     }
//   };

//   const handleSignup = () => {
//     if (password !== confirmPassword) {
//       alert('Passwords do not match ❗');
//       return;
//     }

//     const formData = {
//       name,
//       email,
//       phone,
//       address,
//       qualification,
//       stream,
//     //   photo,
//     };

//     console.log('User Enrolled:', formData);
//     alert('Account created and course enrolled successfully! 🎉');
//     navigate(`/contest`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e014c] via-[#300871] to-[#5a267a] relative overflow-hidden">
//       {/* Background circles */}
//       <div className="absolute w-60 h-60 bg-purple-300 rounded-full blur-[120px] top-[-50px] left-[-50px] opacity-30" />
//       <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-[120px] bottom-[-60px] left-12 opacity-30" />
//       <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-[100px] top-[-40px] right-[-40px] opacity-20" />

//       <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-10 w-full max-w-md text-white">
//         {/* Close Button */}
//         <button
//           onClick={() => {
//             onClose?.();
//             navigate('/');
//           }}
//           className="absolute top-4 right-4 text-gray-300 hover:text-white text-lg"
//         >
//           <FiX />
//         </button>

//         {/* Logo + Title */}
//         <div className="flex items-center justify-center mb-6 mt-4">
//           <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] p-2 rounded-lg">
//             <span className="text-xl">📘</span>
//           </div>
//           <div className="ml-3 text-left">
//             <h1 className="text-lg font-bold">ExamAce</h1>
//             <p className="text-xs text-gray-300">Dream • Learn • Achieve</p>
//           </div>
//         </div>

//         <h2 className="text-2xl font-semibold text-center mb-2">
//           {isLogin ? 'Welcome Back' : 'Course Enrollment'}
//         </h2>
//         <p className="text-center text-sm text-gray-300 mb-6">
//           {isLogin
//             ? 'Sign in to continue your exam preparation journey'
//             : 'Fill your details to enroll in this course'}
//         </p>

//         {/* COMMON FIELD - Email */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Email</label>
//           <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//             <FiMail className="text-gray-300" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent outline-none text-sm px-2 w-full text-white"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* PASSWORD */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Password</label>
//           <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//             <FiLock className="text-gray-300" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder={isLogin ? 'Enter your password' : 'Create a password'}
//               className="bg-transparent outline-none text-sm px-2 w-full text-white"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-400 hover:text-gray-200"
//             >
//               {showPassword ? <FiEyeOff /> : <FiEye />}
//             </button>
//           </div>
//         </div>

//         {/* SIGNUP-ONLY FIELDS
//         {!isLogin && (
//           <>
//             CONFIRM PASSWORD
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Confirm Password</label>
//               <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//                 <FiLock className="text-gray-300" />
//                 <input
//                   type={showConfirm ? 'text' : 'password'}
//                   placeholder="Confirm password"
//                   className="bg-transparent outline-none text-sm px-2 w-full text-white"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirm(!showConfirm)}
//                   className="text-gray-400 hover:text-gray-200"
//                 >
//                   {showConfirm ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </div>
//             </div>

//             FULL NAME
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Full Name</label>
//               <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//                 <FiUser className="text-gray-300" />
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="bg-transparent outline-none text-sm px-2 w-full text-white"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//             </div>

//             PHONE
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Phone</label>
//               <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//                 <FiPhone className="text-gray-300" />
//                 <input
//                   type="tel"
//                   placeholder="Mobile number"
//                   className="bg-transparent outline-none text-sm px-2 w-full text-white"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//             </div>

//             ADDRESS
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Address</label>
//               <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//                 <FiHome className="text-gray-300" />
//                 <input
//                   type="text"
//                   placeholder="Your full address"
//                   className="bg-transparent outline-none text-sm px-2 w-full text-white"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>
//             </div>

//             QUALIFICATION
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Qualification</label>
//               <select
//                 value={qualification}
//                 onChange={(e) => setQualification(e.target.value)}
//                 className="bg-white/5 border border-white/20 rounded-md px-3 py-2 text-sm w-full text-white outline-none"
//               >
//                 <option value="">Select qualification</option>
//                 <option value="10th">10th</option>
//                 <option value="12th">12th</option>
//                 <option value="Diploma">Diploma</option>
//                 <option value="Graduate">Graduate</option>
//                 <option value="Post Graduate">Post Graduate</option>
//               </select>
//             </div>

//             STREAM
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Stream</label>
//               <input
//                 type="text"
//                 placeholder="Science / Commerce / Arts / etc."
//                 className="bg-white/5 border border-white/20 rounded-md px-3 py-2 text-sm w-full text-white outline-none"
//                 value={stream}
//                 onChange={(e) => setStream(e.target.value)}
//               />
//             </div>

//             PHOTO UPLOAD
//             <div className="mb-4">
//               <label className="block text-sm mb-1">Upload Photo</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//                 className="block text-white text-sm"
//               />
//             </div>

//             AGREEMENT
//             <div className="flex items-center text-sm mb-6">
//               <input type="checkbox" className="mr-2 accent-pink-500" />
//               <label>
//                 I agree to the{' '}
//                 <span className="underline text-purple-200 cursor-pointer">
//                   Terms of Service
//                 </span>{' '}
//                 and{' '}
//                 <span className="underline text-purple-200 cursor-pointer">
//                   Privacy Policy
//                 </span>
//               </label>
//             </div>
//           </>
//         )} */}



//         {!isLogin && (
//   <>
//     {/* Confirm Password */}
//     <div className="mb-4">
//       <label className="block text-sm mb-1">Confirm Password</label>
//       <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//         <FiLock className="text-gray-300" />
//         <input
//           type={showConfirm ? 'text' : 'password'}
//           placeholder="Confirm password"
//           className="bg-transparent outline-none text-sm px-2 w-full text-white"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button
//           type="button"
//           onClick={() => setShowConfirm(!showConfirm)}
//           className="text-gray-400 hover:text-gray-200"
//         >
//           {showConfirm ? <FiEyeOff /> : <FiEye />}
//         </button>
//       </div>
//     </div>

//     {/* Responsive Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {/* Full Name */}
//       <div className="w-full">
//         <label className="block text-sm mb-1">Full Name</label>
//         <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//           <FiUser className="text-gray-300" />
//           <input
//             type="text"
//             placeholder="Your full name"
//             className="bg-transparent outline-none text-sm px-2 w-full text-white"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Phone */}
//       <div className="w-full">
//         <label className="block text-sm mb-1">Phone</label>
//         <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//           <FiPhone className="text-gray-300" />
//           <input
//             type="tel"
//             placeholder="Mobile number"
//             className="bg-transparent outline-none text-sm px-2 w-full text-white"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Address (Full Width) */}
//       <div className="md:col-span-2">
//         <label className="block text-sm mb-1">Address</label>
//         <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
//           <FiHome className="text-gray-300" />
//           <input
//             type="text"
//             placeholder="Your full address"
//             className="bg-transparent outline-none text-sm px-2 w-full text-white"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Qualification */}
//       <div className="w-full">
//         <label className="block text-sm mb-1">Qualification</label>
//         <select
//           value={qualification}
//           onChange={(e) => setQualification(e.target.value)}
//           className="bg-white/5 border border-white/20 rounded-md px-3 py-2 text-sm w-full text-white outline-none"
//         >
//           <option value="">Select qualification</option>
//           <option value="10th">10th</option>
//           <option value="12th">12th</option>
//           <option value="Diploma">Diploma</option>
//           <option value="Graduate">Graduate</option>
//           <option value="Post Graduate">Post Graduate</option>
//         </select>
//       </div>

//       {/* Stream */}
//       <div className="w-full">
//         <label className="block text-sm mb-1">Stream</label>
//         <input
//           type="text"
//           placeholder="Science / Commerce / Arts / etc."
//           className="bg-white/5 border border-white/20 rounded-md px-3 py-2 text-sm w-full text-white outline-none"
//           value={stream}
//           onChange={(e) => setStream(e.target.value)}
//         />
//       </div>
//     </div>

//     {/* Agreement */}
//     <div className="flex items-center text-sm mt-6 mb-4">
//       <input type="checkbox" className="mr-2 accent-pink-500" />
//       <label>
//         I agree to the{' '}
//         <span className="underline text-purple-200 cursor-pointer">
//           Terms of Service
//         </span>{' '}
//         and{' '}
//         <span className="underline text-purple-200 cursor-pointer">
//           Privacy Policy
//         </span>
//       </label>
//     </div>
//   </>
// )}






//         {/* BUTTON */}
//         <button
//           onClick={isLogin ? handleDummyLogin : handleSignup}
//           className="w-full py-2 rounded-md bg-gradient-to-r from-[#9333EA] to-[#DB2777] font-semibold text-white hover:opacity-90 transition mb-4"
//         >
//           {isLogin ? 'Sign in' : 'Enroll Now'}
//         </button>

//         {/* TOGGLE LINK */}
//         <p className="text-sm text-center text-gray-300">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <span
//             className="text-white font-semibold cursor-pointer hover:underline"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? 'Sign up' : 'Sign in'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

























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
      <div className="min-h-screen py-10 px-4 flex items-center justify-center bg-gradient-to-br from-[#1e014c] via-[#300871] to-[#5a267a]">
      <div
        className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl w-full ${isLogin ? 'max-w-xl' : 'max-w-3xl'
          } p-6 md:p-8 text-white shadow-lg`}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
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
            <h1 className="text-lg font-bold">ExamAce</h1>
            <p className="text-xs text-gray-300">Dream • Learn • Achieve</p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          {isLogin ? 'Welcome Back' : 'Course Enrollment'}
        </h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          {isLogin
            ? 'Sign in to continue your journey'
            : 'Please fill out the details below'}
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
            <FiMail className="text-gray-300" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
            <FiLock className="text-gray-300" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
              placeholder="Enter password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="text-gray-400 hover:text-white"
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
              <label className="block text-sm mb-1">Confirm Password</label>
              <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
                <FiLock className="text-gray-300" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent outline-none text-sm px-2 w-full text-white"
                  placeholder="Confirm password"
                />
                <button
                  onClick={() => setShowConfirm(!showConfirm)}
                  type="button"
                  className="text-gray-400 hover:text-white"
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
                  <FiUser className="text-gray-300" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-white"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
                  <FiPhone className="text-gray-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-white"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Address</label>
                <div className="flex items-center border border-white/20 bg-white/5 px-3 py-2 rounded-md">
                  <FiHome className="text-gray-300" />
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="bg-transparent outline-none text-sm px-2 w-full text-white"
                    placeholder="Full address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Qualification</label>
                <select
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  className="w-full text-sm bg-white/5 border border-white/20 px-3 py-2 rounded-md text-white outline-none"
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
                <label className="block text-sm mb-1">Stream</label>
                <input
                  type="text"
                  name="stream"
                  value={form.stream}
                  onChange={handleChange}
                  placeholder="Science / Arts / Commerce"
                  className="w-full text-sm bg-white/5 border border-white/20 px-3 py-2 rounded-md text-white outline-none"
                />
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-center text-sm mt-6 mb-2">
              <input type="checkbox" className="mr-2 accent-pink-500" />
              <label>
                I agree to the{' '}
                <span className="underline text-purple-200 cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="underline text-purple-200 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          onClick={isLogin ? handleDummyLogin : handleSignup}
          className="w-full py-2 mt-4 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-semibold text-white hover:opacity-90 transition"
        >
          {isLogin ? 'Sign in' : 'Enroll Now'}
        </button>

        {/* Toggle */}
        <p className="text-sm text-center text-gray-300 mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-white font-semibold cursor-pointer hover:underline"
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
