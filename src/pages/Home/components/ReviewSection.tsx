import { Star } from "lucide-react";
import { Card } from "../../../components/ui/card";

export function ReviewSection() {
    const reviews = [
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
    ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-gray-900 mb-2 text-xl font-bold">What Our Travelers Say</h2>
        <p className="text-gray-600">Read reviews from our happy customers</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((testimonial, index) => (
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
            <div className="text-start">
              <p className="text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
