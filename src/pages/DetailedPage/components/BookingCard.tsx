import React from "react";
import { Card } from "../../../components/ui/card";
import { Calendar, Users } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export function BookingCard() {
     const navigate = useNavigate();

  return (
    <div className="lg:col-span-1">
      <Card className="p-6 sticky top-24">
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl text-blue-600">$899</span>
            <span className="text-gray-600">/ night</span>
          </div>
          <p className="text-sm text-gray-500">Taxes and fees included</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="border rounded-lg p-3">
            <label className="text-xs text-gray-600 block mb-1">Check-in</label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input type="date" className="flex-1 outline-none text-sm" />
            </div>
          </div>
          <div className="border rounded-lg p-3">
            <label className="text-xs text-gray-600 block mb-1">
              Check-out
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input type="date" className="flex-1 outline-none text-sm" />
            </div>
          </div>
          <div className="border rounded-lg p-3">
            <label className="text-xs text-gray-600 block mb-1">Guests</label>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="2 Adults"
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
          onClick={() => navigate("booking")}
        >
          Reserve Now
        </Button>

        <p className="text-center text-sm text-gray-600 mb-4">
          You won't be charged yet
        </p>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">$899 × 3 nights</span>
            <span className="text-gray-900">$2,697</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Service fee</span>
            <span className="text-gray-900">$135</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Taxes</span>
            <span className="text-gray-900">$270</span>
          </div>
          <div className="border-t pt-2 flex justify-between">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">$3,102</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
