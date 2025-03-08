'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Notification = () => {
  const router =useRouter()
  // Sample data for demonstration
  const achievements = [
    { id: 1, name: 'Alex Johnson', title: 'First Place in Science Fair', date: '12/02/2025', badge: '🏆' },
    { id: 2, name: 'Maya Williams', title: 'Regional Math Competition Winner', date: '28/01/2025', badge: '🥇' },
  ];
  
  const circulars = [
    { id: 1, title: 'Spring Semester Schedule', type: 'Academic', date: '05/03/2025', priority: 'high' },
    { id: 2, title: 'Campus Maintenance Notice', type: 'Facility', date: '01/03/2025', priority: 'medium' },
    { id: 3, title: 'Library Extended Hours', type: 'Service', date: '28/02/2025', priority: 'low' },
  ];
  
  const events = [
    { id: 1, title: 'Annual Science Exhibition', date: '15 Mar', time: '09:00 AM', location: 'Main Hall' },
    { id: 2, title: 'Career Counseling Workshop', date: '10 Mar', time: '02:00 PM', location: 'Room 201' },
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-amber-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {/* Achievements Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3">
          <h2 className="text-white font-medium text-lg">Achievements</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {achievements.map(item => (
            <div key={item.id} className="p-4 hover:bg-indigo-50 transition-colors duration-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                  {item.badge}
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-indigo-600">{item.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 pl-1">Achievement:</p>
              <p className="text-sm text-gray-700 font-medium pl-1">{item.title}</p>
              <div className="text-xs text-gray-400 mt-2 flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                {item.date}
              </div>
            </div>
          ))}
        </div>
        <div onClick={()=>router.push('/achievement')} className="px-4 py-2 bg-indigo-500 text-white text-center cursor-pointer hover:bg-indigo-600 transition-colors duration-200">
          <span className="text-sm font-medium">Show More</span>
        </div>
      </div>

      {/* Circulars Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3">
          <h2 className="text-white font-medium text-lg">News/Circulars</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {circulars.map(item => (
            <div key={item.id} className="p-4 hover:bg-purple-50 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-purple-600">@{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Dear Students,</p>
                </div>
                <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                  Circular
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-2 flex items-center">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                {item.date}
              </div>
            </div>
          ))}
        </div>
        <div onClick={()=>router.push('/news-details')} className="px-4 py-2 bg-purple-500 text-white text-center cursor-pointer hover:bg-purple-600 transition-colors duration-200">
          <span className="text-sm font-medium">Show More</span>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3">
          <h2 className="text-white font-medium text-lg">Events</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {events.map(item => (
            <div key={item.id} className="p-4 hover:bg-blue-50 transition-colors duration-200">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-14 h-14 border border-blue-200 rounded-lg flex flex-col items-center justify-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-blue-600 font-bold text-sm mt-1">
                      {item.date.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-xs text-blue-500 mt-1 text-center">
                    {item.date.split(' ')[1]}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-700 font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="inline-block">⏰ {item.time}</span>
                    <span className="inline-block ml-2">📍 {item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div  onClick={()=>router.push('/event-details')} className="px-4 py-2 bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-600 transition-colors duration-200">
          <span className="text-sm font-medium">Show More</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;