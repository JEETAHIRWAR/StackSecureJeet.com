import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="flex items-center">
      {[...Array(11)].map((_, index) => (
        <div key={index} className="relative">
          {index < 10 && (
            <div
              className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                index * 10 <= progress ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {index + 1}
            </div>
          )}
        </div>
      ))}
      <div className="flex-1">
        <div
          className="bg-blue-500 h-2"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
