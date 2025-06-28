'use client';

import React from 'react';
import Image from 'next/image';
import { GiftVoucher } from '@/app/account/vouchers/page';
import Button from '../ui/Button';
import { ShoppingCart, Send } from 'lucide-react';

type GiftVoucherCardProps = {
  voucher: GiftVoucher;
};

const GiftVoucherCard: React.FC<GiftVoucherCardProps> = ({ voucher }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
      <div className="relative w-full h-48">
        <Image
          src={voucher.imageUrl}
          alt={`${voucher.brand} Gift Voucher`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow text-center">
        <p className="text-sm font-semibold text-orange-600">{voucher.brand}</p>
        <h3 className="text-2xl font-bold text-gray-800 my-2">₹{voucher.value} Gift Voucher</h3>
        <p className="text-sm text-gray-600 flex-grow mb-4">{voucher.description}</p>
        <p className="text-xs text-gray-500">Valid for {voucher.validity}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 p-4 bg-gray-50/70 border-t">
        <Button variant="outline" size="sm" fullWidth>
            <ShoppingCart size={16} className="mr-2"/>
            Buy Now
        </Button>
        <Button variant="primary" size="sm" fullWidth>
            <Send size={16} className="mr-2"/>
            Send as Gift
        </Button>
      </div>
    </div>
  );
};

export default GiftVoucherCard; 