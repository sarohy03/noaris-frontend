import React from "react";

const meter = ({ progress, size, borderColor, progressColor }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="red"
          stroke="#0E1117"
          strokeWidth="15"
          transform="rotate(-90, 100, 100)"
          // borderColor="red"
        
          opacity={0.5}
        //   className="border-4 border-white"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={progressColor}
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90, 100, 100)"
        />
      </svg>
      <div
        className="absolute text-black font-semibold text-center"
        style={{
          fontSize: `${size / 5}px`,
          width: `${size / 2.5}px`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default meter;
