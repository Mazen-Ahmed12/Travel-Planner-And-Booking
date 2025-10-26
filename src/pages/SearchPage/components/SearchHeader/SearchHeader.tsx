import React from "react";
import { useFiltersStore } from "../../../../store/Store";
import { Calendar, Grid3x3, List, Search, Users } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { results } from "../../components/Results.json";

export function SearchHeader() {
    const {viewMode, setViewMode} = useFiltersStore();
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search destinations, hotels, activities..."
              className="pl-10 bg-gray-100"
            />
          </div>
          <Button
            variant="outline"
            className="gap-2 border-2 border-gray-500/20! px-2 "
          >
            <Calendar className="w-4 h-4" />
            Dates
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-2 border-gray-500/20! px-2"
          >
            <Users className="w-4 h-4" />
            Guests
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{results.length} properties found</p>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="bg-black"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
