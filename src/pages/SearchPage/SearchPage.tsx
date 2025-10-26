import { FiltersSidebar } from "./components/SearchHeader/FiltersSidebar";
import { SearchHeader } from "./components/SearchHeader/SearchHeader";
import { SearchResults } from "./components/SearchHeader/SearchResults";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          <FiltersSidebar />
          <div className="lg:col-span-3">
            <SearchResults />
          </div>
        </div>
      </div>
    </div>
  );
}
