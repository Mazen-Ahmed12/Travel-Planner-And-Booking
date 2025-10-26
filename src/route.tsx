// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {HomePage} from "./pages/Home/HomePage";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import {Destination} from "./pages/Destination/Destination";
import {InfoLayout} from "./layout/InfoLayout";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {MissionAndVision} from "./pages/AboutUs/MissionAndVision";
import {Policy} from "./pages/TermsAndPolicies/Policy";
import {TermsOfServices} from "./pages/TermsAndPolicies/TermsOfServices";
import {AuthLayout} from "./layout/AuthLayout";
import {Deals} from "./pages/Deals/Deals";
import {Login} from "./pages/Auth/Login";
import {SignUp} from "./pages/Auth/SignUp";
import {Notfound} from "./pages/NotFound/Notfound";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {DetailedPage} from "./pages/DetailedPage/DetailedPage";
import {SupportPage} from "./pages/SupportPage/SupportPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "homePage", element: <HomePage /> },
      { path: "search/*", element: <SearchPage /> },
      { path: "destination", element: <Destination /> },
      { path: "deals", element: <Deals /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "detailedpage", element: <DetailedPage /> },
      { path: "supportpage", element: <SupportPage /> },
      {
        element: <InfoLayout />,
        children: [
          { path: "about", element: <AboutUs /> },
          { path: "missionvision", element: <MissionAndVision /> },
          { path: "policy", element: <Policy /> },
          { path: "terms", element: <TermsOfServices /> },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "deals", element: <Deals /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  { path: "*", element: <Notfound /> },
]);
