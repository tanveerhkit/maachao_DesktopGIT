"use client";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import React, { useState } from "react";
import QuickViewModal from "@/components/common/QuickViewModal";

const gamingProducts = [
  {
    id: 1,
    name: "PlayStation 5 Console",
    type: "Video Games",
    image: "/placeholder-ps5.jpg",
    accessories: ["2 Controllers", "FIFA 23"],
    rentalDuration: "1-3 Days",
    price: 3999,
    description: "Experience next-gen gaming with the PS5. Includes two controllers and the latest FIFA."
  },
  {
    id: 2,
    name: "Giant Jenga Set",
    type: "Outdoor Games",
    image: "/placeholder-jenga.jpg",
    dimensions: "Starts at 2.5 ft",
    rentalDuration: "1 Day",
    price: 1499,
    description: "The classic block-stacking game, supersized for outdoor fun at parties and events."
  },
  {
    id: 3,
    name: "Professional Poker Set",
    type: "Tabletop Classics",
    image: "/placeholder-poker.jpg",
    includes: ["500 Chips", "2 Decks", "Dealer Button"],
    rentalDuration: "1-2 Days",
    price: 1999,
    description: "Host a high-stakes poker night with this professional-grade set."
  },
  {
    id: 4,
    name: "Nintendo Switch Console",
    type: "Video Games",
    image: "/placeholder-switch.jpg",
    accessories: ["2 Joy-Cons", "Mario Kart 8"],
    rentalDuration: "1-3 Days",
    price: 2999,
    description: "The ultimate party console. Perfect for multiplayer fun with games like Mario Kart."
  },
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

export default function RentGamesPage() {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  return (
    <MainLayout>
      {/* Featured Collections Grid */}
      <section className="bg-white pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[480px]">
            <Link href="/rent-games/video-games" className="col-span-2 row-span-1 md:col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-videogames.jpg" alt="Video Games" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-2xl md:text-3xl font-bold drop-shadow">Video Games</span>
              </div>
            </Link>
            <Link href="/rent-games/party-games" className="col-span-2 row-span-1 md:col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-partygames.jpg" alt="Party Games" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-xl md:text-2xl font-bold drop-shadow">Party Games</span>
              </div>
            </Link>
            <Link href="/rent-games/outdoor-games" className="col-span-1 row-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-outdoorgames.jpg" alt="Outdoor Games" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-lg md:text-xl font-bold drop-shadow">Outdoor Games</span>
              </div>
            </Link>
            <Link href="/rent-games/tabletop-classics" className="col-span-1 row-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-tabletop.jpg" alt="Tabletop Classics" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-lg md:text-xl font-bold drop-shadow">Tabletop Classics</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters and Product Grid */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Rent Games for Your Event</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Level up your party with our selection of video games, board games, and outdoor activities. Fun for all ages, delivered to your door.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {gamingProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">{product.type}</span>
                  <h2 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <ul className="text-xs text-gray-500 mb-3 space-y-1">
                    {product.accessories && <li><strong>Includes:</strong> {product.accessories.join(", ")}</li>}
                    {product.dimensions && <li><strong>Size:</strong> {product.dimensions}</li>}
                    {product.includes && <li><strong>Includes:</strong> {product.includes.join(", ")}</li>}
                    <li><strong>Rental Duration:</strong> {product.rentalDuration}</li>
                  </ul>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-blue-700 font-bold text-lg">₹{product.price}</span>
                    <button
                      className="w-full border border-black bg-white text-black py-2 rounded-lg font-semibold hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F] transition-colors"
                      onClick={() => {
                        setQuickViewProduct({
                          name: product.name,
                          images: [product.image],
                          price: product.price,
                          oldPrice: undefined,
                          discount: undefined,
                          description: product.description,
                          category: product.type,
                        });
                        setQuickViewOpen(true);
                      }}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/rent-games/all" className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition">
                View All
            </Link>
          </div>
        </div>
      </section>
      <QuickViewModal
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        product={quickViewProduct || { name: '', images: [''], price: 0 }}
      />
    </MainLayout>
  );
} 