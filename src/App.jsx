import React, { useEffect, useState } from "react";
import axios from "axios";

import SettingsPanel from "./components/SettingPanel";
import Metrics from "./components/Metrics";
import SupplyShocksChart from "./components/SupplyShocksChart";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [sellingPressure, setSellingPressure] = useState(40); // Default SP value
  const [sellingPressureSource, setSellingPressureSource] =
    useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500); // Default FDV value
  const [month, setMonth] = useState(0); // Default month value

  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    // API call logic
    const fetchApiData2 = async () => {
      try {
        const payload = {
          sellingPressure: sellingPressure.toString(),
          selectedMonth: month.toString(),
          startingPrice: (launchFDV / 1000).toFixed(2),
        };

        const response = await axios.post("http://localhost:5001/", payload);
        setApiData(response.data);
        // console.log("API Response:", response.data);
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Call the API whenever any of the states change
    fetchApiData2();
  }, []);
  useEffect(() => {
    // API call logic
    const fetchApiData = async () => {
      try {
        const payload = {
          sellingPressure: sellingPressure.toString(),
          selectedMonth: month.toString(),
          startingPrice: (launchFDV / 1000).toFixed(2),
        };

        const response = await axios.post("http://localhost:5001/", payload);
        setApiData(response.data);
        // console.log("API Response:", response.data);
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Call the API whenever any of the states change
    fetchApiData();
  }, [sellingPressure, sellingPressureSource, launchFDV, month]);

  return (
    <div className="h-full flex flex-col overflow-hidden bg-gray-900 text-white font-sans p-6">
      <div>
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
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-auto bg-red-400 m-4 ${
          isOpen ? "ml-[20%]" : "ml-0 w-full"
        }`}
      >
        de
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
        <div className="p-6 bg-slate-600">
          <h1 className="text-3xl font-bold mb-6">
            Optimized Marketing Strategy
          </h1>

          <div className="flex gap-6 w-full bg-fuchsia-200 justify-center">
            {apiData ? (
              <>
                <Metrics
                  title="Current Month"
                  supplyShock="75%"
                  className="flex-1"
                  data={apiData.selectedMonth}
                />
                <Metrics
                  title="Upcoming Month"
                  supplyShock="85%"
                  className="flex-1"
                  data={apiData.futureMonth}
                />
              </>
            ) : (
              <p>Loading...</p> // Show a loading message or spinner while API data is being fetched
            )}
          </div>

          {/* Supply Shocks Chart */}
          <div className="flex  bg-slate-50 mt-6 w-full">
            <SupplyShocksChart
              className={"w-[100%] h-[50%]"}
              selected={10}
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
