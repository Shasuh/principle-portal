"use client";
import React, { useState } from "react";

const ExamSchedule = () => {
  // Test type data for tabs
  const testTypes = ["PERIODIC TEST 2", "HALF YEARLY"];
  const [activeTab, setActiveTab] = useState(0);

  // Class and section options
  const classes = ["VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const sections = ["A", "B", "C", "D", "E"];

  // State for selected filters
  const [selectedClass, setSelectedClass] = useState("VI");
  const [selectedSection, setSelectedSection] = useState("A");

  // Exam data for Periodic Test 2
  const periodicTestData = [
    { id: 1, subject: "Computer Science", date: "27-12-2021" },
    { id: 2, subject: "Mathematics", date: "20-12-2021" },
    { id: 3, subject: "Science", date: "13-12-2021" },
    { id: 4, subject: "III Language", date: "06-12-2021" },
    { id: 5, subject: "Hindi", date: "29-11-2021" },
    { id: 6, subject: "Social Science", date: "22-11-2021" },
    { id: 7, subject: "English", date: "15-11-2021" },
  ];

  // Exam data for Half Yearly
  const halfYearlyData = [
    { id: 1, subject: "Hindi", date: "29-09-2021" },
    { id: 2, subject: "Mathematics", date: "27-09-2021" },
    { id: 3, subject: "Computer", date: "24-09-2021" },
    { id: 4, subject: "English", date: "22-09-2021" },
    { id: 5, subject: "Science", date: "20-09-2021" },
    { id: 6, subject: "III Language", date: "17-09-2021" },
    { id: 7, subject: "Social Science", date: "15-09-2021" },
  ];

  // Handler for class change
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  // Handler for section change
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  // Close handler
  const handleClose = () => {
    console.log("Close button clicked");
    // This would be connected to actual close functionality in a real app
  };

  return (
    <div className="bg-gray-50 p-4 mx-auto rounded-md">
      {/* Header with back button and title */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-purple-600">
          <h1 className="text-xl font-semibold">Exam Schedule</h1>
        </div>
      </div>

      {/* Filter section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <label
            htmlFor="class"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Class
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={handleClassChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="section"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Section
          </label>
          <select
            id="section"
            value={selectedSection}
            onChange={handleSectionChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            {sections.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Periodic Test 2 */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="bg-purple-100 px-4 py-3 text-purple-700 font-medium">
            {testTypes[0]}
          </div>
          <div className="p-4">
            <h3 className="text-gray-600 mb-3 text-sm">
              DATE SHEET FOR OFFLINE PERIODIC TEST -2
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S.No.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {periodicTestData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.id}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.subject}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Half Yearly */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="bg-purple-100 px-4 py-3 text-purple-700 font-medium">
            {testTypes[1]}
          </div>
          <div className="p-4">
            <div className="text-gray-600 mb-3 text-sm">
              Login Time: 07:50 AM, Exam Duration: 08:00-09:30 AM, Uploading
              Time: 10 Minutes Extra
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S.No.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {halfYearlyData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.id}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.subject}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
