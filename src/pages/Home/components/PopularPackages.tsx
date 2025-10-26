import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Card } from '../../../components/ui/card';

export function PopularPackages() {
    const navigate = useNavigate();

  const popularPackages = [
    {
      title: "7-Day Bali Adventure",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: "$899",
      image:
        "https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlfGVufDF8fHx8MTc2MTIwNzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 234,
    },
    {
      title: "Paris City Break",
      location: "Paris, France",
      duration: "5 Days / 4 Nights",
      price: "$1,299",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2MTI5NjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 456,
    },
    {
      title: "Maldives Luxury Escape",
      location: "Maldives",
      duration: "6 Days / 5 Nights",
      price: "$2,199",
      image:
        "https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjEzMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 189,
    },
  ];

  return (
    <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 text-start ">
            <h2 className="text-gray-900 mb-2 font-bold text-xl">
              Popular Packages
            </h2>
            <p className="text-gray-600">
              Best deals on complete travel packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate("detail")}
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 mb-2 text-start">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{pkg.rating}</span>
                      <span className="text-sm text-gray-500">
                        ({pkg.reviews})
                      </span>
                    </div>
                    <span className="text-blue-600">{pkg.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

