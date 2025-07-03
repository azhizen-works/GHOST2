import React, { useState } from "react";
import NavBar from "./NavBar"
import Footer from "./Footer"

// FAQ data
const faqData = [
  {
    question: "What is the exam format and duration?",
    answer:
      "The exam consists of multiple-choice questions, essay questions, and practical assessments. The total duration is 3 hours with a 15-minute break. The exam is divided into sections: Section A (MCQs - 1 hour), Section B (Essays - 1.5 hours), and Section C (Practical - 30 minutes).",
    tag: "Exam",
    category: "exam",
  },
  {
    question: "How do I register for the exam?",
    answer: "You can register online through our portal by creating an account, filling out the application form, and paying the registration fee. Early registration is recommended as seats are limited. The registration deadline is typically 30 days before the exam date.",
    tag: "Registration",
    category: "registration",
  },
  {
    question: "What documents do I need to bring on exam day?",
    answer: "You must bring a valid government-issued photo ID (passport, driver's license, or national ID card), your exam admission ticket, and basic writing materials (pens, pencils, eraser). Electronic devices are not permitted in the exam hall.",
    tag: "Exam",
    category: "exam",
  },
  {
    question: "Can I reschedule my exam date?",
    answer: "Yes, you can reschedule your exam up to 7 days before the scheduled date through your online account. A rescheduling fee of $25 applies. Emergency rescheduling may be possible with proper documentation.",
    tag: "Registration",
    category: "registration",
  },
  {
    question: "How long does it take to receive exam results?",
    answer: "Results are typically available within 2-3 weeks after the exam date. You will receive an email notification when results are ready, and you can view them in your online account. Detailed score reports are provided for all sections.",
    tag: "Results",
    category: "results",
  },
  {
    question: "Is there a mobile app for exam preparation?",
    answer: "Yes, our ExamPrep mobile app is available for both iOS and Android devices. The app includes practice tests, study materials, progress tracking, and offline access to content. You can download it from the App Store or Google Play.",
    tag: "Technical",
    category: "technical",
  },
  {
    question: "What study materials are recommended?",
    answer: "We recommend our official study guide, practice tests, and online video tutorials. Additionally, past exam papers and reference materials are available in our resource library. Consider joining study groups for collaborative learning.",
    tag: "Study Materials",
    category: "study_materials",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page and enter your registered email address. You'll receive a password reset link within a few minutes. If you don't receive the email, check your spam folder or contact technical support.",
    tag: "Technical",
    category: "technical",
  },
];

// Tags for filtering
const tags = [
  { label: "Exam", value: "exam" },
  { label: "Registration", value: "registration" },
  { label: "Results", value: "results" },
  { label: "Technical", value: "technical" },
  { label: "Study Materials", value: "study_materials" },
];

const FAQAccordion = () => {
  // Use question as unique key
  const [openQuestion, setOpenQuestion] = useState(faqData[0].question);
  const [activeTag, setActiveTag] = useState("all");

  // Filter FAQs based on selected tag
  const filteredFaqs =
    activeTag === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === activeTag);

  // When you change the filter, default to the first item or close all
  React.useEffect(() => {
    if (filteredFaqs.length > 0) {
      setOpenQuestion(filteredFaqs[0].question);
    } else {
      setOpenQuestion(null);
    }
  }, [activeTag]);

  return (
    <div className="w-full">
      {/* Tag Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveTag("all")}
          className={`px-4 py-1 rounded-full border text-sm font-semibold ${activeTag === "all"
            ? "bg-blue-700 text-white border-blue-700"
            : "bg-white text-[#272727] border-gray-300"
            }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => setActiveTag(tag.value)}
            className={`px-4 py-1 rounded-full border text-sm font-semibold ${activeTag === tag.value
              ? "bg-blue-700 text-white border-blue-700"
              : "bg-white text-gray-800 border-gray-300"
              }`}
          >
            {tag.label}
          </button>
        ))}
      </div>
      {/* Accordion */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.question}
            className={`border-b last:border-b-0 rounded-lg ${openQuestion === faq.question ? "bg-gray-50" : ""
              }`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              onClick={() =>
                setOpenQuestion(openQuestion === faq.question ? null : faq.question)
              }
            >
              <div>
                <span
                  className={`font-semibold text-base ${faq.question === filteredFaqs[0]?.question ? "text-lg" : ""
                    }`}
                >
                  {faq.question}
                </span>
                {openQuestion === faq.question && faq.answer && (
                  <div className="mt-2 text-gray-700 text-sm">{faq.answer}</div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <span className="border rounded-full px-3 py-1 text-xs font-medium text-gray-700 bg-gray-50">
                  {faq.tag}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openQuestion === faq.question ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#e0e0e04b] py-10 px-2">

        {/* Header */}
        <div className="max-w-7xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-[#272727] mb-2 text-center">
            Contact Us
          </h1>
          <div className="text-lg text-[#272727] text-center">
            <p>Have questions about our exam preparation programs?</p>
            <p>
              We're here to help you succeed. Reach out to our team of experts for personalized guidance.
            </p>
          </div>
        </div>
        {/* Main content layout: Contact form left, FAQ right */}
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
          {/* Contact Form Box */}
          <div className="md:w-2/5 w-full">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-8">
              <h2 className="text-2xl font-bold text-[#272727]">
                Send us a Message
              </h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-5">
                <div className="md:flex md:gap-4">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label className="block font-semibold mb-1 text-[#272727]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold mb-1 text-[#272727]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-[#272727]">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">UPSC</option>
                    <option value="billing">Banking Exam</option>
                    <option value="feedback">SSC</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-[#272727]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 transition-colors text-white font-semibold py-2 rounded-md mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* FAQ Accordion Right Side */}
          <div className="md:w-3/5 w-full">
            <FAQAccordion />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;