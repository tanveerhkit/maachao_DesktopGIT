"use client";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import Image from "next/image";
import QuickViewModal from "@/components/common/QuickViewModal";
import { useState } from "react";

interface QuickViewProduct {
  name: string;
  images: string[];
  price: number;
  oldPrice?: number | null;
  discount?: number;
  description?: string;
  category?: string;
}

export default function DecorationsPage() {
  // Sample decoration themes
  const decorationThemes = [
    {
      id: 1,
      name: "Cocomelon Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Jungle Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Unicorn Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 4,
      name: "Princess Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 5,
      name: "Frozen Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 6,
      name: "Mermaid Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
    {
      id: 7,
      name: "Space Theme",
      image: "/placeholder.jpg", // Replace with actual image path
    },
  ];

  // Sample decoration packages
  const decorationPackages = [
    {
      id: 1,
      name: "Simple Birthday Decoration",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.7,
      reviewCount: 3380,
      price: 1599,
      discountPercent: 20,
      deliveryDate: "Tomorrow",
    },
    {
      id: 2,
      name: "Birthday Home Decoration",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.8,
      reviewCount: 1377,
      price: 2399,
      discountPercent: 10,
      deliveryDate: "Tomorrow",
    },
    {
      id: 3,
      name: "Classy Balloon Arch",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.5,
      reviewCount: 1771,
      price: 2199,
      discountPercent: 12,
      deliveryDate: "Tomorrow",
    },
    {
      id: 4,
      name: "Birthday Room setup",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.8,
      reviewCount: 1340,
      price: 1699,
      discountPercent: 15,
      deliveryDate: "Tomorrow",
    },
    {
      id: 5,
      name: "Blue Silver Birthday Decoration",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.9,
      reviewCount: 319,
      price: 1799,
      discountPercent: 20,
      deliveryDate: "Tomorrow",
    },
    {
      id: 6,
      name: "Classy Birthday Decoration",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.9,
      reviewCount: 225,
      price: 1799,
      discountPercent: 10,
      deliveryDate: "Tomorrow",
    },
    {
      id: 7,
      name: "Birthday Balloon Decoration of Lights",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.9,
      reviewCount: 121,
      price: 1999,
      discountPercent: 17,
      deliveryDate: "Tomorrow",
    },
    {
      id: 8,
      name: "Birthday Room Balloon Decoration",
      image: "/placeholder.jpg", // Replace with actual image path
      rating: 4.9,
      reviewCount: 132,
      price: 1999,
      discountPercent: 25,
      deliveryDate: "Tomorrow",
    },
  ];

  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Party Decoration</span>
        </div>
      </div>

      {/* Theme Categories */}
      <section className="container mx-auto px-4 py-4 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {decorationThemes.map((theme) => {
            // Slugify theme name for URL
            const slug = theme.name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
            return (
              <Link key={theme.id} href={`/decorations/${slug}`} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 group-hover:ring-2 group-hover:ring-pink-400 transition">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    {/* Replace with actual image */}
                    <div className="text-xs text-gray-500">[Theme Image]</div>
                  </div>
                </div>
                <span className="text-sm text-center group-hover:text-pink-600 transition">{theme.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sort and Filter */}
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
              <span className="text-sm font-medium text-black ml-1">4.7</span>
            </div>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-500">77540 reviews</span>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 py-4 bg-white">
        <div className="flex flex-wrap gap-2">
          <Link href="/decorations/for-kids" className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            For Kids
          </Link>
          <Link href="/decorations/for-husband" className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            For Husband
          </Link>
          <Link href="/decorations/for-wife" className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            For Wife
          </Link>
          <Link href="/decorations/romantic" className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            Romantic Decoration
          </Link>
          <Link href="/decorations/stage" className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            Stage Decoration
          </Link>
        </div>
      </section>

      {/* Decoration Products */}
      <section className="container mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-black">Popular Decoration Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {decorationPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                <img src={pkg.image} alt={pkg.name} className="object-cover w-full h-full rounded-t-xl" />
                <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{pkg.discountPercent}% OFF</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-black mb-1 line-clamp-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-black">₹{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 flex-1">Earliest Delivery: {pkg.deliveryDate}</p>
                <button
                  className="w-full mt-auto border border-black bg-white text-black py-2 rounded-lg font-semibold hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F] transition-colors"
                  onClick={() => {
                    setQuickViewProduct({
                      name: pkg.name,
                      images: [pkg.image],
                      price: pkg.price,
                      oldPrice: undefined,
                      discount: pkg.discountPercent,
                      description: `Earliest Delivery: ${pkg.deliveryDate}`,
                      category: undefined,
                    });
                    setQuickViewOpen(true);
                  }}
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
        <QuickViewModal
          open={quickViewOpen}
          onClose={() => setQuickViewOpen(false)}
          product={quickViewProduct || { name: '', images: [''], price: 0 }}
        />
      </section>
    </MainLayout>
  );
}