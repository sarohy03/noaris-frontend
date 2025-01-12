import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";

const LineGraph = ({ className, selected, processedEmissionsData,name }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.05, // Use 10% of the screen height
  });

  // Calculate supply shock data
  const calculateSupplyShock = (data) => {
    let cumulativeTokens = 0;

    return data.map((row, index) => {
      const totalReleased = Object.keys(row).reduce((sum, key) => {
        if (key !== "Month" && typeof row[key] === "number") {
          return sum + row[key];
        }
        return sum;
      }, 0);

      const supplyShock =
        index === 0 ? 0 : (totalReleased / cumulativeTokens) * 100;

      cumulativeTokens += totalReleased;

      return {
        Month: row.Month,
        SupplyShock: supplyShock,
        TotalReleased: totalReleased,
        CumulativeTokens: cumulativeTokens,
      };
    });
  };

  const supplyShockData = calculateSupplyShock(processedEmissionsData);

  useEffect(() => {
    // Handle case where `selected` is undefined
    // console.log("Meow",selected);

    if (selected === undefined || selected === null) {
        console.log("Selected value is undefined or null. Skipping rendering.");
        return;
      }
    // Extract data for Plotly
    const months = supplyShockData.map((d) => d.Month);
    const supplyShocks = supplyShockData.map((d) => d.SupplyShock);

    // Ensure `selected` and `Month` types match
    const currentSelected = selected.toString(); // Ensure `selected` is a string
    // console.log("Current Selected",currentSelected);
    const markerColors = months.map((month) =>
      month.toString() === currentSelected ? "red" : "rgba(0,0,0,0)"
    );
    const markerSizes = months.map((month) =>
    
      month.toString() === currentSelected ? 12 : 0
    );

      
    // Plotly data
    const data = [
      {
        x: months,
        y: supplyShocks,
        type: "scatter",
        mode: "lines+markers", // Line and markers
        line: {
          shape: "spline", // Smooth curve
          width: 3, // Line thickness
          color: "#5C81D5", // Line color
        },
        marker: {
          size: markerSizes, // Size of markers
          color: markerColors, // Marker colors
        },
        hovertemplate:
          "<b>Month: %{x}</b><br>Supply Shock: %{y:.2f}%<extra></extra>", // Display hover info
      },
    ];

    // Plotly layout
    const layout = {
      paper_bgcolor: "#0E1117", // Chart background
      plot_bgcolor: "#0E1117", // Plot area background
      xaxis: { visible: false }, // Hide x-axis
      yaxis: { visible: false }, // Hide y-axis
      margin: { l: 0, r: 0, t: 0, b: 0 }, // Remove margins
      height: dimensions.height, // Dynamic height
    };

    // Render Plotly chart
    Plotly.newPlot(name, data, layout, {
      responsive: true,
      displayModeBar: false,
    });
  }, [supplyShockData, dimensions, selected]);

  // Render fallback if `selected` is undefined
//   if (!selected) return <div>Loading chart...</div>;

  return (
    <div
      id={name}
      className="bg-gray-800 rounded shadow-lg"
      style={{
        width: "100%",
        height: dimensions.height,
        borderRadius: "1.5rem",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default LineGraph;
