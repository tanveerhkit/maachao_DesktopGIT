"use client";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { BsArrowDownUp } from 'react-icons/bs';
import { useState } from "react";
import QuickViewModal from "@/components/common/QuickViewModal";
import AddOnsModal from '@/components/common/AddOnsModal';

interface QuickViewProduct {
  name: string;
  images: string[];
  price: number;
  oldPrice?: number | null;
  discount?: number;
  description?: string;
  category?: string;
}

export default function CakesPage() {
  // Sample cake data - in a real app, this would come from a database or API
  const cakes = [
    {
      id: 1,
      name: "Classic Chocolate Cake",
      description: "Rich chocolate cake with chocolate ganache.",
      price: 49.99,
      discountPrice: 39.99,
      rating: 4.9,
      reviews: 278,
      category: "Chocolate Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/chocolate-cake.jpg"
    },
    {
      id: 2,
      name: "Vanilla Buttercream Cake",
      description: "Classic vanilla cake with buttercream frosting.",
      price: 39.99,
      discountPrice: null,
      rating: 4.8,
      reviews: 235,
      category: "Vanilla Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/vanilla-cake.jpg"
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Delicious red velvet cake with cream cheese frosting.",
      price: 44.99,
      discountPrice: null,
      rating: 4.7,
      reviews: 192,
      category: "Red Velvet Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/red-velvet-cake.jpg"
    },
    {
      id: 4,
      name: "Mango Cream Cake",
      description: "Fresh mango cake with whipped cream frosting.",
      price: 54.99,
      discountPrice: 47.99,
      rating: 4.9,
      reviews: 156,
      category: "Mango Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/mango-cake.jpg"
    },
    {
      id: 5,
      name: "Chocolate Truffle Cake",
      description: "Decadent chocolate truffle cake with rich ganache.",
      price: 59.99,
      discountPrice: null,
      rating: 4.8,
      reviews: 203,
      category: "Chocolate Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/chocolate-truffle.jpg"
    },
    {
      id: 6,
      name: "Butterscotch Fantasy Cake",
      description: "Sweet butterscotch cake with caramel drizzle.",
      price: 49.99,
      discountPrice: null,
      rating: 4.7,
      reviews: 167,
      category: "Butterscotch Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/butterscotch-cake.jpg"
    },
    {
      id: 7,
      name: "Delightful Chocolate Cake",
      description: "Chocolate cake with chocolate chips and frosting.",
      price: 44.99,
      discountPrice: 39.99,
      rating: 4.6,
      reviews: 142,
      category: "Chocolate Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/delightful-chocolate.jpg"
    },
    {
      id: 8,
      name: "Scrumptious Red Velvet Cake",
      description: "Red velvet cake with white chocolate shavings.",
      price: 49.99,
      discountPrice: null,
      rating: 4.5,
      reviews: 118,
      category: "Red Velvet Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/scrumptious-red-velvet.jpg"
    },
    {
      id: 9,
      name: "Theme Cake For Dads Birthday",
      description: "Custom theme cake for dad's special day.",
      price: 79.99,
      discountPrice: 69.99,
      rating: 4.8,
      reviews: 94,
      category: "Theme Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/theme-cake-dad.jpg"
    },
    {
      id: 10,
      name: "Homemade Chocolate Cake",
      description: "Traditional homestyle chocolate cake.",
      price: 39.99,
      discountPrice: null,
      rating: 4.5,
      reviews: 186,
      category: "Chocolate Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/homemade-chocolate.jpg"
    },
    {
      id: 11,
      name: "Vanilla Cloud Treat",
      description: "Light and fluffy vanilla cake with cloud-like frosting.",
      price: 49.99,
      discountPrice: null,
      rating: 4.8,
      reviews: 102,
      category: "Vanilla Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/vanilla-cloud.jpg"
    },
    {
      id: 12,
      name: "Chocolate Layered Cake",
      description: "Multiple layers of chocolate cake with ganache.",
      price: 54.99,
      discountPrice: 49.99,
      rating: 4.9,
      reviews: 132,
      category: "Chocolate Cakes",
      delivery: "Tomorrow",
      image: "/images/cakes/chocolate-layered.jpg"
    },
  ];

  // Function to render star ratings
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

  // Get unique categories for filter
  const categories = [...new Set(cakes.map(cake => cake.category))];

  // Add state for selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter cakes by selected category
  const filteredCakes = cakes.filter(cake => cake.category === selectedCategory);

  // Quick View modal state
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  const [addOnsOpen, setAddOnsOpen] = useState(false);

  return (
    <MainLayout>
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Cakes</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Cakes</h1>
          <p className="text-gray-700 mb-4">77,842 reviews</p>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm rounded-full border font-medium transition-colors duration-200
                    ${selectedCategory === category
                      ? 'bg-white text-black border-black'
                      : 'bg-white text-black border-black hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F]'}
                  `}
                >
                  {category}
                </button>
              ))}
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

      {/* Cake Listings */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                <Link href={`/cakes/${cake.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="block">
                  <div className="relative h-48 bg-gray-100">
                    <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <div className="p-4 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">{renderRating(cake.rating)}</div>
                    <span className="text-sm text-gray-700 ml-1">{cake.rating} ({cake.reviews})</span>
                  </div>
                  {/* Name */}
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 text-gray-800">{cake.name}</h3>
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-lg text-gray-800">₹{cake.discountPrice || cake.price}</span>
                    {cake.discountPrice && (
                      <span className="text-gray-500 line-through text-sm">₹{cake.price}</span>
                    )}
                  </div>
                  {/* Delivery */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded">
                      {cake.delivery}
                    </span>
                  </div>
                  {/* Add to Cart Button */}
                  <button
                    className="w-full mt-auto border border-orange-500 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                    onClick={() => setAddOnsOpen(true)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  {/* Quick View Button */}
                  <button
                    className="w-full mt-2 border border-black bg-white text-black py-2 rounded-lg font-semibold hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F] transition-colors"
                    onClick={() => {
                      setQuickViewProduct({
                        name: cake.name,
                        images: [cake.image],
                        price: cake.discountPrice || cake.price,
                        oldPrice: cake.discountPrice ? cake.price : null,
                        discount: cake.discountPrice ? Math.round(100 - (cake.discountPrice / cake.price) * 100) : 0,
                        description: cake.description,
                        category: cake.category,
                      });
                      setQuickViewOpen(true);
                    }}
                  >
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Quick View Modal */}
        <QuickViewModal
          open={quickViewOpen}
          onClose={() => setQuickViewOpen(false)}
          product={quickViewProduct || { name: '', images: [''], price: 0 }}
        />
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Need a Custom Cake?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We can create the perfect cake for your special occasion. Tell us your requirements and we'll make it happen.
          </p>
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors font-medium inline-block"
          >
            Request Custom Order
          </Link>
        </div>
      </section>

      <AddOnsModal open={addOnsOpen} onClose={() => setAddOnsOpen(false)} />
    </MainLayout>
  );
}