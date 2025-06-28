import MainLayout from "@/components/layout/MainLayout";

const babyShowerProducts = [
  { id: 1, name: "Oh Baby Banner", image: "/placeholder-ohbaby.jpg", price: 349, description: "Adorable gold foil baby shower banner." },
  { id: 2, name: "Mom-to-Be Sash", image: "/placeholder-sash.jpg", price: 199, description: "Elegant sash for the mom-to-be." },
  { id: 3, name: "Baby Shower Photo Props", image: "/placeholder-photo-props.jpg", price: 299, description: "Fun props for memorable photos." },
  { id: 4, name: "Pastel Balloon Garland", image: "/placeholder-pastel-balloons.jpg", price: 599, description: "DIY pastel balloon garland kit." },
];

export default function BabyShowerDecorationsPage() {
  return (
    <MainLayout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Baby Shower Decorations</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Celebrate the mom-to-be with beautiful, themed baby shower decor.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {babyShowerProducts.map(product => (
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