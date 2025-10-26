import { Car, Hotel, MapPin, Plane, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../../../components/ui/card'

export function CategorySection () {
    const categories = [
        {
            icon: Plane,
            label: "Flights"
        },
        {
            icon: Hotel,
            label: "Hotels"
        },
        {
            icon: Car,
            label: "Car Rental"
        },
        {
            icon: TrendingUp,
            label: "Tours"
        },
        {
            icon: MapPin,
            label: "Activities"
        },
        {
            icon: Star,
            label: "Deals"
        },
    ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((item, index) => (
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
  )
}
