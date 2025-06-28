'use client';

import React from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { BsArrowDownUp } from 'react-icons/bs';

const cakes = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Anniversary Photo Cake #${i + 1}`,
    description: "Commemorate your special day with a beautiful photo cake.",
    price: 1499 + i * 170,
    discountPrice: i % 4 === 0 ? 1399 + i * 170 : null,
    rating: 4.9,
    reviews: 220 + i * 22,
    category: "Anniversary Photo Cakes",
    delivery: "Today",
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

export default function AnniversaryPhotoCakesPage() {
  return (
    <>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cakes" className="hover:text-brand-orange">Cakes</Link>
          <span className="mx-2">/</span>
          <Link href="/cakes/birthday/photo" className="hover:text-brand-orange">Photo Cakes</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Anniversary</span>
        </div>
      </div>

      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Anniversary Photo Cakes</h1>
          <p className="text-gray-700 mb-4">2300 reviews</p>
          
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
              <Link key={cake.id} href={`/cakes/${cake.id}`} className="block">
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 