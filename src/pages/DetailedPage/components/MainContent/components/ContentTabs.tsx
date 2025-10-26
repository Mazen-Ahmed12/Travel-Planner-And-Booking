import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../components/ui/tabs";
import { Card } from "../../../../../components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Wifi, Coffee, Dumbbell, Car, UtensilsCrossed, Star } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Avatar } from "../../../../../components/ui/avatar";

export function MainHeader() {
  const navigate = useNavigate();

  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Coffee, label: "Breakfast" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Car, label: "Free Parking" },
    { icon: UtensilsCrossed, label: "Restaurant" },
    { icon: Star, label: "Spa & Wellness" },
  ];
  const rooms = [
    {
      type: "Deluxe Room",
      size: "32 m²",
      beds: "1 King Bed",
      capacity: "2 Adults",
      price: 899,
      amenities: ["City View", "WiFi", "Air Conditioning", "Mini Bar"],
    },
    {
      type: "Suite",
      size: "55 m²",
      beds: "1 King Bed + Sofa Bed",
      capacity: "3 Adults",
      price: 1299,
      amenities: ["Ocean View", "WiFi", "Balcony", "Living Room"],
    },
    {
      type: "Family Room",
      size: "45 m²",
      beds: "2 Queen Beds",
      capacity: "4 Adults",
      price: 1099,
      amenities: ["Garden View", "WiFi", "Kitchenette", "Extra Space"],
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Amazing experience! The staff was incredibly friendly and the room was spotless. The location is perfect for exploring the city. Highly recommend!",
      helpful: 24,
    },
    {
      name: "Sarah Smith",
      rating: 5,
      date: "1 month ago",
      comment:
        "Best hotel stay ever! The amenities are top-notch and the breakfast buffet was incredible. Will definitely come back.",
      helpful: 18,
    },
    {
      name: "Michael Johnson",
      rating: 4,
      date: "2 months ago",
      comment:
        "Great value for money. The pool area is beautiful and the rooms are spacious. Only minor issue was check-in took a bit long.",
      helpful: 12,
    },
  ];

  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="rooms">Rooms</TabsTrigger>
        <TabsTrigger value="amenities">Amenities</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6">
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">About This Property</h3>
          <p className="text-gray-700 mb-4">
            Experience luxury and tranquility at our stunning resort nestled in
            the heart of Ubud, Bali. Surrounded by lush tropical gardens and
            rice paddies, our property offers the perfect blend of traditional
            Balinese hospitality and modern comfort.
          </p>
          <p className="text-gray-700 mb-4">
            Each room is thoughtfully designed with authentic Balinese décor,
            featuring private balconies with breathtaking views. Enjoy
            world-class dining at our on-site restaurants, rejuvenate at our
            spa, or take a dip in our infinity pool overlooking the jungle.
          </p>
          <p className="text-gray-700">
            Located just minutes from Ubud's cultural attractions, art
            galleries, and the famous Monkey Forest, our resort is the ideal
            base for exploring the beauty and culture of Bali.
          </p>
        </Card>

        <Card className="p-6 mt-6">
          <h3 className="text-gray-900 mb-4">Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Infinity pool with jungle views",
              "Traditional Balinese spa",
              "Farm-to-table restaurant",
              "Yoga and meditation classes",
              "Free shuttle to Ubud center",
              "24-hour concierge service",
            ].map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="rooms" className="mt-6">
        <div className="space-y-4">
          {rooms.map((room, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-gray-900 mb-2">{room.type}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{room.size}</span>
                    <span>•</span>
                    <span>{room.beds}</span>
                    <span>•</span>
                    <span>{room.capacity}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-blue-600">${room.price}</p>
                  <p className="text-sm text-gray-500">per night</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {room.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate("booking")}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="amenities" className="mt-6">
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-4xl text-gray-900 mb-1">4.8</div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">234 reviews</div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600 w-12">
                    {rating} star
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width:
                          rating === 5 ? "70%" : rating === 4 ? "20%" : "10%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center">
                  {review.name.charAt(0)}
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
