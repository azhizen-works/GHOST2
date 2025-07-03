import React from 'react';

export default function EnrollmentForm({ contest, onClose }) {
  if (!contest) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-[#e6efff] rounded-xl w-[430px] max-h-[90vh] overflow-y-auto shadow-xl relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-4">Contest Enrollment</h2>

        {/* Contest Summary */}
        <div className="bg-[#d0e8ff] rounded-xl p-4 mb-5">
          <h3 className="text-base font-semibold text-center mb-2 text-gray-800">{contest.title}</h3>
          <div className="text-sm text-gray-800 grid grid-cols-2 gap-2">
            <p className="flex items-center gap-2">📅 <span className="font-semibold">{contest.date}</span></p>
            <p className="flex items-center gap-2">⏱ <span className="font-semibold">50 minutes</span></p>
            <p className="flex items-center gap-2">⏰ <span className="font-semibold">{contest.time}</span></p>
            <p className="flex items-center gap-2">📋 <span className="font-semibold">50 Questions</span></p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Info Box */}
          <div className="bg-yellow-100 text-gray-800 text-sm p-3 rounded-md mt-2">
            <strong>Important:</strong> Once enrolled, you will receive exam instructions via email. Ensure you have a stable internet connection during the contest.
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              Complete Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
