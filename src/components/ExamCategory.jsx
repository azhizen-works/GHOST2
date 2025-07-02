  import NavBar from "./NavBar";
  import { useNavigate } from "react-router-dom";
  import { IoMdClose } from "react-icons/io";
  import { TiThMenu } from "react-icons/ti";
  import { useState } from "react";
  import Footer from "./Footer";

  // DATA: Add as many categories and exams as you want!
  const examCategories = [
      {
          id: "ssc",
          name: "SSC Exams",
          desc: "Staff Selection Commission",
          icon: <span role="img" aria-label="clipboard">📝</span>,
          exams: [
              { name: "SSC CGL", desc: "Combined Graduate Level" },
              { name: "SSC CHSL", desc: "Combined Higher Secondary Level" },
              { name: "SSC MTS", desc: "Multi Tasking Staff" },
              { name: "SSC JE", desc: "Junior Engineer" },
              { name: "SSC GD", desc: "General Duty Constable" },
              { name: "SSC Selection Post", desc: "Phase XI Selection" },
              { name: "SSC Stenographer", desc: "Stenographer Grade C & D" },
              { name: "SSC CPO", desc: "Central Police Organisation" },
              { name: "SSC JHT", desc: "Junior Hindi Translator" },
          ],
      },
      {
          id: "banking",
          name: "Banking Exams",
          desc: "Banking Sector Recruitment",
          icon: <span role="img" aria-label="bank">🏦</span>,
          exams: [
              { name: "IBPS PO", desc: "Probationary Officer" },
              { name: "IBPS Clerk", desc: "Clerical Exam" },
              { name: "SBI PO", desc: "State Bank of India PO" },
              { name: "SBI Clerk", desc: "State Bank of India Clerk" },
              { name: "RBI Grade B", desc: "Reserve Bank of India Officer" },
              { name: "RBI Assistant", desc: "Reserve Bank of India Assistant" },
              { name: "IBPS RRB Officer", desc: "Regional Rural Banks Officer" },
              { name: "IBPS RRB Assistant", desc: "Regional Rural Banks Assistant" },
          ],
      },
      {
          id: "railway",
          name: "Railway Exams",
          desc: "Railway Recruitment Board",
          icon: <span role="img" aria-label="train">🚂</span>,
          exams: [
              { name: "RRB NTPC", desc: "Non-Technical Popular Categories" },
              { name: "RRB ALP", desc: "Assistant Loco Pilot" },
              { name: "RRB Group D", desc: "Group D Recruitment" },
              { name: "RRB JE", desc: "Junior Engineer" },
              { name: "RRB Paramedical", desc: "Paramedical Categories" },
              { name: "RRB Ministerial", desc: "Ministerial & Isolated Categories" },
          ],
      },
      {
          id: "upsc",
          name: "UPSC Exams",
          desc: "Union Public Service Commission",
          icon: <span role="img" aria-label="government">🏛️</span>,
          exams: [
              { name: "UPSC CSE", desc: "Civil Services Examination" },
              { name: "UPSC CDS", desc: "Combined Defence Services" },
              { name: "UPSC NDA", desc: "National Defence Academy" },
              { name: "UPSC CAPF", desc: "Central Armed Police Forces" },
              { name: "UPSC IES", desc: "Indian Engineering Services" },
              { name: "UPSC IFS", desc: "Indian Forest Services" },
          ],
      },
      {
          id: "defence",
          name: "Defence Exams",
          desc: "Armed Forces Recruitment",
          icon: <span role="img" aria-label="crossed swords">⚔️</span>,
          exams: [
              { name: "NDA", desc: "National Defence Academy" },
              { name: "CDS", desc: "Combined Defence Services" },
              { name: "AFCAT", desc: "Air Force Common Admission Test" },
              { name: "Indian Coast Guard", desc: "Assistant Commandant" },
              { name: "Territorial Army", desc: "Territorial Army Officer" },
          ],
      },
      {
          id: "police",
          name: "Police Exams",
          desc: "Police Force Recruitment",
          icon: <span role="img" aria-label="police">👮‍♂️</span>,
          exams: [
              { name: "SI Exam", desc: "Sub-Inspector" },
              { name: "Constable Exam", desc: "Police Constable" },
              { name: "ASI Exam", desc: "Assistant Sub-Inspector" },
              { name: "Inspector Exam", desc: "Police Inspector" },
              { name: "Delhi Police Head Constable", desc: "Head Constable" },
          ],
      },
      {
          id: "statepsc",
          name: "State PSC Exams",
          desc: "State Public Service Commissions",
          icon: <span role="img" aria-label="office">🏢</span>,
          exams: [
              { name: "TNPSC", desc: "Tamil Nadu PSC" },
              { name: "MPSC", desc: "Maharashtra PSC" },
              { name: "UPPSC", desc: "Uttar Pradesh PSC" },
              { name: "BPSC", desc: "Bihar PSC" },
              { name: "APPSC", desc: "Andhra Pradesh PSC" },
              { name: "WBPSC", desc: "West Bengal PSC" },
          ],
      },
      {
          id: "teaching",
          name: "Teaching Exams",
          desc: "Teaching Eligibility Tests",
          icon: <span role="img" aria-label="teacher">👩‍🏫</span>,
          exams: [
              { name: "CTET", desc: "Central Teacher Eligibility Test" },
              { name: "TET", desc: "State Teacher Eligibility Test" },
              { name: "KVS", desc: "Kendriya Vidyalaya Sangathan" },
              { name: "NVS", desc: "Navodaya Vidyalaya Samiti" },
          ],
      },
      {
          id: "medical",
          name: "Medical Exams",
          desc: "Medical Entrance & Recruitment",
          icon: <span role="img" aria-label="doctor">🩺</span>,
          exams: [
              { name: "NEET", desc: "Medical UG Entrance" },
              { name: "AIIMS", desc: "AIIMS MBBS Entrance" },
              { name: "JIPMER", desc: "JIPMER Entrance" },
              { name: "AIIMS Nursing", desc: "Nursing Officer" },
          ],
      },
      {
          id: "engineering",
          name: "Engineering Exams",
          desc: "Engineering Entrance & Recruitment",
          icon: <span role="img" aria-label="gear">⚙️</span>,
          exams: [
              { name: "GATE", desc: "Graduate Aptitude Test in Engineering" },
              { name: "JEE Main", desc: "Joint Entrance Exam Main" },
              { name: "JEE Advanced", desc: "JEE Advanced" },
          ],
      },
      {
          id: "law",
          name: "Law Exams",
          desc: "Law Entrance & Judicial Exams",
          icon: <span role="img" aria-label="scales">⚖️</span>,
          exams: [
              { name: "CLAT", desc: "Common Law Admission Test" },
              { name: "AILET", desc: "All India Law Entrance Test" },
              { name: "Judicial Services", desc: "State Judiciary Exam" },
          ],
      },
      {
          id: "insurance",
          name: "Insurance Exams",
          desc: "Insurance Sector Recruitment",
          icon: <span role="img" aria-label="umbrella">☂️</span>,
          exams: [
              { name: "LIC AAO", desc: "LIC Assistant Administrative Officer" },
              { name: "NIACL AO", desc: "New India Assurance AO" },
              { name: "UIIC AO", desc: "United India Insurance AO" },
          ],
      },
      {
          id: "techtalent",
          name: "IT/Tech Talent Exams",
          desc: "IT, Software and Technical Talent",
          icon: <span role="img" aria-label="laptop">💻</span>,
          exams: [
              { name: "NIELIT", desc: "National Institute of Electronics & IT" },
              { name: "ISRO Scientist", desc: "ISRO Scientist Exam" },
              { name: "DRDO CEPTAM", desc: "DRDO Technical Cadre" },
          ],
      },
      {
          id: "forest",
          name: "Forest Service Exams",
          desc: "Indian & State Forest Services",
          icon: <span role="img" aria-label="tree">🌲</span>,
          exams: [
              { name: "IFS", desc: "Indian Forest Service" },
              { name: "State Forest Service", desc: "State Forest Service" },
          ],
      },
      {
          id: "paramedical",
          name: "Paramedical Exams",
          desc: "Allied Medical Recruitment",
          icon: <span role="img" aria-label="syringe">💉</span>,
          exams: [
              { name: "AIIMS Nursing", desc: "Nursing Officer" },
              { name: "RRB Paramedical", desc: "Railway Paramedical Staff" },
          ],
      },
      {
          id: "agriculture",
          name: "Agriculture Exams",
          desc: "Agriculture Sector Recruitment",
          icon: <span role="img" aria-label="seedling">🌱</span>,
          exams: [
              { name: "ICAR AIEEA", desc: "ICAR Entrance" },
              { name: "NABARD", desc: "NABARD Officer" },
          ],
      },
      {
          id: "army",
          name: "Army Exams",
          desc: "Indian Army Recruitment",
          icon: <span role="img" aria-label="soldier">🪖</span>,
          exams: [
              { name: "Army GD", desc: "General Duty" },
              { name: "Army Clerk", desc: "Clerk Recruitment" },
              { name: "Army Technical", desc: "Technical Entry" },
          ],
      },
      {
          id: "navy",
          name: "Navy Exams",
          desc: "Indian Navy Recruitment",
          icon: <span role="img" aria-label="ship">🚢</span>,
          exams: [
              { name: "Navy SSR", desc: "Senior Secondary Recruit" },
              { name: "Navy AA", desc: "Artificer Apprentice" },
          ],
      },
      {
          id: "airforce",
          name: "Air Force Exams",
          desc: "Indian Air Force Recruitment",
          icon: <span role="img" aria-label="airplane">✈️</span>,
          exams: [
              { name: "Airmen Group X", desc: "Technical Trades" },
              { name: "Airmen Group Y", desc: "Non-Technical Trades" },
          ],
      },
      {
          id: "others",
          name: "Other Competitive Exams",
          desc: "Miscellaneous Govt Exams",
          icon: <span role="img" aria-label="sparkles">✨</span>,
          exams: [
              { name: "EPFO", desc: "Employees' Provident Fund Org" },
              { name: "FSSAI", desc: "Food Safety Exam" },
              { name: "ESIC", desc: "ESI Corporation Recruitment" },
          ],
      },
  ];

  export default function ExamCategory() {
    const [selected, setSelected] = useState("ssc");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const selectedCategory = examCategories.find((cat) => cat.id === selected);
    const navigate = useNavigate();

    return (
      <>
        <div className="mb-10">
          <NavBar />
        </div>

        <div className="flex flex-col lg:flex-row min-h-screen p-10">
          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow">
            <h2 className="text-lg font-semibold">Exam Categories</h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <IoMdClose size={24} /> : <TiThMenu size={24} />}
            </button>
          </div>

          {/* Sidebar */}
          <aside
            className={`bg-white shadow-lg w-full lg:w-80 lg:block z-20 transition-all duration-300 ${
              sidebarOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="border-b px-6 py-4">
              <h2 className="font-semibold text-xl">Exam Categories</h2>
            </div>
            <ul>
              {examCategories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => {
                    setSelected(cat.id);
                    setSidebarOpen(false);
                  }}
                  className={`flex items-start gap-3 px-6 py-4 cursor-pointer transition ${
                    selected === cat.id
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="text-2xl mt-1">{cat.icon}</span>
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">{cat.name}</span>
                    <span className="text-gray-500 text-xs">{cat.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{selectedCategory?.name}</h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              {selectedCategory?.desc} – Choose your exam to start preparation (
              <span className="font-bold">{selectedCategory?.exams.length}</span>)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory?.exams.map((exam) => (
                <div
                  key={exam.name}
                  className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border hover:shadow-md transition group cursor-pointer"
                  onClick={() => navigate(`/blogs`)}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full flex items-center justify-center bg-pink-100 text-2xl">
                      📝
                    </span>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-blue-600 transition">
                        {exam.name}
                      </h3>
                      <p className="text-sm text-gray-500">{exam.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </>
    );
  }




