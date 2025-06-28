import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

const balloonProducts = [
  { id: 1, name: "Birthday Balloon Bouquet", image: "/placeholder-birthday-balloons.jpg", price: 499, description: "Colorful balloons for birthday surprises." },
  { id: 2, name: "Anniversary Balloon Set", image: "/placeholder-anniversary-balloons.jpg", price: 599, description: "Romantic balloons for anniversaries." },
  { id: 3, name: "Get Well Soon Balloons", image: "/placeholder-getwell-balloons.jpg", price: 399, description: "Cheerful balloons to lift spirits." },
  { id: 4, name: "Congratulations Balloons", image: "/placeholder-congrats-balloons.jpg", price: 549, description: "Celebrate achievements with style." },
];

export default function BalloonBouquetPage() {
  return (
    <MainLayout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Balloon Bouquets</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Fun, vibrant balloon bouquets for every occasion. Customization available.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {balloonProducts.map(product => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 