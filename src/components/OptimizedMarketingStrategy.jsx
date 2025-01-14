import React from "react";
import logo from '../assets/logo.png';

const OptimizedMarketingStrategy = () => {
  return (
    <div className=" bg-gradient-to-r from-[#B3080B] to-[#5B74BE] rounded-3xl">
      {/* Border Gradient */}
      <div className=" inset-0 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-3xl m-[2px] p-10">
        <div className="  rounded-lg flex items-center justify-between px-8 py-4 rounded-3xl" >
          {/* Text Section */}
          <div className="text-white max-w-lg">
          <h1 className="text-2xl font-sansProSemiBold font-semibold leading-[29.05px] mb-4">
          Optimized Marketing Strategy
            </h1>
            <p className="font-sansPro font-normal text-sm leading-[18.2px] mb-4 text-[#A3A8B8]">
            This tool enables your marketing team to align their efforts with
              token unlock events, ensuring a coordinated approach between
              marketing strategies and tokenomics.
            </p>
            <p className="font-sansPro font-normal text-sm leading-[18.2px] mb-4 text-[#A3A8B8]">
            It will help to strategically utilize marketing funds for maximum
              impact and mitigate potential price volatility during significant
              token release events.
            </p>
          </div>
          {/* Logo Section */}
          <div className="">
            <img
              src={logo}
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
