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
  const [month, setMonth] = useState("0"); // Default month value

  const [apiData, setApiData] = useState({
    
      "selectedMonth": {
          "unlock_value_sp": 86525000,
          "Value_for_Investors_Max": 104312500,
          "Value_for_Investors_SP": 41725000,
          "unlock_value_max": 216312500
      },
      "previousMonth": {
          "unlock_value_sp": 0,
          "Value_for_Investors_Max": 0,
          "Value_for_Investors_SP": 0,
          "unlock_value_max": 0
      },
      "futureMonth": {
          "unlock_value_sp": 6500001,
          "Value_for_Investors_Max": 0,
          "Value_for_Investors_SP": 0,
          "unlock_value_max": 16250001
      }
  
  });
  const [apiData2, setApiData2] = useState({
    "plotData": [
        {
            "Month": 0,
            "Ecosystem Rewards": 0,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 3450000,
            "Public Sale (ICO)": 80000000,
            "Airdrop": 16000000
        },
        {
            "Month": 1,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 2,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 15360000,
            "KOLs": 3910000,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 3,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 15360000,
            "KOLs": 3910000,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 4,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 15360000,
            "KOLs": 3910000,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 5,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 15360000,
            "KOLs": 3910000,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 6,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 15360000,
            "KOLs": 3910000,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 7,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 8,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 9,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 10,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 11,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 5600000,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 12,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 13,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 14,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 15,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 3600000,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 16,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 17,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 18,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 19,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 20,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 21,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 22,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 2577777.7760000005,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 23,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 24,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 25,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 26,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 27,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 28,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 29,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 30,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 31,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 32,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 33,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 34,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 35,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 373333.332,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 36,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 6272000,
            "Pre Seed": 1226666.668,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 37,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 38,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 39,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 40,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 41,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 42,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 43,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 44,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 45,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 46,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 47,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        },
        {
            "Month": 48,
            "Ecosystem Rewards": 6400000,
            "Ecosystem Fund": 0,
            "Pre Seed": 0,
            "Seed": 0,
            "Private Sale 1": 0,
            "Private Sale 2": 0,
            "Private Sale 3": 0,
            "Strategic": 0,
            "KOLs": 0,
            "Public Sale (ICO)": 0,
            "Airdrop": 0
        }
    ],
    "supplyShocks": {
        "selected": 0,
        "previous": null,
        "future": 6.44
    }
});

// const [CurrentU,setCurrentU] = useState(0);
  
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
          // "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/plot-values"
          "http://localhost:5001/plot-values"
          ,
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
        const response = await axios.post(
          // "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/"
          "http://localhost:5001/"
         , 
         payload);

        const response2 = await axios.post(
          // "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/plot-values"
          "http://localhost:5001/plot-values"
          ,
          payload2
        );
        if (isNaN(response2.data.supplyShocks)) {
          console.log("API Response: kutta");
        }
        
        setApiData(response.data);
        setApiData2(response2.data);
        // console.log("API Response:", response.data);
        console.log("API Response defr:", response2.data);
        console.log("API Response defr:", response.data);

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

        const response = await axios.post(
          // "https://95c2-2400-adc5-460-c800-d85a-14a2-32b6-6d0b.ngrok-free.app/"
          "http://localhost:5001/"
         , 
         payload);        setApiData(response.data);
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
                  line={apiData2.plotData}
                  selected={month}
                  cu={apiData.selectedMonth.unlock_value_sp}
                  pu={apiData.previousMonth.unlock_value_sp}
                  ci={apiData.selectedMonth.Value_for_Investors_SP}
                  pi={apiData.previousMonth.Value_for_Investors_SP}
                />
                <Metrics
                  supplyShock={apiData2.supplyShocks.future}
                  className="flex-1 bg-[#181D2D] border-[#293353]"
                  data={apiData.futureMonth}
                  name="Upcoming Month"
                  line={apiData2.plotData}
                  selected={month}
                  // prev={apiData.selectedMonth}
                  cu={apiData.futureMonth.unlock_value_sp}
                  pu={apiData.selectedMonth.unlock_value_sp}
                  ci={apiData.futureMonth.Value_for_Investors_SP}
                  pi={apiData.selectedMonth.Value_for_Investors_SP}

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
