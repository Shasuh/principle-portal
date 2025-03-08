"use client";

import React, { useState } from "react";

const Exam = () => {
  // Sample exam data - in a real app, this would come from props or an API
  const [examRecords] = useState([
    {
      id: 1,
      examName: "Mid-Term Assessment",
      subject: "Mathematics",
      date: "2024-03-15",
      totalMarks: 100,
      obtainedMarks: 87,
      grade: "A",
      status: "Passed"
    },
    {
      id: 2,
      examName: "Final Examination",
      subject: "Physics",
      date: "2024-04-22",
      totalMarks: 100,
      obtainedMarks: 72,
      grade: "B",
      status: "Passed"
    },
    {
      id: 3,
      examName: "Quiz Series 2",
      subject: "Chemistry",
      date: "2024-02-10",
      totalMarks: 50,
      obtainedMarks: 42,
      grade: "A",
      status: "Passed"
    },
    {
      id: 4,
      examName: "Practical Assessment",
      subject: "Biology",
      date: "2024-03-30",
      totalMarks: 100,
      obtainedMarks: 65,
      grade: "C",
      status: "Passed"
    }
  ]);

  // Calculate performance metrics
  const calculatePerformance = () => {
    const totalExams = examRecords.length;
    if (totalExams === 0) return { avgScore: 0, avgPercentage: 0 };
    
    const totalScore = examRecords.reduce((sum, exam) => sum + exam.obtainedMarks, 0);
    const totalPossible = examRecords.reduce((sum, exam) => sum + exam.totalMarks, 0);
    
    return {
      avgScore: (totalScore / totalExams).toFixed(2),
      avgPercentage: ((totalScore / totalPossible) * 100).toFixed(2)
    };
  };

  const performance = calculatePerformance();

  // Function to get grade color
  const getGradeColor = (grade) => {
    switch (grade) {
      case "A":
        return "text-green-600";
      case "B":
        return "text-blue-600";
      case "C":
        return "text-yellow-600";
      case "D":
        return "text-orange-600";
      case "F":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // Function to get percentage and progress bar color
  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-green-400";
    if (percentage >= 70) return "bg-blue-500";
    if (percentage >= 60) return "bg-yellow-500";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6  mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Examination Records</h1>
      
      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Average Score</h3>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-blue-800">{performance.avgScore}</p>
            <p className="ml-2 text-blue-600">points</p>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-lg font-medium text-green-700 mb-2">Overall Performance</h3>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-green-800">{performance.avgPercentage}%</p>
          </div>
        </div>
      </div>
      
      {/* Exam Records Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Exam Name</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Subject</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Date</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Score</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Percentage</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Grade</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {examRecords.length > 0 ? (
              examRecords.map((exam) => {
                const percentage = ((exam.obtainedMarks / exam.totalMarks) * 100).toFixed(2);
                return (
                  <tr key={exam.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">{exam.examName}</td>
                    <td className="py-3 px-4 border-b">{exam.subject}</td>
                    <td className="py-3 px-4 border-b">{new Date(exam.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4 border-b">{exam.obtainedMarks}/{exam.totalMarks}</td>
                    <td className="py-3 px-4 border-b">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-24">
                          <div 
                            className={`h-2.5 rounded-full ${getPercentageColor(percentage)}`} 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span>{percentage}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b">
                      <span className={`font-bold text-lg ${getGradeColor(exam.grade)}`}>
                        {exam.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-2 py-1 rounded-full text-sm ${exam.status === "Passed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {exam.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No exam records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Grade Explanation */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-md font-medium text-gray-700 mb-2">Grading System</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          <div className="flex items-center">
            <span className={`font-bold mr-2 ${getGradeColor("A")}`}>A</span>
            <span>90-100%</span>
          </div>
          <div className="flex items-center">
            <span className={`font-bold mr-2 ${getGradeColor("B")}`}>B</span>
            <span>80-89%</span>
          </div>
          <div className="flex items-center">
            <span className={`font-bold mr-2 ${getGradeColor("C")}`}>C</span>
            <span>70-79%</span>
          </div>
          <div className="flex items-center">
            <span className={`font-bold mr-2 ${getGradeColor("D")}`}>D</span>
            <span>60-69%</span>
          </div>
          <div className="flex items-center">
            <span className={`font-bold mr-2 ${getGradeColor("F")}`}>F</span>
            <span>&lt;60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;