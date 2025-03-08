import React from "react";

const Profile = () => {
  // Dummy student data (replace with real data)
  const student = {
    name: "John Doe",
    rollNumber: "S12345",
    class: "10th Grade",
    section: "A",
    dateOfJoining: "01/04/2023",
    bloodGroup: "B+",
    profileImage: "/api/placeholder/150/150",
    
    // Parent details
    motherName: "Sarah Doe",
    motherOccupation: "Teacher",
    motherContact: "+1 234 567 891",
    motherEmail: "sarah.doe@example.com",
    
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherContact: "+1 234 567 890",
    fatherEmail: "robert.doe@example.com",
    
    // Guardian details
    guardianName: "James Smith",
    guardianRelation: "Uncle",
    guardianContact: "+1 234 567 892",
    guardianEmail: "james.smith@example.com",
    
    // Address information
    permanentAddress: "123 Main Street, New York, NY 10001, USA",
    correspondenceAddress: "456 College Ave, Student Housing B3, Boston, MA 02215, USA"
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      {/* Top Row: Picture & Admin Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Picture Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Student Profile</h3>
          </div>
          <div className="p-6 flex flex-col items-center">
            <img
              src={student.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-100 shadow-sm"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
              <p className="text-gray-600 mt-1">Class: {student.class} | Section: {student.section}</p>
            </div>
          </div>
        </div>
        
        {/* Admin Info Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Academic Information</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b border-gray-100 pb-3">
                <p className="text-gray-500 text-sm">Roll Number</p>
                <p className="font-medium text-gray-800">{student.rollNumber}</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <p className="text-gray-500 text-sm">Class & Section</p>
                <p className="font-medium text-gray-800">{student.class} {student.section}</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <p className="text-gray-500 text-sm">Date of Joining</p>
                <p className="font-medium text-gray-800">{student.dateOfJoining}</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <p className="text-gray-500 text-sm">Blood Group</p>
                <p className="font-medium text-gray-800">{student.bloodGroup}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Row: Mother & Father Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Mother Details */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-pink-500 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Mother Details</h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-bold text-lg text-gray-800">{student.motherName}</h4>
              <p className="text-gray-600">Occupation: {student.motherOccupation}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p>{student.motherContact}</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p>{student.motherEmail}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Father Details */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-500 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Father Details</h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-bold text-lg text-gray-800">{student.fatherName}</h4>
              <p className="text-gray-600">Occupation: {student.fatherOccupation}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p>{student.fatherContact}</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p>{student.fatherEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Third Row: Local Guardian Details & Address Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Local Guardian Details */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Local Guardian Details</h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-bold text-lg text-gray-800">{student.guardianName}</h4>
              <p className="text-gray-600">Relation: {student.guardianRelation}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p>{student.guardianContact}</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p>{student.guardianEmail}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Address Information */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="bg-yellow-500 text-white py-3 px-4">
            <h3 className="font-semibold text-lg">Address Information</h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-medium text-gray-700">Permanent Address</h4>
              <div className="flex items-start mt-2">
                <svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-600">{student.permanentAddress}</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Correspondence Address</h4>
              <div className="flex items-start mt-2">
                <svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-600">{student.correspondenceAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;