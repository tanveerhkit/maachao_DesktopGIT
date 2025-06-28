import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Frozen Theme Decorations | MaaChao",
  description: "Find the best Frozen theme party decorations for birthdays and more.",
};

const frozenPackages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Frozen Theme Decoration Package #${i + 1}`,
  image: "/placeholder.jpg",
  rating: 4.8,
  reviewCount: 110 + i * 11,
  price: 1799 + i * 210,
  discountPercent: 10 + (i % 3) * 5,
  deliveryDate: "Tomorrow",
}));

export default function FrozenDecorationsPage() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/decorations" className="hover:text-brand-orange">Party Decoration</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Frozen Theme</span>
        </div>
      </div>
      <section className="container mx-auto px-4 py-4 bg-white">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Frozen Theme Decorations</h1>
        <p className="text-gray-700 mb-4">{frozenPackages.length * 100 + 500} reviews</p>
      </section>
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
            <div className="flex items-center text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-black ml-1">4.8</span>
            </div>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-500">{frozenPackages.length * 100 + 500} reviews</span>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {frozenPackages.map((pkg) => (
            <Card key={pkg.id} className="transition-shadow duration-300 hover:shadow-md p-0">
              <Card.Image src={pkg.image} alt={pkg.name} height="h-64" />
              <div className="p-4">
                <Card.Title className="truncate text-base font-semibold mb-1">{pkg.name}</Card.Title>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500 ml-2">({pkg.reviewCount} reviews)</span>
                </div>
                <div className="mt-2">
                  <span className="text-xl font-bold text-gray-800">₹{pkg.price - (pkg.price * pkg.discountPercent / 100)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{pkg.price}</span>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded mt-2 inline-block">
                  {pkg.discountPercent}% off
                </span>
                <p className="text-xs text-gray-600 mt-2">Earliest delivery: <span className="font-medium text-gray-800">{pkg.deliveryDate}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 