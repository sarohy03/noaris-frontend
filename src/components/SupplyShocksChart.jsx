import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";
import Tooltip from "./tollTip"; // Import the Tooltip component

const SupplyShockChart = ({ className, selected, processedEmissionsData }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.6, // Use 60% of the screen height
  });

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
        index === 0 ? 0 : (totalReleased / cumulativeTokens) * 100; // Convert to percentage

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
    const months = supplyShockData.map((d) => d.Month);
    const supplyShocks = supplyShockData.map((d) => d.SupplyShock);

    const data = [
      {
        x: months,
        y: supplyShocks,
        type: "bar",
        marker: {
          color: supplyShocks,
          colorscale: [
            [0, "#6C94F5"], // Blue for low values
            [0.5, "#A54C7E"], // Purple for mid values
            [1, "#D90404"], // Red for high values
          ],
          colorbar: {
            title: {
              side: "top", // Position the title above the color bar
            },
            tickvals: [0, 5, 10, 15, 20],
            ticktext: ["0%", "5%", "10%", "15%", "20%"],
            thickness: 15, // Thickness of the color bar
            len: 0.3, // Length of the color bar relative to the chart width
            x: 0.7, // Position to the far-right of the chart
            y: 1.16, // Move it slightly above the chart
            yanchor: "top", // Align to the top
            xanchor: "left", // Anchor position from the left
            orientation: "h", // Horizontal orientation
            outlinewidth: 0, // Removes border around the color bar
            tickfont: {
              color: "white",
            },
            titlefont: {
              color: "white",
            },
            bordercolor: "transparent",
            borderwidth: 0,
          },
        },
        hovertemplate:
          "<b>Month %{x}</b><br>Supply Shock: %{y:.2f}<extra></extra>",
      },
    ];

    const layout = {
      title: {
        text: "",
        font: {
          color: "white", // Text color
          size: 30, // Font size in pixels
          family: "Helvetica, Arial, sans-serif", // Use Helvetica or Arial
        },
        x: 0.04, // Align title to the left
        xanchor: "left", // Anchor the title on the left
      },
      paper_bgcolor: "#181D2D", // Background color
      plot_bgcolor: "#181D2D", // Plot area background color
      xaxis: {
        title: {
          text: "Months",
          font: { color: "white" },
        },
        tickfont: { color: "white" },
      },
      yaxis: {
        title: {
          text: "Supply Shock (%)",
          font: { color: "white" },
        },
        tickfont: { color: "white" },
        gridcolor: "#454956", // Grid line color (light gray for visibility)
        gridwidth: 1, // Increase the thickness of the grid lines
      },
      height: dimensions.height,
    };

    Plotly.newPlot("supplyShockChart", data, layout, {
      responsive: true,
      displayModeBar: false,
    });
  }, [supplyShockData, dimensions]);

  return (
    <div
      className="bg-[#181D2D] rounded shadow-lg p-4"
      style={{
        width: "100%",
        borderRadius: "1.5rem", // Add rounded edges
        overflow: "hidden", // Ensure content doesn't overflow the rounded container
      }}
    >
      <div className="flex items-center pt-5 pr-5">
      <h1 className="font-sansPro font-[600] text-[25px]  text-[#fffff] mr-3 ml-8">
      Monthly Supply Shocks
        </h1>
        <Tooltip
          text="This chart displays the monthly supply shocks as a percentage of cumulative token releases."
          pr="tooltip-position-class"
        />
      </div>
      <div
        id="supplyShockChart"
        style={{
          width: "100%",
          height: dimensions.height, // Dynamic height
        }}
      ></div>
    </div>
  );
};

export default SupplyShockChart;
