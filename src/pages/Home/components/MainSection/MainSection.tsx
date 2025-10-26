import { Calendar, MapPin, Search, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components/ui/button'
import { Card, CardContent } from '../../../../components/ui/card'
import { SearchBar } from './components/SearchBar'

export function MainSection () {
      const navigate = useNavigate();

  return (
    <section className="relative h-[600px] bg-linear-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center text-start">
          <div className="text-white max-w-2xl">
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
                  <SearchBar icon={MapPin} label="Destination" type="text" placeholder="Where to?"/>
                  
                  {/* Check In */}
                  <SearchBar icon={Calendar} label="Check In" type="date" placeholder="Check In"/>
                  
                  {/* Guests */}
                  <SearchBar icon={Users} label="Guests" type="text" placeholder="2 Adults"/>
                  
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
  )
}

