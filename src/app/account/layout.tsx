'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  User,
  Box,
  CreditCard,
  Bell,
  MapPin,
  Gift,
  Lock,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const sidebarNavItems = [
  { name: 'My Orders', href: '/account/orders', icon: Box },
  { name: 'My Profile', href: '/account/profile', icon: User },
  { name: 'My Reminders', href: '/account/reminders', icon: Bell },
  { name: 'Saved Addresses', href: '/account/addresses', icon: MapPin },
  { name: 'Gift Vouchers', href: '/account/vouchers', icon: Gift },
  { name: 'Change Password', href: '/account/change-password', icon: Lock },
  { name: 'Logout', href: '/logout', icon: LogOut },
];

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <ChevronRight size={16} className="inline-block mx-1" />
          <Link href="/account" className="hover:text-orange-600">My Account</Link>
          <ChevronRight size={16} className="inline-block mx-1" />
          <span className="text-gray-700">My Profile</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-4 mb-4 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center mr-4">
                  <User size={24} />
                </div>
                <div>
                  <span className="text-xs">Hello,</span>
                  <p className="font-bold">GOD SUPERIOR</p>
                </div>
              </div>
              <nav className="space-y-1">
                {sidebarNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-500'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon size={20} className="mr-3" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {children}
          </main>
        </div>
      </div>
      {/* Chat with us button could be placed here, absolute to the layout container */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition">
        <CreditCard size={20}/>
        Chat with us
      </button>
    </div>
  );
};

export default AccountLayout; 