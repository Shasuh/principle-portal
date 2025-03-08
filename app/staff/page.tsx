'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const StaffCategoryDetails = () => {
   const router =useRouter()
  // State to track which category is selected for detailed view
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Staff category summary data
  const staffCategorySummary = [
    { id: 1, category: 'NOT ASSIGNED', department: '', active: 11, departed: 0 },
    { id: 2, category: 'NOT ASSIGNED', department: 'PDCL (Canteen)', active: 1, departed: 0 },
    { id: 3, category: 'NOT ASSIGNED', department: 'Saket Education Society', active: 1, departed: 1 },
    { id: 4, category: 'TEACHING', department: 'DPSRNEXT (Teaching)', active: 50, departed: 27 },
    { id: 5, category: 'TEACHING', department: 'DPSRNEXT(Non Teaching)', active: 0, departed: 1 },
    { id: 6, category: 'NON TEACHING', department: 'DPSRNEXT (Admin)', active: 10, departed: 4 },
    { id: 7, category: 'NON TEACHING', department: 'Saket Education Society', active: 15, departed: 4 },
    { id: 8, category: 'Day Guards', department: 'Day Guards', active: 4, departed: 0 },
    { id: 9, category: 'Night Guards', department: 'Night Guards', active: 4, departed: 1 },
  ]

  // Detailed staff data for the selected category
  const teachingStaffDetails = [
    { slNo: 1, empCode: 'RNE0021', employee: 'AJAY KUMAR', department: 'DPSRNEXT (Teaching)', emailId: 'ajayk@dpsrnext.com', mobile: '8587954204' },
    { slNo: 2, empCode: 'RNE0008', employee: 'ANU AGARWAL', department: 'DPSRNEXT (Teaching)', emailId: 'ANUGAGGRWAL@GMAIL.COM', mobile: '9871115291' },
    { slNo: 3, empCode: 'RNE0019', employee: 'BHAVANA TEWARI', department: 'DPSRNEXT (Teaching)', emailId: 'bhavanat@dpsrnext.com', mobile: '9717095502' },
    { slNo: 4, empCode: 'RNE0013', employee: 'DEEPIKA MEHRA', department: 'DPSRNEXT (Teaching)', emailId: 'DMEHRA151@GMAIL.COM', mobile: '9990607024' },
    { slNo: 5, empCode: 'RNE0003', employee: 'DIVITA TYAGI', department: 'DPSRNEXT (Teaching)', emailId: 'DIVITATYAGI@GMAIL.COM', mobile: '9654171117' },
    { slNo: 6, empCode: 'RNE0026', employee: 'KAJAL RATHI', department: 'DPSRNEXT (Teaching)', emailId: 'kajumalik@gmail.com', mobile: '9350309870' },
    { slNo: 7, empCode: 'RNE0005', employee: 'KAKOLI SARKAR', department: 'DPSRNEXT (Teaching)', emailId: 'kakoli.banerjee@gmail.com', mobile: '9811651776' },
    { slNo: 8, empCode: 'RNE0009', employee: 'KRITI MISHRA', department: 'DPSRNEXT (Teaching)', emailId: 'MISHRAKRITI93@GMAIL.COM', mobile: '8447216336' },
    { slNo: 9, empCode: 'RNE0030', employee: 'LARISHA GOYAL', department: 'DPSRNEXT (Teaching)', emailId: 'larishagoyal77@gmail.com', mobile: '8295451531' },
    { slNo: 10, empCode: 'RNE0039', employee: 'NEERJA TYAGI', department: 'DPSRNEXT (Teaching)', emailId: 'neerjat@dpsrnext.com', mobile: '9911209774' },
    { slNo: 11, empCode: 'RNE0016', employee: 'NEERU SARIN', department: 'DPSRNEXT (Teaching)', emailId: 'neerusareen1970@gmail.com', mobile: '9717450606' },
    { slNo: 12, empCode: 'RNE0014', employee: 'RITU PRIYA', department: 'DPSRNEXT (Teaching)', emailId: 'KPRITUSINGH@GMAIL.COM', mobile: '9899809501' },
    { slNo: 13, empCode: 'RNE0011', employee: 'RUCHI DOBHAL', department: 'DPSRNEXT (Teaching)', emailId: 'RUCHIDOBHALHINDU@GMAIL.COM', mobile: '9650426007' },
    { slNo: 14, empCode: 'RNE0023', employee: 'RUCHI TYAGI', department: 'DPSRNEXT (Teaching)', emailId: 'ruchit@dpsrnext.com', mobile: '9250070370' }
  ]

  // Sample staff details for other categories - in a real app you'd fetch this data
  const nonTeachingStaffDetails = [
    { slNo: 1, empCode: 'RNE0101', employee: 'AMIT SHARMA', department: 'DPSRNEXT (Admin)', emailId: 'amit@dpsrnext.com', mobile: '9876543210' },
    { slNo: 2, empCode: 'RNE0102', employee: 'PRIYA GUPTA', department: 'DPSRNEXT (Admin)', emailId: 'priya@dpsrnext.com', mobile: '9871234567' }
  ]

  // Get staff details based on selected category
  const getStaffDetails = () => {
    if (!selectedCategory) return []
    
    if (selectedCategory === 'TEACHING') {
      return teachingStaffDetails
    } else if (selectedCategory === 'NON TEACHING') {
      return nonTeachingStaffDetails
    } else {
      return [] // For other categories, you'd add more data
    }
  }

  // Calculate total staff strength
  const totalActiveStrength = staffCategorySummary.reduce((sum, item) => sum + item.active, 0)
  
  // Filter staff details based on search query
  const filteredStaffDetails = getStaffDetails().filter(staff => 
    staff.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.empCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.emailId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSearchQuery('')
  }

  const handleBack = () => {
    setSelectedCategory(null)
    setSearchQuery('')
  }

  // Group categories by type for the summary view
  const categoryGroups = staffCategorySummary.reduce((groups, item) => {
    const group = groups[item.category] || []
    group.push(item)
    groups[item.category] = group
    return groups
  }, {})

  return (
    <div className="w-full mx-auto bg-gray-50 min-h-screen p-4">
      {/* Header with back button when viewing details */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="flex items-center justify-between p-4 border-b border-purple-100">
          {selectedCategory ? (
            <>
              <div className="flex items-center">
                <button 
                  onClick={handleBack}
                  className="flex items-center text-purple-600 hover:text-purple-800 mr-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <h1 className="text-xl font-medium text-purple-800">{selectedCategory} Staff Details</h1>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-medium text-purple-800">Staff Category Wise Details</h1>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Total Active Strength:</span>
                <div className="bg-purple-600 text-white px-4 py-1 rounded-md font-bold shadow-sm">
                  {totalActiveStrength}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Staff category summary view */}
      {!selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categoryGroups).map(([category, items]) => (
            <div key={category} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="border-b border-gray-200 bg-purple-50 px-4 py-3">
                <h2 className="font-semibold text-lg text-purple-800">{category}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleCategoryClick(item.category)}
                  >
                    <div>
                      <div className="font-medium">{item.department || 'General'}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        <span className="text-blue-600 font-medium">{item.active} Active</span>
                        {item.departed > 0 && (
                          <span className="ml-2 text-red-500">({item.departed} Departed)</span>
                        )}
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Staff details view */}
      {selectedCategory && (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-50 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Sl.No.</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Emp Code</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Employee</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Department</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Email ID</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Mobile No.</th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredStaffDetails.length > 0 ? (
                  filteredStaffDetails.map((staff) => (
                    <tr key={staff.empCode} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">{staff.slNo}</td>
                      <td className="py-3 px-4 font-medium text-gray-600">{staff.empCode}</td>
                      <td className="py-3 px-4">{staff.employee}</td>
                      <td className="py-3 px-4">{staff.department}</td>
                      <td className="py-3 px-4 text-blue-600">{staff.emailId.toLowerCase()}</td>
                      <td className="py-3 px-4">{staff.mobile}</td>
                      <td className="py-3 px-4">
                        <button onClick={()=>router.push('staff-details')} className="text-purple-600 hover:text-purple-800 px-3 py-1 rounded hover:bg-purple-100 transition-colors">
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                      {searchQuery ? 'No matching staff found' : 'No staff details available for this category'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default StaffCategoryDetails