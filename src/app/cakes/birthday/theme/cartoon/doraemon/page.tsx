'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { BsArrowDownUp } from 'react-icons/bs';

const cakes = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Doraemon Gadget Cake #${i + 1}`,
    description: "A cake from the future with everyone's favorite robotic cat, Doraemon.",
    price: 1099 + i * 115,
    discountPrice: i % 2 === 0 ? 999 + i * 115 : null,
    rating: 4.9,
    reviews: 170 + i * 17,
    category: "Doraemon Cakes",
    delivery: "Tomorrow",
    image: `/images/stock/cake.jpg`
}));

const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }
    return stars;
};

function AddOnsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold">&times;</button>
        <h2 className="text-xl font-semibold mb-4">Add Ons</h2>
        {/* Tabs */}
        <div className="flex mb-4">
          <button className="flex-1 py-2 rounded-t-lg bg-gray-100 text-black font-semibold border-b-2 border-orange-400">Top Up Your Decor</button>
          <button className="flex-1 py-2 rounded-t-lg bg-gray-100 text-gray-500 font-semibold ml-2 border-b-2 border-transparent">Party Add Ons</button>
        </div>
        {/* Filter Pills */}
        <div className="flex gap-3 mb-4">
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Candles</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Birthday Gift</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Birthday Gift</button>
        </div>
        {/* Add On Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col items-center">
              <div className="flex w-full justify-between mb-2">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">★4.8</span>
                <button className="text-gray-400 hover:text-orange-500">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded mb-2 flex items-center justify-center"> <span className="text-gray-300">img</span> </div>
              <div className="text-xs font-semibold text-gray-800 text-center mb-1">Exclusive Choco ...</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-black">₹500</span>
                <span className="text-xs text-gray-400 line-through">₹1000</span>
                <span className="text-xs text-green-600 font-bold">50% OFF</span>
              </div>
              <button className="w-full mt-2 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition">ADD</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DoraemonCakesPage() {
  const [addOnsOpen, setAddOnsOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cakes" className="hover:text-brand-orange">Cakes</Link>
          <span className="mx-2">/</span>
          <Link href="/cakes/birthday/theme" className="hover:text-brand-orange">Theme Cakes</Link>
          <span className="mx-2">/</span>
          <Link href="/cakes/birthday/theme/cartoon" className="hover:text-brand-orange">Cartoon</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Doraemon</span>
        </div>
      </div>

      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Doraemon Theme Cakes</h1>
          <p className="text-gray-700 mb-4">1800 reviews</p>
          
          <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
                {/* No categories here as this is the final page */}
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 font-medium">
                <BsArrowDownUp /> <span>Sort</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 font-medium">
                <IoFilterSharp /> <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <div key={cake.id} className="block">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 bg-gray-100">
                    <img src={cake.image} alt={cake.name} className="w-full h-full object-cover"/>
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-50">
                      <FaHeart className="text-pink-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 truncate">{cake.name}</h3>
                    <div className="flex items-center mt-1">
                      {renderRating(cake.rating)}
                      <span className="text-xs text-gray-500 ml-2">({cake.reviews} reviews)</span>
                    </div>
                    <div className="mt-2">
                      {cake.discountPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-800">₹{cake.discountPrice}</span>
                          <span className="text-sm text-gray-500 line-through">₹{cake.price}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-gray-800">₹{cake.price}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Earliest delivery: <span className="font-medium text-gray-800">{cake.delivery}</span></p>
                    <button className="w-full mt-3 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition" onClick={() => setAddOnsOpen(true)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AddOnsModal open={addOnsOpen} onClose={() => setAddOnsOpen(false)} />
    </>
  );
} 