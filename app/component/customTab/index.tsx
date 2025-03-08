'use client'
import React from "react";

interface TabInterface {
  tabs: { id: number; label: string }[];
  selectedTab: number;
  onSelectTab: (id: number) => void;
  hideBg?: boolean;
}

const CustomTabs = ({ tabs, selectedTab, onSelectTab, hideBg }: TabInterface) => {
  return (
    <div
      className={`flex items-center  rounded-xl my-2 shadow-lg ${
        hideBg ? "bg-white py-2  justify-start" : "bg-white justify-center"
      }`}
    >
      {tabs.map((tab) => (
        <div key={tab.id}>
          <button
            onClick={() => onSelectTab(tab.id)}
            className={`cursor-pointer flex text-center justify-center w-full px-8  py-2 font-bold text-[13px]  
              ${
                selectedTab === tab.id
                  ? hideBg
                    ? "text-[#7886B2] border-b-2 border-[#4D5B80] rounded-sm"
                    : "bg-blue-500 text-[#fff] rounded-lg"
                  : "text-[#7886B2]"
              }`}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CustomTabs;
