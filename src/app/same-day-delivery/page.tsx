"use client";
import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';

// Combined mock data from all categories with a new deliveryTime property
const allProducts = [
  // Cakes
  { id: 'cake-1', name: 'Classic Chocolate Cake', image: '/images/stock/cake.jpg', price: 499, deliveryTime: 21, category: 'Cakes' },
  { id: 'cake-2', name: 'Red Velvet Cake', image: '/images/stock/cake.jpg', price: 549, deliveryTime: 45, category: 'Cakes' },
  { id: 'cake-3', name: 'Vanilla Buttercream Cake', image: '/images/stock/cake.jpg', price: 449, deliveryTime: 21, category: 'Cakes' },
  // Decorations
  { id: 'deco-1', name: 'Birthday Balloon Arch', image: '/images/stock/balloons.jpg', price: 1499, deliveryTime: 120, category: 'Decorations' },
  { id: 'deco-2', name: 'Simple Birthday Decoration', image: '/images/stock/balloons.jpg', price: 1599, deliveryTime: 21, category: 'Decorations' },
  // Gifts
  { id: 'gift-1', name: 'Personalized Mug', image: '/images/stock/mug.jpg', price: 499, deliveryTime: 21, category: 'Gifts' },
  { id: 'gift-2', name: 'Chocolate Hamper', image: '/images/stock/balloons.jpg', price: 899, deliveryTime: 21, category: 'Gifts' },
];

export default function SameDayDeliveryPage() {
  // Filter products for 21-minute delivery
  const fastDeliveryProducts = allProducts.filter(p => p.deliveryTime <= 21);

  return (
    <MainLayout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-center text-orange-600">21-Minute Delivery</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Need it now? Get these products delivered to your doorstep in 21 minutes!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {fastDeliveryProducts.map(product => (
              <Link key={product.id} href={`/${product.category.toLowerCase()}/${product.name.toLowerCase().replace(/ /g, "-")}`} className="block">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full group">
                  <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">{product.name}</h2>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-orange-700 font-bold text-lg">₹{product.price}</span>
                      <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded">
                        ⚡ 21 mins
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 