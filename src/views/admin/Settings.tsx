import React from "react";
import { Outlet } from  "react-router-dom"

// components

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
       <Outlet />
      </div>
    </>
  );
}


