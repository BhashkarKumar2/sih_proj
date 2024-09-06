import React, { useState } from "react";

const Notification = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("notifications");

  // Sample data for notifications
  const notifications = [
    {
      title: "Ms. G & G Automotive 73023",
      date: "16-08-2024",
    },
    {
      title:
        "OPERATION AND MAINTENANCE OF THE INSPECTION AND CERTIFICATION CENTRE THROUGH OUTSOURCED MANPOWER",
      date: "16-08-2024",
    },
    {
      title:
        'Corrigendum regarding "Contract Carriage" may read as "Stage Carriage" & "Section 74" may read as "Section 72" in attached order',
      date: "16-07-2024",
    },
    {
      title: "List of PUCC Centres which are at Petrol Pump",
      date: "16-07-2024",
    },
  ];

  // Sample data for tenders
  const tenders = [
    {
      title: "Tender for Road Construction Project",
      date: "12-07-2024",
    },
    {
      title: "Tender for Water Supply Infrastructure",
      date: "01-08-2024",
    },
    {
      title: "Tender for School Renovation",
      date: "20-07-2024",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50">
      <div className="bg-white shadow-md rounded-md">
        {/* Tab Header */}
        <div className="flex items-center space-x-4 border-b p-4">
          <button
            className={`font-semibold ${
              activeTab === "notifications"
                ? "text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={`font-semibold ${
              activeTab === "tenders" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tenders")}
          >
            Tenders
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 h-60 overflow-y-scroll">
          {activeTab === "notifications" ? (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b p-4"
              >
                <div>
                  <h2 className="font-semibold text-gray-700">
                    {notification.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Date: {notification.date}
                  </p>
                </div>
                <button className="text-blue-600 border px-4 py-1 rounded-md hover:bg-gray-100">
                  View
                </button>
              </div>
            ))
          ) : (
            tenders.map((tender, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b p-4"
              >
                <div>
                  <h2 className="font-semibold text-gray-700">
                    {tender.title}
                  </h2>
                  <p className="text-sm text-gray-500">Date: {tender.date}</p>
                </div>
                <button className="text-blue-600 border px-4 py-1 rounded-md hover:bg-gray-100">
                  View
                </button>
              </div>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="p-4">
          <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
