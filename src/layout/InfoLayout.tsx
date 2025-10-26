import React from "react";
import { Outlet } from "react-router-dom";

const InfoLayout: React.FC = () => {
  return (
    <>

      <main className="flex-1">
        <Outlet /> {/* Child routes render here */}
      </main>
      
    </>
  );
};

export default InfoLayout;
