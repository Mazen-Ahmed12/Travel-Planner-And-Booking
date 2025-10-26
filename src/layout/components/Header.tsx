import { Heart, Menu, Plane, User } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";


export function Header() {
    const [currentPage, setCurrentPage] = React.useState("home");
    const navigate = useNavigate();
    
    const handleNavigate = (page: string) => {  
      setCurrentPage(page);
      navigate(`/${page}`);
    };
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Button
            onClick={() => handleNavigate("homePage")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">TravelHub</span>
          </Button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              onClick={() => handleNavigate("homePage")}
              className={`${
                currentPage === "homePage"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Home
            </Button>
            <Button
              onClick={() => handleNavigate("search")}
              className={`${
                currentPage === "search"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Search
            </Button>
            <Button
              onClick={() => handleNavigate("destination")}
              className={`${
                currentPage === "destination"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Destinations
            </Button>
            <Button
              onClick={() => handleNavigate("deals")}
              className={`${
                currentPage === "deals"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Deals
            </Button>
            <Button
              onClick={() => handleNavigate("supportpage")}
              className={`${
                currentPage === "supportpage"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Support
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => handleNavigate("dashboard")}
              variant="ghost"
              size="icon"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
            <Button size="icon" className="md:hidden">
              <Menu className="w-5 h-5 text-black"/>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
