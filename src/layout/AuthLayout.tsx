import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <>

      <main className="content">
        <Outlet /> {/* Child routes render here */}
      </main>
      
    </>
  );
};

export default AuthLayout;
