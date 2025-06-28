import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Under 1000 Gifts | MaaChao Gifts",
  description: "Find the best gifts under 1000 for all occasions.",
};

const under1000Gifts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Gift Under 1000 #${i + 1}`,
  image: "/placeholder.jpg",
  price: `₹${499 + i * 50}`,
  oldPrice: `₹${599 + i * 60}`,
  discount: `${10 + i * 2}% OFF`,
  description: "Earliest Delivery: Today",
}));

export default function Under1000GiftsPage() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/gifts" className="hover:text-brand-orange">Gifts</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Under 1000</span>
        </div>
      </div>
      <section className="container mx-auto px-4 py-4 border-t border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort By:</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Filter:</span>
            <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
              <option>All</option>
              <option>Under 1000</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Under 1000 Gifts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {under1000Gifts.map((gift) => (
            <div key={gift.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-64 bg-gray-100">
                <img src={gift.image} alt={gift.name} className="w-full h-full object-cover rounded-t-lg" />
                <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{gift.discount}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-black mb-1 line-clamp-2">{gift.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-black">{gift.price}</span>
                  <span className="text-gray-400 line-through text-sm">{gift.oldPrice}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 flex-1">{gift.description}</p>
                <button className="mt-auto w-full bg-brand-orange text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 