"use client";

import React, { useState } from "react";

const Discipline = () => {
  // Sample discipline data - in a real app, this would come from props or an API
  const [disciplineRecords] = useState([
    {
      id: 1,
      incidentDate: "2024-02-10",
      description: "Unauthorized absence from class",
      category: "Attendance",
      actionTaken: "Verbal warning",
      status: "Resolved"
    },
    {
      id: 2,
      incidentDate: "2024-03-15",
      description: "Late submission of assignment",
      category: "Academic",
      actionTaken: "Meeting with advisor",
      status: "Pending"
    },
    {
      id: 3,
      incidentDate: "2024-04-05",
      description: "Violation of lab safety protocol",
      category: "Safety",
      actionTaken: "Additional safety training required",
      status: "In progress"
    }
  ]);

  // Function to get status badge color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6  bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Discipline Records</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-700">Total Records</h3>
          <p className="text-3xl font-bold text-blue-800">{disciplineRecords.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-lg font-medium text-green-700">Resolved</h3>
          <p className="text-3xl font-bold text-green-800">
            {disciplineRecords.filter(record => record.status.toLowerCase() === "resolved").length}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <h3 className="text-lg font-medium text-yellow-700">Pending</h3>
          <p className="text-3xl font-bold text-yellow-800">
            {disciplineRecords.filter(record => record.status.toLowerCase() !== "resolved").length}
          </p>
        </div>
      </div>
      
      {/* Discipline Records Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">ID</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Date</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Category</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Description</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Action Taken</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {disciplineRecords.length > 0 ? (
              disciplineRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{record.id}</td>
                  <td className="py-3 px-4 border-b">
                    {new Date(record.incidentDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 border-b">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                      {record.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b">{record.description}</td>
                  <td className="py-3 px-4 border-b">{record.actionTaken}</td>
                  <td className="py-3 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                  No discipline records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-md font-medium text-gray-700 mb-2">Status Legend</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span>Resolved</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            <span>Pending</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span>In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discipline;