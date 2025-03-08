"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Attendance = () => {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  
  // Available years for selection
  const availableYears = [2020, 2021, 2022, 2023, 2024, 2025];
  
  // Sample attendance data - extended with multiple years
  const allAttendanceData = {
    2020: [
      { month: "Jan", value: 12, year: 2020, details: { present: 12, absent: 2, halfDay: 1, leave: 3 } },
      { month: "Feb", value: 14, year: 2020, details: { present: 14, absent: 1, halfDay: 0, leave: 1 } },
      // ... other months for 2020
    ],
    2021: [
      { month: "Jan", value: 15, year: 2021, details: { present: 15, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Feb", value: 15, year: 2021, details: { present: 15, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Mar", value: 15, year: 2021, details: { present: 15, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Apr", value: 15, year: 2021, details: { present: 15, absent: 0, halfDay: 0, leave: 0 } },
      { month: "May", value: 15, year: 2021, details: { present: 15, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Jun", value: 22.5, year: 2021, details: { present: 22, absent: 0, halfDay: 1, leave: 0 } },
      { month: "Jul", value: 20, year: 2021, details: { present: 20, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Aug", value: 18, year: 2021, details: { present: 18, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Sep", value: 22, year: 2021, details: { present: 22, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Oct", value: 16, year: 2021, details: { present: 16, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Nov", value: 10, year: 2021, details: { present: 10, absent: 0, halfDay: 0, leave: 0 } },
      { month: "Dec", value: 10, year: 2021, details: { present: 10, absent: 0, halfDay: 0, leave: 0 } }
    ],
    2022: [
      { month: "Jan", value: 18, year: 2022, details: { present: 18, absent: 1, halfDay: 0, leave: 1 } },
      { month: "Feb", value: 17, year: 2022, details: { present: 17, absent: 2, halfDay: 1, leave: 0 } },
      // ... other months for 2022
    ]
  };
  
  // Get data for the selected year (or empty array if none exists)
  const attendanceData = allAttendanceData[selectedYear] || [];
  
  // Calculate attendance statistics
  const calculateStats = () => {
    if (!attendanceData.length) return { total: 0, present: 0, absent: 0, halfDay: 0, leave: 0 };
    
    return attendanceData.reduce((stats, month) => {
      stats.total += month.value;
      stats.present += month.details.present;
      stats.absent += month.details.absent;
      stats.halfDay += month.details.halfDay;
      stats.leave += month.details.leave;
      return stats;
    }, { total: 0, present: 0, absent: 0, halfDay: 0, leave: 0 });
  };
  
  const stats = calculateStats();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowYearDropdown(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const toggleYearDropdown = (e) => {
    e.stopPropagation(); // Prevent the document click handler from firing
    setShowYearDropdown(!showYearDropdown);
  };
  
  const selectYear = (year) => {
    setSelectedYear(year);
    setShowYearDropdown(false);
  };

  // Generate color gradient based on value
  const getBarColors = () => {
    return attendanceData.map(item => {
      // Normalized value between 0-1 (assuming max attendance is 30)
      const normalized = Math.min(item.value / 30, 1);
      // Generate color from red (low) to blue (high)
      return `rgba(49, 130, 206, ${0.4 + normalized * 0.6})`;
    });
  };

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: true,
        borderRadius: 4,
        dataLabels: {
          position: 'top'
        },
      }
    },
    colors: getBarColors(),
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return val.toFixed(0);
      },
      style: {
        fontSize: '12px',
        colors: ['#4A5568']
      },
      offsetY: -20
    },
    legend: {
      show: false
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
          opacity: 0.2
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        left: 10,
        right: 10
      }
    },
    xaxis: {
      categories: attendanceData.map(item => item.month),
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          colors: Array(attendanceData.length).fill('#718096')
        },
        rotate: 0,
        offsetY: 0
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      max: 30,
      tickAmount: 4,
      labels: {
        formatter: function(val) {
          return val.toFixed(0);
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      }
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.15
        }
      }
    },
    tooltip: {
      y: {
        formatter: function(val, { dataPointIndex }) {
          const item = attendanceData[dataPointIndex];
          return val.toFixed(1);
        }
      },
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const item = attendanceData[dataPointIndex];
        return `
          <div class="p-3 bg-white shadow-lg rounded-lg border border-gray-200">
            <div class="font-semibold text-gray-800 mb-2">${item.month} ${item.year}</div>
            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div class="text-blue-600 font-medium">Present:</div>
              <div>${item.details.present} days</div>
              <div class="text-red-500 font-medium">Absent:</div>
              <div>${item.details.absent} days</div>
              <div class="text-green-500 font-medium">Half Day:</div>
              <div>${item.details.halfDay} days</div>
              <div class="text-yellow-500 font-medium">Leave:</div>
              <div>${item.details.leave} days</div>
              <div class="text-purple-600 font-medium mt-1">Total:</div>
              <div class="mt-1">${item.value} days</div>
            </div>
          </div>
        `;
      }
    }
  };

  const series = [{
    name: 'Attendance',
    data: attendanceData.map(item => item.value)
  }];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Attendance Summary</h2>
        
        {/* Year selector dropdown */}
        <div className="relative inline-block text-left">
          <div>
            <button 
              type="button" 
              className="inline-flex justify-between items-center w-28 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={toggleYearDropdown}
            >
              {selectedYear}
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {showYearDropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {availableYears.map(year => (
                  <button
                    key={year}
                    className={`w-full text-left px-4 py-2 text-sm ${selectedYear === year ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => selectYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Statistics cards */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b">
        <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-100">
          <div className="text-xs text-gray-500 uppercase">Present</div>
          <div className="text-xl font-bold text-blue-600">{stats.present}</div>
          <div className="text-xs text-gray-400">days</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-red-100">
          <div className="text-xs text-gray-500 uppercase">Absent</div>
          <div className="text-xl font-bold text-red-500">{stats.absent}</div>
          <div className="text-xs text-gray-400">days</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
          <div className="text-xs text-gray-500 uppercase">Half Days</div>
          <div className="text-xl font-bold text-green-500">{stats.halfDay}</div>
          <div className="text-xs text-gray-400">days</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100">
          <div className="text-xs text-gray-500 uppercase">Leave</div>
          <div className="text-xl font-bold text-yellow-500">{stats.leave}</div>
          <div className="text-xs text-gray-400">days</div>
        </div>
      </div>
      
      {/* Chart container - Only render client-side */}
      <div className="p-4">
        <div className="relative">
          {typeof window !== 'undefined' && (
            <Chart
              options={chartOptions}
              series={series}
              type="bar"
              height={350}
            />
          )}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center items-center gap-6 p-4 border-t border-gray-100 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Present</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Absent</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Half Day</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Leave</span>
        </div>
      </div>
    </div>
  );
};

export default Attendance;