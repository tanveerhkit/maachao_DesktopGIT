import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Birthday Decorations | MaaChao",
  description: "Find the best birthday party decorations including balloons, backdrops, and lighting.",
};

const birthdaySubCategories = [
  { name: "Balloons", slug: "balloons" },
  { name: "Backdrops", slug: "backdrops" },
  { name: "Lighting", slug: "lighting" },
];

const birthdayProducts = [
  { id: 1, name: "Unicorn Theme Kit", image: "/placeholder-unicorn.jpg", price: 1299, description: "All-in-one unicorn birthday decor kit." },
  { id: 2, name: "Happy Birthday Banner", image: "/placeholder-banner.jpg", price: 299, description: "Reusable, colorful birthday banner." },
  { id: 3, name: "Confetti Balloons Set", image: "/placeholder-confetti-balloons.jpg", price: 499, description: "Pack of 20 confetti balloons." },
  { id: 4, name: "Table Centerpieces", image: "/placeholder-centerpiece.jpg", price: 399, description: "Cute themed table centerpieces." },
];

export default function BirthdayDecorationsPage() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/decorations" className="hover:text-brand-orange">Party Decoration</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Birthday</span>
        </div>
      </div>
      <section className="container mx-auto px-4 py-4 border-t border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort By:</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500">
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
            <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500">
              <option>All</option>
              <option>Balloons</option>
              <option>Backdrops</option>
              <option>Lighting</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4 bg-white">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Birthday Decorations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {birthdaySubCategories.map((cat) => (
            <Link key={cat.slug} href={`/decorations/birthday/${cat.slug}`} className="block">
              <Card className="flex flex-col items-center justify-center h-40 cursor-pointer hover:shadow-lg transition-shadow">
                <span className="text-lg font-semibold text-gray-800">{cat.name}</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Birthday Decorations</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Trendy, fun, and colorful birthday decorations for all ages.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {birthdayProducts.map(product => (
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