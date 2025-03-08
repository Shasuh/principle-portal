"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Define proper TypeScript interfaces
interface SectionProps {
  title: string;
  color: "teal" | "purple" | "yellow" | "red" | "blue";
  children: React.ReactNode;
  router: any;
  isOpen: boolean;
  toggleOpen: () => void;
  navigateTo?: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface PeriodData {
  [key: string]: {
    [stat: string]: string;
  };
}

const Section = ({
  title,
  color,
  children,
  router,
  isOpen = true,
  toggleOpen,
  navigateTo,
}: SectionProps) => {
  // Color mapping to ensure Tailwind classes work properly
  const colorMap = {
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-200",
      hover: "hover:bg-teal-100",
      shadow: "shadow-teal-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      hover: "hover:bg-purple-100",
      shadow: "shadow-purple-100",
    },
    yellow: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      hover: "hover:bg-amber-100",
      shadow: "shadow-amber-100",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
      border: "border-red-200",
      hover: "hover:bg-red-100",
      shadow: "shadow-red-100",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      hover: "hover:bg-blue-100",
      shadow: "shadow-blue-100",
    },
  };

  const colorStyle = colorMap[color] || colorMap.teal;

  const handleCardClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <div
      className={`rounded-lg border ${colorStyle.border} overflow-hidden transition-all duration-300 hover:shadow-lg ${colorStyle.shadow}`}
    >
      <div
        className={`flex items-center justify-between px-4 py-3 ${colorStyle.bg} ${colorStyle.hover} cursor-pointer`}
        onClick={toggleOpen}
      >
        <h3
          className={`text-lg font-semibold ${colorStyle.text} flex items-center gap-2`}
        >
          {/* Icon for each section */}
          {color === "teal" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          )}
          {color === "purple" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
          )}
          {color === "yellow" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1Z" />
              <path d="M2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Z" />
            </svg>
          )}
          {color === "red" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          )}
          <span>{title}</span>
        </h3>
        <div
          className={`${colorStyle.text} transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          className={`px-4 py-4 bg-white transition-all duration-300 ${
            navigateTo ? "cursor-pointer hover:bg-gray-50" : ""
          }`}
          onClick={navigateTo ? handleCardClick : undefined}
        >
          {children}
          {navigateTo && (
            <div className={`flex justify-end mt-3 ${colorStyle.text}`}>
              <span className="text-sm font-medium flex items-center gap-1">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const HeaderSection: React.FC = () => {
  const router = useRouter();

  const [openSections, setOpenSections] = useState({
    student: true,
    staff: true,
    communication: true,
    loginOverview: true,
  });

  // Selected period for each tab that has period filters
  const [selectedPeriods, setSelectedPeriods] = useState({
    communication: "Today",
    loginOverview: "Today",
  });

  // Data for different periods
  const communicationData: PeriodData = {
    Today: {
      SMS: "0",
      "Internal Message": "0",
    },
    Week: {
      SMS: "12",
      "Internal Message": "8",
    },
    Month: {
      SMS: "47",
      "Internal Message": "36",
    },
  };

  const loginData: PeriodData = {
    Today: {
      "Parent Login": "0",
      "Staff Login": "0",
      "Student Login": "0",
    },
    Week: {
      "Parent Login": "23",
      "Staff Login": "45",
      "Student Login": "134",
    },
    Month: {
      "Parent Login": "87",
      "Staff Login": "156",
      "Student Login": "512",
    },
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePeriodChange = (section: string, period: string) => {
    setSelectedPeriods((prev) => ({
      ...prev,
      [section]: period,
    }));
  };

  // Student stats
  const studentStats: StatItem[] = [
    { label: "Total Strength", value: "816" },
    { label: "Active Student", value: "804" },
    { label: "TC/Drop out", value: "3/9" },
    { label: "New Admission", value: "326" },
  ];

  // Staff stats
  const staffStats: StatItem[] = [
    { label: "Total Strength", value: "134" },
    { label: "Active Staff", value: "96" },
    { label: "Departed", value: "38" },
  ];

  return (
    <div className="p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Section
          title="Student Strength"
          color="teal"
          isOpen={openSections.student}
          router={router}
          toggleOpen={() => toggleSection("student")}
          navigateTo="/student"
        >
          <ul className="space-y-3">
            {studentStats.map(({ label, value }) => (
              <li
                key={label}
                className="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-bold text-teal-600">{value}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Staff Strength"
          color="purple"
          isOpen={openSections.staff}
          router={router}
          toggleOpen={() => toggleSection("staff")}
          navigateTo="/staff"
        >
          <ul className="space-y-3">
            {staffStats.map(({ label, value }) => (
              <li
                key={label}
                className="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-bold text-purple-600">{value}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Communication"
          color="yellow"
          isOpen={openSections.communication}
          router={router}
          toggleOpen={() => toggleSection("communication")}
          navigateTo="/communication"
        >
          <div className="flex space-x-2 mb-4">
            {["Today", "Week", "Month"].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
                  period === selectedPeriods.communication
                    ? "bg-amber-100 text-amber-600 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePeriodChange("communication", period);
                }}
              >
                {period}
              </button>
            ))}
          </div>
          <ul className="space-y-3">
            {Object.entries(
              communicationData[selectedPeriods.communication]
            ).map(([label, value]) => (
              <li
                key={label}
                className="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-bold text-amber-600">{value}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Login Overview"
          color="red"
          isOpen={openSections.loginOverview}
          router={router}
          toggleOpen={() => toggleSection("loginOverview")}
          navigateTo="/login-overview"
        >
          <div className="flex space-x-2 mb-4">
            {["Today", "Week", "Month"].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
                  period === selectedPeriods.loginOverview
                    ? "bg-red-100 text-red-600 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePeriodChange("loginOverview", period);
                }}
              >
                {period}
              </button>
            ))}
          </div>
          <ul className="space-y-3">
            {Object.entries(loginData[selectedPeriods.loginOverview]).map(
              ([label, value]) => (
                <li
                  key={label}
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <span className="text-gray-600">{label}</span>
                  <span className="font-bold text-red-600">{value}</span>
                </li>
              )
            )}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default HeaderSection;
