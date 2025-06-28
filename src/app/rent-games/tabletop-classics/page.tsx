import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { ChevronDown, Filter } from "lucide-react";

const tabletopGameProducts = [
    {
        id: 1,
        name: "Professional Poker Set",
        image: "/placeholder-poker-set.jpg",
        price: 1999,
        rating: 4.9,
        reviews: 280,
        type: "Card Game"
    },
    {
        id: 2,
        name: "Luxury Chess & Checkers Set",
        image: "/placeholder-chess.jpg",
        price: 1799,
        rating: 4.8,
        reviews: 190,
        type: "Board Game"
    },
    {
        id: 3,
        name: "Settlers of Catan",
        image: "/placeholder-catan.jpg",
        price: 1499,
        rating: 4.9,
        reviews: 320,
        type: "Strategy Game"
    },
    {
        id: 4,
        name: "Foosball Table",
        image: "/placeholder-foosball.jpg",
        price: 3499,
        rating: 4.7,
        reviews: 150,
        type: "Table Game"
    },
];

export default function TabletopClassicsPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Tabletop Classics
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              From intense strategy to casual fun, find the perfect board or card game for your gathering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                <Filter size={16} />
                <span>Filters</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>Player Count</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tabletopGameProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
                <Link href="#">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
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

        </div>
      </div>
    </MainLayout>
  );
} 