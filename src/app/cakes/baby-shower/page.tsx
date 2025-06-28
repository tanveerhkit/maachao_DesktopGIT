import MainLayout from "@/components/layout/MainLayout";

const babyShowerCakeProducts = [
  { id: 1, name: "Blue Baby Shower Cake", image: "/placeholder-blue-baby-cake.jpg", price: 899, description: "Adorable blue cake for baby boys." },
  { id: 2, name: "Pink Baby Shower Cake", image: "/placeholder-pink-baby-cake.jpg", price: 899, description: "Sweet pink cake for baby girls." },
  { id: 3, name: "Neutral Baby Shower Cake", image: "/placeholder-neutral-baby-cake.jpg", price: 899, description: "Perfect for gender-neutral celebrations." },
  { id: 4, name: "Teddy Bear Cake", image: "/placeholder-teddy-cake.jpg", price: 1099, description: "Cute teddy bear themed baby shower cake." },
];

export default function BabyShowerCakePage() {
  return (
    <MainLayout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Baby Shower Cakes</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Celebrate the mom-to-be with these adorable baby shower cakes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {babyShowerCakeProducts.map(product => (
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