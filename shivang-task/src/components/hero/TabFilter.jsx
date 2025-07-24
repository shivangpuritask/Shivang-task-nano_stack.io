import React from 'react'
import { useState } from "react";

const TabFilter = () => {

    const tabs = [
  { label: "All", count: 100 },
  { label: "Draft", count: 50 },
  { label: "Archive", count: 75 },
];

 const [activeTab, setActiveTab] = useState("All");

  return (
  <div className=" w-full flex items-center space-x-4 bg-white border border-gray-200 rounded-md p-2 text-sm ">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium fontsans1 ${
            activeTab === tab.label
              ? "bg-purple-100 text-purple-800"
              : "text-gray-500"
          }`}
        >
          {tab.label}
          <span
            className={`text-xs font-semibold px-1.5 py-0.5 rounded-md  fontsans1 ${
              activeTab === tab.label
                ? "bg-purple-800 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabFilter