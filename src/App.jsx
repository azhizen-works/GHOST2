import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Exams from './components/Exams';
import Blogs from './components/Blogs';
import Dashboard from './components/Dashboard'
import ContestPage from './components/ContestPage';
import LoginSignUp from './components/LoginSignUp'
import Leaderboard from './components/LeaderBoard';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contest' element={<ContestPage />} />
        <Route path='/loginSignUp' element={<LoginSignUp />} />
        <Route path='/leaderBoard' element={<Leaderboard />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
