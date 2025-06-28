"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import QuickViewModal from "@/components/common/QuickViewModal";
import { useState } from "react";
import AddOnsModal from '@/components/common/AddOnsModal';

const giftCategories = [
  { id: 1, name: "Cakes", icon: "/icons/cake.png" },
  { id: 2, name: "Flowers", icon: "/icons/flowers.png" },
  { id: 3, name: "Personalised", icon: "/icons/personalised.png" },
  { id: 4, name: "Plants", icon: "/icons/plants.png" },
  { id: 5, name: "Hampers", icon: "/icons/hampers.png" },
  { id: 6, name: "Premium Gifts", icon: "/icons/premium.png" },
  { id: 7, name: "Mugs", icon: "/icons/mugs.png" },
  { id: 8, name: "Under 1000", icon: "/icons/under1000.png" },
];

const gifts = [
  {
    id: 1,
    name: "Fathers Day Blooming Vase Gift",
    image: "/placeholder.jpg",
    price: "₹999",
    oldPrice: "₹1099",
    discount: "9% OFF",
    description: "Earliest Delivery: Today",
  },
  {
    id: 2,
    name: "Choco Cream Cake for Fathers Day",
    image: "/placeholder.jpg",
    price: "₹625",
    oldPrice: "₹675",
    discount: "7% OFF",
    description: "Earliest Delivery: Today",
  },
  {
    id: 3,
    name: "Dads Day Delight Photo Gift Box",
    image: "/placeholder.jpg",
    price: "₹1899",
    oldPrice: "₹2349",
    discount: "19% OFF",
    description: "Earliest Delivery: Today",
  },
  {
    id: 4,
    name: "Green Gift in Cute Resin Pot for Dad",
    image: "/placeholder.jpg",
    price: "₹899",
    oldPrice: "₹949",
    discount: "5% OFF",
    description: "Earliest Delivery: Today",
  },
  // ...add more gifts as needed
];

interface QuickViewProduct {
  name: string;
  images: string[];
  price: number;
  oldPrice?: number | null;
  discount?: number;
  description?: string;
  category?: string;
}

export default function GiftsPage() {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);
  const [addOnsOpen, setAddOnsOpen] = useState(false);

  return (
    <MainLayout>
      {/* Category Banner */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide pb-2">
            {giftCategories.map((cat) => {
              const slug = cat.name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
              return (
                <Link key={cat.id} href={`/gifts/${slug}`} className="flex flex-col items-center min-w-[100px] group cursor-pointer">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:ring-2 group-hover:ring-pink-400 transition">
                    <img src={cat.icon} alt={cat.name} className="w-12 h-12 object-contain" />
                  </div>
                  <span className="text-sm font-medium text-black text-center whitespace-nowrap group-hover:text-pink-600 transition">{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-brand-yellow py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Father's Day Flowers to gift him a blooming smile</h2>
            <p className="text-black mb-4">Send love and gratitude with our special Father's Day flower collection.</p>
            <Link href="#" className="inline-block px-6 py-2 bg-brand-orange text-white rounded-full font-semibold hover:bg-orange-700 transition">Explore</Link>
          </div>
          <div className="flex-1 flex justify-center">
            {/* Replace with actual image */}
            <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center shadow">
              <span className="text-gray-400">[Flower Image]</span>
            </div>
          </div>
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
            <span className="text-sm mr-2">Filter:</span>
            <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
              <option>All</option>
              <option>Cakes</option>
              <option>Flowers</option>
              <option>Personalised</option>
              <option>Plants</option>
              <option>Hampers</option>
              <option>Premium Gifts</option>
              <option>Mugs</option>
              <option>Under 1000</option>
            </select>
          </div>
        </div>
      </section>

      {/* Gift Grid */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-black">Popular Gifts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gifts.map((gift) => (
              <div key={gift.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  <img src={gift.image} alt={gift.name} className="object-cover w-full h-full rounded-t-xl" />
                  <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{gift.discount}</span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-black mb-1 line-clamp-2">{gift.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-black">{gift.price}</span>
                    <span className="text-gray-400 line-through text-sm">{gift.oldPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 flex-1">{gift.description}</p>
                  <button
                    className="w-full mt-auto border border-black bg-white text-black py-2 rounded-lg font-semibold hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F] transition-colors"
                    onClick={() => {
                      setQuickViewProduct({
                        name: gift.name,
                        images: [gift.image],
                        price: Number(gift.price.replace(/[^0-9]/g, "")),
                        oldPrice: gift.oldPrice ? Number(gift.oldPrice.replace(/[^0-9]/g, "")) : null,
                        discount: gift.discount ? Number(gift.discount.replace(/[^0-9]/g, "")) : 0,
                        description: gift.description,
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
        </div>
      </section>
      <AddOnsModal open={addOnsOpen} onClose={() => setAddOnsOpen(false)} />
    </MainLayout>
  );
}