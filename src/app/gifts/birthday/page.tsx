import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Birthday Gifts | MaaChao Gifts",
  description: "Find the best birthday gifts for all ages.",
};

const birthdayGiftSubCategories = [
  { name: "Personalized mugs", slug: "personalized-mugs" },
  { name: "Chocolates", slug: "chocolates" },
];

export default function BirthdayGiftsPage() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/gifts" className="hover:text-brand-orange">Gifts</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Birthday</span>
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
              <option>Personalized mugs</option>
              <option>Chocolates</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Birthday Gifts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {birthdayGiftSubCategories.map((cat) => (
            <Link key={cat.slug} href={`/gifts/birthday/${cat.slug}`} className="block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center h-40 cursor-pointer">
                <span className="text-lg font-semibold text-gray-800">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 