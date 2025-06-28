import MainLayout from "@/components/layout/MainLayout";
import { FaHeart } from "react-icons/fa";

const birthdayCakeProducts = [
  { id: 1, name: "Chocolate Truffle Cake", image: "/placeholder-choco-truffle.jpg", price: 799, description: "Rich chocolate truffle cake for birthdays." },
  { id: 2, name: "Rainbow Sprinkles Cake", image: "/placeholder-rainbow-cake.jpg", price: 899, description: "Colorful rainbow cake with sprinkles." },
  { id: 3, name: "Classic Pineapple Cake", image: "/placeholder-pineapple-cake.jpg", price: 699, description: "Fresh pineapple cake for celebrations." },
  { id: 4, name: "Photo Print Cake", image: "/placeholder-photo-cake.jpg", price: 999, description: "Personalized photo print birthday cake." },
];

export default function BirthdayCakePage() {
  return (
    <MainLayout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Birthday Cakes</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Delicious cakes to make every birthday extra special. Customization available.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {birthdayCakeProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-pink-700 font-bold text-lg">₹{product.price}</span>
                    <button className="px-4 py-2 border border-pink-600 text-pink-700 rounded-md font-medium hover:bg-pink-50 transition">View Details</button>
                  </div>
                </div>
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-orange-50">
                  <FaHeart className="text-orange-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 