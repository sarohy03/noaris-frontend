import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

import SettingsPanel from "./components/SettingPanel";
import Metrics from "./components/Metrics";
import SupplyShocksChart from "./components/SupplyShocksChart";
import OptimizedMarketingStrategy from "./components/OptimizedMarketingStrategy";
import { use } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [sellingPressure, setSellingPressure] = useState(40); // Default SP value
  const [sellingPressureSource, setSellingPressureSource] =
    useState("Circulation");
  const [launchFDV, setLaunchFDV] = useState(500); // Default FDV value
  const [month, setMonth] = useState(1); // Default month value

  const [apiData, setApiData] = useState(null);
  const [apiData2, setApiData2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call logic
    const fetchApiData2 = async () => {
      try {
        const payload = {
          sellingPressure: sellingPressure.toString(),
          sellingPressureSource: sellingPressureSource.toString(),
          selectedMonth: month.toString(),
        };

        const response = await axios.post(
          "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/plot-values",
          payload
        );
        setApiData2(response.data);
        // console.log("API Response:", response.data);
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Call the API whenever any of the states change
    fetchApiData2();
  }, [sellingPressure, sellingPressureSource, month]);

  useEffect(() => {
    // API call logic
    const fetchApiData2 = async () => {
      setLoading(true);
      try {
        const payload = {
          sellingPressure: sellingPressure.toString(),
          selectedMonth: month.toString(),
          startingPrice: (launchFDV / 1000).toFixed(2),
        };
        const payload2 = {
          sellingPressure: sellingPressure.toString(),
          sellingPressureSource: sellingPressureSource.toString(),
          selectedMonth: month.toString(),
        };
        const response = await axios.post("https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/", payload);

        const response2 = await axios.post(
          "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/plot-values",
          payload2
        );
        setApiData(response.data);
        setApiData2(response2.data);
        // console.log("API Response:", response.data);
        console.log("API Response defr:", response2.data);
        setLoading(false);
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

        const response = await axios.post("https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/", payload);
        setApiData(response.data);
        // console.log("API Response:", response.data);
        // console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Call the API whenever any of the states change
    fetchApiData();
  }, [sellingPressure, sellingPressureSource, launchFDV, month]);

  return (
    <div className="h-full flex flex-col overflow-hidden bg-[#1E1E1E] text-white font-sans p-6">
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
        className={`flex flex-col flex-auto  m-4 ${
          isOpen ? "ml-[21%]" : "ml-0 w-full"
        }`}
      >
        <OptimizedMarketingStrategy />
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
        <div className="p-8 mt-9 bg-[#0E1117] border-2 border-[#3D4044] rounded-3xl ">
          <div className="flex gap-6 w-full flex-col xl:flex-row  justify-center ">
            {apiData ? (
              <>
                <Metrics
                  supplyShock={apiData2.supplyShocks.selected}
                  className="flex-1 border-[#6F8EEC] bg-[#26304C] "
                  data={apiData.selectedMonth}
                  name="Current Month"
                />
                <Metrics
                  supplyShock={apiData2.supplyShocks.future}
                  className="flex-1 bg-[#181D2D] border-[#293353]"
                  data={apiData.futureMonth}
                  name="Upcoming Month"
                />
              </>
            ) : (
              <div className="flex justify-center items-center h-screen">
              <PulseLoader color="#ffffff" loading={loading} size={15} />
            </div>            
          )}
          </div>

          {/* Supply Shocks Chart */}
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <PulseLoader color="#ffffff" loading={loading} size={15} />
            </div>
          ) : (
            <div className="flex border-2 border-[#293353] rounded-3xl  mt-6 w-full">
              <SupplyShocksChart
              className={"w-[100%] h-[50%]"}
              selected={month}
              processedEmissionsData={apiData2.plotData}
            />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
