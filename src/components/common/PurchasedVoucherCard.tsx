'use client';

import React from 'react';
import Image from 'next/image';
import { PurchasedVoucher } from '@/app/account/vouchers/page';
import Button from '../ui/Button';

type PurchasedVoucherCardProps = {
  voucher: PurchasedVoucher;
};

const statusDisplayMap = {
    Active: { text: 'Active', styles: 'bg-green-100 text-green-800' },
    Redeemed: { text: 'Used', styles: 'bg-blue-100 text-blue-800' },
    Expired: { text: 'Expired', styles: 'bg-gray-200 text-gray-700' },
};

const PurchasedVoucherCard: React.FC<PurchasedVoucherCardProps> = ({ voucher }) => {
  const displayStatus = statusDisplayMap[voucher.status];
  
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/80 flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image
          src={voucher.imageUrl}
          alt={`${voucher.brand} Gift Voucher`}
          layout="fill"
          objectFit="cover"
        />
        <div className={`absolute top-3 right-3 text-sm font-bold py-1 px-3 rounded-full ${displayStatus.styles}`}>
            {displayStatus.text}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div>
            <p className="text-sm font-semibold text-orange-600">{voucher.brand}</p>
            <h3 className="text-2xl font-bold text-gray-800 my-1">₹{voucher.value}</h3>
        </div>
        <div className="bg-gray-100/80 p-4 rounded-lg my-4 text-center flex-grow flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Voucher Code</p>
            <p className="text-xl font-mono tracking-widest text-gray-900 mt-1">{voucher.code}</p>
        </div>
        <p className="text-xs text-gray-500 text-center">Expires on: {voucher.expiryDate}</p>
      </div>
      
      {voucher.status === 'Active' && (
          <div className="p-4 bg-gray-50/70 border-t">
            <Button variant="primary" size="sm" fullWidth>
                Use Now
            </Button>
          </div>
      )}
    </div>
  );
};

export default PurchasedVoucherCard; 