"use client";

import React, { useState } from "react";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const StaffLogin = () => {
  // Sample data based on the image
  const [loginData, setLoginData] = useState([
    {
      id: 1,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "103.123.73.226",
      loginTime: "10/11/2023 02:27 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 2,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "103.68.28.129",
      loginTime: "23/11/2023 10:17 AM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 3,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "122.162.144.132",
      loginTime: "24/11/2023 03:24 PM",
      logoutTime: "24/11/2023 03:25 PM",
      loginBy: "Web",
    },
    {
      id: 4,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "122.162.144.132",
      loginTime: "24/11/2023 03:26 PM",
      logoutTime: "24/11/2023 03:45 PM",
      loginBy: "Web",
    },
    {
      id: 5,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "122.162.144.132",
      loginTime: "24/11/2023 04:02 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 6,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "122.162.144.132",
      loginTime: "24/11/2023 05:29 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 7,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.118.190",
      loginTime: "25/11/2023 11:56 AM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 8,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.118.190",
      loginTime: "25/11/2023 12:01 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 9,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.66.94",
      loginTime: "01/12/2023 12:31 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 10,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.66.94",
      loginTime: "01/12/2023 12:38 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 11,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.67.141",
      loginTime: "06/11/2023 12:45 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 12,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.67.32",
      loginTime: "06/11/2023 01:04 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 13,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.67.55",
      loginTime: "21/11/2023 04:22 PM",
      logoutTime: "",
      loginBy: "Web",
    },
    {
      id: 14,
      userId: "PR-17273",
      userName: "SH. LALIT SINGHAL",
      ipAddress: "152.58.68.119",
      loginTime: "04/12/2023 11:41 AM",
      logoutTime: "",
      loginBy: "Web",
    },
  ]);

  // State for search filters
  const [filters, setFilters] = useState({
    userId: "",
    ipAddress: "",
    date: "",
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply filters to data
  const filteredData = loginData.filter((item) => {
    return (
      item.userId.toLowerCase().includes(filters.userId.toLowerCase()) &&
      item.ipAddress.toLowerCase().includes(filters.ipAddress.toLowerCase()) &&
      item.loginTime.includes(filters.date)
    );
  });

  // Close modal function (would be connected to actual functionality in a real app)
  const handleClose = () => {
    console.log("Modal closed");
    // In a real application, you would trigger the close modal action here
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mx-auto">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <div className="flex items-center text-red-500">
          <h2 className="text-lg font-semibold">Staff Login Details</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={filters.userId}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="ipAddress"
            className="block text-sm font-medium text-gray-700"
          >
            IP Address
          </label>
          <input
            type="text"
            id="ipAddress"
            name="ipAddress"
            value={filters.ipAddress}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="DD/MM/YYYY"
            value={filters.date}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                S.No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                UserID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                IP Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Login Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Logout Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Login By
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.ipAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.loginTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.logoutTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.loginBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{filteredData.length}</span> of{" "}
          <span className="font-medium">{loginData.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
