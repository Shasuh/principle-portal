'use client'
import React, { useState } from 'react';

const OnlineLeaveApproval = () => {
  // Form state
  const [leaveYear, setLeaveYear] = useState('2019');
  const [fromDate, setFromDate] = useState('01/04/2019');
  const [toDate, setToDate] = useState('31/03/2020');
  const [leaveCategory, setLeaveCategory] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('Not Approved');
  const [sanctionedBy, setSanctionedBy] = useState('PALLAVI UPADHYAYA');
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample data for the table
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  
  // Handle display button click
  const handleDisplay = () => {
    // Simulate fetching data
    const sampleData = [
      {
        slNo: 1,
        empCode: 'EMP001',
        name: 'John Doe',
        leaveFrom: '15/04/2019',
        leaveTo: '20/04/2019',
        totalDays: 6,
        leaveType: 'Annual',
        reason: 'Family vacation',
        sanctionedDate: '10/04/2019',
        remark: 'Pre-approved',
        status: 'Pending',
        selected: false
      },
      {
        slNo: 2,
        empCode: 'EMP002',
        name: 'Jane Smith',
        leaveFrom: '05/05/2019',
        leaveTo: '07/05/2019',
        totalDays: 3,
        leaveType: 'Sick',
        reason: 'Medical appointment',
        sanctionedDate: '01/05/2019',
        remark: '',
        status: 'Not Approved',
        selected: false
      }
    ];
    
    setLeaveDetails(sampleData);
    showNotificationAlert('Leave details fetched successfully', 'success');
  };
  
  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
    showNotificationAlert('You can now edit the date range', 'info');
  };
  
  // Handle save button click
  const handleSave = () => {
    if (isEditing) {
      setIsEditing(false);
      showNotificationAlert('Date range saved successfully', 'success');
    } else {
      showNotificationAlert('Leave status updated successfully', 'success');
    }
  };
  
  // Handle cancel button click
  const handleCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      // Reset to original values
      setFromDate('01/04/2019');
      setToDate('31/03/2020');
      showNotificationAlert('Changes discarded', 'info');
    } else {
      showNotificationAlert('Operation cancelled', 'info');
    }
  };
  
  // Handle back button click
  const handleBack = () => {
    showNotificationAlert('Returning to previous screen', 'info');
    // Would typically navigate back in a real application
  };
  
  // Handle close button click
  const handleClose = () => {
    showNotificationAlert('Closing approval window', 'info');
    // Would typically close modal or navigate away in a real application
  };
  
  // Handle row selection
  const handleRowSelect = (index) => {
    const updatedLeaveDetails = [...leaveDetails];
    updatedLeaveDetails[index].selected = !updatedLeaveDetails[index].selected;
    setLeaveDetails(updatedLeaveDetails);
  };
  
  // Handle send SMS
  const handleSendSMS = (index) => {
    showNotificationAlert(`SMS notification sent to ${leaveDetails[index].name}`, 'success');
  };
  
  // Show notification alert
  const showNotificationAlert = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  
  return (
    <div className="flex flex-col p-4 bg-gray-50 min-h-screen">
      {/* Notification */}
      {showNotification && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all z-50 ${
          notificationType === 'success' ? 'bg-green-100 border-l-4 border-green-500 text-green-700' :
          notificationType === 'error' ? 'bg-red-100 border-l-4 border-red-500 text-red-700' :
          'bg-blue-100 border-l-4 border-blue-500 text-blue-700'
        }`}>
          <div className="flex items-center">
            <div className="mr-3">
              {notificationType === 'success' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : notificationType === 'error' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <p>{notificationMessage}</p>
          </div>
        </div>
      )}
    
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-t-lg shadow-md">
        <div className="flex items-center">
          <button 
            onClick={handleBack}
            className="mr-3 text-white hover:bg-blue-600 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Online Leave Approval</h1>
        </div>
        <button 
          onClick={handleClose}
          className="text-white hover:bg-blue-600 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="bg-white p-6 shadow-lg rounded-b-lg mb-6 border border-gray-200">
        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">Leave Year<span className="text-red-500 ml-1">*</span></label>
            <select 
              value={leaveYear}
              onChange={(e) => setLeaveYear(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleDisplay}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Display
              </div>
            </button>
          </div>
          
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">From Date<span className="text-red-500 ml-1">*</span></label>
            <input 
              type="text" 
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              disabled={!isEditing}
              className={`flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ${!isEditing ? 'bg-gray-100' : 'bg-white'}`}
            />
          </div>
          
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">To Date<span className="text-red-500 ml-1">*</span></label>
            <input 
              type="text" 
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              disabled={!isEditing}
              className={`flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ${!isEditing ? 'bg-gray-100' : 'bg-white'}`}
            />
            <button 
              onClick={handleEdit}
              className="ml-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </div>
            </button>
          </div>
          
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">Leave Category</label>
            <select 
              value={leaveCategory}
              onChange={(e) => setLeaveCategory(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            >
              <option value="">-- Select Leave Category --</option>
              <option value="Annual">Annual Leave</option>
              <option value="Sick">Sick Leave</option>
              <option value="Personal">Personal Leave</option>
              <option value="Maternity">Maternity Leave</option>
              <option value="Paternity">Paternity Leave</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">Leave Status</label>
            <select 
              value={leaveStatus}
              onChange={(e) => setLeaveStatus(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            >
              <option value="Not Approved">Not Approved</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button 
              onClick={handleSave}
              className="ml-3 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Save
              </div>
            </button>
          </div>
          
          <div className="flex items-center">
            <label className="w-36 text-gray-700 font-medium">Sanctioned By<span className="text-red-500 ml-1">*</span></label>
            <select 
              value={sanctionedBy}
              onChange={(e) => setSanctionedBy(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            >
              <option value="PALLAVI UPADHYAYA">PALLAVI UPADHYAYA</option>
              <option value="JOHN DOE">JOHN DOE</option>
              <option value="JANE SMITH">JANE SMITH</option>
            </select>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </div>
            </button>
          </div>
        </div>
        
        {/* Leave Details Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Leave Details
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Sl. No.</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Emp. Code</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Name</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Leave From</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Leave To</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Total Days</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Leave</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Reason</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Sanctioned Date</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Leave Remark</th>
                  <th className="p-3 text-left border border-gray-200 text-gray-700 font-semibold">Status</th>
                  <th className="p-3 text-center border border-gray-200 text-gray-700 font-semibold">Select</th>
                  <th className="p-3 text-center border border-gray-200 text-gray-700 font-semibold">Send SMS</th>
                </tr>
              </thead>
              <tbody>
                {leaveDetails.length > 0 ? (
                  leaveDetails.map((detail, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200">{detail.slNo}</td>
                      <td className="p-3 border border-gray-200">{detail.empCode}</td>
                      <td className="p-3 border border-gray-200 font-medium">{detail.name}</td>
                      <td className="p-3 border border-gray-200">{detail.leaveFrom}</td>
                      <td className="p-3 border border-gray-200">{detail.leaveTo}</td>
                      <td className="p-3 border border-gray-200">{detail.totalDays}</td>
                      <td className="p-3 border border-gray-200">{detail.leaveType}</td>
                      <td className="p-3 border border-gray-200">{detail.reason}</td>
                      <td className="p-3 border border-gray-200">{detail.sanctionedDate}</td>
                      <td className="p-3 border border-gray-200">{detail.remark}</td>
                      <td className="p-3 border border-gray-200">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          detail.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                          detail.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                          detail.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {detail.status}
                        </span>
                      </td>
                      <td className="p-3 border border-gray-200 text-center">
                        <input 
                          type="checkbox" 
                          checked={detail.selected} 
                          onChange={() => handleRowSelect(index)}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                        />
                      </td>
                      <td className="p-3 border border-gray-200 text-center">
                        <button 
                          onClick={() => handleSendSMS(index)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium px-2 py-1 rounded transition-colors duration-200"
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="13" className="p-6 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-gray-600 mb-2 font-medium">No leave applications found</p>
                        <p className="text-gray-500 text-sm">Click on the Display button to fetch leave details</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLeaveApproval;