'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl p-6 overflow-y-auto">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Search input for mobile */}
        <div className="mb-6">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search for cakes, decorations, gifts..." 
              className="w-full py-2 pl-4 pr-10 border border-orange-400 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400 bg-white placeholder-gray-400 shadow-sm text-base"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="#" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Same Day</span>
          </Link>
          
          <Link href="/account" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Account</span>
          </Link>
          
          <Link href="/cart" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Cart</span>
          </Link>
          
          <Link href="/wishlist" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Wishlist</span>
          </Link>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            href="/cakes" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Cakes
          </Link>
          <Link 
            href="/decorations" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Decorations
          </Link>
          <Link 
            href="/gifts" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Gifts
          </Link>
          <Link 
            href="/hire-mua" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Hire MUA
          </Link>
          <Link 
            href="/photographer" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Hire Photographer
          </Link>
          <Link 
            href="/rent-clothing" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Rent Clothing
          </Link>
          <Link 
            href="/rent-games" 
            className="text-lg font-medium hover:text-pink-600 transition-colors"
            onClick={onClose}
          >
            Rent Games
          </Link>
        </nav>
      </div>
    </div>
  );
}

export function MobileBottomNav({ active = 'home' }: { active?: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-lg md:hidden">
      <Link href="/" className="flex flex-col items-center text-xs group">
        <svg className={`w-6 h-6 mb-1 ${active === 'home' ? 'text-orange-500' : 'text-gray-400'} group-hover:text-orange-500 transition`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m5 0a2 2 0 002-2V7a2 2 0 00-.586-1.414l-7-7a2 2 0 00-2.828 0l-7 7A2 2 0 003 7v11a2 2 0 002 2h3" /></svg>
        <span className={active === 'home' ? 'text-orange-500 font-semibold' : 'text-gray-500'}>Home</span>
      </Link>
      <Link href="/wishlist" className="flex flex-col items-center text-xs group">
        <svg className={`w-6 h-6 mb-1 ${active === 'wishlist' ? 'text-orange-500' : 'text-gray-400'} group-hover:text-orange-500 transition`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        <span className={active === 'wishlist' ? 'text-orange-500 font-semibold' : 'text-gray-500'}>Wishlist</span>
      </Link>
      <Link href="/account/profile" className="flex flex-col items-center text-xs group">
        <svg className={`w-6 h-6 mb-1 ${active === 'account' ? 'text-orange-500' : 'text-gray-400'} group-hover:text-orange-500 transition`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className={active === 'account' ? 'text-orange-500 font-semibold' : 'text-gray-500'}>Account</span>
      </Link>
    </nav>
  );
}