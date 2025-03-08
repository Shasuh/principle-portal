'use client'
import React from 'react'
import { ArrowLeft, X } from 'lucide-react'

const EventDetails = () => {
  // Sample data based on the image
  const events = [
    { 
      id: 1, 
      date: '05/04/2021', 
      eventTime: '', 
      eventTitle: 'Today is a new day, so rise up and move forward into the victory that god has pr', 
      eventVenue: '' 
    },
    { 
      id: 2, 
      date: '08/04/2021', 
      eventTime: '', 
      eventTitle: 'Beginning with positivity (Welcome the Students)', 
      eventVenue: '' 
    },
    { 
      id: 3, 
      date: '20/04/2021', 
      eventTime: '', 
      eventTitle: 'Bird Feeder Making Activity', 
      eventVenue: '' 
    },
    { 
      id: 4, 
      date: '20/04/2021', 
      eventTime: '', 
      eventTitle: 'I belong to the earth. (A Role Play)', 
      eventVenue: '' 
    },
    { 
      id: 5, 
      date: '20/04/2021', 
      eventTime: '', 
      eventTitle: 'Nature collage using dry leaves and flower twigs.', 
      eventVenue: '' 
    },
    { 
      id: 6, 
      date: '20/04/2021', 
      eventTime: '', 
      eventTitle: 'Rock Paint activity ( Write a Save Earth Slogan)', 
      eventVenue: '' 
    },
    { 
      id: 7, 
      date: '20/04/2021', 
      eventTime: '', 
      eventTitle: 'Saving of earth is the first and foremost responsibility of everyone, let\'s do i', 
      eventVenue: '' 
    },
    { 
      id: 8, 
      date: '04/06/2021', 
      eventTime: '', 
      eventTitle: 'Make a pledge card to Save the Environment and a plan to take action', 
      eventVenue: '' 
    },
    { 
      id: 9, 
      date: '04/06/2021', 
      eventTime: '', 
      eventTitle: 'Make Signs to Save Resources for your home', 
      eventVenue: 'Make Signs to Save Resources for your home' 
    },
    { 
      id: 10, 
      date: '07/06/2021', 
      eventTime: '', 
      eventTitle: 'Draw a healthy food plate with your', 
      eventVenue: 'Draw a healthy food plate with your' 
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600  text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-medium">Event Details</h1>
        </div>
      </div>

      {/* Table */}
      <div className="p-4 flex-1 overflow-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">S No.</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Date</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Event Time</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Event Title</th>
              <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">Event Venue</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border text-sm text-gray-500">{event.id}</td>
                <td className="py-3 px-4 border text-sm text-gray-500">{event.date}</td>
                <td className="py-3 px-4 border text-sm text-gray-500">{event.eventTime}</td>
                <td className="py-3 px-4 border text-sm text-gray-700">{event.eventTitle}</td>
                <td className="py-3 px-4 border text-sm text-gray-700">{event.eventVenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventDetails