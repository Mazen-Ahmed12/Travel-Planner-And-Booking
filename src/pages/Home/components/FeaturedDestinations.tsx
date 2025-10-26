import React from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export function FeaturedDestinations() {
  const destinations = [
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlfGVufDF8fHx8MTc2MTIwNzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $899",
      rating: 4.8,
      tours: "120+ Tours",
    },
    {
      name: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2MTI5NjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,299",
      rating: 4.9,
      tours: "200+ Tours",
    },
    {
      name: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1645343709881-465be60137a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NjEyNzMwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,099",
      rating: 4.7,
      tours: "150+ Tours",
    },
    {
      name: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzYxMzAwMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,499",
      rating: 4.9,
      tours: "90+ Tours",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjEzMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $2,199",
      rating: 5.0,
      tours: "80+ Tours",
    },
    {
      name: "Tropical Paradise",
      image:
        "https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYxMjM0NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $799",
      rating: 4.6,
      tours: "110+ Tours",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col text-start">
          <h2 className="text-gray-900 mb-2 font-bold text-xl">
            Featured Destinations
          </h2>
          <p className="text-gray-600">
            Explore the most popular destinations around the world
          </p>
        </div>
        <Button variant="outline" className="px-4 py-2">View All</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            onClick={() => navigate("detail")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                {dest.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 mb-2 text-start">{dest.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{dest.rating}</span>
                </div>
                <span className="text-sm text-gray-600">{dest.tours}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
