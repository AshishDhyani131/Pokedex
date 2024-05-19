import React from "react";
import SearchContextProvider from "../context/context";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <SearchContextProvider>
      <Outlet></Outlet>
    </SearchContextProvider>
  );
};

export default RootLayout;
