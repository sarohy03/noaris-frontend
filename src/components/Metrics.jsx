import React from "react";
import Meter from "./meter";

const Metrics = ({supplyShock, className, data,name }) => {
  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    if (typeof number === "number") {
      return number.toLocaleString();
    }
    return number;
  };

  return (
    <div className={`border-2  p-8 rounded-3xl ${className}`}>
      {/* Container */}
      <div className="flex  items-center">
        <h1 className="text-2xl font-bold mb-4">
            {name}
        </h1>
      </div>
      <div className="flex flex-col space-y-6">
        {/* Top Section */}
        <div className="flex space-x-6">
          {/* Supply Shock Card */}
          <div className="p-10 flex-1 bg-[#0E1117] p-6 rounded-xl flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Supply Shock (%)</h3>
            <Meter progress={supplyShock} />

          </div>

          {/* Right Side: Two Stacked Cards */}
          <div className="flex flex-col space-y-6">
            {/* Total Unlock Value Card */}
            <div className="bg-[#0E1117] p-6 rounded-xl flex flex-col justify-between">
              <h4 className="text-sm font-medium text-white mb-2">Total Unlock Value</h4>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-white">
                  ${formatNumber(data.unlock_value_sp)}
                </p>
                <p className="text-green-500 text-sm font-medium mt-1">+34%</p>
              </div>
            </div>

            {/* Unlock Value for Investors Card */}
            <div className="bg-[#0E1117] p-6 rounded-xl flex flex-col justify-between">
              <h4 className="text-sm font-medium text-white mb-2">Unlock Value for Investors</h4>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-white">
                  ${formatNumber(data.Value_for_Investors_SP)}
                </p>
                <p className="text-red-500 text-sm font-medium mt-1">-23%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#0E1117] p-6 rounded-xl flex flex-col ">
          <h4 className="text-sm font-medium text-white mb-2">Worst Case Scenario</h4>
          <div className="border-2 w-[100%] border-[#26282E] mb-3"></div>
          <div className="flex justify-between items-center flex-row">
            <p className="text-xl font-bold text-white">
              ${formatNumber(data.unlock_value_max)}
            </p>
            <p className="text-xl font-bold text-white">
              ${formatNumber(data.Value_for_Investors_Max)}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4">Total Maximum Unlock</p>
            <p className="text-gray-400 text-sm mb-4">Maximum for Investors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
