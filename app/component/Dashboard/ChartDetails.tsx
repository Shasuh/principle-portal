import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';

const ChartDetails = () => {
  // State to track which section is expanded
  const [expandedSection, setExpandedSection] = useState('student');
  
  // Sample chart data for different sections
  const chartData = {
    student: {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: ['#14b8a6'],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          }
        },
        xaxis: {
          categories: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
          labels: {
            style: {
              colors: '#64748b'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Number of Students',
            style: {
              color: '#64748b'
            }
          }
        },
        title: {
          text: 'ClassWise Student Strength',
          style: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#14b8a6'
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [{
        name: 'Students',
        data: [45, 52, 38, 44, 33, 42, 36, 41]
      }]
    },
    staff: {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: ['#0284c7'],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        xaxis: {
          categories: ['Teaching', 'Administrative', 'Support', 'Management'],
          labels: {
            style: {
              colors: '#64748b'
            }
          }
        },
        title: {
          text: 'Staff Distribution',
          style: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#0284c7'
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [{
        name: 'Staff Members',
        data: [22, 8, 12, 5]
      }]
    },
    attendance: {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: ['#8b5cf6', '#ef4444'],
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          labels: {
            style: {
              colors: '#64748b'
            }
          }
        },
        title: {
          text: 'Weekly Attendance Rate',
          style: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#8b5cf6'
          }
        },
        legend: {
          position: 'top'
        }
      },
      series: [
        {
          name: 'Present',
          data: [92, 88, 94, 86, 91]
        },
        {
          name: 'Absent',
          data: [8, 12, 6, 14, 9]
        }
      ]
    }
  };

  // Filter options for each section
  const filterOptions = {
    student: ['ClassWise Strength', 'All Year', 'Gender', 'Religion'],
    staff: ['Department', 'Experience', 'Gender', 'Qualification'],
    attendance: ['Daily', 'Weekly', 'Monthly', 'Class-wise']
  };

  // State to track selected filter for each section
  const [selectedFilters, setSelectedFilters] = useState({
    student: 'ClassWise Strength',
    staff: 'Department',
    attendance: 'Weekly'
  });

  // Handle filter selection
  const handleFilterSelect = (section, filter) => {
    setSelectedFilters({
      ...selectedFilters,
      [section]: filter
    });
  };

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSection(section);
  };

  // Get chart type based on section
  const getChartType = (section) => {
    if (section === 'student') return 'bar';
    if (section === 'staff') return 'bar';
    if (section === 'attendance') return 'line';
    return 'bar';
  };

  // Get section color
  const getSectionColor = (section) => {
    if (section === 'student') return 'text-teal-600';
    if (section === 'staff') return 'text-sky-600';
    if (section === 'attendance') return 'text-purple-600';
    return 'text-gray-600';
  };

  // Get section icon
  const getSectionIcon = (section, isExpanded) => {
    if (isExpanded) return '▼';
    return '◀';
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6  mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">School Dashboard</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-teal-100 text-teal-600 rounded hover:bg-teal-200 transition">Export</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition">Settings</button>
        </div>
      </div>
      
      <div className="flex justify-between items-start mt-4 flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 pr-0 lg:pr-6">
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm mb-6">
            {expandedSection && (
              <div id="chart" className="mt-2">
                <ReactApexCharts
                  options={chartData[expandedSection].options}
                  series={chartData[expandedSection].series}
                  type={getChartType(expandedSection)}
                  height={350}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full lg:w-1/4 bg-gray-50 rounded-lg p-4 shadow-sm">
          {/* Student Section */}
          <div className="mb-6">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('student')}
            >
              <h4 className={`font-semibold ${getSectionColor('student')}`}>STUDENT</h4>
              <span className={`${getSectionColor('student')} text-lg`}>
                {getSectionIcon('student', expandedSection === 'student')}
              </span>
            </div>
            
            {expandedSection === 'student' && (
              <ul className="space-y-2 mt-2">
                {filterOptions.student.map((filter) => (
                  <li
                    key={filter}
                    className={`flex items-center ${getSectionColor('student')} hover:bg-teal-50 cursor-pointer rounded p-1 transition ${
                      selectedFilters.student === filter ? "bg-teal-100 font-medium" : ""
                    }`}
                    onClick={() => handleFilterSelect('student', filter)}
                  >
                    <span className="mr-2">{selectedFilters.student === filter ? '●' : '○'}</span>
                    {filter}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Staff Section */}
          <div className="mb-6">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('staff')}
            >
              <h4 className={`font-semibold ${getSectionColor('staff')}`}>STAFF</h4>
              <span className={`${getSectionColor('staff')} text-lg`}>
                {getSectionIcon('staff', expandedSection === 'staff')}
              </span>
            </div>
            
            {expandedSection === 'staff' && (
              <ul className="space-y-2 mt-2">
                {filterOptions.staff.map((filter) => (
                  <li
                    key={filter}
                    className={`flex items-center ${getSectionColor('staff')} hover:bg-sky-50 cursor-pointer rounded p-1 transition ${
                      selectedFilters.staff === filter ? "bg-sky-100 font-medium" : ""
                    }`}
                    onClick={() => handleFilterSelect('staff', filter)}
                  >
                    <span className="mr-2">{selectedFilters.staff === filter ? '●' : '○'}</span>
                    {filter}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Attendance Section */}
          <div>
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('attendance')}
            >
              <h4 className={`font-semibold ${getSectionColor('attendance')}`}>STUDENT ATTENDANCE</h4>
              <span className={`${getSectionColor('attendance')} text-lg`}>
                {getSectionIcon('attendance', expandedSection === 'attendance')}
              </span>
            </div>
            
            {expandedSection === 'attendance' && (
              <ul className="space-y-2 mt-2">
                {filterOptions.attendance.map((filter) => (
                  <li
                    key={filter}
                    className={`flex items-center ${getSectionColor('attendance')} hover:bg-purple-50 cursor-pointer rounded p-1 transition ${
                      selectedFilters.attendance === filter ? "bg-purple-100 font-medium" : ""
                    }`}
                    onClick={() => handleFilterSelect('attendance', filter)}
                  >
                    <span className="mr-2">{selectedFilters.attendance === filter ? '●' : '○'}</span>
                    {filter}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-teal-50 p-4 rounded-lg shadow-sm border border-teal-100">
          <h5 className="text-teal-600 font-medium">Total Students</h5>
          <p className="text-2xl font-bold text-gray-800 mt-2">331</p>
          <div className="text-sm text-teal-600 mt-1">↑ 4.2% from last year</div>
        </div>
        <div className="bg-sky-50 p-4 rounded-lg shadow-sm border border-sky-100">
          <h5 className="text-sky-600 font-medium">Total Staff</h5>
          <p className="text-2xl font-bold text-gray-800 mt-2">47</p>
          <div className="text-sm text-sky-600 mt-1">↑ 2 new this month</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
          <h5 className="text-purple-600 font-medium">Average Attendance</h5>
          <p className="text-2xl font-bold text-gray-800 mt-2">90.2%</p>
          <div className="text-sm text-purple-600 mt-1">↓ 1.3% this week</div>
        </div>
      </div>
    </div>
  );
};


export default ChartDetails