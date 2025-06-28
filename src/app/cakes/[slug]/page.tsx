"use client";
import React, { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { IoMdEgg } from "react-icons/io";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

interface Cake {
  name: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
  offer: string;
  delivery: string;
  features: { icon: JSX.Element; label: string }[];
  package: string[];
  images: string[];
  similar: any[];
  alsoLike: any[];
}

const cakes: Cake[] = [
  {
    name: "Delightful Rums & Raisins Dry Cake Half kg",
    slug: "delightful-rums-raisins-dry-cake-half-kg",
    price: 599,
    oldPrice: 699,
    discount: 14,
    rating: 4.9,
    reviews: 7,
    description: "Tasty cake and delivery on time. I prefer versh than flip. thank you",
    offer: "14% Off",
    delivery: "Tomorrow",
    features: [
      { icon: <FaCheckCircle className="text-pink-500" />, label: "100% Purchase Protection" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Serving Excellence" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Timely Delivery" },
    ],
    package: ["Product Description", "Cake Instructions", "Delivery Information"],
    images: [
      "/images/cakes/rums-raisins-1.jpg",
      "/images/cakes/rums-raisins-2.jpg",
      "/images/cakes/rums-raisins-3.jpg",
      "/images/cakes/rums-raisins-4.jpg",
    ],
    similar: [],
    alsoLike: [],
  },
  {
    name: "Classic Chocolate Cake",
    slug: "classic-chocolate-cake",
    price: 4999,
    oldPrice: 5999,
    discount: 17,
    rating: 4.9,
    reviews: 278,
    description: "Rich chocolate cake with chocolate ganache.",
    offer: "Offers and Coupons",
    delivery: "Tomorrow",
    features: [
      { icon: <FaCheckCircle className="text-pink-500" />, label: "100% Secure Payments" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Same Day Delivery" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "1M+ Satisfied Customers" },
    ],
    package: ["Weight- 1 Kg", "Flavor- Chocolate", "Toppings- Chocolate Chips", "Shape- Round"],
    images: [
      "/images/cakes/chocolate-cake.jpg",
      "/images/cakes/chocolate-cake-2.jpg",
      "/images/cakes/chocolate-cake-3.jpg",
      "/images/cakes/chocolate-cake-4.jpg",
    ],
    similar: [],
    alsoLike: [],
  },
  {
    name: "Vanilla Buttercream Cake",
    slug: "vanilla-buttercream-cake",
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 235,
    description: "Classic vanilla cake with buttercream frosting.",
    offer: "Offers and Coupons",
    delivery: "Tomorrow",
    features: [
      { icon: <FaCheckCircle className="text-pink-500" />, label: "100% Secure Payments" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Same Day Delivery" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "1M+ Satisfied Customers" },
    ],
    package: ["Weight- 1 Kg", "Flavor- Vanilla", "Toppings- Buttercream", "Shape- Round"],
    images: [
      "/images/cakes/vanilla-cake.jpg",
      "/images/cakes/vanilla-cake-2.jpg",
      "/images/cakes/vanilla-cake-3.jpg",
      "/images/cakes/vanilla-cake-4.jpg",
    ],
    similar: [],
    alsoLike: [],
  },
  // ...add all other cakes from the cakes list page, with a slug field...
];

function renderRating(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i === fullStars && hasHalfStar) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
}

export default function CakeDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const cake: Cake | undefined = cakes.find(
    (c) => c.slug === (typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "")
  );
  if (!cake) return notFound();

  const [selectedWeight, setSelectedWeight] = useState("500 gm");
  const weights = ["500 gm", "1 kg", "1.5 kg", "2 kg", "3 kg", "4 kg"];
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Product Description", content: "Moist, flavorful cake with rums & raisins. Perfect for celebrations." },
    { title: "Cake Instructions", content: "Keep refrigerated. Consume within 24 hours for best taste." },
    { title: "Delivery Information", content: "Standard delivery within 4-6 hours in metro cities. Express delivery available at additional cost." },
  ];
  const reviews = [
    { name: "Vikash", date: "July 15, 2023", text: "Cake taste was amazing! I am using visa last five years. It was a great experience with versy, thank you verv!", rating: 5 },
    { name: "Raj****ajan", date: "June 24, 2023", text: "Super look", rating: 5 },
    { name: "Sumita", date: "April 7, 2023", text: "Tasty cake and delivery on time. I prefer versh than flip. thank you", rating: 5 },
  ];

  return (
    <MainLayout>
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-pink-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/cakes" className="hover:text-pink-600">Cakes</Link>
            <span className="mx-2">/</span>
            <span className="text-pink-600 font-medium">{cake.name}</span>
          </div>
        </div>

        {/* Main Section */}
        <section className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 order-2 lg:order-1 justify-center lg:justify-start">
              {cake.images.map((img, idx) => (
                <div key={idx} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={img} alt="Cake thumbnail" width={64} height={64} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            {/* Main Image and Book Now + Feature Badges */}
            <div className="flex-1 order-1 lg:order-2 relative flex flex-col items-center">
              <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src={cake.images[0]} alt={cake.name} width={400} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="text-xs text-gray-500 mt-2 mb-4">NOTE: Design and icing of cake may vary from the image shown since each chef has his/her own way of baking and designing a cake.</div>
              {/* Feature Badges */}
              <div className="flex gap-4 mt-4 w-full">
                <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-3 flex-1">
                  <span className="text-pink-600 text-2xl mb-1">{cake.features[0].icon}</span>
                  <span className="font-medium text-sm">100% Purchase Protection</span>
                  <span className="text-xs text-gray-500">Assured Quality<br />Secure Payments</span>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-3 flex-1">
                  <span className="text-pink-600 text-2xl mb-1">{cake.features[1].icon}</span>
                  <span className="font-medium text-sm">Serving Excellence</span>
                  <span className="text-xs text-gray-500">2M Happy Customers<br />+ 100% Satisfaction!</span>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-3 flex-1">
                  <span className="text-pink-600 text-2xl mb-1">{cake.features[2].icon}</span>
                  <span className="font-medium text-sm">Timely Delivery</span>
                  <span className="text-xs text-gray-500">Different Time Slots Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{cake.name}</h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-800">₹{cake.price}</span>
              {cake.oldPrice && <span className="text-gray-500 line-through text-lg">₹{cake.oldPrice}</span>}
              {cake.discount > 0 && <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">{cake.discount}% Off</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center">{renderRating(cake.rating)}</span>
              <span className="text-green-700 font-semibold">{cake.rating}</span>
              <span className="text-gray-500">{cake.reviews} Reviews</span>
            </div>

            {/* Weight Selection */}
            <div>
              <div className="font-semibold mb-2">Weight</div>
              <div className="flex gap-2">
                {weights.map((w) => (
                  <button
                    key={w}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${selectedWeight === w ? "bg-pink-600 text-white border-pink-600" : "bg-white text-gray-700 border-gray-300 hover:bg-pink-50"}`}
                    onClick={() => setSelectedWeight(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Location & Date/Time */}
            <div className="space-y-2">
              <div>
                <div className="font-semibold text-sm mb-1">Gift Receiver's Location</div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="bg-gray-100 px-2 py-1 rounded">IND</span>
                  <span>110302, Delhi, New Delhi</span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">Select Delivery Date & Time Slot</div>
                <button className="w-full border border-gray-300 rounded px-3 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-between">
                  <span>Select Delivery Date & Time Slot</span>
                  <span>&gt;</span>
                </button>
              </div>
              <div>
                <button className="w-full border border-gray-300 rounded px-3 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-between">
                  <span>Want Delivery on Same Day?</span>
                  <span className="text-pink-600 font-medium">View Available Gifts</span>
                </button>
              </div>
            </div>

            {/* Add Messages */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
                <span className="mb-2">📩</span>
                <span className="font-medium">Message On Cake</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
                <span className="mb-2">💌</span>
                <span className="font-medium">Add Message Card</span>
              </div>
            </div>

            {/* Add Photo on Cake */}
            <div className="border border-gray-300 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span>📤</span>
                <span className="font-medium">Select Photo To Add on Cake</span>
                <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 text-lg font-bold cursor-pointer">+</span>
              </div>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">📷<br />Cake</div>
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">💐<br />Flowers</div>
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">🎁<br />Gift</div>
              </div>
            </div>

            {/* Upsell Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between mt-2">
              <span>Buy These 3 Items At Just ₹2500</span>
              <button className="bg-pink-600 text-white px-4 py-2 rounded font-semibold">Add All</button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 px-6 py-3 bg-white border border-gray-400 text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-colors">Add To Cart</button>
              <button className="flex-1 px-6 py-3 bg-white border border-orange-400 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors">Customize ✏️</button>
              <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors">Order Now</button>
            </div>
          </div>
        </section>

        {/* Tabs/Accordion & Reviews */}
        <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tabs/Accordion */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
            <div className="flex gap-6 border-b border-gray-200 mb-4">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.title}
                  className={`pb-2 font-semibold text-base border-b-2 transition-colors ${activeTab === idx ? "border-pink-600 text-pink-600" : "border-transparent text-gray-500"}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="text-gray-700 text-base min-h-[60px]">{tabs[activeTab].content}</div>
          </div>
          {/* Product Reviews */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-800">4.8</span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {renderRating(4.8)}
                  <span className="text-gray-600 text-sm">27 reviews</span>
                </div>
                <div className="flex gap-1 items-center text-xs text-gray-500">
                  <span>5 ★</span><div className="w-24 h-2 bg-gray-200 rounded"><div className="h-2 bg-yellow-400 rounded" style={{ width: '70%' }} /></div>
                  <span>4 ★</span><div className="w-16 h-2 bg-gray-200 rounded"><div className="h-2 bg-yellow-400 rounded" style={{ width: '20%' }} /></div>
                  <span>3 ★</span><div className="w-8 h-2 bg-gray-200 rounded"><div className="h-2 bg-yellow-400 rounded" style={{ width: '5%' }} /></div>
                  <span>2 ★</span><div className="w-4 h-2 bg-gray-200 rounded"><div className="h-2 bg-yellow-400 rounded" style={{ width: '3%' }} /></div>
                  <span>1 ★</span><div className="w-2 h-2 bg-gray-200 rounded"><div className="h-2 bg-yellow-400 rounded" style={{ width: '2%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Reviews */}
        <section className="container mx-auto px-4 pb-10">
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2">
                  {renderRating(review.rating)}
                  <span className="font-semibold text-gray-800">{review.name}</span>
                  <span className="text-xs text-gray-500">Reviewed on {review.date}</span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-semibold">Verified</span>
                </div>
                <div className="text-gray-700 text-base">{review.text}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
} 