import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-main overflow-auto">
      <SideBar />
      <div className="h-screen ml-[50px] md:ml-[200px] lg:ml-[320px] relative p-6 md:px-14 md:pt-10 md:pb-10 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
