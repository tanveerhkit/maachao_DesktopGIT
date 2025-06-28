"use client";
import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { FaHeart } from "react-icons/fa";

const womensWearProducts = [
  {
    id: 1,
    name: "Red Bridal Lehenga",
    description: "Stunning red bridal lehenga with intricate embroidery.",
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 54,
    image: "/placeholder-lehenga.jpg",
    delivery: "Tomorrow",
  },
  {
    id: 2,
    name: "Pastel Blue Gown",
    description: "Elegant pastel blue evening gown with flowy silhouette.",
    price: 2999,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 37,
    image: "/placeholder-gown.jpg",
    delivery: "Tomorrow",
  },
  {
    id: 3,
    name: "Designer Saree",
    description: "Designer saree with sequin work, perfect for parties.",
    price: 2599,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 29,
    image: "/placeholder-saree.jpg",
    delivery: "Tomorrow",
  },
];

function renderRating(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<span key={i} className="text-yellow-400">★</span>);
    else if (i === fullStars && hasHalfStar) stars.push(<span key={i} className="text-yellow-400">☆</span>);
    else stars.push(<span key={i} className="text-gray-300">★</span>);
  }
  return stars;
}

export default function WomensWearPage() {
  return (
    <MainLayout>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Women's Wear for Rent</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {womensWearProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative h-64 bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-50">
                    <FaHeart className="text-pink-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">{renderRating(product.rating)}</div>
                    <span className="text-sm text-gray-700 ml-1">{product.rating} ({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-lg text-gray-800">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded">
                      {product.delivery}
                    </span>
                    <button className="text-orange-600 hover:text-orange-700 p-2 rounded-full hover:bg-orange-50">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 