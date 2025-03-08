'use client'
import React from 'react'
import { ArrowLeft, X } from 'lucide-react'

const Achievement = () => {
  // Sample data based on the image
  const achievements = [
    { 
      id: 1, 
      date: '01/04/2021', 
      studentName: 'SHVANT MALIK', 
      classSec: 'IX-B', 
      particulars: 'Achievements', 
      remarks: 'testing from campuscare' 
    },
    { 
      id: 2, 
      date: '28/12/2020', 
      studentName: 'AMRIT SINGH GARCHA', 
      classSec: 'I-A', 
      particulars: 'Achievements', 
      remarks: 'Dummy Award' 
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-medium">Achievements Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Table */}
        <div className="bg-white rounded-md shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">S No.</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Class-Sec</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Particulars</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Remarks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {achievements.map((achievement) => (
                <tr key={achievement.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{achievement.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.classSec}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.particulars}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Achievement