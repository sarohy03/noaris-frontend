import React, { useState } from "react";
import SettingsPanel from "./components/SettingPanel";
import Metrics from "./components/Metrics";
import SupplyShocksChart from "./components/SupplyShocksChart";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-6">
      <header className="flex justify-between items-center mb-6">
        <img src="src/assets/logo.png" alt="Naoris Protocol" className="h-12" />
      </header>
      <div className="flex gap-6">
        {/* Left Panel */}
        <SettingsPanel isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Content */}
        <div className={`flex-auto space-y-6 ${isOpen ? "ml-80" : "ml-0"}`}>
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