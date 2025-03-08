"use client";
import React, { useState, useEffect } from "react";
import { Search, Award, Calendar, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

const Achievement = () => {
  // Sample achievement data
  const [achievements, setAchievements] = useState([
    { id: 1, headName: "First Place Award", date: "2024-02-15", remarks: "National Competition" },
    { id: 2, headName: "Best Innovation", date: "2024-06-22", remarks: "Regional Science Fair" },
    { id: 3, headName: "Excellence Certificate", date: "2024-09-10", remarks: "Academic Achievement" },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Format date in a more readable way
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Get sorted and filtered achievements
  const getSortedAchievements = () => {
    let filteredData = [...achievements];
    
    // Filter by search term
    if (searchTerm) {
      filteredData = filteredData.filter(item => 
        item.headName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.remarks.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort data if sortConfig is set
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (sortConfig.key === 'date') {
          // Date comparison
          return sortConfig.direction === 'ascending' 
            ? new Date(a[sortConfig.key]) - new Date(b[sortConfig.key])
            : new Date(b[sortConfig.key]) - new Date(a[sortConfig.key]);
        } else {
          // String comparison
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        }
      });
    }
    
    return filteredData;
  };

  const sortedAchievements = getSortedAchievements();
  
  // Render sort indicator
  const SortIndicator = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronDown className="inline h-4 w-4 opacity-50" />;
    }
    return sortConfig.direction === 'ascending' 
      ? <ChevronUp className="inline h-4 w-4" /> 
      : <ChevronDown className="inline h-4 w-4" />;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Award className="text-blue-600 h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Achievements</h1>
        </div>
        
        {/* Search input */}
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search achievements..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Achievements Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-8 bg-blue-400 rounded-full animate-bounce"></div>
              <p className="mt-2 text-gray-500">Loading achievements...</p>
            </div>
          </div>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">S.No.</th>
                <th 
                  className="py-3 px-4 text-left font-semibold text-gray-600 border-b cursor-pointer"
                  onClick={() => requestSort('headName')}
                >
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Achievement</span>
                    <SortIndicator columnKey="headName" />
                  </div>
                </th>
                <th 
                  className="py-3 px-4 text-left font-semibold text-gray-600 border-b cursor-pointer"
                  onClick={() => requestSort('date')}
                >
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Date</span>
                    <SortIndicator columnKey="date" />
                  </div>
                </th>
                <th 
                  className="py-3 px-4 text-left font-semibold text-gray-600 border-b cursor-pointer"
                  onClick={() => requestSort('remarks')}
                >
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Remarks</span>
                    <SortIndicator columnKey="remarks" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedAchievements.length > 0 ? (
                sortedAchievements.map((achievement, index) => (
                  <tr 
                    key={achievement.id} 
                    className="hover:bg-blue-50 transition-colors duration-150"
                  >
                    <td className="py-3 px-4 border-b">{index + 1}</td>
                    <td className="py-3 px-4 border-b font-medium text-blue-700">{achievement.headName}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{formatDate(achievement.date)}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{achievement.remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-8 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <Search className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-500 font-medium">No achievements found</p>
                      <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Achievement;