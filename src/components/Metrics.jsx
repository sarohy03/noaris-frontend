import React from "react";

const Metrics = ({ title, supplyShock }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">Supply Shock (%)</span>
        <span className="text-xl font-bold">{supplyShock}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Total Unlock Value</span>
        <span className="text-lg">$86,525,000</span>
      </div>
    </div>
  );
};

export default Metrics;
