"use client";
import React, { useState } from "react";
import CustomTabs from "../component/customTab";
import Profile from "../component/studentDetails/Profile";
import Assignment from "../component/studentDetails/Assignment";
import Achievement from "../component/studentDetails/Achievement";
import Attendance from "../component/studentDetails/Attendance";
import Exam from "../component/studentDetails/Exam";
import Library from "../component/studentDetails/Library";
import Discipline from "../component/studentDetails/Discipline";
import Health from "../component/studentDetails/Health";
import Fee from "../component/studentDetails/Fee";

const StudentDetails = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    { id: 1, label: "Profile" },
    { id: 2, label: "Assignment" },
    { id: 3, label: "Achievement" },
    { id: 4, label: "Attendance" },
    { id: 5, label: "Exam" },
    { id: 6, label: "Library" },
    { id: 7, label: "Discipline" },
    { id: 8, label: "Health" },
    { id: 9, label: "Fee" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2">
        
        <p className=" gap-2"> StudentDetails </p>
        <div className="border-l border-r border-gray-300 h-6"></div>

        <p className="">John Doe</p>
        <div className="border-l border-r border-gray-300 h-6"></div>
        <p className="">Abc Doe</p>
        <div className="border-l border-r border-gray-300 h-6"></div>
        <p className="">Xyz Doe</p>

      </div>
      <div className="flex justify-center items-center mb-2 w-[100%] flex-wrap">
        <CustomTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </div>
      <>
        {selectedTab === 1 && <Profile />}
        {selectedTab === 2 && <Assignment />}
        {selectedTab === 3 && <Achievement />}
        {selectedTab === 4 && <Attendance />}
        {selectedTab === 5 && <Exam />}
        {selectedTab === 6 && <Library />}
        {selectedTab === 7 && <Discipline />}
        {selectedTab === 8 && <Health />}
        {selectedTab === 9 && <Fee />}
      </>
    </div>
  );
};

export default StudentDetails;
