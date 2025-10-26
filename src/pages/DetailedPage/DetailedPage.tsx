import { BookingCard } from "./components/BookingCard";
import { ImageGallery } from "./components/ImageGallery";
import MainContent from "./components/MainContent/MainContent";


export function DetailedPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Gallery */}
        <ImageGallery />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <MainContent/>

          <BookingCard/>
        </div>
      </div>
    </div>
  );
}
