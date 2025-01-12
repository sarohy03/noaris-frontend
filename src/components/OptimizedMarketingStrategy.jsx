import React from "react";

const OptimizedMarketingStrategy = () => {
  return (
    <div className=" bg-gradient-to-r from-[#B3080B] to-[#5B74BE] rounded-3xl">
      {/* Border Gradient */}
      <div className=" inset-0 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-3xl m-[2px] p-10">
        <div className="  rounded-lg flex items-center justify-between px-8 py-4 rounded-3xl" >
          {/* Text Section */}
          <div className="text-white max-w-lg">
            <h1 className="text-3xl font-bold mb-4">
              Optimized Marketing Strategy
            </h1>
            <p className="text-gray-400 text-sm mb-4">
              This tool enables your marketing team to align their efforts with
              token unlock events, ensuring a coordinated approach between
              marketing strategies and tokenomics.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              It will help to strategically utilize marketing funds for maximum
              impact and mitigate potential price volatility during significant
              token release events.
            </p>
          </div>
          {/* Logo Section */}
          <div className="">
            <img
              src="src/assets/logo.png"
              alt="Naoris Protocol Logo"
              className="w-[100%] h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedMarketingStrategy;
