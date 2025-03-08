"use client";

import React, { useState, useEffect } from "react";

const Health = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [healthData, setHealthData] = useState([]);

  // Sample data for demonstration
  const sampleData = {
    appointments: [
      { sNo: 1, refNo: "APT001", title: "Annual Checkup", date: "2025-03-10", time: "09:30 AM", doctor: "Dr. Smith", status: "Upcoming" },
      { sNo: 2, refNo: "APT002", title: "Dental Cleaning", date: "2025-03-15", time: "11:00 AM", doctor: "Dr. Johnson", status: "Confirmed" },
    ],
    medications: [
      { sNo: 1, refNo: "MED001", title: "Amoxicillin", startDate: "2025-02-20", endDate: "2025-03-05", dosage: "500mg twice daily", status: "Completed" },
      { sNo: 2, refNo: "MED002", title: "Lisinopril", startDate: "2025-01-15", endDate: "Ongoing", dosage: "10mg daily", status: "Active" },
    ],
    vitals: [
      { sNo: 1, refNo: "VIT001", title: "Blood Pressure", date: "2025-03-01", reading: "120/80 mmHg", notes: "Normal range", status: "Normal" },
      { sNo: 2, refNo: "VIT002", title: "Blood Glucose", date: "2025-03-01", reading: "95 mg/dL", notes: "Fasting", status: "Normal" },
    ]
  };

  // Tabs configuration - updated for health context
  const tabs = [
    { id: "appointments", label: "Appointments", icon: "🗓️" },
    { id: "medications", label: "Medications", icon: "💊" },
    { id: "vitals", label: "Vitals", icon: "❤️" }
  ];

  // Function to load data when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setHealthData(sampleData[tabId] || []);
  };

  // Initialize with data for the default tab
  useEffect(() => {
    handleTabChange(activeTab);
  }, []);

  // Table columns based on active tab
  const getTableColumns = () => {
    switch(activeTab) {
      case "appointments":
        return ["S.No.", "Ref.No.", "Title", "Date", "Time", "Doctor", "Status"];
      case "medications":
        return ["S.No.", "Ref.No.", "Title", "Start Date", "End Date", "Dosage", "Status"];
      case "vitals":
        return ["S.No.", "Ref.No.", "Title", "Date", "Reading", "Notes", "Status"];
      default:
        return [];
    }
  };

  // Render table cell content based on active tab and column
  const renderCellContent = (item, column) => {
    switch(column) {
      case "S.No.": return item.sNo;
      case "Ref.No.": return item.refNo;
      case "Title": return item.title;
      case "Date": return item.date;
      case "Time": return item.time;
      case "Doctor": return item.doctor;
      case "Start Date": return item.startDate;
      case "End Date": return item.endDate;
      case "Dosage": return item.dosage;
      case "Reading": return item.reading;
      case "Notes": return item.notes;
      case "Status": return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColorClass(item.status)}`}>
          {item.status}
        </span>
      );
      default: return "";
    }
  };

  // Helper function to get status color classes
  const getStatusColorClass = (status) => {
    switch(status?.toLowerCase()) {
      case "upcoming":
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "active":
        return "bg-green-100 text-green-800";
      case "normal":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-full">
      <div className="p-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <h2 className="text-2xl font-bold">Health Details</h2>
        <p className="text-teal-100 mt-1">Track your appointments, medications, and vitals</p>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex border-b bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
              activeTab === tab.id 
                ? "border-b-2 border-teal-500 text-teal-600 bg-white" 
                : "text-gray-600 hover:text-teal-600 hover:bg-gray-100"
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span>{tab.icon}</span>
            <span className="ml-2">{tab.label}</span>
          </button>
        ))}
      </div>
      
      {/* Table Container */}
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {getTableColumns().map((column) => (
                  <th key={column} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {healthData.length > 0 ? (
                healthData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-teal-50"}>
                    {getTableColumns().map((column) => (
                      <td key={`${index}-${column}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {renderCellContent(item, column)}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={getTableColumns().length} className="px-6 py-8 whitespace-nowrap text-sm text-center text-teal-500 font-medium">
                    No records found
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

export default Health;