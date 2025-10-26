import React from "react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>

      <main className="content">
        <Outlet /> {/* Child routes render here */}
      </main>
      
    </>
  );
};
