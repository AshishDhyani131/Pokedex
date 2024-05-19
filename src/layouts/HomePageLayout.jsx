import React from "react";

const HomePageLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-[#DC0A2D] grid grid-rows-rootLayout rounded-md">
      {children}
    </div>
  );
};

export default HomePageLayout;
