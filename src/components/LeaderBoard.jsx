import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Top 3 data
const top3 = [
  {
    initials: "PS",
    name: "Priya Sharma",
    location: "Mumbai",
    points: 2720,
    badge: "Expert",
    badgeBg: "bg-gray-200 text-gray-700",
    pointsColor: "text-gray-600",
    borderTop: "border-t-4 border-gray-300",
    icon: (
      <span className="text-2xl hidden md:inline" title="Silver">
        🥈
      </span>
    ),
  },
  {
    initials: "RK",
    name: "Rajesh Kumar",
    location: "Delhi",
    points: 2850,
    badge: "Champion",
    badgeBg: "bg-yellow-200 text-yellow-800",
    pointsColor: "text-yellow-500",
    borderTop: "border-t-4 border-yellow-400",
    icon: (
      <span className="text-2xl hidden md:inline" title="Champion">
        👑
      </span>
    ),
  },
  {
    initials: "AS",
    name: "Amit Singh",
    location: "Bangalore",
    points: 2580,
    badge: "Master",
    badgeBg: "bg-pink-200 text-pink-700",
    pointsColor: "text-pink-500",
    borderTop: "border-t-4 border-pink-400",
    icon: (
      <span className="text-2xl hidden md:inline" title="Bronze">
        🥉
      </span>
    ),
  },
];

// Rankings data
const rankings = [
  {
    rank: 1,
    initials: "RK",
    name: "Rajesh Kumar",
    location: "Delhi",
    points: 2850,
    winRate: 48,
    streak: 5,
    badge: "Champion",
    badgeColor: "bg-yellow-200 text-yellow-800",
    icon: "👑",
    iconLabel: "Champion",
  },
  {
    rank: 2,
    initials: "PS",
    name: "Priya Sharma",
    location: "Mumbai",
    points: 2720,
    winRate: 45,
    streak: 3,
    badge: "Expert",
    badgeColor: "bg-gray-200 text-gray-700",
    icon: "🥈",
    iconLabel: "Silver",
  },
  {
    rank: 3,
    initials: "AS",
    name: "Amit Singh",
    location: "Bangalore",
    points: 2580,
    winRate: 40,
    streak: 2,
    badge: "Master",
    badgeColor: "bg-pink-200 text-pink-700",
    icon: "🥉",
    iconLabel: "Bronze",
  },
  {
    rank: 4,
    initials: "SP",
    name: "Sneha Patel",
    location: "Ahmedabad",
    points: 2450,
    winRate: 39,
    streak: 4,
    badge: "Expert",
    badgeColor: "bg-gray-100 text-gray-700",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 5,
    initials: "VG",
    name: "Vikram Gupta",
    location: "Chennai",
    points: 2320,
    winRate: 32,
    streak: 2,
    badge: "Advanced",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 6,
    initials: "KR",
    name: "Kavya Reddy",
    location: "Hyderabad",
    points: 2190,
    winRate: 31,
    streak: 2,
    badge: "Advanced",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 7,
    initials: "AM",
    name: "Arjun Mehta",
    location: "Pune",
    points: 2050,
    winRate: 27,
    streak: 1,
    badge: "Intermediate",
    badgeColor: "bg-green-100 text-green-600",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 8,
    initials: "PJ",
    name: "Pooja Jain",
    location: "Jaipur",
    points: 1920,
    winRate: 21,
    streak: 1,
    badge: "Intermediate",
    badgeColor: "bg-green-100 text-green-700",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 9,
    initials: "RA",
    name: "Rohit Agarwal",
    location: "Lucknow",
    points: 1800,
    winRate: 23,
    streak: 1,
    badge: "Beginner",
    badgeColor: "bg-orange-100 text-orange-500",
    icon: "",
    iconLabel: "",
  },
  {
    rank: 10,
    initials: "NV",
    name: "Neha Verma",
    location: "Indore",
    points: 1680,
    winRate: 17,
    streak: 1,
    badge: "Beginner",
    badgeColor: "bg-orange-100 text-orange-500",
    icon: "",
    iconLabel: "",
  },
];

const categoryLeaders = [
  { name: "Rajesh Kumar", category: "UPSC", percent: 95 },
  { name: "Priya Sharma", category: "SSC", percent: 92 },
  { name: "Amit Singh", category: "Banking", percent: 89 },
];

export default function Leaderboard() {
  const handleLoadMore = () => alert("Loading more rankings...");
  const handleJoinNextContest = () => alert("You have joined the next contest!");

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#e0e0e04b] py-8 px-2 md:px-12 font-GentiumBookPlus">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-[#272727]">
            Leaderboard
          </h1>
          <p className="mt-2 text-lg text-[#272727]">
            See how you rank against other competitive exam aspirants based on weekly<br />
            contest performance
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          {top3.map((user, idx) => (
            <div
              key={user.initials}
              className={`relative bg-white rounded-xl shadow-md hover:scale-105 px-8 pt-8 pb-6 w-64 min-h-[230px] flex flex-col items-center ${user.borderTop} transition`}
              style={{ marginTop: idx === 1 ? "-24px" : "0", zIndex: idx === 1 ? 10 : 1 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-3 bg-gray-100 text-gray-600">
                {user.initials}
              </div>
              <div className="mt-2 mb-1">{user.icon}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{user.name}</div>
              <div className="text-sm text-gray-400 mb-2">{user.location}</div>
              <div className={`text-2xl font-bold mb-1 ${user.pointsColor}`}>{user.points}</div>
              <span className={`px-4 py-1 rounded-full text-xs font-bold ${user.badgeBg}`}>{user.badge}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Left: Overall Rankings */}
          <div className="flex-1 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl p-5">
              <h2 className="text-lg font-bold text-[#272727] mb-3">Overall Rankings</h2>







              <div className="w-full">
                {/* Table Header */}
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4 px-2 py-2 border-b font-semibold text-sm text-gray-500">
                  <div>Rank</div>
                  <div>Name</div>
                  <div>Location</div>
                  <div>Points</div>
                  <div>Badge</div>
                  {/* <div className="hidden md:block">Icon</div> */}
                </div>

                {/* Table Rows */}
                {rankings.map((item) => (
                  <div
                    key={item.rank}
                    className="grid grid-cols-4 md:grid-cols-5 gap-4 items-center px-2 py-4 border-b text-sm font-medium"
                  >
                    {/* Rank */}
                    <div className="text-gray-600 ml-4">{item.rank}</div>

                    {/* Name */}
                    <div className="text-gray-800">{item.name}</div>
                    <div className="text-[#272727]">{item.location}</div>


                    {/* Points */}
                    <div className="text-violet-600 font-bold">{item.points}</div>
                    {/* <div className="text-gray-800">{item.winRate} %</div> */}
                    {/* <div className="text-gray-800">{item.streak}</div> */}

                    {/* Badge */}
                    <div>
                      {item.badge && (
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>




              <div className="flex justify-center mt-4">
                <button
                  className="bg-[#e0e0e0] hover:bg-[#272727] hover:scale-105 text-gray-800 hover:text-white px-6 py-2 rounded-lg font-bold shadow transition"
                  onClick={handleLoadMore}
                  type="button"
                >
                  Load More Rankings
                </button>
              </div>
            </div>
          </div>

          {/* Right: Side Cards */}
          <div className="flex flex-col gap-8 w-full lg:w-80">
            <div className="bg-white rounded-2xl shadow-xl p-5">
              <h3 className="font-bold text-gray-700 mb-3">Category Leaders</h3>
              <div className="space-y-4">
                {categoryLeaders.map((lead, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-800">{lead.name}</div>
                      <div className="text-xs text-gray-400">{lead.category}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-violet-500">{lead.percent}%</span>
                      <span className="text-violet-300 text-lg">★</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl shadow-xl p-5 bg-gradient-to-br from-[#e0e0e04b] to-[#272727] text-white">
              <h3 className="font-bold mb-6">Your Performance</h3>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between">
                  <span>Current Rank</span>
                  <span className="font-bold">#45</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Points</span>
                  <span className="font-bold">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span>Contests Won</span>
                  <span className="font-bold">2</span>
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-2 bg-white text-[#272727] font-bold rounded-lg px-4 py-2 shadow hover:bg-[#e0e0e0] hover:scale-105 transition"
                onClick={handleJoinNextContest}
                type="button"
              >
                <span role="img" aria-label="dart">🎯</span> Join Next Contest
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
