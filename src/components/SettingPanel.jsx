import React, { useState } from "react";
import logo from "../assets/blacktokenomics.png";
import Tooltip from "./tollTip";

const SettingsPanel = ({
  isOpen,
  setIsOpen,
  sellingPressure,
  setSellingPressure,
  sellingPressureSource,
  setSellingPressureSource,
  launchFDV,
  setLaunchFDV,
  month,
  setMonth,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpand, setIsExpand] = useState(true);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full w-[20%] p-1 bg-customBg text-white shadow-lg transition-transform duration-300 border-r-[1px] border-gray-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          overflowY: "auto", // Enables vertical scrolling
          scrollbarWidth: "none", // Hides scrollbar in Firefox
          msOverflowStyle: "none", // Hides scrollbar in IE/Edge
        }}
      >
        <style>
          {`
            input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 16px; /* Adjust the size of the circle */
      width: 16px;
      border-radius: 50%;
      background-color: red; /* Change this to red */
      border: 2px solid #ffffff; /* Optional: border around the thumb */
      cursor: pointer; /* Adds a pointer cursor on hover */
    }

    input[type='range']::-moz-range-thumb {
      appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: red; /* Change this to red */
      border: 2px solid #ffffff;
      cursor: pointer;
    }

    input[type='range']::-ms-thumb {
      appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: red; /* Change this to red */
      border: 2px solid #ffffff;
      cursor: pointer;
    }
      div::-webkit-scrollbar {
        display: none; /* Hides scrollbar in Chrome, Safari, Edge */
      }
    `}
        </style>
        <div className="flex flex-col justify-between">
          <div className="mt-[16px] pr-[3em] ml-5">
            <img src={logo} alt="logo" className="mb-4" />
            {/* Text Content */}
            <div className="text-[#A3A8B8]">
              <p className="font-sansPro font-normal text-sm leading-[18.2px]">
                Specialized Tokenomics firm for Web3 Projects, Launchpads, VCs &
                Funds.
              </p>

              <div className="w-[105%] border-[1px] rounded-xl border-gray-600 my-4"></div>

              <p className="font-sansPro font-normal text-sm leading-[18.2px] mt-2">
                This supply shock and marketing visualizer is based on Uniswap
                V2 liquidity logic.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h1 className="font-sansPro font-[600] text-[25px]  text-[#fffff]">
            Adjust Settings
          </h1>

          {/* Selling Pressure Section */}
          <div className="mt-6 border-[1px] border-[#2E79C7] rounded-xl bg-customBg">
            {/* Header with Dropdown Toggle */}
            <div
              className="bg-[#181D2D] border-[1px] border-[#2E79C7] flex items-center rounded-xl justify-between p-4 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
<p className="font-sansPro font-[600] text-[14px]  text-left">
Selling Pressure Assumptions
              </p>
              <button
                className="text-gray-400 hover:text-gray-200"
                title="Expand or collapse section"
              >
                {isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Collapsible Content */}
            {isExpanded && (
              <div className="p-4  bg-customBg rounded-xl">
                {/* Selling Pressure Slider */}
                <div className="relative mb-6">
                  <div className="flex justify-between">
                  {/* <p className="  font-sansPro font-[600] text-[14px]  text-left  "> */}

                    <label className="block mb-2 text-sm font-medium text-white font-sansPro font-[600] text-[14px]  text-left">
                      Selling Pressure (SP)
                    </label>
                    <Tooltip text="Set the precentage of tokens that are expected to be sold." />
                  </div>

                  <div className="relative group">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sellingPressure}
                      onChange={(e) =>
                        setSellingPressure(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-500 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          (sellingPressure / 100) * 100
                        }%, #181D2D ${(sellingPressure / 100) * 100}%)`,
                      }}
                    />

                    {/* Tooltip for current value */}
                    <div
                      className="absolute -bottom-8 transform -translate-x-1/2 text-xs font-medium text-white bg-blue-500 rounded px-2 py-1 after:content-[''] after:absolute after:top-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-blue-500 after:rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        left: `${(sellingPressure / 100) * 100}%`,
                      }}
                    >
                      {sellingPressure}%
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-400 text-sm">0%</span>
                    <span className="text-gray-400 text-sm">100%</span>
                  </div>
                </div>
                <div className="w-80% border-[1px] rounded-xl border-[#181D2D]"></div>
                {/* Selling Pressure Source Dropdown */}
                <div className="pt-6">
                  <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-white font-sansPro font-[600] text-[14px]  text-left">
                      Selling Pressure Source
                    </label>
                    <Tooltip text="Set the source of the selling pressure." />
                  </div>

                  <select
                    value={sellingPressureSource}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSellingPressureSource(e.target.value);
                    }}
                    className="w-full bg-[#16171D] text-gray-300 p-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Circulation">Circulation</option>
                    <option value="Liquidity">Unlocks</option>
                  </select>
             
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 border-[1px] border-[#2E79C7] rounded-xl  bg-customBg">
            {/* Header with Dropdown Toggle */}
            <div
              className="bg-[#181D2D] border-[1px] border-[#2E79C7] rounded-xl flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setIsExpand(!isExpand)}
            >
              <h2 className="font-sansPro font-[600] text-[14px]  text-left">
                Temporary Settings
              </h2>
              <button
                className="text-gray-400 hover:text-gray-200"
                title="Expand or collapse section"
              >
                {isExpand ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Collapsible Content */}
            {isExpand && (
              <div className="p-4">
                <p className="font-sansPro font-normal text-sm leading-[18.2px] mb-4 text-[#A3A8B8]">
                  These settings are available temporary to demonstrate the
                  functions of the dashboard, until the project launches and we
                  can use real time data.
                </p>
                <div className="w-80% my-4 border-[1px] rounded-xl border-[#181D2D]"></div>
                <p className="font-sansPro font-normal text-sm leading-[18.2px]  text-[#A3A8B8] mb-4">
                  Select the expected FDV you are planing to have at launch.
                </p>
                {/* Launch FDV Slider */}
                <div className="relative mb-6">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Select Launch FDV
                  </label>
                  <div className="relative group">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={launchFDV}
                      onChange={(e) => setLaunchFDV(Number(e.target.value))}
                      className="w-full h-2 bg-slate-500 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          ((launchFDV - 50) / (5000 - 50)) * 100
                        }%, #181D2D ${
                          ((launchFDV - 50) / (5000 - 50)) * 100
                        }%)`,
                      }}
                    />

                    {/* Tooltip for current value */}
                    <div
                      className="absolute -bottom-8 transform -translate-x-1/2 text-xs font-medium text-white bg-blue-500 rounded px-2 py-1 after:content-[''] after:absolute after:top-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-blue-500 after:rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        left: `${((launchFDV - 50) / (5000 - 50)) * 100}%`,
                      }}
                    >
                      $
                      {launchFDV > 1000
                        ? (launchFDV / 1000).toFixed(2) + "B"
                        : launchFDV + "M"}
                    </div>
                  </div>

                  <p className="font-sansPro font-normal text-sm leading-[18.2px]  text-[#A3A8B8] mt-2">
                    With an FDV of $
                    {launchFDV > 1000
                      ? (launchFDV / 1000).toFixed(2) + "B"
                      : launchFDV + "M"}
                    , the launch price is going to be $
                    {(launchFDV / 1000).toFixed(2)}.
                  </p>
                </div>
                <div className="w-80% my-4 border-[1px] rounded-xl border-[#181D2D]"></div>

                {/* Select a Month Slider */}

                <div className="relative w-full mt-4">
                  {/* Label */}
                  <label className="block mb-2 text-sm font-medium text-white">
                    Select a Month
                  </label>

                  {/* Slider Input */}
                  <div className="relative group">
                    <input
                      type="range"
                      min="0"
                      max="48"
                      value={month}
                      onChange={(e) =>
                        setMonth(Number(e.target.value.toString()))
                      }
                      className="w-full h-2 bg-slate-500 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          (month / 48) * 100
                        }%, #181D2D ${(month / 48) * 100}%)`,
                      }}
                    />

                    {/* Tooltip for current value */}
                    <div
                      className="absolute -bottom-8 transform -translate-x-1/2 text-xs font-medium text-white bg-blue-500 rounded px-2 py-1 after:content-[''] after:absolute after:top-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-blue-500 after:rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        left: `${(month / 48) * 100}%`,
                      }}
                    >
                      {month}
                    </div>
                  </div>

                  {/* Optional Text Below the Slider */}
                  <p className="font-sansPro font-normal text-sm leading-[18.2px]  text-[#A3A8B8] mt-2">
                    You selected {month} months.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
