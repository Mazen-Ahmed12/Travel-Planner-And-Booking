import { Heart, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { useFiltersStore } from "../../../../store/Store";
import { results } from "../Results.json";

export function SearchResults() {
    const navigate = useNavigate();
    const { viewMode } = useFiltersStore();
  return (
    <>
      <div
        className={
          viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-4"
        }
      >
        {results.map((result) => (
          <Card
            key={result.id}
            className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer ${
              viewMode === "list" ? "flex flex-row" : ""
            }`}
            onClick={() => navigate("/detail")}
          >
            <div
              className={`relative ${viewMode === "list" ? "w-80" : "h-56"}`}
            >
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            <div className={`p-5 ${viewMode === "list" ? "flex-1" : ""}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{result.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {result.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{result.rating}</span>
                <span className="text-sm text-gray-500">
                  ({result.reviews} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {result.amenities.slice(0, 4).map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-blue-600">
                    ${result.price}
                    <span className="text-sm text-gray-500">/night</span>
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">1</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">4</Button>
        <Button variant="outline">Next</Button>
      </div>
    </>
  );
};

