'use client'
import React, { useState } from 'react';

const Assignment = () => {
  // Enhanced sample data with status and due dates
  const [items, setItems] = useState([
    {
      id: 1,
      date: '2/14/2024',
      dueDate: '2/28/2024',
      title: 'Meetup',
      description: 'Dear Student, please see the video.',
      subject: 'Maths',
      type: 'Homework',
      status: 'Pending'
    },
    {
      id: 2,
      date: '3/14/2024',
      dueDate: '3/30/2024',
      title: 'Science Fair',
      description: 'Prepare your projects',
      subject: 'Science',
      type: 'Activity',
      status: 'Completed'
    },
    {
      id: 3,
      date: '3/20/2024',
      dueDate: '3/25/2024',
      title: 'Parent Meeting',
      description: 'Annual parent-teacher meeting',
      subject: 'General',
      type: 'Circular',
      status: 'Upcoming'
    }
  ]);

  // Filter states
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique subjects for filter dropdown
  const subjects = ['All', ...new Set(items.map(item => item.subject))];
  
  // Apply all filters
  const filteredItems = items.filter(item => {
    return (
      (selectedType === 'All' || item.type === selectedType) &&
      (selectedSubject === 'All' || item.subject === selectedSubject) &&
      (selectedStatus === 'All' || item.status === selectedStatus) &&
      (
        searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date to display in a more readable format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="p-6  mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h1 className="text-2xl font-bold p-4 text-gray-800">Assignments & Activities</h1>
        </div>
        
        <div className="p-6">
          {/* Search and Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search:
              </label>
              <input
                type="text"
                id="search"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search by title or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Type Filter */}
            <div>
              <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Type:
              </label>
              <select
                id="type-filter"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Homework">Homework</option>
                <option value="Activity">Activity</option>
                <option value="Circular">Circular</option>
              </select>
            </div>
            
            {/* Subject Filter */}
            <div>
              <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Subject:
              </label>
              <select
                id="subject-filter"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            {/* Status Filter */}
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status:
              </label>
              <select
                id="status-filter"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-blue-700">Homework</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {items.filter(item => item.type === 'Homework').length}
                  </p>
                </div>
                <div className="bg-blue-200 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-100 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-green-700">Activities</p>
                  <p className="text-2xl font-bold text-green-800">
                    {items.filter(item => item.type === 'Activity').length}
                  </p>
                </div>
                <div className="bg-green-200 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-purple-700">Circulars</p>
                  <p className="text-2xl font-bold text-purple-800">
                    {items.filter(item => item.type === 'Circular').length}
                  </p>
                </div>
                <div className="bg-purple-200 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assignment Table */}
          <div className="bg-white rounded-lg">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {filteredItems.length === 0 ? 'No assignments found' : `Showing ${filteredItems.length} assignments`}
              </h2>
            </div>
            
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(item.date)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(item.dueDate)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{item.description}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.subject}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item.type === 'Homework' ? 'bg-blue-100 text-blue-800' : 
                              item.type === 'Activity' ? 'bg-green-100 text-green-800' : 
                              'bg-purple-100 text-purple-800'}`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-500 italic">
                        No matching assignments found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Legend:</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Homework</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Activity</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Circular</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;