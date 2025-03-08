"use client";

import React, { useState } from "react";

const Library = () => {
  const [activeTab, setActiveTab] = useState("issue_return");
  const [libraryData, setLibraryData] = useState([]);

  // Sample data for demonstration
  const sampleData = {
    issue_return: [
      { sNo: 1, accNo: "B001", title: "React Fundamentals", issueDate: "2025-02-15", returnDate: "2025-03-15", due: "8 days" },
      { sNo: 2, accNo: "B002", title: "JavaScript: The Good Parts", issueDate: "2025-02-20", returnDate: "2025-03-20", due: "13 days" },
    ],
    reservation: [
      { sNo: 1, accNo: "B003", title: "Node.js Design Patterns", reservationDate: "2025-02-25", status: "Pending" },
    ],
    requisition: [
      { sNo: 1, accNo: "B004", title: "Clean Code", requestDate: "2025-02-28", status: "Approved" },
    ]
  };

  // Tabs configuration
  const tabs = [
    { id: "issue_return", label: "Issue & Return", icon: "📖" },
    { id: "reservation", label: "Reservation", icon: "🔖" },
    { id: "requisition", label: "Requisition", icon: "📝" }
  ];

  // Function to load data when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setLibraryData(sampleData[tabId] || []);
  };

  // Initialize with data for the default tab
  React.useEffect(() => {
    handleTabChange(activeTab);
  }, []);

  // Table columns based on active tab
  const getTableColumns = () => {
    switch(activeTab) {
      case "issue_return":
        return ["S.No.", "Acc.No.", "Title", "Issue Date", "Return Date", "Due"];
      case "reservation":
        return ["S.No.", "Acc.No.", "Title", "Reservation Date", "Status"];
      case "requisition":
        return ["S.No.", "Acc.No.", "Title", "Request Date", "Status"];
      default:
        return [];
    }
  };

  // Render table cell content based on active tab and column
  const renderCellContent = (item, column, index) => {
    switch(column) {
      case "S.No.": return item.sNo;
      case "Acc.No.": return item.accNo;
      case "Title": return item.title;
      case "Issue Date": return item.issueDate;
      case "Return Date": return item.returnDate;
      case "Due": return item.due;
      case "Reservation Date": return item.reservationDate;
      case "Request Date": return item.requestDate;
      case "Status": return (
        <span className={`px-2 py-1 rounded text-sm ${item.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
          {item.status}
        </span>
      );
      default: return "";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-700 text-white">
        <h2 className="text-xl font-semibold">Library Details</h2>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors ${
              activeTab === tab.id 
                ? "border-b-2 border-blue-600 text-blue-600" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      {/* Table Container */}
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {getTableColumns().map((column) => (
                  <th key={column} className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {libraryData.length > 0 ? (
                libraryData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {getTableColumns().map((column) => (
                      <td key={`${index}-${column}`} className="px-4 py-3 text-sm text-gray-700 border-b">
                        {renderCellContent(item, column, index)}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={getTableColumns().length} className="px-4 py-6 text-center text-gray-500">
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

export default Library;