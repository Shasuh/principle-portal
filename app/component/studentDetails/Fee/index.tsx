"use client";

import React from "react";

const Fee = () => {
  // Fee data - in a real application, this would likely come from an API or props
  const feeData = [
    { id: 1, installment: "APR", amount: 44000, paid: 45500, fineExcess: 1500, balance: 0 },
    { id: 2, installment: "JUL", amount: 13000, paid: 0, fineExcess: 0, balance: 13000 },
    { id: 3, installment: "OCT", amount: 13000, paid: 0, fineExcess: 0, balance: 13000 },
    { id: 4, installment: "JAN", amount: 13000, paid: 0, fineExcess: 0, balance: 13000 },
  ];

  // Calculate totals
  const totals = feeData.reduce(
    (acc, item) => {
      return {
        amount: acc.amount + item.amount,
        paid: acc.paid + item.paid,
        fineExcess: acc.fineExcess + item.fineExcess,
        balance: acc.balance + item.balance,
      };
    },
    { amount: 0, paid: 0, fineExcess: 0, balance: 0 }
  );

  // Format currency
  const formatCurrency = (value) => {
    return value.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="p-6 max-w-full bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fee Structure</h2>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-r border-gray-200">
                  Sl No
                </th>
                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-r border-gray-200">
                  Installment
                </th>
                <th className="px-6 py-4 bg-gray-50 text-right text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-r border-gray-200">
                  Amount
                </th>
                <th className="px-6 py-4 bg-gray-50 text-right text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-r border-gray-200">
                  Paid
                </th>
                <th className="px-6 py-4 bg-gray-50 text-right text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-r border-gray-200">
                  Fine/Excess
                </th>
                <th className="px-6 py-4 bg-gray-50 text-right text-sm font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {feeData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r border-gray-200">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 border-r border-gray-200">
                    {item.installment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right border-r border-gray-200">
                    {formatCurrency(item.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right border-r border-gray-200">
                    <span className={`${item.paid > 0 ? "text-green-600 font-medium" : "text-gray-500"}`}>
                      {formatCurrency(item.paid)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right border-r border-gray-200">
                    <span className={`${item.fineExcess > 0 ? "text-orange-500 font-medium" : "text-gray-500"}`}>
                      {formatCurrency(item.fineExcess)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                    <span className={`${item.balance > 0 ? "text-red-600 font-medium" : "text-green-600 font-medium"}`}>
                      {formatCurrency(item.balance)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-teal-100 border-t-2 border-teal-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 border-r border-teal-200">
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 border-r border-teal-200">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 text-right border-r border-teal-200">
                  {formatCurrency(totals.amount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 text-right border-r border-teal-200">
                  {formatCurrency(totals.paid)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 text-right border-r border-teal-200">
                  {formatCurrency(totals.fineExcess)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 text-right">
                  {formatCurrency(totals.balance)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-green-600 rounded"></div>
            <span className="text-sm text-gray-600">Paid Amount</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-red-600 rounded"></div>
            <span className="text-sm text-gray-600">Balance Due</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-orange-500 rounded"></div>
            <span className="text-sm text-gray-600">Fine/Excess Amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fee;