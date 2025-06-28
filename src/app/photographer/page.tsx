'use client';
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import DatePicker from "@/components/common/DatePicker";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

export default function PhotographerPage() {
  // Sample photography services - in a real app, this would come from a database or API
  const photographyServices = [
    {
      id: 1,
      name: "Wedding Photography",
      description: "Comprehensive wedding photography package including engagement session, full day coverage, and digital album.",
      price: "Starting at $1,999",
      duration: "Full Day",
    },
    {
      id: 2,
      name: "Event Photography",
      description: "Professional photography for corporate events, parties, and special occasions.",
      price: "Starting at $599",
      duration: "4 hours",
    },
    {
      id: 3,
      name: "Portrait Session",
      description: "Individual or family portrait sessions in studio or at location of your choice.",
      price: "Starting at $299",
      duration: "1-2 hours",
    },
    {
      id: 4,
      name: "Commercial Photography",
      description: "Professional product, food, or real estate photography for businesses.",
      price: "Starting at $499",
      duration: "3 hours",
    },
    {
      id: 5,
      name: "Engagement Session",
      description: "Pre-wedding photoshoot to capture your love story in a relaxed setting.",
      price: "Starting at $399",
      duration: "2 hours",
    },
    {
      id: 6,
      name: "Maternity & Newborn",
      description: "Beautiful photography to document your pregnancy and newborn baby.",
      price: "Starting at $349",
      duration: "1-2 hours",
    },
  ];

  // Sample photographers
  const photographers = [
    {
      id: 1,
      name: "David Wilson",
      specialty: "Wedding & Portrait",
      experience: "10 years",
      rating: 4.9,
      reviewCount: 142,
    },
    {
      id: 2,
      name: "Priya Sharma",
      specialty: "Fashion & Editorial",
      experience: "8 years",
      rating: 4.8,
      reviewCount: 98,
    },
    {
      id: 3,
      name: "Marcus Johnson",
      specialty: "Commercial & Product",
      experience: "12 years",
      rating: 4.7,
      reviewCount: 115,
    },
    {
      id: 4,
      name: "Sophia Lee",
      specialty: "Events & Documentary",
      experience: "7 years",
      rating: 4.9,
      reviewCount: 87,
    },
  ];

  // Sample photography styles
  const styles = [
    "Traditional", "Photojournalistic", "Editorial", "Fine Art", "Candid", 
    "Black & White", "Vintage", "Modern", "Documentary", "Artistic"
  ];

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="w-full bg-gray-800 py-16 px-4 flex flex-col items-center justify-center text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Capture Your Perfect Moments</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">Professional photography for all your special occasions</p>
        <Link href="/photographer/gallery" className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition text-center">
          View Products
        </Link>
      </section>

      {/* Portfolio Highlights */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Portfolio Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-4xl text-gray-400">
              {/* Placeholder graphic */}
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                <rect width="64" height="64" rx="8" fill="#e5e7eb" />
                <circle cx="32" cy="28" r="16" stroke="#9ca3af" strokeWidth="2" fill="none" />
                <line x1="16" y1="48" x2="48" y2="48" stroke="#9ca3af" strokeWidth="2" />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/photographer/gallery" className="border border-gray-300 px-6 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition text-center">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Photography Services */}
      <section className="w-full bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Photography Services</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Service Cards */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#9ca3af" strokeWidth="2" fill="none" /><circle cx="16" cy="16" r="6" fill="#d1d5db" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Portrait Sessions</h3>
            <p className="text-gray-500 text-sm mb-2">Professional portraits for individuals, couples, and families.</p>
            <span className="font-semibold text-gray-800">From $199</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="4" stroke="#9ca3af" strokeWidth="2" fill="#d1d5db" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Wedding Photography</h3>
            <p className="text-gray-500 text-sm mb-2">Capture every special moment of your big day.</p>
            <span className="font-semibold text-gray-800">From $1,499</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" stroke="#9ca3af" strokeWidth="2" fill="#d1d5db" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Event Coverage</h3>
            <p className="text-gray-500 text-sm mb-2">Professional photography for corporate events and celebrations.</p>
            <span className="font-semibold text-gray-800">From $349</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="20" width="24" height="8" rx="2" stroke="#9ca3af" strokeWidth="2" fill="#d1d5db" /><rect x="10" y="8" width="12" height="8" rx="2" stroke="#9ca3af" strokeWidth="2" fill="#e5e7eb" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Commercial</h3>
            <p className="text-gray-500 text-sm mb-2">Product photography and business promotional content.</p>
            <span className="font-semibold text-gray-800">From $299</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#9ca3af" strokeWidth="2" fill="none" /><rect x="8" y="20" width="16" height="4" rx="2" fill="#d1d5db" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Location Shoots</h3>
            <p className="text-gray-500 text-sm mb-2">Outdoor photography at your chosen scenic location.</p>
            <span className="font-semibold text-gray-800">From $249</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-gray-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="12" cy="16" r="6" fill="#d1d5db" /><circle cx="22" cy="16" r="4" fill="#e5e7eb" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Family Sessions</h3>
            <p className="text-gray-500 text-sm mb-2">Capture precious family moments to cherish forever.</p>
            <span className="font-semibold text-gray-800">From $229</span>
          </div>
        </div>
      </section>

      {/* Book Your Session */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Book Your Session</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <form className="flex flex-col gap-4" autoComplete="off">
            <Input label="Full Name" id="booking-name" name="name" placeholder="Enter your name" required fullWidth />
            <Input label="Email Address" id="booking-email" name="email" type="email" placeholder="Enter your email" required fullWidth />
            <Input label="Phone Number" id="booking-phone" name="phone" type="tel" placeholder="Enter your phone number" required fullWidth />
            <Select 
              label="Photography Service" 
              id="booking-service" 
              name="service" 
              options={[...photographyServices.map(s => ({ value: s.name, label: s.name })), { value: 'Other', label: 'Other' }]} 
              placeholder="Select a service" 
              required 
              fullWidth 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DatePicker label="Preferred Date" id="booking-date" />
              <Input label="Preferred Time" id="booking-time" name="time" type="time" required fullWidth />
            </div>
            <Textarea label="Additional Details" id="booking-details" name="details" placeholder="Tell us about your event, location, or any special requests..." rows={4} fullWidth />
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold border-2 border-brand-orange text-brand-orange bg-white shadow-sm hover:bg-orange-50 hover:shadow-md hover:scale-[1.03] active:scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
              >
                Add to Cart
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white shadow-sm hover:shadow-lg hover:scale-[1.03] active:scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Book Now
              </button>
            </div>
          </form>
          {/* How It Works */}
          <div className="bg-gray-900 text-white rounded-lg p-6 flex flex-col gap-6">
            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <ol className="space-y-4 list-decimal list-inside">
              <li>
                <span className="font-bold">Choose Your Package</span>
                <div className="text-gray-300 text-sm">Select the type of photography session you need.</div>
              </li>
              <li>
                <span className="font-bold">Pick a Date & Time</span>
                <div className="text-gray-300 text-sm">Choose from available slots in our calendar.</div>
              </li>
              <li>
                <span className="font-bold">Provide Details</span>
                <div className="text-gray-300 text-sm">Tell us about your vision and requirements.</div>
              </li>
              <li>
                <span className="font-bold">Confirmation</span>
                <div className="text-gray-300 text-sm">We'll confirm your booking and send all details.</div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Photography Styles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Photography Styles</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {styles.map((style, index) => {
              // Convert style to URL-friendly slug
              const slug = style.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-');
              return (
                <Link key={index} href={`/photographer/${slug}`} className={"px-6 py-2 bg-white text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors font-medium text-base text-center"}>
                  {style}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "David captured our wedding day perfectly! The photos are absolutely stunning and he was so professional throughout the entire process."
              </p>
              <p className="font-medium">- Michael & Jessica, Wedding Clients</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Priya did an amazing job with our product photography. The images have significantly improved our online sales and brand image."
              </p>
              <p className="font-medium">- Alex Chen, Business Owner</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "We hired Sophia for our corporate event and she was fantastic! She captured all the key moments and delivered the photos promptly."
              </p>
              <p className="font-medium">- Sarah Thompson, Event Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How far in advance should I book a photographer?</h3>
              <p className="text-gray-600">
                For weddings and major events, we recommend booking 6-12 months in advance. For portraits and smaller events, 2-4 weeks notice is usually sufficient, but availability may vary during peak seasons.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How many photos will I receive?</h3>
              <p className="text-gray-600">
                The number of photos varies depending on the package and event duration. Typically, you can expect 50-100 edited photos per hour of coverage. All photos are professionally edited and delivered in high resolution.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Do you provide both digital files and printed photos?</h3>
              <p className="text-gray-600">
                Yes, all our packages include digital files. Printed photos, albums, and other physical products are available as add-ons or included in premium packages. We work with professional print labs to ensure the highest quality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">What happens if the photographer is ill on my event day?</h3>
              <p className="text-gray-600">
                We maintain a network of professional photographers and will arrange for a replacement with similar style and experience at no additional cost to you. Your event will be covered no matter what.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}