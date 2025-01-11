import React from "react";
import Meter from "./meter";

const Metrics = ( {title , supplyShock, className, data }) => {
  return (
    <div className={`bg-gray-900 p-8 rounded-lg ${className}`}> 
    {/* {console.log(wow)} */}
      {/* Container */}
      <div className="flex flex-col space-y-6">
        {/* Top Section */}
        <div className="flex space-x-6">
          {/* Supply Shock Card */}
          <div className="p-10 flex-1 bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Supply Shock (%)</h3>
            <Meter
              progress={75}
              size={200}
              borderColor="#34436C"
              progressColor="#6B88E0"
            />
          </div>

          {/* Right Side: Two Stacked Cards */}
          <div className="flex flex-col space-y-6">
            {/* Total Unlock Value Card */}
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
              <h4 className="text-sm font-medium text-white mb-2">Total Unlock Value</h4>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-white">${data.unlock_value_sp}</p>
                <p className="text-green-500 text-sm font-medium mt-1">+34%</p>
              </div>
            </div>

            {/* Unlock Value for Investors Card */}
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
              <h4 className="text-sm font-medium text-white mb-2">Unlock Value for Investors</h4>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-white">${data.Value_for_Investors_SP}</p>
                <p className="text-red-500 text-sm font-medium mt-1">-23%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Total Maximum Unlock</h4>
            <p className="text-xl font-bold text-white">${data.unlock_value_max}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Maximum for Investors</h4>
            <p className="text-xl font-bold text-white">${data.Value_for_Investors_Max}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
