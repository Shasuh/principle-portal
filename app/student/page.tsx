"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ClassStrengthTable = () => {
  const router =useRouter()
  // Sample data based on the image
  const data = [
    {
      class: "NURSERY",
      section: "A",
      boys: 25,
      girls: 17,
      currentTotal: 42,
      tc: 1,
      dropout: 3,
      new: 46,
    },
    {
      class: "PREP",
      section: "A",
      boys: 14,
      girls: 9,
      currentTotal: 23,
      tc: 0,
      dropout: 0,
      new: 15,
    },
    {
      class: "PREP",
      section: "B",
      boys: 15,
      girls: 7,
      currentTotal: 22,
      tc: 0,
      dropout: 1,
      new: 16,
    },
    {
      class: "I",
      section: "A",
      boys: 21,
      girls: 12,
      currentTotal: 33,
      tc: 0,
      dropout: 0,
      new: 16,
    },
    {
      class: "I",
      section: "B",
      boys: 19,
      girls: 13,
      currentTotal: 32,
      tc: 0,
      dropout: 0,
      new: 22,
    },
    {
      class: "II",
      section: "A",
      boys: 21,
      girls: 15,
      currentTotal: 36,
      tc: 0,
      dropout: 0,
      new: 10,
    },
    {
      class: "II",
      section: "B",
      boys: 26,
      girls: 10,
      currentTotal: 36,
      tc: 0,
      dropout: 1,
      new: 11,
    },
    {
      class: "III",
      section: "A",
      boys: 18,
      girls: 15,
      currentTotal: 33,
      tc: 0,
      dropout: 0,
      new: 14,
    },
    {
      class: "III",
      section: "B",
      boys: 23,
      girls: 10,
      currentTotal: 33,
      tc: 0,
      dropout: 0,
      new: 13,
    },
  ];

  // Calculate totals for each class
  const getClassTotals = () => {
    const classes = [...new Set(data.map((item) => item.class))];
    return classes.map((cls) => {
      const classData = data.filter((item) => item.class === cls);
      return {
        class: cls,
        section: "TOTAL CLASS",
        boys: classData.reduce((sum, item) => sum + item.boys, 0),
        girls: classData.reduce((sum, item) => sum + item.girls, 0),
        currentTotal: classData.reduce(
          (sum, item) => sum + item.currentTotal,
          0
        ),
        tc: classData.reduce((sum, item) => sum + item.tc, 0),
        dropout: classData.reduce((sum, item) => sum + item.dropout, 0),
        new: classData.reduce((sum, item) => sum + item.new, 0),
      };
    });
  };

  // Combine regular data with totals in the correct order
  const organizedData = () => {
    const result = [];
    const classes = [...new Set(data.map((item) => item.class))];

    classes.forEach((cls) => {
      // Add individual sections for this class
      const classSections = data.filter((item) => item.class === cls);
      result.push(...classSections);

      // Add total row for this class
      const total = getClassTotals().find((item) => item.class === cls);
      result.push(total);
    });

    return result;
  };

  // Calculate grand total (from header)
  const grandTotal = data.reduce((sum, item) => sum + item.currentTotal, 0);

  return (
    <div className=" mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-teal-700 text-white">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">
            Total Strength{" "}
            <span className="ml-2 bg-teal-600 px-3 py-1 rounded-md">
              {grandTotal}
            </span>
          </h1>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="py-3 px-4 text-left">Class</th>
              <th className="py-3 px-4 text-left">Section</th>
              <th className="py-3 px-4 text-center">Boys</th>
              <th className="py-3 px-4 text-center">Girls</th>
              <th className="py-3 px-4 text-center">Current Total</th>
              <th className="py-3 px-4 text-center">TC</th>
              <th className="py-3 px-4 text-center">Dropout</th>
              <th className="py-3 px-4 text-center">New</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {organizedData().map((row, index) => (
              <tr
                key={`${row.class}-${row.section}-${index}`}
                className={
                  row.section === "TOTAL CLASS"
                    ? "bg-gray-200 font-semibold"
                    : "border-b hover:bg-gray-50"
                }
              >
                <td className="py-3 px-4">{row.class}</td>
                <td className="py-3 px-4">{row.section}</td>
                <td className="py-3 px-4 text-center">{row.boys}</td>
                <td className="py-3 px-4 text-center">{row.girls}</td>
                <td className="py-3 px-4 text-center">{row.currentTotal}</td>
                <td className="py-3 px-4 text-center">{row.tc}</td>
                <td className="py-3 px-4 text-center">{row.dropout}</td>
                <td className="py-3 px-4 text-center">{row.new}</td>
                <td className="py-3 px-4 text-center">
                  {row.section !== "TOTAL CLASS" && (
                    <button onClick={()=>router.push(`/class-wise-details?${index}`)} className="text-teal-600 hover:text-teal-700">
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassStrengthTable;
