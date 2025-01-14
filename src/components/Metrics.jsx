import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import Meter from "./meter";
import LineGraph from "./lineGraph";
import Tooltip from "./tollTip";
const Metrics = ({
  supplyShock,
  className,
  data,
  name,
  line,
  selected,
  cu,
  pu,
  ci,
  pi,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    if (typeof number === "number") {
      return number.toLocaleString();
    }
    return number;
  };

  const calculatePercentageDifference = (current, previous) => {
    // Prevent division by zero
    // console.log("Current:", current, "Previous:", previous);
    if (previous === 0) return current > 0 ? 100 : -100;

    // Calculate percentage difference
    const average = (current + previous) / 2;
    const difference = ((current - previous) / average) * 100;

    // Round to 2 decimal places for better display
    return parseFloat(difference.toFixed(2));
  };

  // State for storing calculated percentage differences
  const [percentageDifferences, setPercentageDifferences] = useState({
    totalUnlockDiff: 0,
    investorUnlockDiff: 0,
  });

  // Update percentage differences whenever `cu`, `pu`, `ci`, or `pi` change
  useEffect(() => {
    // console.log("Calculating percentage differences...", cu, pu, ci, pi);

    const totalUnlockDiff = calculatePercentageDifference(cu, pu);
    const investorUnlockDiff = calculatePercentageDifference(ci, pi);
    // console.log("Total Unlock Difference:", totalUnlockDiff);
    setPercentageDifferences({ totalUnlockDiff, investorUnlockDiff });
  }, [cu, pu, ci, pi]);

  return (
    <div className={`border-2 flex flex-col p-8  rounded-3xl ${className}`}>
      {/* Container */}
      <div className="flex  items-center">
<h1 className="font-sansPro font-[600] text-[25px]  text-[#fffff] mb-4">
          {name}
          </h1>
      </div>
      <div className="flex flex-col space-y-6">
        {/* Top Section */}
        <div className="flex space-x-1 gap-3 flex-wrap ">
          {/* Supply Shock Card */}
          <div className="  flex-1 bg-[#0E1117] p-6 rounded-xl flex flex-col justify-center items-center">
            <div className="flex justify-between">
              <p className="font-sansPro font-[600] text-sm leading-[15.6px] text-[#A3A8B8] mb-6 mt-1 mr-3">
                Supply Shock (%)
              </p>
              <Tooltip text="Indicates the percentage of newly released tokens relative to the circulating supply. A higher Supply Shock percentage suggests a larger influx of tokens into the market, which can increase price volatility." />
            </div>
            <Meter progress={supplyShock} />
          </div>

          {/* Right Side: Two Stacked Cards */}
          <div className="flex flex-col gap-6 flex-1 ">
            {/* Total Unlock Value Card */}
            <div className="bg-[#0E1117] p-6 rounded-xl flex flex-col justify-between">
              <div className="flex justify-between pb-2">
              <p className="font-sansPro text-sm font-[600]  pt-1 leading-[15.6px] text-[#A3A8B8] mb-2">
                  Total Unlock Value
                </p>
                <Tooltip
                  text={
                    "Represents the overall dollar value of tokens scheduled to unlock this month."
                  }
                />
              </div>
              <div>
                <LineGraph
                  processedEmissionsData={line}
                  selected={selected}
                  name={`TotalUnlockValue${name}`}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold text-white">
                  ${formatNumber(cu)}
                </p>
                <div
                  className={`p-2 rounded-3xl ${
                    percentageDifferences.totalUnlockDiff >= 0
                      ? "bg-[#6A94F7]" // Light green background for positive %
                      : "bg-[#DB0D16]" // Light red background for negative %
                  }`}
                >
                  <p className={`text-sm font-medium mt-1}`}>
                    {`${percentageDifferences.totalUnlockDiff}%`}
                  </p>
                </div>
              </div>
            </div>

            {/* Unlock Value for Investors Card */}
            <div className="bg-[#0E1117] p-6 rounded-xl flex flex-col justify-between">
              <div className="flex justify-between pb-2">
              <p className="font-sansPro text-sm font-[600] leading-[15.6px] text-[#A3A8B8] pt-1">
                  Unlock Value for Investors
                </p>
                <Tooltip
                  text={
                    "Specifically tracks the portion of the total unlocked tokens allocated to investors."
                  }
                />
              </div>
              <div>
                <LineGraph
                  processedEmissionsData={line}
                  selected={selected}
                  name={`UnlockValueforInvestors${name}`}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold text-white">
                  ${formatNumber(data.Value_for_Investors_SP)}
                </p>
                <div
                  className={`flex justify-center items-center p-2 rounded-3xl ${
                    percentageDifferences.totalUnlockDiff >= 0
                      ? "bg-[#6A94F7]" // Light green background for positive %
                      : "bg-[#DB0D16]" // Light red background for negative %
                  }`}
                >
                  <p className={`text-sm font-medium `}>
                    {`${percentageDifferences.investorUnlockDiff}%`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#0E1117]  rounded-xl flex flex-col">
        <p className="font-sansPro px-3 pt-2 text-sm font-[600] leading-[15.6px] text-[#A3A8B8] flex justify-between items-center">
        Worst Case Scenario
            <button onClick={toggleContentVisibility} className="p-2">
              {isContentVisible ? (
                <EyeIcon className="h-6 w-6 text-white" /> // Visible state icon
              ) : (
                <EyeSlashIcon className="h-6 w-6 text-white" /> // Hidden state icon
              )}
            </button>
          </p>

          {isContentVisible && (
            <div className="px-3 pb-2">
              <div className="border-[1px] w-full border-[#26282E] mb-3"></div>
              <div className="flex justify-between items-center flex-row">
                <p className="text-xl font-bold text-white">
                  ${formatNumber(data.unlock_value_max)}
                </p>
                <p className="text-xl font-bold text-white">
                  ${formatNumber(data.Value_for_Investors_Max)}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex justify-between">
                  {/* <p className="text-gray-400 text-sm mb-4 mr-2 pt-1"> */}
                  <p className="font-sansPro text-sm text-[#A3A8B8] mb-4 mr-2 pt-1">
                    Total Maximum Unlock
                  </p>
                  <Tooltip
                    text={
                      "The absolute highest dollar value of tokens that could be sold this month (e.g., if all unlocked tokens this month are sold.)"
                    }
                  />
                </div>
                <div className="flex justify-between">
                  <Tooltip
                    text={
                      "The absolute highest dollar value of tokens that investors can sell this month."
                    }
                  />
                  <p className="font-sansPro text-sm text-[#A3A8B8] mb-4 ml-2 pt-1">
                    Maximum for Investors
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
