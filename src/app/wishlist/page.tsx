"use client";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";

const wishlistItems = [
  {
    name: "Chocolate Truffle Cake",
    details: "1 KG - Round",
    price: 800,
    originalPrice: 1000,
    discount: "20% OFF",
    image: "/placeholder.jpg",
  },
  {
    name: "Red Velvet Cake",
    details: "500 GM - Heart",
    price: 600,
    originalPrice: 750,
    discount: "15% OFF",
    image: "/placeholder.jpg",
  },
  {
    name: "Designer Cupcakes",
    details: "Box of 6",
    price: 350,
    originalPrice: 400,
    discount: "12% OFF",
    image: "/placeholder.jpg",
  },
];

export default function WishlistPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen pb-16">
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">My Wishlist</h1>
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              Your wishlist is empty.
            </div>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg border shadow-sm flex gap-4 p-4 items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg text-black truncate">{item.name}</div>
                    <div className="text-xs text-gray-500 mb-1 truncate">{item.details}</div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-lg text-black">₹ {item.price}</span>
                      <span className="text-sm text-gray-400 line-through">₹ {item.originalPrice}</span>
                      <span className="text-xs font-semibold text-green-600">{item.discount}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded transition text-sm">Move to Cart</button>
                    <button className="bg-gray-100 hover:bg-red-100 text-red-500 font-bold px-4 py-2 rounded transition text-sm">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
} 