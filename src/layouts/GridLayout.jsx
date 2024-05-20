import React from "react";

const GridLayout = ({ children, ...props }) => {
  const className = `w-screen h-screen grid grid-rows-rootLayout rounded-md`;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default GridLayout;
