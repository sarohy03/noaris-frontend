import React from "react";

const Tooltip = ({ text, pr }) => {
  return (
    <div className="relative group inline-block">
      {/* Button */}
      <button
        type="button"
        className="text-white border-2 bg-[#1A202C] border bg-[#0E1117] text-[#939497]-[#4A5568] text-[#A0AEC0]  focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-6 h-6 flex items-center justify-center text-center"
      >
        ?
      </button>

      {/* Tooltip */}
      <div
        className={`z-50 absolute bottom-1/2 right-full translate-x-[-10px] translate-y-[50%] hidden group-hover:block w-52 bg-gray-900 text-white text-sm p-2 rounded shadow-lg ${pr}`}
      >
        {text}
        <div
          className="tooltip-arrow"
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderRight: "5px solid gray",
            top: "50%",
            right: "-5px",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;
