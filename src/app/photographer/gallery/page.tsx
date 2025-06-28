import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

// Import all category mock data
const categories = [
  {
    label: "Candid",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `candid-${i + 1}`,
      name: `Candid Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Candid",
    })),
  },
  {
    label: "Modern",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `modern-${i + 1}`,
      name: `Modern Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Modern",
    })),
  },
  {
    label: "Vintage",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `vintage-${i + 1}`,
      name: `Vintage Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Vintage",
    })),
  },
  {
    label: "Artistic",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `artistic-${i + 1}`,
      name: `Artistic Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Artistic",
    })),
  },
  {
    label: "Fine Art",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `fineart-${i + 1}`,
      name: `Fine Art Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Fine Art",
    })),
  },
  {
    label: "Editorial",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `editorial-${i + 1}`,
      name: `Editorial Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Editorial",
    })),
  },
  {
    label: "Documentary",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `documentary-${i + 1}`,
      name: `Documentary Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Documentary",
    })),
  },
  {
    label: "Photojournalistic",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `photojournalistic-${i + 1}`,
      name: `Photojournalistic Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Photojournalistic",
    })),
  },
  {
    label: "Black & White",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `blackwhite-${i + 1}`,
      name: `Black & White Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Black & White",
    })),
  },
  {
    label: "Traditional",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `traditional-${i + 1}`,
      name: `Traditional Photographer #${i + 1}`,
      image: "/placeholder-mua4.jpg",
      location: "Delhi",
      price: `₹${3999 + i * 600}`,
      category: "Traditional",
    })),
  },
];

// Flatten and shuffle all products
const allProducts = categories.flatMap((cat) => cat.items);
for (let i = allProducts.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
}

export default function PhotographerGallery() {
  return (
    <MainLayout>
      <div className="w-full bg-white py-4 text-sm">
        <div className="container mx-auto px-4 flex items-center text-black">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/photographer" className="hover:text-brand-orange">Photographer</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-orange font-semibold">Gallery</span>
        </div>
      </div>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Photography Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-64 bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{item.category}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-800 truncate mb-2">{item.name}</h3>
                <div className="flex items-center mt-1 mb-2">
                  <span className="text-lg font-bold text-black">{item.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{item.location}</span>
                </div>
                <button className="mt-auto w-full bg-brand-orange text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 