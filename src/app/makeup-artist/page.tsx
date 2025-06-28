import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Professional Makeup Artists | MaaChao",
  description: "Book professional makeup artists for weddings, parties, photoshoots, and special occasions.",
};

export default function MakeupArtistPage() {
  // Sample makeup services - in a real app, this would come from a database or API
  const makeupServices = [
    {
      id: 1,
      name: "Bridal Makeup",
      description: "Complete bridal makeup with trial session and touch-up kit.",
      price: "$299",
      duration: "3 hours",
    },
    {
      id: 2,
      name: "Party Makeup",
      description: "Glamorous makeup for parties and special events.",
      price: "$149",
      duration: "1.5 hours",
    },
    {
      id: 3,
      name: "Natural Everyday Makeup",
      description: "Subtle, natural-looking makeup for everyday occasions.",
      price: "$99",
      duration: "1 hour",
    },
    {
      id: 4,
      name: "Photoshoot Makeup",
      description: "Camera-ready makeup optimized for photography and video.",
      price: "$199",
      duration: "2 hours",
    },
    {
      id: 5,
      name: "Group Makeup Package",
      description: "Makeup services for bridal party or group events (min. 4 people).",
      price: "$499",
      duration: "4+ hours",
    },
    {
      id: 6,
      name: "Makeup Lesson",
      description: "One-on-one makeup lesson with personalized tips and techniques.",
      price: "$179",
      duration: "2 hours",
    },
  ];

  // Sample makeup artists
  const makeupArtists = [
    {
      id: 1,
      name: "Sophia Chen",
      specialty: "Bridal & Editorial",
      experience: "8 years",
      rating: 4.9,
      reviewCount: 127,
    },
    {
      id: 2,
      name: "James Rodriguez",
      specialty: "Celebrity & Fashion",
      experience: "12 years",
      rating: 4.8,
      reviewCount: 215,
    },
    {
      id: 3,
      name: "Aisha Patel",
      specialty: "Natural & Ethnic",
      experience: "6 years",
      rating: 4.9,
      reviewCount: 98,
    },
    {
      id: 4,
      name: "Michael Kim",
      specialty: "SFX & Creative",
      experience: "10 years",
      rating: 4.7,
      reviewCount: 156,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-rose-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Makeup Artists</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600">
            Look your absolute best for any occasion with our team of professional makeup artists.
            We specialize in bridal makeup, special events, photoshoots, and more.
          </p>
          <Link 
            href="#booking" 
            className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors font-medium inline-block"
          >
            Book a Makeup Artist
          </Link>
        </div>
      </section>

      {/* Featured Makeup Artists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Makeup Artists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {makeupArtists.map((artist) => (
              <div key={artist.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    [Artist Photo]
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${i < Math.floor(artist.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{artist.rating} ({artist.reviewCount} reviews)</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <span className="text-gray-500 text-sm font-medium w-24">Specialty:</span>
                      <span className="text-gray-700 text-sm">{artist.specialty}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm font-medium w-24">Experience:</span>
                      <span className="text-gray-700 text-sm">{artist.experience}</span>
                    </div>
                  </div>
                  <button className="w-full bg-rose-500 text-white py-2 rounded-md hover:bg-rose-600 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makeup Services */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Makeup Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeupServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-rose-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600 text-sm">{service.duration}</span>
                  </div>
                  <span className="text-rose-500 font-bold">{service.price}</span>
                </div>
                <button className="w-full bg-rose-500 text-white py-2 rounded-md hover:bg-rose-600 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Service</h3>
              <p className="text-gray-600">
                Select the makeup service that best fits your needs and occasion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book an Artist</h3>
              <p className="text-gray-600">
                Choose your preferred makeup artist and select a date and time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Glammed Up</h3>
              <p className="text-gray-600">
                Our artist will arrive at your location with all necessary supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Book a Makeup Artist</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="">Select a service</option>
                    {makeupServices.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Where should the makeup artist meet you?"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Requests or Notes</label>
                <textarea 
                  id="notes" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Any specific makeup style, allergies, or other information we should know?"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors font-medium"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                "Sophia did my bridal makeup and I couldn't have been happier! She understood exactly what I wanted and made me feel beautiful on my special day."
              </p>
              <p className="font-medium">- Sarah Johnson, Bride</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                "James did the makeup for our entire bridal party and everyone looked stunning! He was professional, punctual, and a joy to work with."
              </p>
              <p className="font-medium">- Emily Rodriguez, Maid of Honor</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                "I booked Aisha for my photoshoot and the makeup was flawless! She knew exactly what would look good on camera and the photos turned out amazing."
              </p>
              <p className="font-medium">- Michelle Lee, Model</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}