import React, { useState } from "react";

const NotificationDashboard = () => {
  // State to control the expanded state of notifications and tenders
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(false);
  const [isTendersExpanded, setIsTendersExpanded] = useState(false);

  // Sample data with progress fields added
  const notifications = [
    {
      title: "Short Term Maitenance work between km 119.0 to 181.2 Bagasara Vadiya Jetpur road NH351 in the state of Gujarat",
      date: "16-08-2024",
      Ministry:"Road and Transport",
      progress: 70, // Progress percentage
    },
    {
      title:
        "OPERATION AND MAINTENANCE OF THE INSPECTION AND CERTIFICATION CENTRE THROUGH OUTSOURCED MANPOWER",
      date: "16-08-2024",
      Ministry:"Social Development",
      progress: 45,
    },
    {
      title:
        'Corrigendum regarding "Contract Carriage" may read as "Stage Carriage" & "Section 74" may read as "Section 72" in attached order',
      date: "16-07-2024",
      Ministry:"Road and Transport",
      progress: 30,
    },
    {
      title: "List of PUCC Centres which are at Petrol Pump",
      date: "16-07-2024",
      Ministry:"Petroleum ",
      progress: 90,
    },
  ];

  const tenders = [
    {
      title: "Tender for Road Construction Project",
      date: "12-07-2024",
      Ministry:"Road and Transport",
      progress: 50,
    },
    {
      title: "Tender for Water Supply Infrastructure",
      date: "01-08-2024",
      Ministry:"Jal Shakti",

      progress: 20,
    },
    {
      title: "Tender for School Renovation",
      date: "20-07-2024",
      Ministry:"Education",
      progress: 80,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 flex-row justify-between bg-gray-50 grid grid-cols-2 gap-6">
      {/* Notifications Table */}
      <div className="bg-white  shadow-md rounded-md">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Ongoing</h2>
        </div>
        {/* Dynamic height based on state */}
        <div
          className={`p-4 overflow-y-scroll transition-all duration-300 ${
            isNotificationsExpanded ? "max-h-full" : "max-h-80"
          }`}
        >
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex flex-col border-b p-2 space-y-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-gray-700">
                    {notification.title}
                  </h2>
                  <p className="text-sm text-gray-500">Date: {notification.date}</p>
                  <p className="text-sm text-red-500">Ministry: {notification.Ministry}</p>

                </div>
                
                <button className="text-blue-600 border px-4 py-1 rounded-md hover:bg-gray-100">
                  View
                </button>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${notification.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Button to toggle view all */}
        <div className="p-4">
          <button
            className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md"
            onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
          >
            {isNotificationsExpanded ? "Collapse" : "View All"}
          </button>
        </div>
      </div>

      {/* Tenders Table */}
      <div className="bg-white shadow-md rounded-md">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Upcoming</h2>
        </div>
        {/* Dynamic height based on state */}
        <div
          className={`p-4 overflow-y-scroll transition-all duration-300 ${
            isTendersExpanded ? "max-h-full" : "max-h-80"
          }`}
        >
          {tenders.map((tender, index) => (
            <div
              key={index}
              className="flex flex-col border-b p-2 space-y-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-gray-700">{tender.title}</h2>
                  <p className="text-sm text-gray-500">Date: {tender.date}</p>
                  <p className="text-sm text-red-500">Ministry: {tender.Ministry}</p>

                </div>
                <button className="text-blue-600 border px-4 py-1 rounded-md hover:bg-gray-100">
                  View
                </button>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${tender.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Button to toggle view all */}
        <div className="p-4">
          <button
            className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md"
            onClick={() => setIsTendersExpanded(!isTendersExpanded)}
          >
            {isTendersExpanded ? "Collapse" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDashboard;
