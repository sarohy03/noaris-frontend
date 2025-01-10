import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const SupplyShockChart = () => {
  const processedEmissionsData = [

    {
Month: 0,
'Ecosystem Rewards': 0,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 4485000,
'Public Sale (ICO)': 104000000,
Airdrop: 20800000
},
{
Month: 1,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 2,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 19968000,
KOLs: 5083000,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 3,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 19968000,
KOLs: 5083000,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 4,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 19968000,
KOLs: 5083000,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 5,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 19968000,
KOLs: 5083000,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 6,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 19968000,
KOLs: 5083000,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 7,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 8,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 9,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 10,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 11,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 7280000,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 12,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 13,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 14,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 15,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 4680000,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 16,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 17,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 18,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 19,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 20,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 21,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 22,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 3351111.1088000005,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 23,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 24,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 25,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 26,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 27,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 28,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 29,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 30,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 31,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 32,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 33,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 34,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 35,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 485333.3316,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 36,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 8153600,
'Pre Seed': 1594666.6684,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 37,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 38,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 39,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 40,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 41,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 42,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 43,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 44,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 45,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 46,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 47,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
},
{
Month: 48,
'Ecosystem Rewards': 8320000,
'Ecosystem Fund': 0,
'Pre Seed': 0,
Seed: 0,
'Private Sale 1': 0,
'Private Sale 2': 0,
'Private Sale 3': 0,
Strategic: 0,
KOLs: 0,
'Public Sale (ICO)': 0,
Airdrop: 0
}
    ];

  const calculateSupplyShock = (data) => {
    let cumulativeTokens = 0;

    return data.map((row, index) => {
      const totalReleased = Object.keys(row).reduce((sum, key) => {
        if (key !== 'Month' && typeof row[key] === 'number') {
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
    // Prepare data for Plotly
    const months = supplyShockData.map((d) => d.Month);
    const supplyShocks = supplyShockData.map((d) => d.SupplyShock ); // Divide by 100 for display

    const data = [
      {
        x: months,
        y: supplyShocks,
        type: 'bar',
        marker: {
          color: supplyShocks,
          colorscale: [
            [0, 'rgb(93, 112, 180)'],
            [1, 'rgb(220, 38, 38)'], // Red at high values
          ], // Gradient from purple to red
        },
        hovertemplate: '<b>Month %{x}</b><br>Supply Shock: %{y:.4f}<extra></extra>', // Removes the trace name
      },
    ];

    const layout = {
      title: {
        text: 'Monthly Supply Shock Scale',
        font: { color: 'white' },
      },
      paper_bgcolor: '#1e1e2f', // Background color
      plot_bgcolor: '#1e1e2f', // Plot area background color
      xaxis: {
        title: {
          text: 'Months',
          font: { color: 'white' },
        },
        tickfont: { color: 'white' },
      },
      yaxis: {
        title: {
          text: 'Supply Shock (in Fractions)',
          font: { color: 'white' },
        },
        tickfont: { color: 'white' },
      },
      annotations: [
        {
          x: 1, // Selected month for annotation
          y: supplyShocks[1],
          text: 'Current Month',
          showarrow: true,
          arrowhead: 2,
          font: { color: 'white' },
          arrowcolor: 'white',
        },
      ],
    };

    Plotly.newPlot('supplyShockChart', data, layout);
  }, [supplyShockData]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <h1 className="text-xl font-semibold text-gray-300">Supply Shock Chart</h1>
      </div>
      <div
        id="supplyShockChart"
        className="w-full bg-gray-900 rounded shadow-lg"
        style={{ height: '400px' }}
      ></div>
    </div>
  );
};

export default SupplyShockChart;