import React, { useState } from "react";
import SettingsPanel from "./components/SettingPanel";
import Metrics from "./components/Metrics";
import SupplyShocksChart from "./components/SupplyShocksChart";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [sellingPressure, setSellingPressure] = useState(40); // Default SP value
  const [sellingPressureSource, setSellingPressureSource] = useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500); // Default FDV value
  const [month, setMonth] = useState(12); // Default month value


  return (
    <div className="h-full overflow-hidden bg-gray-900 text-white font-sans p-6">
  
      <header className="flex justify-between items-center mb-6">
        <img src="src/assets/logo.png" alt="Naoris Protocol" className="h-12" />
      </header>
      <div className="flex gap-6">
        
        <SettingsPanel 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          sellingPressure={sellingPressure} 
          setSellingPressure={setSellingPressure} 
          sellingPressureSource={sellingPressureSource} 
          setSellingPressureSource={setSellingPressureSource}
          launchFDV={launchFDV}
          setLaunchFDV={setLaunchFDV} 
          month={month}
          setMonth={setMonth}
        />      






        {/* Main Content */}
        <div className={`flex-auto space-y-6 ${isOpen ? "ml-[20%]" : "ml-0"}`}>
        <button
            className={`fixed ${
              isOpen ? "left-[20%] top-10" : "left-5 top-10"
            } bg-gray-800 text-gray-400 hover:text-white rounded-full border-[1px] border-gray-600 p-2 transition-all duration-300`}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              transform: "translateX(-50%)", // Ensures it's visually centered on its anchor point
            }}
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
          <h1 className="text-3xl font-bold">Optimized Marketing Strategy</h1>
          <div className="flex gap-6">
            <Metrics title="Current Month" supplyShock="75%" />
            <Metrics title="Upcoming Month" supplyShock="85%" />
          </div>
          <SupplyShocksChart />
        </div>
      </div>
    </div>
  );
}

export default App;