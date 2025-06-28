import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export default function HireMUA() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative w-full h-[320px] flex flex-col justify-center items-center bg-cover bg-center" style={{backgroundImage: 'url("/placeholder-mua-hero.jpg")'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full flex flex-col items-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow">Find & Book Makeup Artists Near Your Location...</h1>
          <div className="flex flex-col md:flex-row gap-3 w-full max-w-2xl justify-center">
            <select className="flex-1 px-4 py-2 rounded border border-gray-300 text-gray-700 text-base">
              <option>Select Vendor type</option>
              <option>Makeup Artist</option>
              <option>Mehndi Artist</option>
              <option>Hair Stylist</option>
              <option>Photographer</option>
            </select>
            <select className="flex-1 px-4 py-2 rounded border border-gray-300 text-gray-700 text-base">
              <option>Select City</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
            <button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded transition hover:bg-pink-700">Get Started</button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-pink-700">Here is what we've got for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Makeup Artists', href: '/hire-mua/makeup-artists' },
            { label: 'Mehndi Artists', href: '/hire-mua/mehndi-artists' },
            { label: 'Hair Stylists', href: '/hire-mua/hair-stylists' },
            { label: 'Photographers', href: '/hire-mua/photographers' },
          ].map((cat) => (
            <Link href={cat.href} key={cat.label} className="block rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-500 rounded-xl h-44 flex flex-col p-4 text-white">
                <span className="text-lg font-bold">200+</span>
                <span className="font-medium text-base mb-2">{cat.label}</span>
                <span className="text-sm underline mt-auto">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newly Listed Makeup Artists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-700 mb-2">Featured Makeup Looks</h2>
          <p className="text-center text-gray-600 mb-8">Explore Our Latest Makeup Styles and Trends</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { style: 'Bridal Glam', description: 'Elegant and timeless bridal makeup with a modern twist', img: '/placeholder-mua5.jpg' },
              { style: 'Natural Beauty', description: 'Fresh-faced makeup for a natural, radiant look', img: '/placeholder-mua6.jpg' },
              { style: 'Party Glam', description: 'Bold and dramatic makeup perfect for special occasions', img: '/placeholder-mua7.jpg' },
              { style: 'Editorial', description: 'High-fashion makeup looks inspired by runway trends', img: '/placeholder-mua8.jpg' },
            ].map((look, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-orange-100 flex flex-col overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={look.img} alt={look.style} className="object-cover w-full h-full" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-xs font-bold">New</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">{look.style}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{look.description}</p>
                  <button className="mt-auto w-full border-2 border-orange-600 text-orange-700 font-semibold py-2 rounded transition hover:bg-orange-50">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-4">
          <button className="bg-orange-700 text-white font-semibold px-6 py-2 rounded mb-4">View All</button>
          <h2 className="text-2xl font-bold text-center mb-2 text-orange-900">Makeup Portfolio</h2>
          <p className="text-center text-gray-600 mb-6 max-w-xl">Browse through a selection of my recent work showcasing various makeup styles and techniques</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-orange-200 rounded-lg flex items-center justify-center text-4xl text-orange-400">
                {/* Placeholder face icon */}
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <rect width="64" height="64" rx="8" fill="#FFE5B2" />
                  <circle cx="32" cy="32" r="16" fill="#FFA600" />
                  <circle cx="24" cy="28" r="2.5" fill="#fff" />
                  <circle cx="40" cy="28" r="2.5" fill="#fff" />
                  <path d="M24 40c2.5 2 7.5 2 10 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="border border-orange-400 text-orange-700 px-6 py-2 rounded-md font-medium hover:bg-orange-100 transition">View Full Gallery</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 