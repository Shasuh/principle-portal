"use client";
import React, { useState } from "react";

const AssignmentAndCirculars = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock function to simulate fetching data
  const fetchAssignments = (tabType) => {
    setLoading(true);
    // In a real application, this would be an API call
    setTimeout(() => {
      setAssignments([]);
      setLoading(false);
    }, 500);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    fetchAssignments(tab);
  };

  return (
    <div className="w-full  mx-auto bg-white rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-500 text-white rounded-t-md">
        <div className="flex items-center">
          <h1 className="text-xl font-medium">Assignment/ Circular</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`py-2 px-4 flex items-center ${
              activeTab === "today"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("today")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Today
          </button>
          <button
            className={`py-2 px-4 flex items-center ${
              activeTab === "week"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("week")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Week
          </button>
          <button
            className={`py-2 px-4 flex items-center ${
              activeTab === "month"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("month")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Month Wise
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  S No.
                </th>
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  Date
                </th>
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  Title
                </th>
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  Assignment Type
                </th>
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  User Type
                </th>
                <th className="py-3 px-4 text-left border border-gray-200 text-gray-600 font-medium">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : assignments.length > 0 ? (
                assignments.map((assignment, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-gray-200">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      {assignment.date}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      {assignment.title}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      {assignment.type}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      {assignment.userType}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      <button className="text-blue-500 hover:text-blue-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 px-4 text-center text-blue-500"
                  >
                    Record Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignmentAndCirculars;
