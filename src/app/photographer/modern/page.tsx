import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Modern Photographers | Hire Photographer | MaaChao",
  description: "Find and book the best modern photographers near you.",
};

const artists = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Modern Photographer #${i + 1}`,
  image: "/placeholder-mua4.jpg",
  location: "Delhi",
  price: `₹${3999 + i * 600}`,
  rating: (4 + (i % 2) * 0.5).toFixed(1),
}));

export default function ModernPhotographers() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/photographer" className="hover:text-brand-orange">Photographer</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Modern</span>
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
                <option>Rating</option>
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
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Modern Photographers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64 bg-gray-100">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{artist.rating}★</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">{artist.name}</h3>
                <div className="flex items-center mt-1 mb-2">
                  <span className="text-lg font-bold text-black">{artist.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{artist.location}</span>
                </div>
                <button className="w-full bg-brand-orange text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 