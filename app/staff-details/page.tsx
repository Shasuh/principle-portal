"use client";
import React, { useState } from "react";

const StaffDetails = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("profile");

  // Sample staff data - in a real application, this would come from props or API
  const staffData = {
    name: "Ajay Yadav",
    profileImage: null, // placeholder for profile image
    employeeCode: "30",
    religion: "",
    dateOfBirth: "20/10/1985",
    nationality: "INDIAN",
    bloodGroup: "",
    maritalStatus: "MARRIED",
    mobileNo: "9971858123",
    natureOfAppointment: "",
    dateOfJoin: "15/04/2022",
    accountType: "",
    department: "DPSRNEXT (Teaching)",
    emailId: "ajay.yadav@school.edu",
    staffCategory: "Teaching",
    emergencyContactNo: "9876543210",
    presentAddress: {
      address: "H.No-G-5, Swaroop Park, Lajpat Nagar, Sahibabad",
      city: "GHAZIABAD",
      state: "UTTAR PRADESH",
      country: "INDIA",
      pincode: "201005",
    },
    permanentAddress: {
      address: "H.No-G-5, Swaroop Park, Lajpat Nagar, Sahibabad",
      city: "GHAZIABAD",
      state: "UTTAR PRADESH",
      country: "INDIA",
      pincode: "201005",
    },
    attendance: {
      currentMonth: "March 2025",
      totalWorkingDays: 21,
      present: 19,
      absent: 1,
      leave: 1,
      attendancePercentage: 90.48,
      recentAttendance: [
        {
          date: "08/03/2025",
          status: "Present",
          inTime: "08:30 AM",
          outTime: "04:15 PM",
        },
        {
          date: "07/03/2025",
          status: "Present",
          inTime: "08:25 AM",
          outTime: "04:30 PM",
        },
        {
          date: "06/03/2025",
          status: "Present",
          inTime: "08:40 AM",
          outTime: "04:00 PM",
        },
        { date: "05/03/2025", status: "Leave", inTime: "-", outTime: "-" },
        {
          date: "04/03/2025",
          status: "Present",
          inTime: "08:15 AM",
          outTime: "04:20 PM",
        },
        {
          date: "03/03/2025",
          status: "Present",
          inTime: "08:35 AM",
          outTime: "04:10 PM",
        },
        { date: "02/03/2025", status: "Absent", inTime: "-", outTime: "-" },
      ],
    },
    payroll: {
      salary: {
        basic: 45000,
        hra: 22500,
        conveyanceAllowance: 3000,
        medicalAllowance: 1500,
        specialAllowance: 7000,
        grossSalary: 79000,
        pf: 5400,
        incomeTax: 5200,
        professionalTax: 200,
        totalDeductions: 10800,
        netSalary: 68200,
      },
      recentPayslips: [
        {
          month: "February 2025",
          amount: 68200,
          status: "Paid",
          date: "28/02/2025",
        },
        {
          month: "January 2025",
          amount: 68200,
          status: "Paid",
          date: "31/01/2025",
        },
        {
          month: "December 2024",
          amount: 68200,
          status: "Paid",
          date: "31/12/2024",
        },
        {
          month: "November 2024",
          amount: 68200,
          status: "Paid",
          date: "30/11/2024",
        },
      ],
    },
    library: {
      currentlyIssued: [
        {
          bookId: "BK1023",
          title: "Mathematics for Grade 10",
          issueDate: "01/03/2025",
          dueDate: "15/03/2025",
        },
        {
          bookId: "BK1045",
          title: "Teaching Methods in Digital Age",
          issueDate: "25/02/2025",
          dueDate: "11/03/2025",
        },
      ],
      history: [
        {
          bookId: "BK1009",
          title: "Classroom Management Techniques",
          issueDate: "10/01/2025",
          returnDate: "25/01/2025",
        },
        {
          bookId: "BK1078",
          title: "Effective Science Teaching",
          issueDate: "05/12/2024",
          returnDate: "20/12/2024",
        },
        {
          bookId: "BK1032",
          title: "Education Psychology",
          issueDate: "10/11/2024",
          returnDate: "24/11/2024",
        },
      ],
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center p-4">
          <button  className="flex items-center text-purple-600 hover:text-purple-800 mr-3">
            
            <span className="ml-1 font-bold text-xl">Staff</span>
          </button>
          
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with profile */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-col items-center mb-6">
              {/* Profile image */}
              <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3">
                {staffData.profileImage ? (
                  <img
                    src={staffData.profileImage}
                    alt={staffData.name}
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <h2 className="text-lg font-medium text-gray-800">
                {staffData.name}
              </h2>
            </div>

            {/* Sidebar navigation */}
            <div className="space-y-2">
              <button
                className={`w-full py-2 px-4 text-left rounded-md font-medium ${
                  activeTab === "profile"
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-purple-100 text-gray-700 hover:text-purple-700"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </button>
              <button
                className={`w-full py-2 px-4 text-left rounded-md font-medium ${
                  activeTab === "attendance"
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-purple-100 text-gray-700 hover:text-purple-700"
                }`}
                onClick={() => setActiveTab("attendance")}
              >
                Attendance
              </button>
              <button
                className={`w-full py-2 px-4 text-left rounded-md font-medium ${
                  activeTab === "payroll"
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-purple-100 text-gray-700 hover:text-purple-700"
                }`}
                onClick={() => setActiveTab("payroll")}
              >
                Payroll
              </button>
              <button
                className={`w-full py-2 px-4 text-left rounded-md font-medium ${
                  activeTab === "library"
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-purple-100 text-gray-700 hover:text-purple-700"
                }`}
                onClick={() => setActiveTab("library")}
              >
                Library
              </button>
            </div>
          </div>

          {/* Main content area */}
          <div className="w-full md:w-3/4">
            {/* Profile Tab Content */}
            {activeTab === "profile" && (
              <>
                {/* Employee Details Section */}
                <div className="mb-8">
                  <h3 className="text-purple-600 font-medium border-b border-purple-200 pb-2 mb-4">
                    Employee Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Employee Code</div>
                      <div className="font-medium">
                        {staffData.employeeCode}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Religion</div>
                      <div className="font-medium">{staffData.religion}</div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Date of Birth</div>
                      <div className="font-medium">{staffData.dateOfBirth}</div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Nationality</div>
                      <div className="font-medium">{staffData.nationality}</div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Blood Group</div>
                      <div className="font-medium">{staffData.bloodGroup}</div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Marital Status</div>
                      <div className="font-medium">
                        {staffData.maritalStatus}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Mobile No.</div>
                      <div className="font-medium">{staffData.mobileNo}</div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Nature of Appointment</div>
                      <div className="font-medium">
                        {staffData.natureOfAppointment}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Date of Join</div>
                      <div className="font-medium">{staffData.dateOfJoin}</div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Account Type</div>
                      <div className="font-medium">{staffData.accountType}</div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Department</div>
                      <div className="font-medium">{staffData.department}</div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Email ID</div>
                      <div className="font-medium">{staffData.emailId}</div>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Staff Category</div>
                      <div className="font-medium">
                        {staffData.staffCategory}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-gray-600">Emergency Contact No.</div>
                      <div className="font-medium">
                        {staffData.emergencyContactNo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t pt-6 border-purple-200">
                  {/* Present Address */}
                  <div>
                    <h3 className="text-purple-600 font-medium mb-4">
                      Present Address
                    </h3>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Address</div>
                        <div className="font-medium">
                          {staffData.presentAddress.address}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">City</div>
                        <div className="font-medium">
                          {staffData.presentAddress.city}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">State</div>
                        <div className="font-medium">
                          {staffData.presentAddress.state}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Country</div>
                        <div className="font-medium">
                          {staffData.presentAddress.country}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Pincode</div>
                        <div className="font-medium">
                          {staffData.presentAddress.pincode}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permanent Address */}
                  <div>
                    <h3 className="text-purple-600 font-medium mb-4">
                      Permanent Address
                    </h3>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Address</div>
                        <div className="font-medium">
                          {staffData.permanentAddress.address}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">City</div>
                        <div className="font-medium">
                          {staffData.permanentAddress.city}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">State</div>
                        <div className="font-medium">
                          {staffData.permanentAddress.state}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Country</div>
                        <div className="font-medium">
                          {staffData.permanentAddress.country}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center">
                        <div className="text-gray-600">Pincode</div>
                        <div className="font-medium">
                          {staffData.permanentAddress.pincode}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Attendance Tab Content */}
            {activeTab === "attendance" && (
              <div>
                <h3 className="text-purple-600 font-medium border-b border-purple-200 pb-2 mb-4">
                  Attendance Summary
                </h3>

                {/* Attendance Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">
                      Current Month
                    </div>
                    <div className="font-medium text-lg">
                      {staffData.attendance.currentMonth}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">Attendance</div>
                    <div className="font-medium text-lg text-green-600">
                      {staffData.attendance.attendancePercentage}%
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">
                      Present/Total
                    </div>
                    <div className="font-medium text-lg">
                      {staffData.attendance.present}/
                      {staffData.attendance.totalWorkingDays}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">
                      Absent/Leave
                    </div>
                    <div className="font-medium text-lg text-red-600">
                      {staffData.attendance.absent}/{staffData.attendance.leave}
                    </div>
                  </div>
                </div>

                {/* Attendance Chart (mockup) */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100 mb-6">
                  <div className="h-48 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                    Attendance Chart Visualization
                  </div>
                </div>

                {/* Recent Attendance */}
                <h3 className="text-purple-600 font-medium mb-4">
                  Recent Attendance
                </h3>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          In Time
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Out Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {staffData.attendance.recentAttendance.map(
                        (record, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {record.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  record.status === "Present"
                                    ? "bg-green-100 text-green-800"
                                    : record.status === "Absent"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {record.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {record.inTime}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {record.outTime}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Payroll Tab Content */}
            {activeTab === "payroll" && (
              <div>
                <h3 className="text-purple-600 font-medium border-b border-purple-200 pb-2 mb-4">
                  Salary Details
                </h3>

                {/* Salary Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">
                      Gross Salary
                    </div>
                    <div className="font-medium text-lg">
                      ₹ {staffData.payroll.salary.grossSalary.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">
                      Total Deductions
                    </div>
                    <div className="font-medium text-lg text-red-600">
                      ₹{" "}
                      {staffData.payroll.salary.totalDeductions.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="text-gray-500 text-sm mb-1">Net Salary</div>
                    <div className="font-medium text-lg text-green-600">
                      ₹ {staffData.payroll.salary.netSalary.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Salary Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Earnings */}
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-3">Earnings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Basic Salary</span>
                        <span className="font-medium">
                          ₹ {staffData.payroll.salary.basic.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">HRA</span>
                        <span className="font-medium">
                          ₹ {staffData.payroll.salary.hra.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Conveyance Allowance
                        </span>
                        <span className="font-medium">
                          ₹{" "}
                          {staffData.payroll.salary.conveyanceAllowance.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Medical Allowance</span>
                        <span className="font-medium">
                          ₹{" "}
                          {staffData.payroll.salary.medicalAllowance.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Special Allowance</span>
                        <span className="font-medium">
                          ₹{" "}
                          {staffData.payroll.salary.specialAllowance.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-medium text-gray-800">
                          Total Earnings
                        </span>
                        <span className="font-medium text-green-600">
                          ₹{" "}
                          {staffData.payroll.salary.grossSalary.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Deductions */}
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-3">
                      Deductions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Provident Fund</span>
                        <span className="font-medium">
                          ₹ {staffData.payroll.salary.pf.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Income Tax</span>
                        <span className="font-medium">
                          ₹{" "}
                          {staffData.payroll.salary.incomeTax.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Professional Tax</span>
                        <span className="font-medium">
                          ₹{" "}
                          {staffData.payroll.salary.professionalTax.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-medium text-gray-800">
                          Total Deductions
                        </span>
                        <span className="font-medium text-red-600">
                          ₹{" "}
                          {staffData.payroll.salary.totalDeductions.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Payslips */}
                <h3 className="text-purple-600 font-medium mb-4">
                  Recent Payslips
                </h3>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Month
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {staffData.payroll.recentPayslips.map(
                        (payslip, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {payslip.month}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ₹ {payslip.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {payslip.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payslip.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <button className="text-purple-600 hover:text-purple-800">
                                Download
                              </button>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Library Tab Content */}
            {activeTab === "library" && (
              <div>
                <h3 className="text-purple-600 font-medium border-b border-purple-200 pb-2 mb-4">
                  Library Information
                </h3>

                {/* Currently Issued Books */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Currently Issued Books
                  </h4>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Book ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Issue Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Due Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {staffData.library.currentlyIssued.map(
                          (book, index) => {
                            // Calculate if book is overdue
                            const today = new Date();
                            const dueDate = new Date(
                              book.dueDate.split("/").reverse().join("-")
                            );
                            const isOverdue = today > dueDate;

                            return (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {book.bookId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {book.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {book.issueDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {book.dueDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      isOverdue
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {isOverdue ? "Overdue" : "Active"}
                                  </span>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Book Issue History */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">
                    Book Issue History
                  </h4>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Book ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Issue Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Return Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {staffData.library.history.map((book, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {book.bookId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {book.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {book.issueDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {book.returnDate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
