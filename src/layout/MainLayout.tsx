import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main className="">
        <Outlet /> {/* Child routes render here */}
      </main>
      
      <Footer />
    </>
  );
};

export default MainLayout;
