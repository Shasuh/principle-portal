"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ClassWiseDetails = () => {
  const router = useRouter();
  // Sample data based on the image
  const initialStudents = [
    {
      admissionNo: "R-21/729",
      student: "AYAN SHARMA",
      father: "ABHISHEK SHARMA",
      mother: "CHARU KAUSHIK",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/730",
      student: "RAUNAK SINGH BHOGAL",
      father: "JASPAL SINGH BHOGAL",
      mother: "ANCHAL BHOGAL",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/731",
      student: "ANVAY TEOTIA",
      father: "SACHIN TEOTIA",
      mother: "SHALU",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/735",
      student: "AARAV JAIN",
      father: "VAIBHAV JAIN",
      mother: "SWATI JAIN",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/737",
      student: "HITARTH KHUNGER",
      father: "RAMAN KHUNGER",
      mother: "KAMNA KHUNGER",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/738",
      student: "MIRAYA KHUNGER",
      father: "PULKIT KHUNGER",
      mother: "ANJALI KHUNGER",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/743",
      student: "IRA SAXENA",
      father: "HRISHI KUMAR",
      mother: "MONALY SINHA",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/744",
      student: "AROHI MALIK",
      father: "ROHIT KUMAR MALIK",
      mother: "ANJU",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/745",
      student: "JIA SETHI",
      father: "NISHANT SETHI",
      mother: "ANJALI ANEJA SETHI",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/746",
      student: "NIHIRA GOYAL",
      father: "PRAVEEN GOYAL",
      mother: "RAKSHA AGRAWAL",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/752",
      student: "RIBKA MALIK",
      father: "ABHISHEK MALIK",
      mother: "ANJALI MALIK",
      phone: "7290020737",
    },
    {
      admissionNo: "R-21/753",
      student: "RUDRAKSH TONGER",
      father: "VINEET TONGER",
      mother: "NEHA MAVI",
      phone: "7290020737",
    },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setStudents(initialStudents);
    } else {
      const filteredResults = initialStudents.filter((student) =>
        Object.values(student).some((value) =>
          value.toLowerCase().includes(term.toLowerCase())
        )
      );
      setStudents(filteredResults);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md  mx-auto">
      {/* Header */}
      <div className="bg-teal-700 text-white p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Class Wise Details</h1>
          <div className="ml-2 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
            45
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 flex justify-end">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="absolute right-0 top-0 h-full p-2 bg-teal-700 text-white rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border text-left font-semibold text-gray-600 w-24">
                ADMISSION NO.
              </th>
              <th className="p-3 border text-left font-semibold text-gray-600">
                STUDENT
              </th>
              <th className="p-3 border text-left font-semibold text-gray-600">
                FATHER
              </th>
              <th className="p-3 border text-left font-semibold text-gray-600">
                MOTHER
              </th>
              <th className="p-3 border text-left font-semibold text-gray-600 w-32">
                PHONE No.
              </th>
              <th className="p-3 border text-left font-semibold text-gray-600 w-24">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.admissionNo}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 border text-gray-600">
                  {student.admissionNo}
                </td>
                <td className="p-3 border font-medium">{student.student}</td>
                <td className="p-3 border text-gray-600">{student.father}</td>
                <td className="p-3 border text-gray-600">{student.mother}</td>
                <td className="p-3 border text-gray-600">{student.phone}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => router.push(`/student-details?${index}`)}
                    className="text-teal-600 hover:text-teal-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination or additional controls could go here */}
      <div className="p-4 flex justify-end">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            Previous
          </button>
          <button className="px-3 py-1 bg-teal-700 text-white rounded-lg hover:bg-teal-600">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassWiseDetails;
