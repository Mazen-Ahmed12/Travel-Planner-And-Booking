import {
  CalendarDays,
  Car,
  Hotel,
  MapPin,
  Plane,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const Home = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlfGVufDF8fHx8MTc2MTIwNzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $899",
      rating: 4.8,
      tours: "120+ Tours"
    },
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2MTI5NjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,299",
      rating: 4.9,
      tours: "200+ Tours"
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1645343709881-465be60137a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NjEyNzMwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,099",
      rating: 4.7,
      tours: "150+ Tours"
    },
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzYxMzAwMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,499",
      rating: 4.9,
      tours: "90+ Tours"
    },
    {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjEzMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $2,199",
      rating: 5.0,
      tours: "80+ Tours"
    },
    {
      name: "Tropical Paradise",
      image: "https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYxMjM0NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $799",
      rating: 4.6,
      tours: "110+ Tours"
    }
  ];

  const popularPackages = [
    {
      title: "7-Day Bali Adventure",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: "$899",
      image: "https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlfGVufDF8fHx8MTc2MTIwNzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 234
    },
    {
      title: "Paris City Break",
      location: "Paris, France",
      duration: "5 Days / 4 Nights",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2MTI5NjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 456
    },
    {
      title: "Maldives Luxury Escape",
      location: "Maldives",
      duration: "6 Days / 5 Nights",
      price: "$2,199",
      image: "https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjEzMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 189
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-linear-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center text-start">
          <div className="text-white ">
            <h1 className="text-white mb-4 text-lg!">Discover Your Next Adventure</h1>
            <p className="text-xl text-white/90 mb-8">
              Explore the world's most beautiful destinations with our
              handpicked travel packages
            </p>

            {/* Search Bar */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  {/* Destination */}
                  <div className="flex items-center gap-2 border-r pr-4">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-xs text-gray-600 block mb-1">
                        Destination
                      </label>
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="border-0 p-0 h-auto w-full focus-visible:ring-0 bg-transparent text-base"
                      />
                    </div>
                  </div>

                  {/* Check In */}
                  <div className="flex items-center gap-2 border-r pr-4">
                    <CalendarDays className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <label className="text-xs text-gray-600 block mb-1">
                        Check In
                      </label>
                      <Input
                        type="date"
                        className="border-0 p-0 h-auto w-full focus-visible:ring-0 "
                      
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex items-center gap-2 border-r pr-4">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-xs text-gray-600 block mb-1">
                        Guests
                      </label>
                      <Input
                        type="text"
                        placeholder="2 Adults"
                        className="border-0 p-0 h-auto w-full focus-visible:ring-0 bg-transparent text-base"
                      />
                    </div>
                  </div>

                  {/* Search Button */}
                  <Button
                    onClick={() => navigate("/search")}
                    className="bg-blue-600 hover:bg-blue-700 h-full"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { icon: Plane, label: "Flights" },
            { icon: Hotel, label: "Hotels" },
            { icon: Car, label: "Car Rental" },
            { icon: TrendingUp, label: "Tours" },
            { icon: MapPin, label: "Activities" },
            { icon: Star, label: "Deals" },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-6">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-gray-700">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-gray-900 mb-2">Featured Destinations</h2>
            <p className="text-gray-600">
              Explore the most popular destinations around the world
            </p>
          </div>
          <Button variant="outline">View All</Button>
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
                <h3 className="text-gray-900 mb-2">{dest.name}</h3>
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

      {/* Popular Packages */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-gray-900 mb-2">Popular Packages</h2>
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
                  <h3 className="text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <CalendarDays  className="w-4 h-4" />
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

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">What Our Travelers Say</h2>
          <p className="text-gray-600">Read reviews from our happy customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              location: "New York, USA",
              rating: 5,
              text: "Amazing experience! The booking process was smooth and the trip exceeded all expectations. Highly recommended!",
            },
            {
              name: "David Chen",
              location: "Singapore",
              rating: 5,
              text: "Best travel platform I've used. Great deals, easy navigation, and excellent customer service throughout.",
            },
            {
              name: "Emma Williams",
              location: "London, UK",
              rating: 4,
              text: "Fantastic selection of destinations and packages. Made planning our family vacation so much easier!",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div>
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
