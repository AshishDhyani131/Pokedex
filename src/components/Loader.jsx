import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full grid place-content-center user-select-none ">
      <div className="user-select-none grid place-content-center w-8 aspect-square border-2 border-solid border-black border-y-[#DC0A2D] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
