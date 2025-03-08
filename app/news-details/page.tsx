'use client'
import React, { useState } from 'react'
import { ArrowLeft, X, Search } from 'lucide-react'

const NewsCircularDetails = () => {
  // Sample data based on the image
  const circulars = [
    { id: 1, date: '30/09/2021', type: 'Circular', title: 'Bus Route Transport Plan (w.e.f. 1 October 2021)' },
    { id: 2, date: '29/09/2021', type: 'Circular', title: 'Forthcoming Half Yearly Exam (Classes: IX & XI) and Pre-Board-1 (Classes: X & XII)' },
    { id: 3, date: '29/09/2021', type: 'Circular', title: 'Innovation in Science Pursuit for Inspired Research (INSPIRE)' },
    { id: 4, date: '29/09/2021', type: 'Circular', title: 'PTM/COMMENCEMENT OF 2nd TERM' },
    { id: 5, date: '27/09/2021', type: 'Circular', title: 'Loc Data Verification (Classes X & XII)' },
    { id: 6, date: '25/09/2021', type: 'Circular', title: 'Holidays during the Month of October-2021' },
    { id: 7, date: '25/09/2021', type: 'Circular', title: 'LOC Data Verification' },
    { id: 8, date: '25/09/2021', type: 'Circular', title: 'Updated Syllabus-Artificial Intelligence' },
    { id: 9, date: '22/09/2021', type: 'Circular', title: 'Practical Scheduled' },
    { id: 10, date: '21/09/2021', type: 'Circular', title: 'Investiture Ceremony of Student Council 2021-22 (Senior)' },
    { id: 11, date: '20/09/2021', type: 'Circular', title: 'List Of Candidates (Loc) For Class X Board Exam 2021-22' },
    { id: 12, date: '20/09/2021', type: 'Circular', title: 'List Of Candidates (Loc) For Class XII Board Exam 2021-22' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter circulars based on search term
  const filteredCirculars = circulars.filter(circular => 
    circular.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    circular.date.includes(searchTerm)
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-medium">News/Circular Details</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b">
        <div className="flex justify-end max-w-full">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-3 pr-10 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full bg-purple-700 text-white px-3 rounded-r-md">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto p-4">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">S No.</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Date</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Type</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Title</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredCirculars.map((circular) => (
              <tr key={circular.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border text-sm text-gray-500">{circular.id}</td>
                <td className="py-3 px-4 border text-sm text-gray-500">{circular.date}</td>
                <td className="py-3 px-4 border text-sm text-gray-500">{circular.type}</td>
                <td className="py-3 px-4 border text-sm text-gray-700">{circular.title}</td>
                <td className="py-3 px-4 border text-sm">
                  <button className="text-purple-700 hover:text-purple-700 font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NewsCircularDetails