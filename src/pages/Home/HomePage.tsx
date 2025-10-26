import { CategorySection } from "./components/CategorySection";
import { FeaturedDestinations } from "./components/FeaturedDestinations";
import { MainSection } from "./components/MainSection/MainSection";
import { PopularPackages } from "./components/PopularPackages";
import { ReviewSection } from "./components/ReviewSection";


export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <MainSection />
      <CategorySection />
      <FeaturedDestinations />
      <PopularPackages />
      <ReviewSection />
      
    </div>
  );
};


