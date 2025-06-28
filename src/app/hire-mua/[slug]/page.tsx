"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaRegStar, FaStarHalfAlt, FaCheckCircle, FaUserTie } from "react-icons/fa";
import { notFound, useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

interface MUAService {
  name: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
  offer: string;
  experience: string;
  delivery: string;
  features: { icon: React.ReactNode; label: string }[];
  packages: string[];
  images: string[];
  similar: any[];
  alsoLike: any[];
  customizationOptions: string[];
}

const muaServices: MUAService[] = [
  {
    name: "Bridal Makeup Artist",
    slug: "bridal-makeup-artist",
    price: 7999,
    oldPrice: 9999,
    discount: 20,
    rating: 4.9,
    reviews: 120,
    description: "Professional bridal makeup for your special day. Includes HD makeup, hair styling, and draping.",
    offer: "20% Off",
    experience: "8+ years",
    delivery: "On your event date",
    features: [
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Certified Artist" },
      { icon: <FaUserTie className="text-pink-500" />, label: "8+ Years Experience" },
      { icon: <FaCheckCircle className="text-pink-500" />, label: "Premium Products" },
    ],
    packages: ["Bridal HD Makeup", "Hair Styling", "Draping", "Trial Session"],
    images: [
      "/images/stock/mug.jpg",
      "/images/stock/balloons.jpg",
      "/images/stock/cake.jpg",
    ],
    similar: [],
    alsoLike: [],
    customizationOptions: ["HD Makeup", "Airbrush Makeup", "Hair Accessories"],
  },
  // Add more mock services as needed
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

export default function MUAServicePage() {
  const params = useParams();
  const slug = params?.slug;
  const service: MUAService | undefined = muaServices.find(
    (s) => s.slug === (typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "")
  );
  if (!service) return notFound();

  const [selectedOption, setSelectedOption] = useState(service.customizationOptions[0]);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Service Description", content: service.description },
    { title: "Packages Included", content: service.packages.join(", ") },
    { title: "Experience & Info", content: `Experience: ${service.experience}. Service Date: ${service.delivery}` },
  ];

  return (
    <MainLayout>
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-pink-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hire-mua" className="hover:text-pink-600">Hire MUA</Link>
            <span className="mx-2">/</span>
            <span className="text-pink-600 font-medium">{service.name}</span>
          </div>
        </div>

        {/* Main Section */}
        <section className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 order-2 lg:order-1 justify-center lg:justify-start">
              {service.images.map((img, idx) => (
                <div key={idx} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={img} alt="Service thumbnail" width={64} height={64} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            {/* Main Image and Feature Badges */}
            <div className="flex-1 order-1 lg:order-2 relative flex flex-col items-center">
              <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src={service.images[0]} alt={service.name} width={400} height={400} className="object-cover w-full h-full" />
              </div>
              {/* Feature Badges */}
              <div className="flex gap-4 mt-4 w-full">
                {service.features.map((f, i) => (
                  <div key={i} className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-3 flex-1">
                    <span className="text-pink-600 text-2xl mb-1">{f.icon}</span>
                    <span className="font-medium text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Service Info & Actions */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{service.name}</h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-800">₹{service.price}</span>
              {service.oldPrice && <span className="text-gray-500 line-through text-lg">₹{service.oldPrice}</span>}
              {service.discount > 0 && <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">{service.discount}% Off</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center">{renderRating(service.rating)}</span>
              <span className="text-green-700 font-semibold">{service.rating}</span>
              <span className="text-gray-500">{service.reviews} Reviews</span>
            </div>

            {/* Customization Options */}
            <div>
              <div className="font-semibold mb-2">Customize</div>
              <div className="flex gap-2 flex-wrap">
                {service.customizationOptions.map((opt) => (
                  <button
                    key={opt}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${selectedOption === opt ? "bg-pink-600 text-white border-pink-600" : "bg-white text-gray-700 border-gray-300 hover:bg-pink-50"}`}
                    onClick={() => setSelectedOption(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 px-6 py-3 bg-white border border-gray-400 text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-colors">Add To Cart</button>
              <button className="flex-1 px-6 py-3 bg-white border border-orange-400 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors">Customize ✏️</button>
              <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors">Book Now</button>
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
          {/* Service Reviews (placeholder) */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg mb-2">Customer Reviews</h2>
            <div className="text-gray-500 text-sm">No reviews yet.</div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
} 