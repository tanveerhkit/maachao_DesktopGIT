'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import LoginModal from '../common/LoginModal';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cakesDropdownOpen, setCakesDropdownOpen] = useState(false);
  const [decorationsDropdownOpen, setDecorationsDropdownOpen] = useState(false);
  const [giftsDropdownOpen, setGiftsDropdownOpen] = useState(false);
  const [muaDropdownOpen, setMuaDropdownOpen] = useState(false);
  const [photographerDropdownOpen, setPhotographerDropdownOpen] = useState(false);
  const [clothingDropdownOpen, setClothingDropdownOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreDropdownRef]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        {/* Top Bar */}
        <div className="container mx-auto px-2 sm:px-4 py-3 flex flex-col md:flex-row items-stretch md:items-center justify-between border-b border-gray-200 gap-2 md:gap-x-6">
          {/* Logo + Location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 min-w-[260px] md:w-[280px] md:justify-start md:items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/maachao-logo.png" alt="Maachao logo" width={180} height={52} priority />
            </Link>
            <div className="flex items-center text-xs text-gray-600 border border-gray-200 rounded-md px-1 py-0 w-full sm:w-auto bg-white max-w-[120px] min-w-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-medium">Where to deliver?</span>
              <span className="ml-1 text-xs text-gray-400">Where to deliver</span>
            </div>
          </div>
          {/* Responsive Search Bar */}
          <div className="flex-1 flex justify-center items-center order-2 md:order-none">
            <div className="relative w-full max-w-lg">
              <input 
                type="text" 
                placeholder="Search for cakes, decorations, gifts..." 
                className="w-full h-12 py-2 pl-4 pr-12 border border-orange-400 rounded-full md:rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 transition-all text-base md:text-lg bg-white placeholder-gray-400 shadow-none md:shadow-md"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Responsive Search Bar */}
          {/* Right Icons */}
          <div className="flex items-center space-x-4 min-w-[260px] md:w-[280px] justify-end order-3 md:order-none">
            <div className="flex items-center space-x-3">
              <Link href="/same-day-delivery" className="flex flex-col items-center text-xs text-gray-600 hover:text-[#FFA600] transition-colors duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Same Day</span>
              </Link>
              
              <button onClick={() => setIsLoginModalOpen(true)} className="flex flex-col items-center text-xs focus:outline-none hover:text-[#FFA600] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Login</span>
              </button>
              
              <Link href="/cart" className="flex flex-col items-center text-xs ml-3 hover:text-[#FFA600] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Cart</span>
              </Link>
              
              <Link href="/wishlist" className="flex flex-col items-center text-xs hover:text-[#FFA600] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Wishlist</span>
              </Link>
              
              <div className="relative" ref={moreDropdownRef}>
                <button 
                  onClick={() => setMoreDropdownOpen(prev => !prev)}
                  className="flex flex-col items-center text-xs focus:outline-none hover:text-[#FFA600] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <span>More</span>
                </button>
                {/* More Dropdown Menu */}
                <div
                  className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 transition-all duration-200 ${moreDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  <div className="py-2">
                    <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link href="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</Link>
                    <Link href="/account/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</Link>
                    <Link href="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQs</Link>
                    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">WhatsApp Us</a>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="md:hidden" 
              aria-label="Toggle menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Navigation: hide on mobile, show on md+ */}
        <div className="hidden md:block container mx-auto px-4 py-2">
          <nav className="flex items-center space-x-6 text-sm relative">
            {/* Cakes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCakesDropdownOpen(true)}
              onMouseLeave={() => setCakesDropdownOpen(false)}
            >
              <Link
                href="/cakes"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${cakesDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Cakes
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[600px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${cakesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '220px' }}
              >
                <div className="flex px-8 py-8 gap-12">
                  {/* Birthday */}
                  <div className="min-w-[150px]">
                    <div className="font-bold text-gray-900 mb-3 text-lg">Birthday</div>
                    <ul className="space-y-2">
                      <li><Link href="/cakes/birthday/theme" className="text-gray-700 hover:text-orange-600 transition-colors">Theme cakes</Link></li>
                      <li><Link href="/cakes/birthday/eggless" className="text-gray-700 hover:text-orange-600 transition-colors">Eggless</Link></li>
                      <li><Link href="/cakes/birthday/photo" className="text-gray-700 hover:text-orange-600 transition-colors">Photo cakes</Link></li>
                    </ul>
                  </div>
                  {/* Anniversary */}
                  <div className="min-w-[150px]">
                    <div className="font-bold text-gray-900 mb-3 text-lg">Anniversary</div>
                    <ul className="space-y-2">
                      <li><Link href="/cakes/anniversary/heart-shaped" className="text-gray-700 hover:text-orange-600 transition-colors">Heart-shaped</Link></li>
                      <li><Link href="/cakes/anniversary/tiered" className="text-gray-700 hover:text-orange-600 transition-colors">Tiered cakes</Link></li>
                    </ul>
                  </div>
                  {/* Baby Shower */}
                  <div className="min-w-[150px]">
                    <div className="font-bold text-gray-900 mb-3 text-lg">Baby Shower</div>
                    <ul className="space-y-2">
                      <li><Link href="/cakes/baby-shower/diaper" className="text-gray-700 hover:text-orange-600 transition-colors">Diaper cakes</Link></li>
                      <li><Link href="/cakes/baby-shower/smash" className="text-gray-700 hover:text-orange-600 transition-colors">Smash cakes</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDecorationsDropdownOpen(true)}
              onMouseLeave={() => setDecorationsDropdownOpen(false)}
            >
              <Link
                href="/decorations"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${decorationsDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Decorations
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[500px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${decorationsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '180px' }}
              >
                <div className="px-8 py-8">
                  <div className="font-bold text-gray-900 mb-6 text-xl">Decorations</div>
                  <div className="flex gap-12">
                    {/* Birthday */}
                    <div className="min-w-[150px]">
                      <div className="font-bold text-gray-900 mb-3 text-lg">Birthday</div>
                      <ul className="space-y-2">
                        <li><Link href="/decorations/birthday/balloons" className="text-gray-700 hover:text-orange-600 transition-colors">Balloons</Link></li>
                        <li><Link href="/decorations/birthday/backdrops" className="text-gray-700 hover:text-orange-600 transition-colors">Backdrops</Link></li>
                        <li><Link href="/decorations/birthday/lighting" className="text-gray-700 hover:text-orange-600 transition-colors">Lighting</Link></li>
                      </ul>
                    </div>
                    {/* Anniversary */}
                    <div className="min-w-[150px]">
                      <div className="font-bold text-gray-900 mb-3 text-lg">Anniversary</div>
                      <ul className="space-y-2">
                        <li><Link href="/decorations/anniversary/rose-petals" className="text-gray-700 hover:text-orange-600 transition-colors">Rose petals</Link></li>
                        <li><Link href="/decorations/anniversary/candles" className="text-gray-700 hover:text-orange-600 transition-colors">Candles</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gifts Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGiftsDropdownOpen(true)}
              onMouseLeave={() => setGiftsDropdownOpen(false)}
            >
              <Link
                href="/gifts"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${giftsDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Gifts
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[320px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${giftsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '120px' }}
              >
                <div className="px-8 py-8">
                  <div className="font-bold text-gray-900 mb-6 text-xl">Gifts</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-3 text-lg">Birthday</div>
                    <ul className="space-y-2">
                      <li><Link href="/gifts/birthday/personalized-mugs" className="text-gray-700 hover:text-orange-600 transition-colors">Personalized mugs</Link></li>
                      <li><Link href="/gifts/birthday/chocolates" className="text-gray-700 hover:text-orange-600 transition-colors">Chocolates</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Hire MUA Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMuaDropdownOpen(true)}
              onMouseLeave={() => setMuaDropdownOpen(false)}
            >
              <Link
                href="/hire-mua"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${muaDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Hire MUA
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[320px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${muaDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '120px' }}
              >
                <div className="px-8 py-8">
                  <div className="font-bold text-gray-900 mb-6 text-xl">Hire MUA</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-3 text-lg">Wedding</div>
                    <ul className="space-y-2">
                      <li><Link href="/hire-mua/wedding/bridal" className="text-gray-700 hover:text-orange-600 transition-colors">Bridal</Link></li>
                      <li><Link href="/hire-mua/wedding/party-makeup" className="text-gray-700 hover:text-orange-600 transition-colors">Party makeup</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Hire Photographer Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPhotographerDropdownOpen(true)}
              onMouseLeave={() => setPhotographerDropdownOpen(false)}
            >
              <Link
                href="/photographer"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${photographerDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Hire Photographer
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[320px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${photographerDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '120px' }}
              >
                <div className="px-8 py-8">
                  <div className="font-bold text-gray-900 mb-6 text-xl">Hire Photographer</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-3 text-lg">Wedding</div>
                    <ul className="space-y-2">
                      <li><Link href="/photographer/traditional" className="text-gray-700 hover:text-orange-600 transition-colors">Traditional</Link></li>
                      <li><Link href="/photographer/photojournalistic" className="text-gray-700 hover:text-orange-600 transition-colors">Photojournalistic</Link></li>
                      <li><Link href="/photographer/editorial" className="text-gray-700 hover:text-orange-600 transition-colors">Editorial</Link></li>
                      <li><Link href="/photographer/fine-art" className="text-gray-700 hover:text-orange-600 transition-colors">Fine Art</Link></li>
                      <li><Link href="/photographer/candid" className="text-gray-700 hover:text-orange-600 transition-colors">Candid</Link></li>
                      <li><Link href="/photographer/black-and-white" className="text-gray-700 hover:text-orange-600 transition-colors">Black & White</Link></li>
                      <li><Link href="/photographer/vintage" className="text-gray-700 hover:text-orange-600 transition-colors">Vintage</Link></li>
                      <li><Link href="/photographer/modern" className="text-gray-700 hover:text-orange-600 transition-colors">Modern</Link></li>
                      <li><Link href="/photographer/documentary" className="text-gray-700 hover:text-orange-600 transition-colors">Documentary</Link></li>
                      <li><Link href="/photographer/artistic" className="text-gray-700 hover:text-orange-600 transition-colors">Artistic</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Rent Clothing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setClothingDropdownOpen(true)}
              onMouseLeave={() => setClothingDropdownOpen(false)}
            >
              <Link
                href="/rent-clothing"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${clothingDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Rent Clothing
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-[320px] bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${clothingDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
                style={{ minHeight: '120px' }}
              >
                <div className="px-8 py-8">
                  <div className="font-bold text-gray-900 mb-6 text-xl">Rent Clothing</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-3 text-lg">Wedding</div>
                    <ul className="space-y-2">
                      <li><Link href="/rent-clothing/wedding/lehenga" className="text-gray-700 hover:text-orange-600 transition-colors">Lehenga</Link></li>
                      <li><Link href="/rent-clothing/wedding/sherwani" className="text-gray-700 hover:text-orange-600 transition-colors">Sherwani</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Rent Games Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGamesDropdownOpen(true)}
              onMouseLeave={() => setGamesDropdownOpen(false)}
            >
              <Link
                href="/rent-games"
                className={`whitespace-nowrap hover:text-orange-600 transition-colors ${gamesDropdownOpen ? 'text-orange-600' : ''}`}
              >
              Rent Games
            </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-200 ${gamesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[1000]`}
              >
                <div className="p-6">
                  <div className="font-bold text-gray-900 mb-3 text-lg">Party</div>
                  <ul className="space-y-2">
                    <li><Link href="/rent-games/board-games" className="text-gray-700 hover:text-orange-600 transition-colors">Board games</Link></li>
                    <li><Link href="/rent-games/video-games" className="text-gray-700 hover:text-orange-600 transition-colors">Video games</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
