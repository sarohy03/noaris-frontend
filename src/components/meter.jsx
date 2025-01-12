import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const App = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(progress);

  useEffect(() => {
    // Animate progress value
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 50); // Slight delay to ensure smooth animation

    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div style={{ width: 200, height: 200 }}>
      
      <CircularProgressbar
        value={animatedProgress}
        text={`${animatedProgress}%`}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#34436C",
          trailColor: "#1E1E1E",
          textColor: "#fff",
          pathTransition: "stroke-dashoffset 0.5s ease 0s", // Smooth transition
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default App;
