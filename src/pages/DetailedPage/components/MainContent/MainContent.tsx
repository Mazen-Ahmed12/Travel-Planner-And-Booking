import {
  Heart,
  MapPin,
  Share2,
  Star
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { MainHeader } from "./components/ContentTabs";


const MainContent = () => {
  return (
      <div className="lg:col-span-2">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-gray-900 mb-2">Luxury Resort in Bali</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Ubud, Bali, Indonesia</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg">4.8</span>
              <span className="text-gray-600">(234 reviews)</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Hotel</span>
          </div>
        </div>

        {/* Tabs */}
        <MainHeader/>
      </div>
  );
};

export default MainContent;
