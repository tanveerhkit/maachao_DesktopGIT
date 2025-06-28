'use client';

import React from 'react';
import { Address } from '@/app/account/addresses/page';
import { Home, Briefcase, MapPin, Edit, Trash2 } from 'lucide-react';
import Button from '../ui/Button';

type AddressCardProps = {
  address: Address;
};

const addressTypeIcons = {
  Home: <Home size={16} />,
  Office: <Briefcase size={16} />,
  Other: <MapPin size={16} />,
};

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-5 space-y-4 relative">
      {address.isDefault && (
        <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
          Default
        </span>
      )}
      
      <div className="flex items-center gap-3">
        <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
          {addressTypeIcons[address.type]}
        </div>
        <div>
          <h3 className="font-bold text-lg">{address.name}</h3>
          <p className="text-sm text-gray-500 font-medium">{address.type}</p>
        </div>
      </div>

      <div className="text-gray-700 space-y-1 pl-12">
        <p>{address.addressLine1}</p>
        {address.addressLine2 && <p>{address.addressLine2}</p>}
        <p>{`${address.city}, ${address.state} - ${address.pinCode}`}</p>
        <p className="font-medium pt-1">Contact: {address.phone}</p>
      </div>
      
      <div className="flex justify-end gap-2 pt-4 border-t mt-4">
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
          <Edit size={14} /> Edit
        </Button>
        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 flex items-center gap-1.5">
          <Trash2 size={14} /> Delete
        </Button>
        {!address.isDefault && (
            <Button variant="outline" size="sm">
                Set as Default
            </Button>
        )}
      </div>
    </div>
  );
};

export default AddressCard; 