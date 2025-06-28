"use client";
import MainLayout from "@/components/layout/MainLayout";
import React, { useState } from "react";
import Link from "next/link";
import QuickViewModal from "@/components/common/QuickViewModal";

const clothingProducts = [
  {
    id: 1,
    name: "Classic Black Tuxedo",
    type: "Men's Wear",
    image: "/placeholder-tuxedo.jpg",
    sizes: ["S", "M", "L", "XL"],
    fabric: "Premium Wool Blend",
    fit: "Slim Fit",
    rentalDuration: "3 Days",
    price: 2499,
    description: "A timeless black tuxedo, perfect for formal events. Includes jacket, trousers, and bow tie."
  },
  {
    id: 2,
    name: "Red Bridal Lehenga",
    type: "Women's Wear",
    image: "/placeholder-lehenga.jpg",
    sizes: ["XS", "S", "M", "L"],
    fabric: "Silk with Zari Embroidery",
    fit: "Regular Fit",
    rentalDuration: "5 Days",
    price: 4999,
    description: "Stunning red bridal lehenga with intricate embroidery. Includes blouse and dupatta."
  },
  {
    id: 3,
    name: "Pastel Blue Gown",
    type: "Women's Wear",
    image: "/placeholder-gown.jpg",
    sizes: ["S", "M", "L"],
    fabric: "Georgette",
    fit: "A-Line",
    rentalDuration: "3 Days",
    price: 2999,
    description: "Elegant pastel blue evening gown with flowy silhouette. Ideal for parties and receptions."
  },
  {
    id: 4,
    name: "Nehru Jacket Set",
    type: "Men's Wear",
    image: "/placeholder-nehru.jpg",
    sizes: ["M", "L", "XL"],
    fabric: "Cotton Silk",
    fit: "Tailored Fit",
    rentalDuration: "2 Days",
    price: 1799,
    description: "Classic Nehru jacket with kurta and churidar. Perfect for festive occasions."
  },
  // Add more products as needed
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

export default function RentClothingPage() {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  return (
    <MainLayout>
      {/* Featured Collections Grid */}
      <section className="bg-white pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[480px]">
            {/* Left column: Cocktail Collection (2x1) */}
            <Link href="/rent-clothing/cocktail-collection" className="row-span-1 col-span-2 relative group overflow-hidden border border-black">
              <img src="/placeholder-cocktail.jpg" alt="The Cocktail Collection" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-2xl md:text-3xl font-bold drop-shadow">The Cocktail Collection</span>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm font-semibold tracking-widest rotate-90 opacity-80">FASHION ON THE ROCKS</div>
            </Link>
            {/* Top Rated */}
            <Link href="/rent-clothing/top-rated" className="row-span-1 col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-toprated.jpg" alt="Top Rated" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-xl md:text-2xl font-bold drop-shadow">Top Rated</span>
              </div>
            </Link>
            {/* Stylease Exclusive */}
            <Link href="/rent-clothing/stylease-exclusive" className="row-span-1 col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-stylease.jpg" alt="Stylease Exclusive" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-lg md:text-xl font-bold drop-shadow">Stylease Exclusive</span>
              </div>
            </Link>
            {/* The Party Edit */}
            <Link href="/rent-clothing/party-edit" className="row-span-1 col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-partyedit.jpg" alt="The Party Edit" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-lg md:text-xl font-bold drop-shadow">The Party Edit</span>
              </div>
            </Link>
            {/* Sunset to Sunrise */}
            <Link href="/rent-clothing/sunset-to-sunrise" className="row-span-1 col-span-1 relative group overflow-hidden border border-black">
              <img src="/placeholder-sunset.jpg" alt="Sunset to Sunrise" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xs font-semibold tracking-widest rotate-90 opacity-80">SUNSET TO SUNRISE</div>
            </Link>
          </div>
        </div>
      </section>
      {/* End Featured Collections Grid */}

      {/* Filters and Product Grid */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Rent Premium Clothing</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Discover our curated collection of designer wear for every occasion. Choose your garment, select your size, and enjoy a hassle-free rental experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/rent-clothing/womens-wear" className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
              Womens Wear
            </Link>
            <Link href="/rent-clothing/mens-wear" className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
              Mens Wear
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clothingProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-orange-600 font-semibold mb-1">{product.type}</span>
                  <h2 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <ul className="text-xs text-gray-500 mb-3 space-y-1">
                    <li><strong>Sizes:</strong> {product.sizes.join(", ")}</li>
                    <li><strong>Fabric:</strong> {product.fabric}</li>
                    <li><strong>Fit:</strong> {product.fit}</li>
                    <li><strong>Rental Duration:</strong> {product.rentalDuration}</li>
                  </ul>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-orange-700 font-bold text-lg">₹{product.price}</span>
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
          <QuickViewModal
            open={quickViewOpen}
            onClose={() => setQuickViewOpen(false)}
            product={quickViewProduct || { name: '', images: [''], price: 0 }}
          />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/rent-clothing/all" className="bg-orange-700 text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-orange-800 transition">
            View All
          </Link>
        </div>
      </section>
    </MainLayout>
  );
} 