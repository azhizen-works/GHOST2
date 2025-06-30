// // Blogs.jsx
// import { useState, useEffect } from "react";
// import {
//     List, ChevronRight
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { LuBrain, LuAlarmClockMinus, LuCalendar } from "react-icons/lu";
// import { FaPray, FaHome, FaNewspaper } from "react-icons/fa";
// import { TbTargetArrow } from "react-icons/tb";
// import { BsRocketTakeoff } from "react-icons/bs";
// import { MdArrowBackIos } from "react-icons/md";
// import { TiThMenu  } from "react-icons/ti";
// import { IoMdClose } from "react-icons/io";
// import Footer from "./Footer";
// import NavBar from "./NavBar";

// const sections = [
//     { id: "introduction", title: "Introduction", icon: "📚", content: "Stress Managements..." },
//     { id: "active-recall", title: "Active Recall Techniques", icon: <LuBrain /> },
//     { id: "spaced-repetition", title: "Spaced Repetition System", icon: <LuCalendar /> },
//     { id: "time-management", title: "Strategic Time Management", icon: <LuAlarmClockMinus /> },
//     { id: "stress-management", title: "Stress & Mental Health", icon: <FaPray /> },
//     { id: "environment", title: "Optimal Study Environment", icon: <FaHome /> },
//     { id: "revision", title: "Effective Revision Strategies", icon: <FaNewspaper /> },
//     { id: "exam-day", title: "Exam Day Excellence", icon: <TbTargetArrow /> },
//     { id: "conclusion", title: "Your Success Journey", icon: <BsRocketTakeoff />, content: "Stress Managements..." }
// ];

// const videosBySection = {
//     "introduction": [["https://www.youtube.com/embed/dQw4w9WgXcQ"], ["https://www.youtube.com/embed/dQw4w9WgXcQ"], ["https://www.youtube.com/embed/dQw4w9WgXcQ"]],
//     "spaced-repetition": ["https://www.youtube.com/embed/z6zLfW6qKx4"],
//     "time-management": ["https://www.youtube.com/embed/mVdZtN06v2k"],
//     "stress-management": ["https://www.youtube.com/embed/jKo4nrg_Hfg"],
//     "environment": [["https://www.youtube.com/embed/_lA_RZIYgrM"]],
//     "revision": ["https://www.youtube.com/embed/eTLxrzLsU78"],
//     "exam-day": ["https://www.youtube.com/embed/_uQrJ0TkZlc"],
//     "conclusion": ["https://www.youtube.com/embed/l-gQLqv9f4o"]
// };

// const currentAffairs = [
//     {
//         title: "RBI Increases Repo Rate",
//         description: "The RBI increased the repo rate by 25 basis points to curb inflation.",
//         date: "June 30, 2025",
//     },
//     {
//         title: "India Launches Digital Rupee",
//         description: "The Finance Ministry announced plans for a regulated digital currency.",
//         date: "June 29, 2025",
//     },
//     {
//         title: "NASA-ISRO Satellite Collaboration",
//         description: "NISAR satellite project will launch by 2026 to monitor Earth's ecosystem.",
//         date: "June 28, 2025",
//     },
//     {
//         title: "NEET 2025 Delayed by One Week",
//         description: "Due to flood conditions in northern India, NEET exam postponed to July 10.",
//         date: "June 27, 2025",
//     },
// ];

// export default function Blogs() {
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const [activeSection, setActiveSection] = useState("");
//     const [showTOC, setShowTOC] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleScroll = () => {
//             const current = window.scrollY;
//             const height = document.body.scrollHeight - window.innerHeight;
//             setScrollProgress((current / height) * 100);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) setActiveSection(entry.target.id);
//             });
//         }, { threshold: 0.3 });

//         sections.forEach(({ id }) => {
//             const el = document.getElementById(id);
//             if (el) observer.observe(el);
//         });

//         return () => observer.disconnect();
//     }, []);

//     const scrollTo = (id) => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//         setShowTOC(false);
//     };

//     const Card = ({ className = "", children }) => (
//         <div className={`rounded-xl border bg-white shadow-sm ${className}`}>{children}</div>
//     );

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             <NavBar />

//             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
//                 <div
//                     className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
//                     style={{ width: `${scrollProgress}%` }}
//                 />
//             </div>

//             <div className="mx-auto px-4 sm:px-6 lg:px-8 py-5 mb-12">
//                 <div className="space-y-5 md:flex-row items-start md:items-center gap-4">
//                     <div
//                         className="flex gap-1 hover:text-blue-500 text-blue-500 p-2 rounded-md w-fit cursor-pointer" onClick={() => navigate(`/`)}>
//                         <span className="text-sm font-semibold flex items-center"><MdArrowBackIos /></span>
//                         <span className="text-sm font-semibold flex items-center">Back to Syllabus</span>
//                     </div>

//                     <div className="relative">
//                         <button
//                             onClick={() => setShowTOC(prev => !prev)}
//                             className="flex items-center gap-2 text-sm font-medium text-black px-4 py-2 rounded-full shadow mb-5"
//                         >
//                             {showTOC ? <IoMdClose />  : <TiThMenu />}
//                         </button>

//                         {showTOC && (
//                             <div className="absolute z-50 mt-2 w-80 bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[70vh] border border-gray-200">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div className="flex items-center gap-2">
//                                         <List className="w-5 h-5 text-blue-600" />
//                                         <h3 className="font-semibold text-gray-900">Table of Contents</h3>
//                                     </div>

//                                 </div>
//                                 <nav className="space-y-2">
//                                     {sections.map(({ id, title, icon }) => (
//                                         <button
//                                             key={id}
//                                             onClick={() => scrollTo(id)}
//                                             className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all duration-200 group ${activeSection === id
//                                                 ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
//                                                 : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"}`}
//                                         >
//                                             <span className="text-lg">{icon}</span>
//                                             <span className="text-sm font-medium flex-1">{title}</span>
//                                             <ChevronRight
//                                                 className={`w-4 h-4 transition-transform ${activeSection === id ? "rotate-90 text-blue-500" : "text-gray-400"}`}
//                                             />
//                                         </button>
//                                     ))}
//                                 </nav>
//                             </div>
//                         )}
//                     </div>


//                 </div>

//                 <div className="grid grid-cols-3 gap-5">
//                     {/* Scrollable Main Content */}
//                     <div className="col-span-2 h-[80vh] overflow-y-scroll pr-3 scrollbar-none">
//                         <div className="space-y-20">
//                             {sections.map(({ id, title, icon, content }) => (
//                                 <section id={id} key={id}>
//                                     <div className="flex items-center gap-3 mb-6">
//                                         <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
//                                         <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
//                                     </div>
//                                     <Card className="p-6">
//                                         <p className="text-gray-700 leading-relaxed mb-4">{content}</p>
//                                         <div className="flex overflow-x-auto space-x-6 pb-2 my-10">
//                                             {(videosBySection[id] || []).flat().map((url, index) => (
//                                                 <div key={index} className="flex-shrink-0 w-[320px] h-[180px] rounded-lg shadow-lg border border-gray-200 overflow-hidden">
//                                                     <iframe src={url} allowFullScreen className="w-full h-full" />
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </Card>
//                                 </section>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Current Affairs Panel */}
//                     <div className="col-start-3 h-[50vh] bg-white shadow-lg rounded-xl p-4 sticky top-24 overflow-hidden">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-800">📰 Current Affairs</h3>
//                         <div className="overflow-hidden h-full relative">
//                             <div className="space-y-6 animate-scroll-vertical">
//                                 {currentAffairs.map((item, index) => (
//                                     <div key={index} className="border border-gray-200 p-3 rounded-lg shadow-sm bg-white">
//                                         <h4 className="font-semibold text-sm text-blue-700">{item.title}</h4>
//                                         <p className="text-gray-600 text-xs mt-1">{item.description}</p>
//                                         <span className="text-xs text-gray-400 mt-2 block">🗓️ {item.date}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer/>
//         </div>
//     );
// }
















// Blogs.jsx
import { useState, useEffect } from "react";
import {
    List, ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LuBrain, LuAlarmClockMinus, LuCalendar } from "react-icons/lu";
import { FaPray, FaHome, FaNewspaper } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Footer from "./Footer";
import NavBar from "./NavBar";

const sections = [
    { id: "introduction", title: "Introduction", icon: "📚", content: "Stress Managements..." },
    { id: "active-recall", title: "Active Recall Techniques", icon: <LuBrain /> },
    { id: "spaced-repetition", title: "Spaced Repetition System", icon: <LuCalendar /> },
    { id: "time-management", title: "Strategic Time Management", icon: <LuAlarmClockMinus /> },
    { id: "stress-management", title: "Stress & Mental Health", icon: <FaPray /> },
    { id: "environment", title: "Optimal Study Environment", icon: <FaHome /> },
    { id: "revision", title: "Effective Revision Strategies", icon: <FaNewspaper /> },
    { id: "exam-day", title: "Exam Day Excellence", icon: <TbTargetArrow /> },
    { id: "conclusion", title: "Your Success Journey", icon: <BsRocketTakeoff />, content: "Stress Managements..." }
];

const videosBySection = {
    "introduction": [["https://www.youtube.com/embed/dQw4w9WgXcQ"], ["https://www.youtube.com/embed/dQw4w9WgXcQ"], ["https://www.youtube.com/embed/dQw4w9WgXcQ"]],
    "spaced-repetition": ["https://www.youtube.com/embed/z6zLfW6qKx4"],
    "time-management": ["https://www.youtube.com/embed/mVdZtN06v2k"],
    "stress-management": ["https://www.youtube.com/embed/jKo4nrg_Hfg"],
    "environment": [["https://www.youtube.com/embed/_lA_RZIYgrM"]],
    "revision": ["https://www.youtube.com/embed/eTLxrzLsU78"],
    "exam-day": ["https://www.youtube.com/embed/_uQrJ0TkZlc"],
    "conclusion": ["https://www.youtube.com/embed/l-gQLqv9f4o"]
};

const currentAffairs = [
    {
        title: "RBI Increases Repo Rate",
        description: "The RBI increased the repo rate by 25 basis points to curb inflation.",
        date: "June 30, 2025",
    },
    {
        title: "India Launches Digital Rupee",
        description: "The Finance Ministry announced plans for a regulated digital currency.",
        date: "June 29, 2025",
    },
    {
        title: "NASA-ISRO Satellite Collaboration",
        description: "NISAR satellite project will launch by 2026 to monitor Earth's ecosystem.",
        date: "June 28, 2025",
    },
    {
        title: "NEET 2025 Delayed by One Week",
        description: "Due to flood conditions in northern India, NEET exam postponed to July 10.",
        date: "June 27, 2025",
    },
    {
        title: "NASA-ISRO Satellite Collaboration",
        description: "NISAR satellite project will launch by 2026 to monitor Earth's ecosystem.",
        date: "June 28, 2025",
    },
    {
        title: "NEET 2025 Delayed by One Week",
        description: "Due to flood conditions in northern India, NEET exam postponed to July 10.",
        date: "June 27, 2025",
    },
];

export default function Blogs() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("");
    const [showTOC, setShowTOC] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            setScrollProgress((current / height) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { threshold: 0.3 });

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setShowTOC(false);
    };

    const Card = ({ className = "", children }) => (
        <div className={`rounded-xl border bg-white shadow-sm ${className}`}>{children}</div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <NavBar />

            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-5 mb-12">
                <div className="space-y-2 md:flex-row items-start md:items-center gap-4">
                    <div
                        className="flex gap-1 hover:text-blue-500 text-blue-500 p-2 rounded-md w-fit cursor-pointer"
                        onClick={() => navigate(`/`)}>
                        <span className="text-sm font-semibold flex items-center"><MdArrowBackIos /></span>
                        <span className="text-sm font-semibold flex items-center">Back to Syllabus</span>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowTOC(prev => !prev)}
                            className="flex items-center gap-2 text-sm font-medium text-black px-4 py-2 rounded-full shadow mb-5"
                        >
                            {showTOC ? <IoMdClose /> : <TiThMenu />}
                        </button>

                        {showTOC && (
                            <div className="absolute z-50 mt-2 w-80 bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[70vh] border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <List className="w-5 h-5 text-blue-600" />
                                        <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                                    </div>
                                </div>
                                <nav className="space-y-2">
                                    {sections.map(({ id, title, icon }) => (
                                        <button
                                            key={id}
                                            onClick={() => scrollTo(id)}
                                            className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all duration-200 group ${activeSection === id
                                                ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                                                : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"}`}
                                        >
                                            <span className="text-lg">{icon}</span>
                                            <span className="text-sm font-medium flex-1">{title}</span>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform ${activeSection === id ? "rotate-90 text-blue-500" : "text-gray-400"}`}
                                            />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2">
                    <div className="lg:col-span-2 overflow-y-scroll pr-3 scrollbar-none">
                        <div className="space-y-20">
                            {sections.map(({ id, title, icon, content }) => (
                                <section id={id} key={id}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
                                        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                                    </div>
                                    <Card className="p-6">
                                        <p className="text-gray-700 leading-relaxed mb-4">{content}</p>
                                        <div className="flex overflow-x-auto space-x-6 pb-2 my-10">
                                            {(videosBySection[id] || []).flat().map((url, index) => (
                                                <div key={index} className="flex-shrink-0 w-[320px] h-[180px] rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                                    <iframe src={url} allowFullScreen className="w-full h-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </section>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-start-3 h-[50vh] bg-white shadow-lg rounded-xl p-4 sticky top-24 overflow-hidden">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">📰 Current Affairs</h3>
                        <div className="overflow-hidden h-full relative">
                            <div className="space-y-6 animate-scroll-vertical">
                                {currentAffairs.map((item, index) => (
                                    <div key={index} className="border border-gray-200 p-3 rounded-lg shadow-sm bg-white">
                                        <h4 className="font-semibold text-sm text-blue-700">{item.title}</h4>
                                        <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                                        <span className="text-xs text-gray-400 mt-2 block">🗓️ {item.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
