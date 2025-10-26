import React, { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Slider } from "../../../../components/ui/slider";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Star } from "lucide-react";

export function FiltersSidebar() {
    const [priceRange, setPriceRange] = useState([500, 3000]);
  return (
    <div className="lg:col-span-1">
      <Card className="p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-900">Filters</h3>
          <Button variant="ghost" size="sm">
            Clear All
          </Button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-gray-900 mb-3">Price Range</h4>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={5000}
            step={100}
            className="mb-3"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h4 className="text-gray-900 mb-3">Property Type</h4>
          <div className="space-y-3">
            {["Hotel", "Resort", "Villa", "Apartment"].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox id={type} />
                <label
                  htmlFor={type}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="text-gray-900 mb-3">Amenities</h4>
          <div className="space-y-3">
            {["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"].map(
              (amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <Checkbox id={amenity} />
                  <label
                    htmlFor={amenity}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {amenity}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="text-gray-900 mb-3">Rating</h4>
          <div className="space-y-3">
            {[5, 4, 3, 2].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm text-gray-700 cursor-pointer flex items-center gap-1"
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {rating}+ Stars
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
