"use client";
import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

const shipments = [
  {
    id: 1,
    eta: "21:00 Minutes",
    total: 1350,
    items: [
      {
        name: "White rose cake White",
        weight: "1 KG",
        shape: "Round",
        price: 900,
        originalPrice: 1800,
        discount: "50% OFF",
        address: {
          name: "Kaushal",
          details: "123- Sanjiri Soc, Cheknew, Near Hospital Surat - 395006",
        },
        message: "Wish You a Happy Birthday!",
      },
      {
        name: "Second Item Example",
        weight: "500 GM",
        shape: "Square",
        price: 450,
        originalPrice: 500,
        discount: "10% OFF",
        address: {
          name: "Kaushal",
          details: "123- Sanjiri Soc, Cheknew, Near Hospital Surat - 395006",
        },
        message: "Wish You a Happy Birthday!",
      },
    ],
  },
  {
    id: 2,
    eta: "30:00 Minutes",
    total: 450,
    items: [
      {
        name: "Blueberry Cheesecake",
        weight: "1 KG",
        shape: "Round",
        price: 450,
        originalPrice: 500,
        discount: "10% OFF",
        address: {
          name: "Priya",
          details: "456, Sunshine Apartments, Near Mall, Mumbai - 400001",
        },
        message: "Enjoy your cake!",
      },
    ],
  },
];

const freeGift = {
  name: "Flowers Pot",
  price: 500,
  isFree: true,
};

const coupon = {
  code: "MAACHAO50",
  description: "Save 50% On This Payment",
};

export default function CartPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen pb-32">
        <div className="max-w-2xl mx-auto py-8">
          {/* Order Summaries */}
          {shipments.map((shipment, idx) => (
            <div key={shipment.id} className="mb-6">
              <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-t-lg border-b border-gray-200">
                <div className="font-bold text-lg">
                  Order Summary{shipments.length > 1 ? ` (Shipment ${idx + 1})` : ""}
                </div>
                <div className="font-bold text-black text-base">
                  Total : ₹ {shipment.total} ({shipment.items.length} item{shipment.items.length > 1 ? "s" : ""})
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200">
                <span className="text-xs font-semibold bg-yellow-400 text-black rounded px-3 py-1">
                  Item {idx + 1}
                </span>
                <span className="text-xs font-semibold bg-yellow-400 text-black rounded px-3 py-1">
                  Deliver in {shipment.eta}
                </span>
              </div>
              <div className="bg-white border border-yellow-300 rounded-b-lg p-4">
                {shipment.items.map((item, i) => (
                  <div key={i} className="flex gap-4 mb-4 last:mb-0">
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                      <span className="text-xs">Img</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-base text-black truncate">{item.name}</div>
                        <button className="text-gray-400 hover:text-red-500 text-lg">×</button>
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{item.weight} - Shape: {item.shape}</div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg text-black">₹ {item.price}</span>
                        <span className="text-sm text-gray-400 line-through">₹ {item.originalPrice}</span>
                        <span className="text-xs font-semibold text-green-600">{item.discount}</span>
                      </div>
                      <div className="bg-gray-50 rounded p-2 text-xs text-gray-700 mb-1 flex items-center gap-2">
                        <span className="font-bold">Address:</span> {item.address.name} <span className="text-gray-400">|</span> {item.address.details}
                        <button className="ml-auto text-blue-500 hover:underline text-xs">Change</button>
                      </div>
                      <div className="bg-gray-50 rounded p-2 text-xs text-gray-700 mb-1 flex items-center gap-2">
                        <span className="font-bold">Message on Cake:</span> {item.message}
                        <button className="ml-auto text-blue-500 hover:underline text-xs">Change</button>
                      </div>
                      <div className="flex gap-4 mt-1">
                        <button className="text-blue-500 hover:underline text-xs">Add add-ons</button>
                        <button className="text-blue-500 hover:underline text-xs">Add Delivery Instruction</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Free Gift Progress */}
          <div className="bg-white rounded-lg border mb-6 p-4">
            <div className="font-semibold mb-2">You're Just a Step Away to claim Free Gift</div>
            <div className="w-full h-2 bg-gray-200 rounded mb-3">
              <div className="h-2 bg-green-500 rounded" style={{ width: "80%" }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400">+</div>
              <div className="flex-1">
                <div className="font-semibold text-black">{freeGift.name}</div>
                <div className="text-xs text-green-600 font-bold">FREE <span className="text-gray-400 font-normal line-through ml-1">₹ {freeGift.price}</span></div>
              </div>
              <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-500 transition">Add</button>
            </div>
          </div>

          {/* Coupons Section */}
          <div className="bg-white rounded-lg border mb-6 p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Coupons</div>
              <button className="text-yellow-500 text-sm font-semibold hover:underline">View All Coupons &gt;</button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-red-100 text-red-500 px-3 py-1 rounded font-bold text-xs">{coupon.code}</div>
              <span className="text-xs text-gray-500">{coupon.description}</span>
              <button className="ml-2 text-gray-400 hover:text-red-500">×</button>
            </div>
            <div className="flex gap-2">
              <input className="border rounded px-2 py-1 text-sm flex-1" placeholder="Coupon code" />
              <button className="bg-yellow-400 text-black font-bold px-4 py-1 rounded hover:bg-yellow-500 transition text-sm">Apply</button>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-white rounded-lg border mb-6 p-4 text-sm">
            <div className="flex justify-between mb-1">
              <span>Total cart value :</span>
              <span>₹ 495</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Delivery charge :</span>
              <span>₹ 40</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Coupon code :</span>
              <span>₹ 20</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Support Machchao :</span>
              <span>₹ 10</span>
            </div>
            <div className="border-t border-gray-200 my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ 1350 <span className="text-gray-400 font-normal line-through text-base ml-1">₹ 2300</span></span>
            </div>
          </div>
        </div>

        {/* Sticky Pay Now Bar (contained) */}
        <div className="max-w-2xl mx-auto sticky bottom-0 z-30">
          <div className="bg-white border-t border-yellow-300 shadow-lg flex items-center justify-between px-4 py-4">
            <div className="font-bold text-2xl text-black">
              ₹ 1350 <span className="text-gray-400 font-normal line-through text-lg ml-1">₹ 2300</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full shadow transition flex items-center gap-2">
              Pay Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9l-5 5-5-5" /></svg>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 