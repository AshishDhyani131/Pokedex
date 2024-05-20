import React from "react";

const GridLayout = ({ children, ...props }) => {
  return (
    <div
      className="w-screen h-screen  relative grid grid-rows-rootLayout rounded-md sm:w-[300px] sm:h-[580px]"
      {...props}
    >
      {children}
    </div>
  );
};

export default GridLayout;
