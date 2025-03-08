"use client";

import React, { useState } from "react";

import ChartDetails from "./ChartDetails";
import Notification from "./Notification";
import HeaderSection from "./HeaderSection";

const Dashboard = () => {
  return (
    <div className="p-8 text-gray-800 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard </h2>

      <div className="p-6 space-y-6">
        {/* Top Stats */}

        <HeaderSection />
        {/* Chart Section */}
        <ChartDetails />
        <Notification />
      </div>
    </div>
  );
};

export default Dashboard;
