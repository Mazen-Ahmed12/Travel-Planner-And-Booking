import React from "react";
import { Outlet } from "react-router-dom";

export function InfoLayout() {
  return (
    <>

      <main className="flex-1">
        <Outlet /> {/* Child routes render here */}
      </main>
      
    </>
  );
};
