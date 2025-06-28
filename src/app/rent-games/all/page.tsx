import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { ChevronDown, Filter } from "lucide-react";

const allGameProducts = [
    { id: 1, name: "PlayStation 5 Console", image: "/placeholder-ps5.jpg", price: 3999, rating: 4.9, reviews: 250, type: "Video Games" },
    { id: 2, name: "Giant Jenga", image: "/placeholder-jenga-outdoor.jpg", price: 1499, rating: 4.9, reviews: 180, type: "Outdoor Games" },
    { id: 3, name: "Professional Poker Set", image: "/placeholder-poker-set.jpg", price: 1999, rating: 4.9, reviews: 280, type: "Tabletop Classics" },
    { id: 4, name: "Karaoke Machine & Mics", image: "/placeholder-karaoke.jpg", price: 2499, rating: 4.9, reviews: 280, type: "Party Games" },
    { id: 5, name: "Nintendo Switch (OLED)", image: "/placeholder-switch-oled.jpg", price: 2999, rating: 4.8, reviews: 190, type: "Video Games" },
    { id: 6, name: "Cornhole Board Set", image: "/placeholder-cornhole.jpg", price: 1299, rating: 4.8, reviews: 150, type: "Outdoor Games" },
    { id: 7, name: "Settlers of Catan", image: "/placeholder-catan.jpg", price: 1499, rating: 4.9, reviews: 320, type: "Tabletop Classics" },
    { id: 8, name: "Beer Pong Table & Kit", image: "/placeholder-beerpong.jpg", price: 1599, rating: 4.8, reviews: 210, type: "Party Games" },
    { id: 9, name: "Xbox Series X", image: "/placeholder-xbox-x.jpg", price: 3899, rating: 4.9, reviews: 230, type: "Video Games" },
    { id: 10, name: "Inflatable Bouncy Castle", image: "/placeholder-bouncy-castle.jpg", price: 4999, rating: 4.9, reviews: 220, type: "Outdoor Games" },
    { id: 11, name: "Foosball Table", image: "/placeholder-foosball.jpg", price: 3499, rating: 4.7, reviews: 150, type: "Tabletop Classics" },
    { id: 12, name: "Twister Ultimate", image: "/placeholder-twister.jpg", price: 799, rating: 4.7, reviews: 180, type: "Party Games" },
];

export default function AllGamesPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              All Games for Rent
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The ultimate library of fun. Browse our complete collection of games for any event.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                <Filter size={16} />
                <span>Filter by Category</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>Featured</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allGameProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
                <Link href="#">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                    <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {product.type}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold text-lg">View Details</span>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-blue-50 text-sm font-medium text-blue-700">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>

        </div>
      </div>
    </MainLayout>
  );
} 