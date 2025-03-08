"use client";
import React, { useState } from "react";

const InternalMessage = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState("inbox");

  // Form state for compose tab
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Mock data for inbox and sent messages
  const [inboxMessages, setInboxMessages] = useState([
    {
      id: 1,
      from: "Vice Principal",
      subject: "Staff Meeting",
      date: "3/7/2025",
      read: true,
    },
    {
      id: 2,
      from: "HR Department",
      subject: "Updated Policies",
      date: "3/5/2025",
      read: false,
    },
    {
      id: 3,
      from: "IT Support",
      subject: "System Maintenance",
      date: "3/2/2025",
      read: true,
    },
    {
      id: 4,
      from: "Finance Team",
      subject: "Budget Approval",
      date: "3/1/2025",
      read: false,
    },
  ]);

  const [sentMessages, setSentMessages] = useState([
    { id: 1, to: "All Teachers", subject: "Upcoming Events", date: "3/6/2025" },
    {
      id: 2,
      to: "Department Heads",
      subject: "Budget Review",
      date: "3/3/2025",
    },
  ]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to sent messages
    const newMessage = {
      id: sentMessages.length + 1,
      to: recipient,
      subject: subject || "(No Subject)",
      date: new Date().toLocaleDateString(),
    };
    setSentMessages([newMessage, ...sentMessages]);

    // Reset form
    resetComposeForm();
    // Switch to sent tab to show the new message
    setActiveTab("sent");
  };

  const resetComposeForm = () => {
    setRecipient("");
    setSubject("");
    setMessage("");
    setSelectedFile(null);
  };

  const handleDiscard = () => {
    resetComposeForm();
  };

  const markAsRead = (id) => {
    setInboxMessages(
      inboxMessages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  // Count unread messages
  const unreadCount = inboxMessages.filter((msg) => !msg.read).length;

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
      {/* Header with back button */}
      <div className="bg-indigo-600 text-white p-4 flex items-center">
        <h1 className="text-xl font-semibold">Internal Messages</h1>
      </div>

      {/* Navigation tabs */}
      <div className="flex bg-gray-50 border-b border-gray-200">
        <button
          className={`py-4 px-6 flex items-center relative transition-colors ${
            activeTab === "inbox"
              ? "bg-white text-indigo-600 font-medium border-b-2 border-indigo-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("inbox")}
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4l-10 8L2 4" />
          </svg>
          Inbox
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
        <button
          className={`py-4 px-6 flex items-center transition-colors ${
            activeTab === "compose"
              ? "bg-white text-indigo-600 font-medium border-b-2 border-indigo-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("compose")}
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.85 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
          Compose
        </button>
        <button
          className={`py-4 px-6 flex items-center transition-colors ${
            activeTab === "sent"
              ? "bg-white text-indigo-600 font-medium border-b-2 border-indigo-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("sent")}
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          Sent
        </button>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {/* Inbox Tab */}
        {activeTab === "inbox" && (
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Inbox</h2>
            {inboxMessages.length > 0 ? (
              <div className="rounded-lg overflow-hidden shadow">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {inboxMessages.map((msg) => (
                      <tr
                        key={msg.id}
                        className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                          !msg.read ? "bg-indigo-50" : ""
                        }`}
                        onClick={() => markAsRead(msg.id)}
                      >
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            !msg.read ? "font-semibold" : ""
                          }`}
                        >
                          {msg.from}
                        </td>
                        <td
                          className={`px-6 py-4 ${
                            !msg.read ? "font-semibold" : ""
                          }`}
                        >
                          {msg.subject}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            !msg.read ? "font-semibold" : ""
                          }`}
                        >
                          {msg.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {!msg.read ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              New
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Read
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No messages
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your inbox is empty
                </p>
              </div>
            )}
          </div>
        )}

        {/* Compose Tab */}
        {activeTab === "compose" && (
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Compose</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <label className="w-32 text-sm font-medium text-gray-700">
                  From
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    value="PRINCIPAL"
                    disabled
                    className="p-2 bg-gray-100 border border-gray-200 rounded-md w-full text-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>To
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="(Select User to add)"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <label className="w-32 text-sm font-medium text-gray-700 pt-2">
                  Message
                </label>
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full h-40 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your message here..."
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-sm font-medium text-gray-700">
                  Attachment
                </label>
                <div className="flex-1">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm text-gray-500">
                          {selectedFile
                            ? selectedFile.name
                            : "Drop files here or click to upload"}
                        </p>
                        <p className="text-xs text-red-500">
                          Upload JPG and PDF format only.
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleDiscard}
                  className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Sent Tab */}
        {activeTab === "sent" && (
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Sent</h2>
            {sentMessages.length > 0 ? (
              <div className="rounded-lg overflow-hidden shadow">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sentMessages.map((msg) => (
                      <tr
                        key={msg.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {msg.to}
                        </td>
                        <td className="px-6 py-4">{msg.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {msg.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No messages
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  You haven't sent any messages yet
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternalMessage;
