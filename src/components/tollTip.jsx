import React from "react";

const Tooltip = ({ text,pr }) => {
  return (
    <div className="relative group w-6 h-6 border-2 bg-#0E1117 border-[#939497]  text-[#939497] flex items-center justify-center rounded-full cursor-pointer font-bold text-xs">
      ?
      <div className={`z-50 relative bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-black text-white text-sm p-2 rounded shadow-lg ${pr}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
