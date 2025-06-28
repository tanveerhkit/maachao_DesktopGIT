import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Carousel from "@/components/common/Carousel";
import { MobileBottomNav } from '@/components/layout/MobileNav';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Banner Carousel */}
      <section className="relative bg-white md:pt-0 pt-2">
        <div className="container mx-auto px-2 sm:px-4 py-2">
          <Carousel className="rounded-xl shadow-lg overflow-hidden">
            {/* Slide 1 */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex flex-col items-center justify-center p-6 min-h-[220px]">
              <div className="w-full flex flex-col items-center">
                <span className="text-xs font-semibold text-orange-500 mb-1">Hot Deal 🔥</span>
                <h2 className="text-2xl font-bold text-black mb-2">Get 20% OFF</h2>
                <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-orange-600 transition mb-2">Order Now</button>
              </div>
              <div className="w-full flex justify-center mt-2">
                <Image src="/images/stock/cake.jpg" alt="Cake" width={160} height={120} className="rounded-lg object-cover" />
              </div>
            </div>
            {/* Slide 2 */}
            <div className="bg-gradient-to-br from-pink-100 to-yellow-50 rounded-xl flex flex-col items-center justify-center p-6 min-h-[220px]">
              <div className="w-full flex flex-col items-center">
                <span className="text-xs font-semibold text-orange-500 mb-1">New Arrivals</span>
                <h2 className="text-2xl font-bold text-black mb-2">Party Essentials</h2>
                <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-orange-600 transition mb-2">Shop Now</button>
              </div>
              <div className="w-full flex justify-center mt-2">
                <Image src="/images/stock/balloons.jpg" alt="Party" width={160} height={120} className="rounded-lg object-cover" />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {/* Flowers */}
            <Link href="/flowers" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Flowers Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Flowers</h3>
              </div>
            </Link>
            
            {/* Cakes */}
            <Link href="/cakes" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Cakes Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Cakes</h3>
              </div>
            </Link>
            
            {/* Decorations */}
            <Link href="/decorations" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Decorations Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Decorations</h3>
              </div>
            </Link>
            
            {/* Balloon Bouquet */}
            <Link href="/balloon-bouquet" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Balloon Bouquet Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Balloon Bouquet</h3>
              </div>
            </Link>
            
            {/* Chocolates */}
            <Link href="/chocolates" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Chocolates Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Chocolates</h3>
              </div>
            </Link>
            
            {/* Combos */}
            <Link href="/combos" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-32 bg-white relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Combos Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Combos</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trending Party Decorations */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-black">Trending Party Decorations</h2>
            <p className="text-black">Perfect Themes Stunning Celebrations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Birthday */}
            <Link href="/decorations/birthday" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Birthday Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Birthday</h3>
              </div>
            </Link>
            
            {/* Baby Shower */}
            <Link href="/decorations/baby-shower" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Baby Shower Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Baby Shower</h3>
              </div>
            </Link>
            
            {/* Kids Birthday */}
            <Link href="/decorations/kids-birthday" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Kids Birthday Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Kids Birthday</h3>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Anniversary */}
            <Link href="/decorations/anniversary" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Anniversary Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Anniversary</h3>
              </div>
            </Link>
            
            {/* Baby Welcome */}
            <Link href="/decorations/baby-welcome" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Baby Welcome Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Baby Welcome</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Delicious Celebration Cakes */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-black">Delicious Celebration Cakes</h2>
            <p className="text-black">Sweet Treats for Every Occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Birthday Cakes */}
            <Link href="/cakes/birthday" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Birthday Cake Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Birthday Cakes</h3>
              </div>
            </Link>
            
            {/* Cartoon Theme Cake */}
            <Link href="/cakes/birthday/theme" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange col-span-1 md:col-span-1 row-span-2 transition hover:shadow-lg">
              <div className="h-96 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Cartoon Theme Cake Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Cartoon Theme Cake</h3>
              </div>
            </Link>
            
            {/* Anniversary Cakes */}
            <Link href="/cakes/anniversary" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Anniversary Cake Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Anniversary Cakes</h3>
              </div>
            </Link>
            
            {/* Baby Shower Cakes */}
            <Link href="/cakes/baby-shower" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Baby Shower Cake Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Baby Shower Cakes</h3>
              </div>
            </Link>
            
            {/* Engagement Cakes */}
            <Link href="/cakes/engagement" className="bg-white rounded-lg shadow overflow-hidden border border-brand-orange transition hover:shadow-lg">
              <div className="h-48 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Engagement Cake Image]
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-black">Engagement Cakes</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="md:hidden px-4 mt-4 mb-2">
        <div className="grid grid-cols-4 gap-3">
          {/* Trending */}
          <Link href="/trending" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Trending</span>
          </Link>
          {/* Cakes */}
          <Link href="/cakes" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <Image src="/images/stock/cake.jpg" alt="Cakes" width={28} height={28} className="rounded-full object-cover" />
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Cakes</span>
          </Link>
          {/* Decoration */}
          <Link href="/decorations" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Decoration</span>
          </Link>
          {/* Gifts */}
          <Link href="/gifts" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M16 3a2 2 0 00-4 0v5m4-5a2 2 0 014 0v5m-8-5a2 2 0 00-4 0v5" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Gifts</span>
          </Link>
          {/* Hire MUA */}
          <Link href="/hire-mua" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0 0V8m0 4h4m-4 0H8" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Hire MUA</span>
          </Link>
          {/* Video Gr. */}
          <Link href="/rent-games/video-games" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3a2 2 0 00-4 0v5m4-5a2 2 0 014 0v5m-8-5a2 2 0 00-4 0v5" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Video Gr..</span>
          </Link>
          {/* Photo Gr. */}
          <Link href="/photographer" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-1 group-hover:bg-orange-100 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 transition">Photo Gr..</span>
          </Link>
          {/* View All */}
          <Link href="/categories" className="flex flex-col items-center group" passHref>
            <div className="w-14 h-14 rounded-full border-2 border-orange-400 flex items-center justify-center mb-1 bg-white group-hover:bg-orange-50 transition">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
            </div>
            <span className="text-xs font-medium text-orange-500 font-semibold group-hover:text-orange-600 transition">View All</span>
          </Link>
        </div>
      </div>
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Combos</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example combo card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Combo Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Cake + Flowers</h3>
            </div>
          </div>
          {/* Example combo card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Combo Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Cake + Chocolates</h3>
            </div>
          </div>
          {/* Example combo card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Combo Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Flowers + Chocolates</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Chocolates Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Chocolates</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example chocolate card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Chocolate Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Assorted Chocolates</h3>
            </div>
          </div>
          {/* Example chocolate card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Chocolate Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Personalized Chocolates</h3>
            </div>
          </div>
          {/* Example chocolate card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Chocolate Image]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Gift Boxes</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Flowers Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Flowers</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example flower card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Rose Bouquet]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Rose Bouquet</h3>
            </div>
          </div>
          {/* Example flower card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Mixed Flowers]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Mixed Flowers</h3>
            </div>
          </div>
          {/* Example flower card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Orchids]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Orchids</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Gifts Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Gifts</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example gift card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Personalized Mug]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Personalized Mug</h3>
            </div>
          </div>
          {/* Example gift card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Gift Hamper]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Gift Hamper</h3>
            </div>
          </div>
          {/* Example gift card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Photo Frame]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Photo Frame</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Balloon Bouquets Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Balloon Bouquets</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example balloon bouquet card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Birthday Balloons]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Birthday Balloons</h3>
            </div>
          </div>
          {/* Example balloon bouquet card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Anniversary Balloons]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Anniversary Balloons</h3>
            </div>
          </div>
          {/* Example balloon bouquet card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Custom Balloon Bouquet]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Custom Balloon Bouquet</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Rent Clothing Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Rent Clothing</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example rent clothing card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Lehenga]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Lehenga</h3>
            </div>
          </div>
          {/* Example rent clothing card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Sherwani]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Sherwani</h3>
            </div>
          </div>
          {/* Example rent clothing card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Gown]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Gown</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Rent Games Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Rent Games</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example rent games card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Board Games]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Board Games</h3>
            </div>
          </div>
          {/* Example rent games card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Video Games]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Video Games</h3>
            </div>
          </div>
          {/* Example rent games card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Outdoor Games]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Outdoor Games</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Hire Photographer Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Hire Photographer</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example photographer card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Candid]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Candid</h3>
            </div>
          </div>
          {/* Example photographer card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Wedding]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Wedding</h3>
            </div>
          </div>
          {/* Example photographer card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Event]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Event</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: Same Day Delivery Section */}
      <div className="md:hidden px-4 mt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-black">Same Day Delivery</h2>
          <button className="flex items-center text-xs font-semibold text-orange-500 hover:underline">
            See All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {/* Example same day card 1 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Cake]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Cake</h3>
            </div>
          </div>
          {/* Example same day card 2 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Flowers]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Flowers</h3>
            </div>
          </div>
          {/* Example same day card 3 */}
          <div className="min-w-[160px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0">
            <div className="h-24 w-full rounded-t-xl bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400">[Gift]</div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm text-black mb-1 truncate">Gift</h3>
            </div>
          </div>
        </div>
      </div>
      <MobileBottomNav active="home" />
    </MainLayout>
  );
}
