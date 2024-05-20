import React from "react";

const StatContainer = ({ baseStats, primaryColor, primaryColorLight }) => {
  return (
    <>
      <div className="border-r border-solid border-black">
        {baseStats.map((stat) => (
          <p
            className="text-xs uppercase font-bold mt-1  text-right pr-4"
            style={{ color: primaryColor }}
            key={stat[0]}
          >
            {stat[0]}
          </p>
        ))}
      </div>
      <div className="pl-3">
        {baseStats.map((stat) => (
          <div
            className="grid grid-cols-[1fr_9fr] gap-3 mt-1 items-center"
            key={stat[0]}
          >
            <p className="text-xs text-end">{stat[1]}</p>
            <div
              className="w-full h-2 rounded-full relative z-0 overflow-hidden"
              style={{ backgroundColor: primaryColorLight }}
            >
              <div
                className="h-2 z-10 absolute top-0 left-0"
                style={{
                  backgroundColor: primaryColor,
                  width: `${stat[1] / 2}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatContainer;
