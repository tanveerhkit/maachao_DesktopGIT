'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import GiftVoucherCard from '@/components/common/GiftVoucherCard';
import PurchasedVoucherCard from '@/components/common/PurchasedVoucherCard';

export type GiftVoucher = {
  id: string;
  brand: string;
  value: number;
  description: string;
  validity: string;
  imageUrl: string;
  occasion: 'Birthday' | 'Anniversary' | 'Festive' | 'Any';
};

export type PurchasedVoucher = {
  id: string;
  brand: string;
  value: number;
  code: string;
  expiryDate: string;
  status: 'Active' | 'Redeemed' | 'Expired';
  imageUrl: string;
};

const exploreVouchers: GiftVoucher[] = [
  { id: 'gv1', brand: 'Maachao', value: 500, description: 'Get ₹500 off on any purchase.', validity: '1 Year', imageUrl: '/images/stock/balloons.jpg', occasion: 'Birthday' },
  { id: 'gv2', brand: 'Party Rockers', value: 1000, description: 'Flat ₹1000 discount on party supplies.', validity: '6 Months', imageUrl: '/images/stock/cake.jpg', occasion: 'Anniversary' },
  { id: 'gv3', brand: 'Decorations Inc.', value: 250, description: 'Save ₹250 on home decor items.', validity: '3 Months', imageUrl: '/images/stock/mug.jpg', occasion: 'Festive' },
  { id: 'gv4', brand: 'Maachao', value: 2000, description: 'A special voucher for our loyal customers.', validity: '2 Years', imageUrl: '/images/stock/balloons.jpg', occasion: 'Any' },
];

const purchasedVouchers: PurchasedVoucher[] = [
    { id: 'pv1', brand: 'Maachao', value: 500, code: 'ABCD-1234', expiryDate: '31 Dec 2024', status: 'Active', imageUrl: '/images/stock/balloons.jpg' },
    { id: 'pv2', brand: 'Party Rockers', value: 1000, code: 'EFGH-5678', expiryDate: '15 Jun 2024', status: 'Redeemed', imageUrl: '/images/stock/cake.jpg' },
    { id: 'pv3', brand: 'Decorations Inc.', value: 250, code: 'IJKL-9012', expiryDate: '01 Mar 2024', status: 'Expired', imageUrl: '/images/stock/mug.jpg' },
];

const VouchersPage = () => {
    const [myVouchersOpen, setMyVouchersOpen] = useState(false);

    const occasionOptions = [
        { value: 'any', label: 'Any Occasion' },
        { value: 'birthday', label: 'Birthday' },
        { value: 'anniversary', label: 'Anniversary' },
        { value: 'festive', label: 'Festive' },
    ];

    const priceOptions = [
        { value: 'any', label: 'Any Price' },
        { value: 'under_500', label: 'Under ₹500' },
        { value: '500_1000', label: '₹500 - ₹1000' },
        { value: 'over_1000', label: 'Over ₹1000' },
    ];
    
    const popularityOptions = [
        { value: 'popular', label: 'Popularity' },
        { value: 'newest', label: 'Newest' },
        { value: 'price_asc', label: 'Price: Low to High' },
        { value: 'price_desc', label: 'Price: High to Low' },
    ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Gift Vouchers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Choose from a variety of personalized gift vouchers for any occasion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                <Select label="Occasion" options={occasionOptions} containerClassName="!mb-0" />
                <Select label="Price Range" options={priceOptions} containerClassName="!mb-0" />
                <Select label="Sort by" options={popularityOptions} containerClassName="!mb-0" />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreVouchers.map(voucher => <GiftVoucherCard key={voucher.id} voucher={voucher} />)}
        </div>

        <div className="mt-20 border-t pt-10">
          <button
            onClick={() => setMyVouchersOpen(!myVouchersOpen)}
            className="w-full flex justify-between items-center text-left text-2xl font-bold text-gray-800 hover:text-orange-600 transition"
          >
            <span>My Purchased Vouchers</span>
            <ChevronDown
              className={`transform transition-transform duration-300 ${
                myVouchersOpen ? 'rotate-180' : ''
              }`}
              size={28}
            />
          </button>
          
          {myVouchersOpen && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-down">
              {purchasedVouchers.map(voucher => (
                <PurchasedVoucherCard key={voucher.id} voucher={voucher} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VouchersPage; 