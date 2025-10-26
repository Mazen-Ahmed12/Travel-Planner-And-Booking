import { Plane } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4/5 mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl">TravelHub</span>
              </div>
              <p className="text-gray-400 text-sm text-start">Your trusted partner for unforgettable travel experiences around the world.</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/mission-vision" className="hover:text-white">Mission & Vision</Link></li>
                <li><Link to="/deals" className="hover:text-white">Deals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/destinations" className="hover:text-white">Asia</Link></li>
                <li><Link to="/destinations" className="hover:text-white">Europe</Link></li>
                <li><Link to="/destinations" className="hover:text-white">Americas</Link></li>
                <li><Link to="/destinations" className="hover:text-white">Africa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Contact us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <h5>Phone: +123456789</h5>
                <h5>Email: info@travelhub.com</h5>
                <h5>Address: 123 Main St, City, Country</h5>
                </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 TravelHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
