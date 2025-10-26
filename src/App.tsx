import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Destination from "./pages/Destination/Destination";
import Deals from "./pages/Deals/Deals";
import AboutUs from "./pages/AboutUs/AboutUs";
import MissionAndVsion from "./pages/AboutUs/MissionAndVsion";
import InfoLayout from "./layout/InfoLayout";
import Policy from "./pages/TermsAndPolicies/Policy";
import TermsOfServices from "./pages/TermsAndPolicies/TermsOfServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/homePage" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/destination" element={<Destination />} />
          <Route element={<InfoLayout />}>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/mission-vision" element={<MissionAndVsion />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<TermsOfServices />} />
          </Route>
        </Route>

        {/* Auth layout */}
        <Route element={<AuthLayout />}>
          <Route path="/deals" element={<Deals />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Route>
        {/* Infos layout */}

        {/* Fallback */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
