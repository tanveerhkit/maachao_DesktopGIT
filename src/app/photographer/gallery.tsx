import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

const galleryItems = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Gallery Photo #${i + 1}`,
  image: `/sample-photos/gallery${(i % 6) + 1}.jpg`,
  category: ["Wedding", "Portrait", "Event", "Commercial", "Family", "Landscape"][i % 6],
}));

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
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-64 bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-brand-yellow text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow">{item.category}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-800 truncate mb-2">{item.title}</h3>
                <button className="mt-auto w-full bg-brand-orange text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 