"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Bell, User, ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowSearchResults(value.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can add search submission logic here
    console.log("Search submitted:", searchValue);
  };

  return (
    <nav className="bg-white p-4 shadow-lg text-black">
      <div className=" mx-auto  flex items-center justify-between">
        {/* Left side: Logo and Search */}
        <div className="flex items-center flex-1 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="ml-2 font-bold text-xl hidden sm:inline">
              My App
            </span>
          </Link>

          {/* Global Search */}
          <div className="relative max-w-md w-full hidden md:block">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Global search..."
                  className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </form>

            {/* Search Results Preview */}
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                <div className="p-3">
                  <div className="text-sm font-medium text-gray-600">
                    Search preview:
                  </div>
                  <div className="text-md font-semibold text-gray-800 mt-1">
                    {searchValue}
                  </div>

                  {/* Example search results */}
                  {searchValue.length >= 2 && (
                    <div className="mt-3 space-y-2">
                      <div className="p-2 hover:bg-gray-100 rounded-md">
                        <div className="font-medium">
                          Result containing "{searchValue}"
                        </div>
                        <div className="text-sm text-gray-600">
                          Description with matching text highlighted
                        </div>
                      </div>
                      <div className="p-2 hover:bg-gray-100 rounded-md">
                        <div className="font-medium">
                          Another matching result
                        </div>
                        <div className="text-sm text-gray-600">
                          Additional context about this result
                        </div>
                      </div>
                      <Link
                        href={`/search?q=${encodeURIComponent(searchValue)}`}
                        className="block text-blue-600 text-sm font-medium pt-2 border-t border-gray-200 mt-2"
                      >
                        See all results for "{searchValue}"
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Right side: Navigation and Profile */}
        <div className="hidden md:flex items-center gap-6">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </button>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
              <span className="text-gray-600">Services</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              <Link
                href="/assignment-circulars"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Assignment/Circulars
              </Link>
              <Link
                href="/internal-message"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Internal Message
              </Link>
              <Link
                href="/service3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Contacts
              </Link>
              <Link
                href="/service3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Timetable/Syllabus
              </Link>
              <Link
                href="/service3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Analysis
              </Link>
              <Link
                href="/exam-schedule"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Exam Schedule
              </Link>
              <Link
                href="/online-leave-approval"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Online Leave Approval
              </Link>
            </div>
          </div>

          {/* Profile */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
              <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden">
                <User className="h-8 w-8 p-1 text-gray-600" />
              </div>
              <span className="text-gray-600 hidden lg:inline">Profile</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Settings
              </Link>
              <div className="my-1 border-t border-gray-200"></div>
              <Link
                href="/logout"
                className="block px-4 py-2 text-red-600 hover:bg-gray-100 rounded-md"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
