import React, { useState } from "react";

const SettingsPanel = ({ isOpen, setIsOpen }) => {
  const [sellingPressure, setSellingPressure] = useState(40); // Default SP value
  const [sellingPressureSource, setSellingPressureSource] = useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500); // Default FDV value
  const [month, setMonth] = useState(12); // Default month value

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full w-[17%] bg-customBg text-white shadow-lg transition-transform duration-300 border-r-[1px] border-gray-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <img
            className="mt-[16px] pr-[3em] ml-5"
            src="/src/assets/blacktokenomics.png"
            alt="logo"
          />
          <button
            className={`fixed top-6 ${
              isOpen ? "left-[19em]" : "ml-[21em]"
            } bg-gray-800 text-gray-400 hover:text-white rounded-full border-[1px] border-gray-600 p-2 transition-all duration-300`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Adjust Settings</h1>

          {/* Selling Pressure Section */}
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              Selling Pressure (SP)
            </label>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">0%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sellingPressure}
                onChange={(e) => setSellingPressure(Number(e.target.value))}
                className="w-full mx-4"
              />
              <span className="text-gray-400 text-sm">100%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Selected: <span className="font-medium">{sellingPressure}%</span>
            </p>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              Selling Pressure Source
            </label>
            <select
              value={sellingPressureSource}
              onChange={(e) => setSellingPressureSource(e.target.value)}
              className="w-full bg-gray-800 text-gray-300 p-2 rounded"
            >
              <option value="Circulation">Circulation</option>
              <option value="Liquidity">Liquidity</option>
            </select>
            <p className="text-sm text-gray-400 mt-2">
              Set the source of the selling pressure.
            </p>
          </div>

          {/* Temporary Settings Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Temporary Settings</h2>
            <p className="text-gray-400 text-sm">
              These settings are available temporarily to demonstrate the dashboard's functions.
            </p>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Select Launch FDV
              </label>
              <input
                type="range"
                min="50"
                max="5000"
                value={launchFDV}
                onChange={(e) => setLaunchFDV(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-2">
                With an FDV of ${launchFDV > 1000 ? (launchFDV / 1000).toFixed(2) + "B" : launchFDV +"M"}, the launch price is going to be ${(launchFDV / 1000).toFixed(2)}.
              </p>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Select a Month
              </label>
              <input
                type="range"
                min="0"
                max="48"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-2">
                You selected {month} months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
